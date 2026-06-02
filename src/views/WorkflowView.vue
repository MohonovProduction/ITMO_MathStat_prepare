<script setup>
import { ref } from 'vue'
import { RGR_STEPS, BRANCH_LABELS } from '@/data/rgrWorkflow'
import HistogramChart from '@/components/HistogramChart.vue'
import { useDataset } from '@/composables/useDataset'

const stepIndex = ref(0)
const branchChoice = ref(null)
const { columnHistogram } = useDataset()
const hist = columnHistogram('c15.X1')

const step = () => RGR_STEPS[stepIndex.value]
function next() {
  if (stepIndex.value < RGR_STEPS.length - 1) stepIndex.value += 1
}
function prev() {
  if (stepIndex.value > 0) stepIndex.value -= 1
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <header>
      <h1 class="text-2xl font-extrabold text-slate-900">Схема РГР</h1>
      <p class="text-slate-500">От генеральной совокупности до интерпретации — как в расчётно-графической работе.</p>
    </header>
    <div class="text-sm text-slate-500">Шаг {{ stepIndex + 1 }} / {{ RGR_STEPS.length }}</div>
    <article class="card flex flex-col gap-4 p-5">
      <h2 class="text-lg font-bold">{{ step().title }}</h2>
      <p class="text-sm text-slate-700">{{ step().content }}</p>
      <ul v-if="step().checklist" class="list-disc pl-5 text-sm text-slate-600">
        <li v-for="(c, i) in step().checklist" :key="i">{{ c }}</li>
      </ul>
      <div v-if="step().branches" class="flex flex-col gap-2">
        <p class="text-xs font-semibold uppercase text-slate-400">Развилка</p>
        <button
          v-for="b in step().branches"
          :key="b.goto"
          type="button"
          class="min-h-[44px] rounded-xl border px-3 py-2 text-left text-sm"
          :class="branchChoice === b.goto ? 'border-brand-500 bg-brand-50' : 'border-slate-200'"
          @click="branchChoice = b.goto"
        >
          {{ b.if }} → {{ BRANCH_LABELS[b.goto] || b.goto }}
        </button>
      </div>
      <HistogramChart v-if="step().datasetRef && hist.bins.length" :data="hist" :label="step().datasetRef" />
    </article>
    <div class="flex justify-between gap-2">
      <button class="btn-secondary min-h-[44px]" :disabled="stepIndex === 0" @click="prev">Назад</button>
      <button class="btn-primary min-h-[44px]" :disabled="stepIndex >= RGR_STEPS.length - 1" @click="next">Далее</button>
    </div>
  </div>
</template>
