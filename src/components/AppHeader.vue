<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const open = ref(false)

const links = [
  { to: '/', label: 'Главная', icon: '🏠' },
  { to: '/theory', label: 'Теория', icon: '📚' },
  { to: '/flashcards', label: 'Карточки', icon: '🃏' },
  { to: '/funnel', label: 'Воронка', icon: '🎯' },
  { to: '/exam', label: 'Экзамен', icon: '🎓' },
]

function isActive(to) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div class="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
      <RouterLink to="/" class="flex items-center gap-2 font-extrabold text-slate-900">
        <span class="text-xl">📊</span>
        <span class="hidden sm:inline">Матстат · подготовка</span>
        <span class="sm:hidden">Матстат</span>
      </RouterLink>

      <!-- Десктоп-меню -->
      <nav class="hidden items-center gap-1 md:flex">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          :class="isActive(l.to) ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100'"
        >
          {{ l.label }}
        </RouterLink>
      </nav>

      <!-- Бургер для мобильных -->
      <button
        class="btn-secondary !px-3 md:hidden"
        aria-label="Меню"
        @click="open = !open"
      >
        <span class="text-lg leading-none">{{ open ? '✕' : '☰' }}</span>
      </button>
    </div>

    <!-- Мобильное меню -->
    <Transition name="slide">
      <nav v-if="open" class="border-t border-slate-100 bg-white px-4 py-2 md:hidden">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium"
          :class="isActive(l.to) ? 'bg-brand-50 text-brand-700' : 'text-slate-700'"
          @click="open = false"
        >
          <span>{{ l.icon }}</span>{{ l.label }}
        </RouterLink>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
