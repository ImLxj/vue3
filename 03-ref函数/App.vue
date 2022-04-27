<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h3>工作岗位:{{ job.type }}</h3>
  <h3>薪资:{{ job.salary }}</h3>
  <button @click="sayPerson">点我修改人的信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    // 通过ref函数 实现数据的响应式
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: '前端工程师',
      salary: '100k'
    })
    /* 
    ref()函数会将里面传入的数据处理成一个名为RefImpl的对象，对象里面value的值就是传入的值，这个值是相响应式的
    是通过Object.defineProperty 的 get 和 set实现的
    如果传入的参数是引用类型的数据，他会通过代理对象来做响应 Proxy
    */
    function sayPerson() {
      name.value = '李四'
      age.value = 20
      job.value.type = 'Java工程师'
    }

    // 返回一个对象(常用)
    return {
      name,
      age,
      sayPerson,
      job
    }
  }
}
</script>
