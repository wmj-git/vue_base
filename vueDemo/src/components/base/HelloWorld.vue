<template>
  <div class="hello">
    <h3 v-text="myText">{{ myText }}</h3>
    <h2 v-html="myHtml">{{ myHtml }}</h2>
    <em v-if="num==1">这个是v-if</em>
    <b v-else-if="num==2">这个显示v-else-if的内容</b>
    <strong v-else>这里显示else部分的内容，即条件都不满足</strong>
    <span v-show="checkShow">这里的内容根据布尔值决定是隐藏</span>
    <ul>
      <li v-for="(item,index) in arrayList">{{ item }}-{{ index }}</li>
    </ul>
    <br><br>
    <ul>
      <li v-for="(oj,key) in obj">{{ key }}:{{ oj }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      /*所有的变量都需要在data中声明，data()，return是函数形式，用的较多*/
      myText: '这里是myText，只能显示文本',
      myHtml: '<i>这个是v-html,能解析html标签</i>',
      checkShow:false,/*false时不显示即隐藏*/
      num:5,/*num默认值为1,改变num的值可看出v-if、v-else-if、v-else三者之间的区别*/
      arrayList:['张达','李思','万给','青岛','商场'],
      obj:{name:'张三',play:'篮球',address:'重庆'}

        /*数组：item , index (item:要显示的项，index对应项的下标)
      对象：value, key ,index (value:值；key:键；index:下标)*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
