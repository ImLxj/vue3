<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <button @click="sayHello">点我说话</button>
</template>

<script>
export default {
  name: 'App',
  setup() {
    // 数据
    let name = '张三'
    let age = 18

    // 方法
    function sayHello() {
      alert(`我叫${name},我今年${age}岁了,你好啊！！！`)
    }

		// 返回一个对象(常用)
    return {
      name,
      age,
      sayHello
    }
  }
}
</script>
