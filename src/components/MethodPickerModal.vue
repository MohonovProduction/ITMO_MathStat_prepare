<script setup>
import { onMounted } from 'vue'
import MathText from '@/components/MathText.vue'
import { useMethodPicker } from '@/composables/useMethodPicker'
import { useProgressStore } from '@/store/progress'

const emit = defineEmits(['close'])
const picker = useMethodPicker()
const store = useProgressStore()

onMounted(() => picker.pickCase())

function choose(method) {
  const res = picker.select(method)
  if (res) store.saveMethodPicker(res.caseId, res.correct)
}

function close() {
  sessionStorage.setItem('robotShown', '1')
  emit('close')
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-4" @click.self="close">
    <div class="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white p-5 shadow-xl sm:rounded-2xl">
      <h2 class="text-lg font-bold text-slate-900">Докажите, что вы не робот</h2>
      <p class="mt-1 text-sm text-slate-500">Выберите подходящий метод анализа.</p>
      <p v-if="picker.current" class="mt-4 text-sm text-slate-800">
        <MathText :text="picker.current.story" />
      </p>
      <div v-if="picker.current" class="mt-4 flex flex-col gap-2">
        <button
          v-for="opt in picker.current.options"
          :key="opt.method"
          type="button"
          class="min-h-[44px] rounded-xl border px-4 py-3 text-left text-sm font-medium transition"
          :class="picker.answered
            ? (opt.correct ? 'border-emerald-500 bg-emerald-50' : picker.chosen === opt.method ? 'border-rose-400 bg-rose-50' : 'border-slate-200 opacity-60')
            : 'border-slate-200 hover:border-brand-400'"
          :disabled="picker.answered"
          @click="choose(opt.method)"
        >
          {{ opt.method }}
        </button>
      </div>
      <div v-if="picker.answered && picker.current" class="mt-4 rounded-xl bg-slate-50 p-3 text-sm">
        <MathText :text="picker.current.explanation" />
      </div>
      <button class="btn-secondary mt-4 w-full min-h-[44px]" @click="close">Закрыть</button>
    </div>
  </div>
</template>
