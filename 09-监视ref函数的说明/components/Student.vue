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
    let person = ref({
      name: '张三',
      age: 18
    })

    /* 这个sum不需要加.value 因为加了.value就变成具体的值了就没有必要监视 */
    /* watch(sum, (newValue, oldValue) => {
      console.log('发生变化了', newValue, oldValue)
    }) */

    /* 要是使用ref配置一个对象属性，watch默认没有深度监视，所以说当对象里面的属性发生变化的时候，
      监视不到属性的变化，需要配置deep
      或者是直接.value从ref变成reactive
    */
    watch(
      person,
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
