<template>
  <div class="base_demo">
    <br>
    ----命令使用----
  <hello-world></hello-world>

    <br><br>----数据绑定----<br>
  <data-bind></data-bind>

    <br><br>----过滤器----
    <use-filter></use-filter>
  </div>
</template>
<script>
  import HelloWorld from "./HelloWorld";
  import DataBind from "./dataBind";
  import UseFilter from "./useFilter";
  export default {
    components: {UseFilter, DataBind, HelloWorld}
  }
</script>
<style scoped>
  .title{
    margin: 50px 50px;
    color: red;
  }
</style>
