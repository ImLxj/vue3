import { onMounted, onUnmounted, reactive } from "vue";

export default function () {
  let savePoint = reactive({
    x: 0,
    y: 0
  })

  function clickPoint(event) {
    savePoint.x = event.pageX
    savePoint.y = event.pageY
    console.log(event.pageX, event.pageY);
  }

  onMounted(() => {
    window.addEventListener('click', clickPoint)
  })

  onUnmounted(() => {
    window.removeEventListener('click', clickPoint)
  })

  return savePoint
}