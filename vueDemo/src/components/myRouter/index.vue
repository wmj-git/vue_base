<template>
  <div>
    <div>
    路由跳转方式：<br>
    1）通过标签：router-link<!--<router-link to="/login"></router-link>-->
    2）通过js控制跳转：this.$router.push(path:'/login')(会跳转到指定url,且会向history插入新记录)<br><br>
    this.$router.replace()会跳转到指定url，但是不会向history插入新记录。点击返回会返回到上一个页面<br><br>
    this.$router.go(-1):读history里面记录后退一个<br><br>
    3）$route 路由信息对象，只读<br><br>
       $router 路由操作对象，只写<br><br>
    </div>
      <router-link to="/CorePart">去基础界面</router-link>
  </div>
</template>
<script>
  export default {
    name:'myRouter',
    data(){
      return{

      }
    },
    methods:{
      goCore(){
        this.$router.push({path:'/lifeCycle'})
      }
    }
  }
</script>
