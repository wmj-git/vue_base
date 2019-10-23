<template>
  <div class="base_demo">
    <br>
    ----命令使用----
    <hello-world></hello-world>

    <br><br>----数据绑定----<br>
    <data-bind></data-bind>

    <br><br>----过滤器----
    <use-filter></use-filter>
    <br><br>
    <b>路由传递过来的参数：{{ msg }}</b>
  </div>
</template>
<script>
  import HelloWorld from "./HelloWorld";
  import DataBind from "./dataBind";
  import UseFilter from "./useFilter";

  export default {
    components: {UseFilter, DataBind, HelloWorld},
    data() {
      return {
        msg: ''
      }
    },
    created() {
      this.msg = this.$route.params.id
    }
  }
</script>
<style scoped>
  .title {
    margin: 50px 50px;
    color: red;
  }
</style>
