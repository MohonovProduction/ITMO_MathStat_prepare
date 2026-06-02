<script setup>
import { useRouter } from 'vue-router'
import { methodFunnels } from '@/data/methodFunnels'

const router = useRouter()
function goMini(ids) {
  if (ids?.length) router.push({ name: 'minitest', params: { level: 'methods' } })
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <header>
      <h1 class="text-2xl font-extrabold text-slate-900">Методы анализа</h1>
      <p class="text-slate-500">Когда применять, входы, шаги и типичные ошибки.</p>
    </header>
    <article v-for="m in methodFunnels" :key="m.id" class="card flex flex-col gap-3 p-5">
      <h2 class="text-lg font-bold text-slate-900">{{ m.title }}</h2>
      <div>
        <p class="text-xs font-semibold uppercase text-slate-400">Когда</p>
        <ul class="list-disc pl-5 text-sm text-slate-600">
          <li v-for="(w, i) in m.when" :key="i">{{ w }}</li>
        </ul>
      </div>
      <div>
        <p class="text-xs font-semibold uppercase text-slate-400">Шаги</p>
        <ol class="list-decimal pl-5 text-sm text-slate-600">
          <li v-for="(s, i) in m.steps" :key="i">{{ s }}</li>
        </ol>
      </div>
      <div v-if="m.pitfalls?.length">
        <p class="text-xs font-semibold uppercase text-rose-400">Ошибки</p>
        <ul class="list-disc pl-5 text-sm text-rose-800">
          <li v-for="(p, i) in m.pitfalls" :key="i">{{ p }}</li>
        </ul>
      </div>
      <button v-if="m.miniQuizIds?.length" class="btn-secondary text-sm" @click="goMini(m.miniQuizIds)">
        Повторить в мини-тесте (уровень «Методы»)
      </button>
    </article>
  </div>
</template>
