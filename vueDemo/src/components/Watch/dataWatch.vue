<template>
  <div>watch监听单个，computed计算属性监听多个，当computed写在函数内部，
    凡是函数内部有this.相关的属性改变都会触发当前函数
    <br><br>
    <input type="text" placeholder="输入love会弹出" v-model="msg.value"><br><br>
    <div>计算属性
    <br><br>
      (<input type="text" v-model="num1"> +
      <input type="text" v-model="num2">) *
      <input type="text" v-model="num3"> ={{result}}

    </div>
  </div>
</template>
<script>
  export default {
    name: 'dataWatch',
    data() {
      return {
        msg: {
          value: ''
        },
        num1:'',
        num2:'',
        num3:''
      }
    },
    watch: {
      msg: {
        handler(newval, oldval) {
          if (newval.value=='love') {
           alert(newval.value);
          }
          console.log(newval + ';' + oldval)
        },
        deep:true /*深度监听，若是没有deep,则watch只能监听不带属性的值，即不能是
        xx.xx类型的值*/
      }
    },
    computed:{
      result(){
        return (Number(this.num1)+Number(this.num2))* Number(this.num3)
      }
    }
  }
</script>
