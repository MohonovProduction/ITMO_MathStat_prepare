<script setup>
import { ref } from 'vue'
import MathText from '@/components/MathText.vue'

defineProps({ item: { type: Object, required: true }, index: { type: Number, default: 0 } })
const emit = defineEmits(['score'])
const revealed = ref(false)

function grade(score) {
  emit('score', score)
  revealed.value = false
}
</script>
<template>
  <div class="card flex flex-col gap-4 p-5">
    <p class="text-xs text-slate-400">На подумать {{ index + 1 }} / 2</p>
    <h2 class="text-lg font-semibold text-slate-900"><MathText :text="item.thinkingPrompt || item.title" /></h2>
    <button v-if="!revealed" class="btn-secondary" @click="revealed = true">Показать ключ к ответу</button>
    <div v-else class="rounded-xl bg-violet-50 p-4 text-sm text-violet-900">
      <MathText :text="item.modelAnswer || item.explanation || 'Сверьтесь с теорией по этой теме.'" />
    </div>
    <div v-if="revealed" class="grid grid-cols-1 gap-2 sm:grid-cols-3">
      <button class="btn-primary min-h-[44px]" @click="grade(1)">Справился</button>
      <button class="btn-secondary min-h-[44px]" @click="grade(0.5)">Частично</button>
      <button class="btn-secondary min-h-[44px]" @click="grade(0)">Не справился</button>
    </div>
  </div>
</template>
