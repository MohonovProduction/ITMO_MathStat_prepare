import { computed, reactive, ref } from 'vue'
import { questions } from '@/data/questions'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Универсальный движок тестирования.
 *
 * Опции:
 *  - levelId: строка уровня (для мини-теста) или null (со всех уровней)
 *  - count: сколько вопросов
 *  - instant: показывать ли мгновенную обратную связь (true для мини-теста)
 *  - lockBack: запрещать ли возврат назад (true для экзамена)
 *  - onlyIds: массив id вопросов (для режима «повторить ошибки»)
 */
export function useTest(options = {}) {
  const { levelId = null, count = 5, instant = true, lockBack = false, onlyIds = null } = options

  function buildPool() {
    let pool = questions
    if (onlyIds && onlyIds.length) {
      pool = questions.filter((q) => onlyIds.includes(q.id))
    } else if (levelId) {
      pool = questions.filter((q) => q.level === levelId)
    }
    return shuffle(pool).slice(0, Math.min(count, pool.length))
  }

  const items = ref(buildPool())
  const index = ref(0)
  // ответы: { [questionId]: { choice, correct } }
  const answers = reactive({})
  const finished = ref(false)
  const revealed = ref(false) // показан ли результат текущего вопроса (для instant-режима)

  const current = computed(() => items.value[index.value] || null)
  const total = computed(() => items.value.length)
  const answeredCount = computed(() => Object.keys(answers).length)

  const correctCount = computed(
    () => Object.values(answers).filter((a) => a.correct).length,
  )
  const percent = computed(() =>
    total.value ? Math.round((correctCount.value / total.value) * 100) : 0,
  )
  const wrongIds = computed(() =>
    Object.entries(answers)
      .filter(([, a]) => !a.correct)
      .map(([id]) => Number(id)),
  )

  const isAnswered = (q) => q && answers[q.id] !== undefined
  const canGoBack = computed(() => !lockBack && index.value > 0)
  const isLast = computed(() => index.value >= total.value - 1)

  function answer(choiceIndex) {
    const q = current.value
    if (!q || answers[q.id] !== undefined) return
    const correct = choiceIndex === q.answer
    answers[q.id] = { choice: choiceIndex, correct }
    if (instant) revealed.value = true
  }

  function next() {
    revealed.value = false
    if (index.value < total.value - 1) {
      index.value += 1
    } else {
      finished.value = true
    }
  }

  function prev() {
    if (canGoBack.value) {
      index.value -= 1
      revealed.value = instant && isAnswered(current.value)
    }
  }

  function finish() {
    finished.value = true
  }

  function restart(newOptions = {}) {
    Object.assign(options, newOptions)
    items.value = buildPool()
    index.value = 0
    Object.keys(answers).forEach((k) => delete answers[k])
    finished.value = false
    revealed.value = false
  }

  return {
    items,
    index,
    answers,
    finished,
    revealed,
    current,
    total,
    answeredCount,
    correctCount,
    percent,
    wrongIds,
    canGoBack,
    isLast,
    isAnswered,
    answer,
    next,
    prev,
    finish,
    restart,
  }
}
