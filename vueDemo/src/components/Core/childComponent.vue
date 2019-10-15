<template>
  <div>
    <textarea style="color: red;">这个是子组件
      {{inpString}}
      <slot name="slotName"></slot>
    </textarea>
  </div>
</template>
<script>
  export default {
    name: 'childComponent',
    props: {
      msg: String
    },
    data() {
      return {
        inpString: ''
      }
    },
    created() {//数据加载完成
      //$parent直接拿到父组件
      console.log(this.$parent)
    }
  }
</script>
