<script setup>
import { ref, onMounted, provide } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import MethodPickerModal from '@/components/MethodPickerModal.vue'
import WhatsNewModal from '@/components/WhatsNewModal.vue'
import { hasSeenWhatsNew, markWhatsNewSeen } from '@/composables/useWhatsNew'
import { useProgressStore } from '@/store/progress'

const showWhatsNew = ref(false)
const showRobot = ref(false)
const robotModalKey = ref(0)
const store = useProgressStore()

function showRobotQuiz() {
  robotModalKey.value += 1
  showRobot.value = true
}

function openRobotQuiz() {
  showRobotQuiz()
}

provide('openRobotQuiz', openRobotQuiz)

function closeWhatsNew() {
  markWhatsNewSeen()
  showWhatsNew.value = false
  showRobotQuiz()
}

function closeRobot() {
  showRobot.value = false
}

onMounted(() => {
  store.recordPrepDay()
  if (!hasSeenWhatsNew()) {
    showWhatsNew.value = true
    return
  }
  showRobotQuiz()
})
</script>

<template>
  <AppHeader />
  <WhatsNewModal v-if="showWhatsNew" @close="closeWhatsNew" />
  <MethodPickerModal v-else-if="showRobot" :key="robotModalKey" @close="closeRobot" />

  <main class="mx-auto w-full max-w-5xl flex-1 px-4 pb-24 pt-6 sm:px-6">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>

  <footer class="border-t border-slate-200/70 bg-white/50 backdrop-blur-sm">
    <div class="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-4 py-6 text-center sm:px-6">
      <p class="text-sm font-medium text-slate-600">Разработано с любовью к дизайну в Университете ИТМО</p>
      <p class="text-xs text-slate-400">Санкт-Петербург, 2026</p>
      <p class="mt-1 text-[11px] text-slate-300">Прогресс сохраняется локально · датасет C-15</p>
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
