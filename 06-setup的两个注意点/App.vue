<template>
  <student @send="send" msg="你好啊" student="吴彦祖">
    <span>哈哈</span>
    <template v-slot:qwe>
      <div>我是命名插槽</div>
    </template>
  </student>
</template>

<script>
import Student from '@/components/Student'
export default {
  name: 'App',
  components: { Student },
  setup() {
    function send(value) {
      alert(`我接收到了自定义组件传递过来的数据了,${value}`)
    }
    return {
      send
    }
  }
}
</script>
