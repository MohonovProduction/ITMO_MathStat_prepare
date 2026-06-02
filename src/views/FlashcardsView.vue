<script setup>
import { ref } from 'vue'
import { useFlashcards } from '@/composables/useFlashcards'
import { DECKS } from '@/data/flashcards'
import Flashcard from '@/components/Flashcard.vue'
import ProgressBar from '@/components/ProgressBar.vue'

const activeDeck = ref('terms')
const { current, index, cards, stats, flipped, statusOf, flip, next, prev, mark, reset, goTo } =
  useFlashcards(activeDeck)
</script>

<template>
  <div class="flex flex-col gap-5">
    <header>
      <h1 class="text-2xl font-extrabold text-slate-900">Карточки</h1>
      <p class="text-slate-500">Переворачивайте карточку и честно отмечайте «Знаю» / «Не знаю».</p>
    </header>

    <!-- Вкладки режимов -->
    <div class="flex gap-2 overflow-x-auto pb-1 sm:grid sm:grid-cols-5 sm:overflow-visible">
      <button
        v-for="d in DECKS"
        :key="d.id"
        class="flex min-w-[5.5rem] flex-none flex-col items-center gap-0.5 rounded-xl px-2 py-3 text-center transition sm:min-w-0 sm:flex-1"
        :class="activeDeck === d.id ? 'bg-brand-gradient text-slate-800 shadow-sm' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'"
        @click="activeDeck = d.id; goTo(0)"
      >
        <span class="emoji text-xl">{{ d.icon }}</span>
        <span class="text-sm font-semibold">{{ d.title }}</span>
        <span class="text-[11px] opacity-80">{{ d.hint }}</span>
      </button>
    </div>

    <!-- Прогресс по колоде -->
    <div class="card p-4">
      <ProgressBar :value="stats.percent" label="Изучено в этой колоде" color="emerald" />
      <div class="mt-2 flex justify-between text-xs text-slate-500">
        <span>✓ Знаю: {{ stats.known }}</span>
        <span>↻ Не знаю: {{ stats.unknown }}</span>
        <span>Всего: {{ stats.total }}</span>
      </div>
    </div>

    <!-- Карточка -->
    <div v-if="current">
      <div class="mb-3 flex items-center justify-between text-sm text-slate-500">
        <span>Карточка {{ index + 1 }} из {{ cards.length }}</span>
        <button class="text-rose-500 hover:underline" @click="reset">Сбросить колоду</button>
      </div>

      <Flashcard
        :card="current"
        :flipped="flipped"
        :status="statusOf(current.id)"
        @flip="flip"
        @know="mark('known')"
        @dontknow="mark('unknown')"
      />

      <div class="mt-4 flex items-center justify-between">
        <button class="btn-secondary" @click="prev">← Назад</button>
        <button class="btn-secondary" @click="flip">Перевернуть</button>
        <button class="btn-secondary" @click="next">Вперёд →</button>
      </div>
    </div>

    <p v-else class="card p-8 text-center text-slate-400">В этой колоде пока нет карточек.</p>
  </div>
</template>
