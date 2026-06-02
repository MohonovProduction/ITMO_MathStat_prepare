<script setup>
defineProps({
  direction: { type: String, default: 'context' },
  plain: { type: String, default: '' },
})
const labels = { higher: '↑ лучше больше', lower: '↓ лучше меньше', target: '◎ к цели', context: '↔ зависит' }
</script>
<template>
  <span class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
    <span>{{ labels[direction] || labels.context }}</span>
    <span v-if="plain" class="text-slate-500">· {{ plain }}</span>
  </span>
</template>
