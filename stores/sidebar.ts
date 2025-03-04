import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSidebarStore = defineStore('sidebar', () => {
  const isSidebarOpen = ref(false);
  const totalItem = ref(0);
  const totalPrise = ref(0);

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  return { isSidebarOpen, toggleSidebar };
});