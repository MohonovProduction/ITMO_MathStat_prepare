<script setup>
import { LEVELS } from '@/data/levels'
import { useCheatsheet } from '@/composables/useCheatsheet'
import CheatsheetEntry from '@/components/CheatsheetEntry.vue'

const { query, activeLevel, items } = useCheatsheet()
const levelOptions = [{ id: 'all', title: 'Все' }, ...LEVELS]
</script>

<template>
  <div class="cheatsheet-print flex flex-col gap-5">
    <header>
      <h1 class="text-2xl font-extrabold text-slate-900">Шпаргалка</h1>
      <p class="text-slate-500">Все определения и формулы — из раздела «Теория», без дублирования.</p>
    </header>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="l in levelOptions"
        :key="l.id"
        class="rounded-full px-3 py-1.5 text-sm font-semibold"
        :class="activeLevel === l.id ? 'bg-brand-gradient text-slate-800' : 'bg-white ring-1 ring-slate-200'"
        @click="activeLevel = l.id"
      >
        {{ l.title }}
      </button>
    </div>
    <input v-model="query" type="search" placeholder="Поиск…" class="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm" />
    <p class="text-sm text-slate-400">Тем: {{ items.length }}</p>
    <CheatsheetEntry v-for="t in items" :key="t.id" :item="t" />
  </div>
</template>
