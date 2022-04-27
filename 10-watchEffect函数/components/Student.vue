<template>
  <h1>点击按钮加一：{{ sum }}</h1>
  <button @click="sum++">点我加一</button>
  <hr />
  <h1>{{ msg }}</h1>
  <button @click="msg += '!'">点我</button>
  <hr />
  <h2>名字：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="person.name += '~'">点我加~</button>
  <button @click="person.age++">点我加一</button>
</template>

<script>
import { ref, reactive, watch, watchEffect } from 'vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  setup() {
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age: 18
    })

    /* 
      watchEffect不需要指定监视的对象，谁发生变化我就监视谁，它默认会刚开始调用一次
      
    */
    watchEffect(() => {
      const x = sum.value
      console.log(x, '我变了')
    })

    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style></style>
