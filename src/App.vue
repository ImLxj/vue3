<template>
  <h2>{{ keyWord }}</h2>
  <input type="text" v-model="keyWord" />
</template>

<script>
import { customRef, ref } from 'vue'
export default {
  name: 'App',
  setup() {
    // 自定义一个ref名为myRef
    function myRef(value, delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            track() // 通知vue最终value的变化
            return value
          },
          set(newValue) {
            clearTimeout()
            timer = setTimeout(() => {
              value = newValue
              trigger() // 通知vue去重新解析模板
            }, delay)
          }
        }
      })
    }

    let keyWord = myRef('hello', 1000)

    return {
      keyWord
    }
  }
}
</script>
