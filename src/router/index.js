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
    path: '/cheatsheet',
    name: 'cheatsheet',
    component: () => import('@/views/CheatsheetView.vue'),
    meta: { title: 'Шпаргалка' },
  },
  {
    path: '/workflow',
    name: 'workflow',
    component: () => import('@/views/WorkflowView.vue'),
    meta: { title: 'Схема РГР' },
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/ConceptMapView.vue'),
    meta: { title: 'Карта понятий' },
  },
  {
    path: '/methods',
    name: 'methods',
    component: () => import('@/views/MethodsView.vue'),
    meta: { title: 'Методы' },
  },
  {
    path: '/exam/tanchenko',
    name: 'exam-tanchenko',
    component: () => import('@/views/ExamTanchenkoView.vue'),
    meta: { title: 'Экзамен Танченко' },
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
  const base = 'Матстат · Господин БаллОвский'
  document.title = to.meta?.title ? `${to.meta.title} · ${base}` : base
})

export default router
