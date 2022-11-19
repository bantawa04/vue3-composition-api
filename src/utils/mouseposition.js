import { ref, onMounted, onUnmounted } from "vue"

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  function updatePosition(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener("mousemove", updatePosition)
  })

  onUnmounted(() => {
    window.removeEventListener("mousemove", updatePosition)
  })
  return {
    x,
    y,
  }
}
