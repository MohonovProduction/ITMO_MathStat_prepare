<script setup>
import MathText from '@/components/MathText.vue'
import HistogramChart from '@/components/HistogramChart.vue'

defineProps({
  step: { type: Object, required: true },
  branchLabels: { type: Object, default: () => ({}) },
  histogram: { type: Object, default: null },
  showHistogram: { type: Boolean, default: false },
})
</script>

<template>
  <article class="card flex flex-col gap-4 p-5">
    <h2 class="text-lg font-bold text-slate-900"><MathText :text="step.title" /></h2>
    <p class="text-sm leading-relaxed text-slate-700">
      <MathText :text="step.content" />
    </p>

    <ul v-if="step.checklist?.length" class="list-disc space-y-1 pl-5 text-sm text-slate-600">
      <li v-for="(c, i) in step.checklist" :key="i">
        <MathText :text="c" />
      </li>
    </ul>

    <div v-if="step.branches?.length" class="rounded-xl bg-slate-50 p-4">
      <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Развилка</p>
      <ul class="flex flex-col gap-2">
        <li
          v-for="b in step.branches"
          :key="b.goto"
          class="flex flex-wrap items-baseline gap-1 text-sm text-slate-700"
        >
          <span class="font-medium text-slate-800">
            <MathText :text="b.if" />
          </span>
          <span class="text-slate-400">→</span>
          <span>
            <MathText :text="branchLabels[b.goto] || b.goto" />
          </span>
        </li>
      </ul>
    </div>

    <HistogramChart
      v-if="showHistogram && histogram?.bins?.length"
      :data="histogram"
      :label="step.datasetRef"
    />
  </article>
</template>
