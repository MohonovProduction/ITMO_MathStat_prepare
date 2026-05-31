import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// ВАЖНО: base должен совпадать с именем вашего GitHub-репозитория.
// Сейчас: https://<ваш-логин>.github.io/ITMO_MathStat_prepare/
// Если переименуете репозиторий — поменяйте строку ниже.
export default defineConfig({
  base: '/ITMO_MathStat_prepare/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
