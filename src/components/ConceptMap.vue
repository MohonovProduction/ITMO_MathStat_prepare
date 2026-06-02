<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { conceptNodes, conceptEdges } from '@/data/conceptGraph'
import { theory } from '@/data/theory'

const router = useRouter()
const selected = computed(() => null)

function goTheory(theoryId) {
  if (theoryId) router.push({ path: '/theory', query: { q: theoryId } })
}

function summary(theoryId) {
  const t = theory.find((x) => x.id === theoryId)
  return t ? t.title : ''
}
</script>

<template>
  <div class="relative min-h-[320px] rounded-xl bg-slate-50 p-4 sm:min-h-[420px]">
    <svg class="pointer-events-none absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)]" viewBox="0 0 100 100" preserveAspectRatio="none">
      <line
        v-for="(e, i) in conceptEdges"
        :key="i"
        :x1="conceptNodes.find((n) => n.id === e.from)?.x ?? 0"
        :y1="conceptNodes.find((n) => n.id === e.from)?.y ?? 0"
        :x2="conceptNodes.find((n) => n.id === e.to)?.x ?? 0"
        :y2="conceptNodes.find((n) => n.id === e.to)?.y ?? 0"
        stroke="#cbd5e1"
        stroke-width="0.4"
      />
    </svg>
    <button
      v-for="node in conceptNodes"
      :key="node.id"
      type="button"
      class="absolute min-h-[40px] max-w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-2 py-1.5 text-left text-[11px] font-semibold shadow ring-1 ring-slate-200 hover:ring-brand-400 sm:text-xs"
      :style="{ left: node.x + '%', top: node.y + '%' }"
      @click="goTheory(node.theoryId)"
    >
      {{ node.label }}
    </button>
  </div>
  <p class="mt-2 text-xs text-slate-500">Нажмите на узел — откроется тема в разделе «Теория».</p>
</template>
