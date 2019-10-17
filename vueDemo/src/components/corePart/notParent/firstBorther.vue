<template>
  <div>
    <input type="text" v-model="msg">
  </div>
</template>
<script>
  export default {
    name:'firstBorther',
    data(){
      return{
        msg: '这个是兄弟,',
      }
    },
    created(){
      /*箭头函数可以改变this的指定*/
      this.$bus.$on('scending',val=>{
        this.msg = val
      })
    }
  }
</script>
