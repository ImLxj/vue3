<template>
  <h1>学生信息</h1>
  姓：<input type="text" v-model="person.firstName" />
  <br />
  名：<input type="text" v-model="person.lastName" />
  <br />
  <span>全名：{{ person.fullName }}</span>
  <br />
  <input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  setup() {
    let person = reactive({
      firstName: '张',
      lastName: '三'
    })

    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const text = value.split('-')
        person.firstName = text[0]
        person.lastName = text[1]
      }
    })

    return {
      person
    }
  }
}
</script>

<style></style>
