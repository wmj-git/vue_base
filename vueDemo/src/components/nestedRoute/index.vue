<template>
  <div>
    <div>
    ------页面不跳转时使用嵌套路由--------<br><br><br>
      <router-view></router-view>
      <router-link :to="{name:'Home'}">首页</router-link>|
      <router-link :to="{name:'News'}">资讯</router-link>|
      <router-link :to="{name:'Mine'}">我的</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'nestedRoute',
    methods: {
    }
  }
</script>
