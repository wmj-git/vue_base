<template>
  <div>
  <div> 非父子组件之间的通信<br><br>
    1)创建一个空实例（bus中央时间总线或中间组件）<br><br>
    如：Vue.prototype.$bus=new Vue();在Vue上面挂在一个中间组件<br><br>
    2）利用$emit $on的触发和监听事件实现非父子组件的通信<br><br>
    如：this.$bus.$emit('自定义事件名','传递的数据')触发自定义事件传递数据<br><br>
        this.$bus.$on('自定义事件名',fn);监听自定义事件获取数据<br><br>
    3）解决方案还有vuex、provide/inject解决同根往下派发；本地存储可进行非父子组件中的通信<br><br>
  </div>
  <div>
    <div>
      <input type="text" v-model="message">
      <button @click="sendInfo">跟兄弟通信</button>
    </div>
  </div>
  </div>
</template>
<script>
  import '@/request/index.js'
  export default {
    name:'notFather',
    data(){
      return{
        message: '这个是哥哥'
      }
    },
    methods:{
      sendInfo(){
        console.log(123)
        this.$bus.$emit('scending','这个是给兄弟的内容')
      }
    }
  }
</script>
