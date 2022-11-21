<template>
  <div class="py-2 mt-1">
    Mouse X position: {{ x }}
    <br />
    Mouse Y position: {{ y }}
  </div>
</template>
<script>
import { useMousePosition } from "../utils/mouseposition"
export default {
  setup() {
    const { x, y } = useMousePosition()
    return { x, y }
  },
}
</script>
