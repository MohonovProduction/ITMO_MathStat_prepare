import { defineStore } from 'pinia'
import { LEVELS, levelById, PASS_THRESHOLD } from '@/data/levels'
import { flashcards, DECKS } from '@/data/flashcards'

const STORAGE_KEY = 'mathstat_progress_v1'

function defaultState() {
  return {
    // По каждой колоде: { [cardId]: 'known' | 'unknown' }
    flashcards: { terms: {}, formulas: {}, intuition: {} },
    // По каждому уровню: лучший и последний результат мини-теста
    miniTests: Object.fromEntries(
      LEVELS.map((l) => [l.id, { best: 0, attempts: 0, lastScore: 0, lastTotal: 0 }]),
    ),
    // Какие уровни воронки разблокированы (первый — всегда)
    funnel: { unlocked: [LEVELS[0].id] },
    // Полноценный экзамен
    exam: { best: 0, attempts: 0, lastPercent: 0, lastWrong: [] },
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw)
    // Аккуратное слияние с дефолтом — на случай новых полей в будущих версиях
    const base = defaultState()
    return {
      flashcards: { ...base.flashcards, ...(parsed.flashcards || {}) },
      miniTests: { ...base.miniTests, ...(parsed.miniTests || {}) },
      funnel: { ...base.funnel, ...(parsed.funnel || {}) },
      exam: { ...base.exam, ...(parsed.exam || {}) },
    }
  } catch (e) {
    console.warn('Не удалось прочитать прогресс, инициализирую заново', e)
    return defaultState()
  }
}

export const useProgressStore = defineStore('progress', {
  state: () => loadState(),

  getters: {
    // Полноценная статистика по колоде (known/unknown/percent)
    cardStats() {
      return (deck) => {
        const total = flashcards[deck]?.length ?? 0
        const marks = this.flashcards[deck] || {}
        const known = Object.values(marks).filter((s) => s === 'known').length
        const unknown = Object.values(marks).filter((s) => s === 'unknown').length
        const percent = total ? Math.round((known / total) * 100) : 0
        return { total, known, unknown, seen: known + unknown, percent }
      }
    },

    // Процент лучшего мини-теста по уровню
    levelScore() {
      return (levelId) => this.miniTests[levelId]?.best ?? 0
    },

    // Пройден ли уровень (>= порога в мини-тесте)
    isLevelPassed() {
      return (levelId) => (this.miniTests[levelId]?.best ?? 0) >= PASS_THRESHOLD
    },

    // Разблокирован ли уровень
    isLevelUnlocked() {
      return (levelId) => {
        const level = levelById(levelId)
        if (!level) return false
        if (level.order === 1) return true
        const prev = LEVELS.find((l) => l.order === level.order - 1)
        return prev ? this.isLevelPassed(prev.id) : false
      }
    },

    // Текущий «активный» уровень — первый незавершённый из разблокированных
    currentLevel() {
      const open = LEVELS.filter((l) => this.isLevelUnlocked(l.id))
      const firstUnpassed = open.find((l) => !this.isLevelPassed(l.id))
      return firstUnpassed || open[open.length - 1] || LEVELS[0]
    },

    // Общий прогресс (0..100): карточки + мини-тесты + экзамен
    overallProgress() {
      const decks = DECKS.map((d) => this.cardStats(d.id).percent)
      const cardsAvg = decks.length ? decks.reduce((a, b) => a + b, 0) / decks.length : 0
      const miniAvg =
        LEVELS.reduce((a, l) => a + (this.miniTests[l.id]?.best ?? 0), 0) / (LEVELS.length || 1)
      const examPart = this.exam.best
      // Веса: карточки 40%, мини-тесты 40%, экзамен 20%
      return Math.round(cardsAvg * 0.4 + miniAvg * 0.4 + examPart * 0.2)
    },
  },

  actions: {
    persist() {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            flashcards: this.flashcards,
            miniTests: this.miniTests,
            funnel: this.funnel,
            exam: this.exam,
          }),
        )
      } catch (e) {
        console.warn('Не удалось сохранить прогресс', e)
      }
    },

    markCard(deck, cardId, status) {
      if (!this.flashcards[deck]) this.flashcards[deck] = {}
      this.flashcards[deck][cardId] = status
    },

    resetDeck(deck) {
      this.flashcards[deck] = {}
    },

    saveMiniTest(levelId, correct, total) {
      const entry = this.miniTests[levelId] || { best: 0, attempts: 0, lastScore: 0, lastTotal: 0 }
      const percent = total ? Math.round((correct / total) * 100) : 0
      entry.attempts += 1
      entry.lastScore = correct
      entry.lastTotal = total
      entry.best = Math.max(entry.best, percent)
      this.miniTests[levelId] = entry
      this.recomputeUnlocks()
      return percent
    },

    saveExam(percent, wrongIds) {
      this.exam.attempts += 1
      this.exam.lastPercent = percent
      this.exam.lastWrong = [...wrongIds]
      this.exam.best = Math.max(this.exam.best, percent)
    },

    // Открыть все уровни, чьи предшественники пройдены
    recomputeUnlocks() {
      const unlocked = new Set(this.funnel.unlocked)
      unlocked.add(LEVELS[0].id)
      for (const level of LEVELS) {
        if (this.isLevelUnlocked(level.id)) unlocked.add(level.id)
      }
      this.funnel.unlocked = [...unlocked]
    },

    resetProgress() {
      const fresh = defaultState()
      this.$patch(fresh)
    },
  },
})

/**
 * Подписка стора на сохранение в localStorage.
 * Вызывается один раз после создания Pinia (в main.js не требуется — делаем лениво).
 */
export function attachPersistence(store) {
  store.recomputeUnlocks()
  store.$subscribe(() => store.persist())
}
