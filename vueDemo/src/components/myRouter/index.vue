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
    <router-link to="/CorePart">去核心界面</router-link>
    <br>
    <button @click="goCore">去基础界面</button>
    <button @click="goBack">返回上一页</button>
    <button @click="goOther">去路由传参界面</button>
    <br><br>
    <b>这个是我获取到的参数：{{ msg }}</b>
  </div>
</template>
<script>
  export default {
    name: 'myRouter',
    data() {
      return {
        msg:''
      }
    },
    created(){
     this.msg = this.$route.query.id
    },
    methods: {
      goCore() {
        this.$router.push({path: '/BasePinter', query: {id: 123}})
      },
      goBack() {
        this.$router.go(-1);
      },
      goOther() {
        this.$router.replace({path: '/RouteParam',name:'RouteParam'})
      }
    }
  }
</script>
