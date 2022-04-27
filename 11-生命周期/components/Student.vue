<template>
  <h1>点击按钮加一：{{ sum }}</h1>
  <button @click="sum++">点我加一</button>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  setup() {
    let sum = ref(0)

    // 通过组合式API的形式去使用生命周期钩子,使用组合式API的形式使用声明周期钩子要比配置项的形式优先级要高
    onBeforeMount(() => {
      console.log('--onBeforeMount--')
    })
    onMounted(() => {
      console.log('--onMounted--')
    })
    onBeforeUpdate(() => {
      console.log('--onBeforeUpdate--')
    })
    onUpdated(() => {
      console.log('--onUpdated--')
    })
    onBeforeUnmount(() => {
      console.log('--onBeforeUnmount--')
    })
    onUnmounted(() => {
      console.log('--onUnmounted--')
    })

    return {
      sum
    }
  }

  // 使用配置项的形式
  //#region
  /*  beforeCreate() {
    console.log('--beforeCreate--')
  },
  created() {
    console.log('--created--')
  },
  beforeMount() {
    console.log('--beforeMount--')
  },
  mounted() {
    console.log('--mounted--')
  },
  beforeUpdate() {
    console.log('--beforeUpdate--')
  },
  updated() {
    console.log('--updated--')
  },
  beforeDestroy() {
    console.log('--beforeDestroy--')
  },
  destroyed() {
    console.log('--destroyed--')
  } */
  //#endregion
}
</script>

<style></style>
