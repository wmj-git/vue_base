<template>
    <div class="filter">
      <!--过滤器使用：对数据进行添油加醋再显示
      全局过滤：Vue.filter('过滤器名'，'过滤方式fn')
      组件中的过滤器: filter('过滤器名'，'过滤方式fn')
      显示：{{msg|过滤器名}}
      内容由返回值决定
      vue中的this与平常方法中的this不同
      -->
      输入字符串：<input v-model="inpString"><br>
      输出字符串：{{inpString}}<br>
      {{ inpString | reversal('局部过滤器：')}}
      <!--翻转后的：字符串作为过滤器的第二哥参数传递过去-->
      <div>{{ inpString | myFilter('全局过滤器：') }}</div>
    </div>
</template>
<script>
import '@/filters/index'
export default {
    name:'useFilter',
    data(){
      return {
        inpString:'',
      }
    },
   filters:{
      reversal(val,arg){
        /*val:inpString（要做过滤的变量）; split:字符串转数组; reverse:翻转;  join:数组转字符串*/
        return arg + val.split('').reverse().join('');
      }
  }
}
</script>
