<template>
  <div>
    <div><b>路由传参页面</b><br><br>
    1、查询参：<br><br>
      1）配置（传参）： :to="{name:'login',query:{id:loginid}}"<br>
      2)获取（取参）： this.$route.query.id<br><br>
    2、路由参数<br><br>
      1）配置（传参）： :to="{name:'login',params:{id:loginid}}"<br>
      2)配置路由的规则： {name:'detail',path:'/detail/:id'}<br><br>
      3)获取（取参）： this.$route.params.id<br><br>
    3、js跳转路由传参和标签传参，路由相同而参数不同时页面不做刷新的问题<br><br>
      解决方案：:key="$route.fullPath" <!--<router-view :key="$route.fullPath"></router-view>--><br><br>
    4、总结<br><br>
      1）to:传参的属性里params和name配对；query和name或path都可以<br><br>
      2）使用路由参数须在配置路由规则里配置好参数名，否则刷新页面参数会丢失<br><br>
    </div>
    <div>
      <button @click="goLogin">去路由跳转界面</button>
      <button @click="goBase">去基础界面</button>
      <button @click="goLink">js去基础页面</button>
    </div><br><br><br><br>
    ------JS路由跳转--------
    <nested-route :key="$route.fullPath"></nested-route>
  </div>
</template>
<script>
  import NestedRoute from "../nestedRoute";
  export default {
    name:'RouteParam',
    components: {NestedRoute},
    data(){
      return{}
    },
    methods:{
      goLogin(){
        this.$router.push({path:'/myRouter',query:{id:123}})
      },
      goBase(){
        this.$router.push({name:'BasePinter',path:'/BasePinter',params:{id:456}})
      },
      goLink() {
        this.$router.push({name:'BasePinter',path:'/RouteParam',params:{id:111}})
      }
    }
  }
</script>
