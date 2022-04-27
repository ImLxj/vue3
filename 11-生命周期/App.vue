<template>
  <Student v-if="isDisplay"></Student>
  <button @click="isDisplay = !isDisplay">点击隐藏组件</button>
</template>

<script>
import Student from '@/components/Student'
import { ref } from 'vue'
export default {
  name: 'App',
  components: { Student },
  setup() {
    let isDisplay = ref(true)

    return {
      isDisplay
    }
  }
}
</script>
