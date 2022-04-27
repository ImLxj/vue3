<template>
  <h1>学生信息</h1>
  <h2>{{ person.name }}</h2>
  <h2>{{ student }}</h2>
  <button @click="test">自定义事件</button>
  <slot></slot>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  props: ['msg', 'student'],
  // 定义自定义事件的时候需要emits来接收自定义组件
  emits: ['send'],
  // 当进行组件当中数据传递的时候，此时setup会接收两个参数
  // 第一个参数是父组件 ==> 子组件传递的参数 通过 props 来接收 然后传递给setup
  // 第二个参数是插槽和自定义事件 保存到context上下文对象里面
  setup(props, context) {
    console.log(props)
    console.log(context.attrs) // 相当于vue2中的$attrs
    console.log(context.slots) // 相当于vue2中的$slots
    console.log(context.emit) // 触发自定义事件的
    let person = {
      name: '张三'
    }
    function test() {
      context.emit('send', 123)
    }
    return {
      person,
      test
    }
  }
}
</script>

<style></style>
