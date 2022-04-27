<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h3>工作岗位:{{ person.job.type }}</h3>
  <h3>薪资:{{ person.job.salary }}</h3>
  <h3>爱好:{{ person.hobby }}</h3>
  <button @click="sayPerson">点我修改人的信息</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let person = reactive({
      name: '张三',
      age: 15,
      job: {
        type: '前端工程师',
        salary: '100k'
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })
    function sayPerson() {
      person.name = '李四'
      person.age = 20
      person.job.type = 'Java工程师'
      person.hobby[0] = '学习'
    }

    // 返回一个对象(常用)
    return {
      person,
      sayPerson
    }
  }
}
</script>
