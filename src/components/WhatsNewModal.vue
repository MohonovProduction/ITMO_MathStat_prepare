<script setup>
const emit = defineEmits(['close'])

const items = [
  { icon: '📝', title: 'Экзамен Танченко', text: '2 определения + 2 вопроса на подумать с самооценкой.' },
  { icon: '📋', title: 'Шпаргалка', text: 'Все определения и формулы в одном месте с поиском.' },
  { icon: '📐', title: 'Схема РГР', text: 'Семь шагов от генеральной совокупности до вывода — с формулами.' },
  { icon: '🗺️', title: 'Карта понятий', text: 'Связи между ключевыми темами курса.' },
  { icon: '⚗️', title: 'Методы анализа', text: 'Когда применять z, t, Пирсона, Колмогорова, МНК.' },
  { icon: '📊', title: 'Датасет C-15', text: 'Примеры в теории на сквозной выборке РГР-1.' },
  { icon: '🔤', title: 'Карточки обозначений', text: 'Новая колода: n, μ, α, p-value и др.' },
  { icon: '🎯', title: 'Умнее тесты', text: 'Меньше повторов, больше вопросов «на связь» между понятиями.' },
]
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-4"
    role="dialog"
    aria-labelledby="whats-new-title"
    @click.self="emit('close')"
  >
    <div
      class="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white p-5 shadow-xl sm:rounded-2xl sm:p-6"
    >
      <h2 id="whats-new-title" class="text-xl font-bold text-slate-900">Что нового</h2>
      <p class="mt-1 text-sm text-slate-500">
        Краткий обзор доработок тренажёра. Прогресс по-прежнему сохраняется в этом браузере.
      </p>

      <ul class="mt-4 flex flex-col gap-3">
        <li
          v-for="(item, i) in items"
          :key="i"
          class="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-3"
        >
          <span class="text-2xl" aria-hidden="true">{{ item.icon }}</span>
          <div>
            <div class="font-semibold text-slate-900">{{ item.title }}</div>
            <p class="mt-0.5 text-sm text-slate-600">{{ item.text }}</p>
          </div>
        </li>
      </ul>

      <button type="button" class="btn-primary mt-5 w-full min-h-[44px]" @click="emit('close')">
        Понятно, начать
      </button>
    </div>
  </div>
</template>
