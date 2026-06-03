<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProgressStore } from '@/store/progress'
import { LEVELS } from '@/data/levels'
import { DECKS } from '@/data/flashcards'
import ProgressBar from '@/components/ProgressBar.vue'
import { pluralDays } from '@/utils/pluralRu'

const router = useRouter()
const store = useProgressStore()
const { exam, examTanchenko } = storeToRefs(store)

const overall = computed(() => store.overallProgress)
const prepDaysLabel = computed(() => pluralDays(store.prepDaysCount))

const tiles = [
  { to: '/cheatsheet', icon: '📋', title: 'Шпоргалка', text: 'Все определения и формулы в одном месте' },
  { to: '/workflow', icon: '📐', title: 'Схема РГР', text: 'Ген. совокупность → выборка → гипотеза' },
  { to: '/map', icon: '🗺️', title: 'Карта понятий', text: 'Связи между темами' },
  { to: '/methods', icon: '⚗️', title: 'Методы', text: 'Когда какой критерий применять' },
  { to: '/theory', icon: '📚', title: 'Теория', text: 'Подробный разбор всех 41 вопроса с формулами и мнемониками' },
  { to: '/flashcards', icon: '🃏', title: 'Карточки', text: 'Термины, формулы и понимание — режим переворота' },
  { to: '/funnel', icon: '🎯', title: 'Воронка', text: 'Три уровня подготовки с порогом 80%' },
  { to: '/exam', icon: '🎓', title: 'Экзамен', text: '15 вопросов со всех тем, режим экзамена' },
]

const deckStats = computed(() => DECKS.map((d) => ({ ...d, ...store.cardStats(d.id) })))
const levelStats = computed(() =>
  LEVELS.map((l) => ({ ...l, score: store.levelScore(l.id), passed: store.isLevelPassed(l.id) })),
)
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- Герой / общий прогресс -->
    <section class="card overflow-hidden">
      <div
        class="p-6 text-slate-800 sm:p-8"
        style="background-image: linear-gradient(120deg, #fbf8cc 0%, #ffcfd2 22%, #f1c0e8 42%, #cfbaf0 60%, #a3c4f3 78%, #98f5e1 100%)"
      >
        <h1 class="text-2xl font-extrabold sm:text-3xl">Подготовка к экзамену по матстату</h1>
        <p class="mt-1 max-w-xl text-slate-700">
          Теория, карточки, воронка из трёх уровней и пробный экзамен. Прогресс сохраняется
          автоматически в этом браузере.
        </p>
      </div>
      <div class="p-6">
        <ProgressBar :value="overall" label="Общий прогресс" size="lg" />
        <div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div v-for="d in deckStats" :key="d.id" class="rounded-xl bg-slate-50 p-3 text-center">
            <div class="emoji text-xl">{{ d.icon }}</div>
            <div class="text-xs text-slate-500">{{ d.title }}</div>
            <div class="text-lg font-bold text-slate-800">{{ d.percent }}%</div>
          </div>
          <div class="rounded-xl bg-slate-50 p-3 text-center">
            <div class="emoji text-xl">🎓</div>
            <div class="text-xs text-slate-500">Экзамен</div>
            <div class="text-lg font-bold text-slate-800">{{ exam.best }}%</div>
          </div>
          <div class="rounded-xl bg-slate-50 p-3 text-center">
            <div class="emoji text-xl">📝</div>
            <div class="text-xs text-slate-500">Танченко</div>
            <div class="text-lg font-bold text-slate-800">{{ examTanchenko.lastSelfScore }}%</div>
          </div>
          <div class="rounded-xl bg-slate-50 p-3 text-center sm:col-span-2">
            <div class="emoji text-xl">📅</div>
            <div class="text-xs text-slate-500">Дней подготовки</div>
            <div class="text-lg font-bold text-slate-800">{{ prepDaysLabel }}</div>
            <p class="mt-0.5 text-[10px] text-slate-400">уникальные дни с занятиями</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Плитки навигации -->
    <section class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <button
        v-for="t in tiles"
        :key="t.to"
        class="card flex items-start gap-4 p-5 text-left transition hover:-translate-y-0.5 hover:shadow-md"
        @click="router.push(t.to)"
      >
        <div class="emoji flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-50 text-2xl">
          {{ t.icon }}
        </div>
        <div>
          <h3 class="font-bold text-slate-900">{{ t.title }}</h3>
          <p class="text-sm text-slate-500">{{ t.text }}</p>
        </div>
      </button>
    </section>

    <!-- Краткий обзор уровней -->
    <section class="card p-5">
      <h2 class="mb-4 text-lg font-bold text-slate-900">Уровни подготовки</h2>
      <div class="flex flex-col gap-4">
        <div v-for="l in levelStats" :key="l.id" class="flex items-center gap-3">
          <span class="emoji text-xl">{{ l.passed ? '✅' : l.icon }}</span>
          <div class="flex-1">
            <ProgressBar :value="l.score" :color="l.color" :label="l.title" size="sm" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
