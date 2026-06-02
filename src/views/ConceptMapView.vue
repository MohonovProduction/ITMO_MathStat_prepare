<script setup>
import ConceptMap from '@/components/ConceptMap.vue'
</script>
<template>
  <div class="flex flex-col gap-5">
    <header>
      <h1 class="text-2xl font-extrabold text-slate-900">Карта понятий</h1>
      <p class="text-slate-500">Связи между ключевыми темами курса.</p>
    </header>
    <ConceptMap />
  </div>
</template>
