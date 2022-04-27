<template>
  <h1>点击按钮加一：{{ sum }}</h1>
  <button @click="sum++">点我加一</button>
  <hr />
  <h3>获取鼠标的x和y点:x:{{ point.x }},y:{{ point.y }}</h3>
</template>

<script>
import { ref } from 'vue'
import usePoint from '@/hooks/usePoint'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  setup() {
    let sum = ref(0)
    let point = usePoint()
    return {
      sum,
      point
    }
  }
}
</script>

<style></style>
