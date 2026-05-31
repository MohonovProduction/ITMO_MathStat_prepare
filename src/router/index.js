import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Главная' } },
  {
    path: '/theory',
    name: 'theory',
    component: () => import('@/views/TheoryView.vue'),
    meta: { title: 'Теория' },
  },
  {
    path: '/flashcards',
    name: 'flashcards',
    component: () => import('@/views/FlashcardsView.vue'),
    meta: { title: 'Карточки' },
  },
  {
    path: '/funnel',
    name: 'funnel',
    component: () => import('@/views/FunnelView.vue'),
    meta: { title: 'Воронка' },
  },
  {
    path: '/minitest/:level?',
    name: 'minitest',
    component: () => import('@/views/MiniTestView.vue'),
    meta: { title: 'Мини-тест' },
  },
  {
    path: '/exam',
    name: 'exam',
    component: () => import('@/views/ExamView.vue'),
    meta: { title: 'Экзамен' },
  },
  {
    path: '/results',
    name: 'results',
    component: () => import('@/views/ResultsView.vue'),
    meta: { title: 'Результаты' },
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const base = 'Матстат — подготовка'
  document.title = to.meta?.title ? `${to.meta.title} · ${base}` : base
})

export default router
