<script setup>
import MathText from '@/components/MathText.vue'

const props = defineProps({
  question: { type: Object, required: true },
  choice: { type: Number, default: null }, // выбранный вариант (индекс) или null
  revealed: { type: Boolean, default: false }, // показывать ли правильность и пояснение
  index: { type: Number, default: 0 }, // номер вопроса (для подписи)
  total: { type: Number, default: 0 },
})

const emit = defineEmits(['answer'])

function optionClass(i) {
  const isChosen = props.choice === i
  const isCorrect = i === props.question.answer
  if (!props.revealed) {
    return isChosen
      ? 'border-brand-500 bg-brand-50 text-brand-800'
      : 'border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50'
  }
  if (isCorrect) return 'border-emerald-500 bg-emerald-50 text-emerald-800'
  if (isChosen && !isCorrect) return 'border-rose-500 bg-rose-50 text-rose-800'
  return 'border-slate-200 bg-white text-slate-500'
}

function marker(i) {
  if (!props.revealed) return String.fromCharCode(65 + i) // A, B, C...
  if (i === props.question.answer) return '✓'
  if (props.choice === i) return '✕'
  return String.fromCharCode(65 + i)
}
</script>

<template>
  <div class="card flex flex-col gap-5 p-5 sm:p-6">
    <div class="flex items-center justify-between text-xs font-medium text-slate-400">
      <span v-if="total">Вопрос {{ index + 1 }} из {{ total }}</span>
      <span class="chip bg-slate-100 text-slate-500">{{ question.level }}</span>
    </div>

    <h2 class="text-lg font-semibold leading-snug text-slate-900">
      <MathText :text="question.question" />
    </h2>

    <div class="flex flex-col gap-2.5">
      <button
        v-for="(opt, i) in question.options"
        :key="i"
        type="button"
        :disabled="revealed"
        class="flex items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors disabled:cursor-default"
        :class="optionClass(i)"
        @click="emit('answer', i)"
      >
        <span
          class="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border text-xs font-bold"
          :class="revealed && i === question.answer ? 'border-emerald-500 text-emerald-600'
            : revealed && choice === i ? 'border-rose-500 text-rose-600'
            : 'border-slate-300 text-slate-500'"
        >
          {{ marker(i) }}
        </span>
        <span class="leading-relaxed"><MathText :text="opt" /></span>
      </button>
    </div>

    <Transition name="fade">
      <div
        v-if="revealed"
        class="rounded-xl border-l-4 p-4 text-sm leading-relaxed"
        :class="choice === question.answer
          ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
          : 'border-amber-400 bg-amber-50 text-amber-900'"
      >
        <div class="mb-1 font-semibold">
          {{ choice === question.answer ? 'Верно!' : 'Неверно.' }}
        </div>
        <MathText :text="question.explanation" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from {
  opacity: 0;
}
</style>
