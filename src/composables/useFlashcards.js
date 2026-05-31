import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useProgressStore } from '@/store/progress'
import { flashcards } from '@/data/flashcards'

/**
 * Логика работы с колодой карточек выбранного режима (deck).
 * deckRef — ref со строкой 'terms' | 'formulas' | 'intuition'.
 */
export function useFlashcards(deckRef) {
  const store = useProgressStore()
  const { flashcards: marks } = storeToRefs(store)

  const index = ref(0)
  const flipped = ref(false)

  const deck = computed(() => deckRef.value)
  const cards = computed(() => flashcards[deck.value] || [])
  const current = computed(() => cards.value[index.value] || null)

  const stats = computed(() => store.cardStats(deck.value))

  const statusOf = (cardId) => marks.value[deck.value]?.[cardId] || null

  function flip() {
    flipped.value = !flipped.value
  }

  function go(delta) {
    const len = cards.value.length
    if (!len) return
    index.value = (index.value + delta + len) % len
    flipped.value = false
  }

  function next() {
    go(1)
  }
  function prev() {
    go(-1)
  }

  function mark(status) {
    if (!current.value) return
    store.markCard(deck.value, current.value.id, status)
    // плавно переходим к следующей карточке
    if (index.value < cards.value.length - 1) next()
    else flipped.value = false
  }

  function reset() {
    store.resetDeck(deck.value)
    index.value = 0
    flipped.value = false
  }

  function goTo(i) {
    if (i >= 0 && i < cards.value.length) {
      index.value = i
      flipped.value = false
    }
  }

  return {
    index,
    flipped,
    cards,
    current,
    stats,
    statusOf,
    flip,
    next,
    prev,
    mark,
    reset,
    goTo,
  }
}
