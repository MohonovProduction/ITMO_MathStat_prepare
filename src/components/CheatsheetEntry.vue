<script setup>
import MathText from '@/components/MathText.vue'
import Formula from '@/components/Formula.vue'

defineProps({ item: { type: Object, required: true } })
</script>

<template>
  <details class="card group p-4">
    <summary class="cursor-pointer list-none font-semibold text-slate-900">
      <span class="text-brand-600">{{ item.id }}.</span> <MathText :text="item.title" />
    </summary>
    <div class="mt-3 flex flex-col gap-3 border-t border-slate-100 pt-3">
      <p class="text-sm text-slate-700"><MathText :text="item.definition" /></p>
      <div v-if="item.formulas?.length" class="flex flex-col gap-1">
        <Formula v-for="(f, i) in item.formulas" :key="i" :expr="f" />
      </div>
    </div>
  </details>
</template>
