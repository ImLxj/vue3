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
import { ref, reactive, watch } from 'vue'
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
    // 情况一：监视ref所定义的一个响应式数据
    /* watch(
      sum,
      (newValue, oldValue) => {
        console.log(newValue, oldValue)
      },
      { immediate: true }
    ) */

    // 情况二: 监视ref所定义的多个响应式数据
    /* watch([sum, msg], (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }) */

    /* 
      情况三： 监视reactive所定义的响应式数据的全部属性
      注意：使用reactive所定义的数据，无法获取正确的oldValue
           强制开启了深度监视（deep配置无效）  
    */
    /* watch(
      person,
      (newValue, oldValue) => {
        console.log('我监听到了数据', newValue, oldValue)
      },
      { deep: false } //此处的deep无效
    ) */

    // 情况四：监视reactive所定义的响应式数据的一个属性
    /* watch(
      () => person.age,
      (newValue, oldValue) => {
        console.log('age发生改变了', newValue, oldValue)
      }
    ) */

    // 情况五: 监视reactive所定义响应式数据的某些属性
    // 注意，当监视reactive某些属性的时候需要配置deep
    watch(
      [() => person.age, () => person.name],
      (newValue, oldValue) => {
        console.log('发生变化了', newValue, oldValue)
      },
      { deep: true }
    )

    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style></style>
