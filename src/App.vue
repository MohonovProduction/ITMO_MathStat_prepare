<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <AppHeader />

  <main class="mx-auto w-full max-w-5xl flex-1 px-4 pb-24 pt-6 sm:px-6">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>

  <footer class="border-t border-slate-200/70 bg-white/50 backdrop-blur-sm">
    <div class="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-4 py-6 text-center sm:px-6">
      <p class="text-sm font-medium text-slate-600">
        Разработано с любовью к дизайну в Университете ИТМО
      </p>
      <p class="text-xs text-slate-400">Санкт-Петербург, 2026</p>

      <div class="mt-1 flex items-center gap-3">
        <a
          href="https://t.me/mohonovproduction"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-600 ring-1 ring-slate-200 transition hover:text-brand-700 hover:ring-brand-300"
          aria-label="Telegram автора"
        >
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path
              d="M21.94 4.6 18.6 20.36c-.25 1.11-.92 1.39-1.86.86l-5.14-3.79-2.48 2.39c-.27.27-.5.5-1.03.5l.37-5.23 9.52-8.6c.41-.37-.09-.57-.64-.2L5.05 13.15l-5.06-1.58c-1.1-.34-1.12-1.1.23-1.63l19.78-7.62c.92-.34 1.72.2 1.94 2.28Z"
            />
          </svg>
          <span class="text-gradient font-semibold">Telegram</span>
        </a>
        <a
          href="https://github.com/MohonovProduction"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-600 ring-1 ring-slate-200 transition hover:text-brand-700 hover:ring-brand-300"
          aria-label="GitHub автора"
        >
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path
              d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"
            />
          </svg>
          <span class="text-gradient font-semibold">GitHub</span>
        </a>
      </div>

      <p class="mt-1 text-[11px] text-slate-300">
        Прогресс сохраняется локально в этом браузере
      </p>
    </div>
  </footer>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
