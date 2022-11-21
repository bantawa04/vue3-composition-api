import { ref } from "vue"

export const useToggle = () => {
  const isVisible = ref(true)

  function toggleVisbible() {
    isVisible.value = !isVisible.value
  }

  return { isVisible, toggleVisbible }
}
