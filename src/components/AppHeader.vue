<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const open = ref(false)
const moreOpen = ref(false)

const links = [
  { to: '/', label: 'Главная', icon: 'home' },
  { to: '/theory', label: 'Теория', icon: 'menu_book' },
  { to: '/flashcards', label: 'Карточки', icon: 'style' },
  { to: '/funnel', label: 'Воронка', icon: 'filter_alt' },
  { to: '/exam', label: 'Экзамен', icon: 'school' },
]

const moreLinks = [
  { to: '/cheatsheet', label: 'Шпоргалка' },
  { to: '/workflow', label: 'Схема РГР' },
  { to: '/map', label: 'Карта' },
  { to: '/methods', label: 'Методы' },
]

function isActive(to) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div class="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
      <RouterLink to="/" class="flex items-center gap-2 font-extrabold">
        <span class="material-symbols-rounded text-gradient" style="font-size: 1.6rem">insights</span>
        <span class="text-gradient hidden sm:inline">Матстат · Господин БаллОвский v3</span>
        <span class="text-gradient sm:hidden">Матстат</span>
      </RouterLink>

      <nav class="hidden items-center gap-1 md:flex">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="link-gradient flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium"
          :class="isActive(l.to) ? 'is-active text-slate-900' : 'text-slate-600'"
        >
          <span class="material-symbols-rounded" style="font-size: 1.1rem">{{ l.icon }}</span>
          {{ l.label }}
        </RouterLink>
        <div class="relative">
          <button
            type="button"
            class="rounded-lg px-2 py-2 text-sm font-medium text-slate-600 hover:text-slate-900"
            @click="moreOpen = !moreOpen"
          >
            Ещё ▾
          </button>
          <div
            v-if="moreOpen"
            class="absolute right-0 top-full mt-1 min-w-[10rem] rounded-xl bg-white py-1 shadow-lg ring-1 ring-slate-200"
          >
            <RouterLink
              v-for="m in moreLinks"
              :key="m.to"
              :to="m.to"
              class="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              @click="moreOpen = false"
            >
              {{ m.label }}
            </RouterLink>
          </div>
        </div>
      </nav>

      <button class="btn-secondary !px-3 md:hidden" aria-label="Меню" @click="open = !open">
        <span class="material-symbols-rounded">{{ open ? 'close' : 'menu' }}</span>
      </button>
    </div>

    <nav v-if="open" class="border-t border-slate-100 bg-white px-4 py-2 md:hidden">
      <RouterLink
        v-for="l in links"
        :key="l.to"
        :to="l.to"
        class="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium"
        @click="open = false"
      >
        {{ l.label }}
      </RouterLink>
      <RouterLink
        v-for="m in moreLinks"
        :key="m.to"
        :to="m.to"
        class="flex rounded-lg px-3 py-2 text-sm text-slate-600"
        @click="open = false"
      >
        {{ m.label }}
      </RouterLink>
    </nav>
  </header>
</template>
