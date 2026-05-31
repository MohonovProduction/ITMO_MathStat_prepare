<script setup>
import { ref, computed } from 'vue'
import { LEVELS } from '@/data/levels'
import { theory } from '@/data/theory'
import TheorySection from '@/components/TheorySection.vue'

const activeLevel = ref('basics')
const query = ref('')

const items = computed(() => {
  let list = theory.filter((t) => t.level === activeLevel.value)
  const q = query.value.trim().toLowerCase()
  if (q) {
    list = list.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        (t.mnemonic || '').toLowerCase().includes(q),
    )
  }
  return list
})
</script>

<template>
  <div class="flex flex-col gap-5">
    <header>
      <h1 class="text-2xl font-extrabold text-slate-900">Теория</h1>
      <p class="text-slate-500">Подробный разбор экзаменационных вопросов по уровням.</p>
    </header>

    <!-- Вкладки уровней -->
    <div class="flex flex-wrap gap-2">
      <button
        v-for="l in LEVELS"
        :key="l.id"
        class="rounded-full px-4 py-2 text-sm font-semibold transition"
        :class="activeLevel === l.id ? 'bg-brand-600 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'"
        @click="activeLevel = l.id"
      >
        {{ l.icon }} {{ l.title }}
      </button>
    </div>

    <!-- Поиск -->
    <input
      v-model="query"
      type="search"
      placeholder="Поиск по теме, определению, мнемонике…"
      class="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
    />

    <p class="text-sm text-slate-400">Найдено тем: {{ items.length }}</p>

    <div class="flex flex-col gap-4">
      <TheorySection v-for="t in items" :key="t.id" :item="t" :number="t.id" />
    </div>

    <p v-if="!items.length" class="card p-8 text-center text-slate-400">
      Ничего не найдено. Измените запрос или выберите другой уровень.
    </p>
  </div>
</template>
