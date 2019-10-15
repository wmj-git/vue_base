<template>
  <div> 子需要通过声明【props:['属性名']】来接收<br><br>
  <b>这是子组件，{{sendChild}}</b><br><br>
  <button @click="sendFather">传递信息给父亲</button>
  </div>
</template>
<script>
  export default {
    name:'parentCompon',
    props:['sendChild'],
    data(){
      return{

      }
    },
    methods:{
      sendFather(){
        this.$emit('dad','这个是儿子给你的')
      }
    }
  }
</script>
