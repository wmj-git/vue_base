<template>
  <div>
   <input v-model="msg">
  </div>
</template>
<script>
  export default {
    name:'keepComponent',
    data(){
      return{
      msg:'这个是内置组件'
      }
    },
    created() {
      console.log(this.msg)
    }
  }
</script>
