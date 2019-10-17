<template>
  <div>
    <div>父子通信<br><br>
      父传子的时候通过属性传递<br><br>
      子需要通过声明【props:['属性名']】来接收<br>
      收到后可随便使用：<br><br>
      1）template中直接用；<br><br>
      2）js中 【this.属性名】 用<br><br><br>

      子传父<br><br>
      子组件中通过$emit('自定义事件名xx','变量1','变量2')来触发<br><br>
      如：$emit('sendFather',val1,val2)<br><br>
      父组件@自定义事件名xx=‘事件名’来监听<br><br>
      如：<!--<child @sendFather="myMethods"></child>--><br><br>
    </div>
    <br><br><br>
    <b>这个是父组件,{{ msg }}</b><br><br><br><br>
    <!--父组件通过属性sendChild传值给子组件-->
    <child-info sendChild="父组件给你的" @dad="receiveChild"></child-info>
    <br><br><br><br><br><br>
  </div>
</template>
<script>
  import ChildInfo from "@/components/corePart/parentChild/childInfo";

  export default {
    name: 'parentCompon',
    components: {ChildInfo},
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      receiveChild(val) {
        val = this.msg
      }
    }
  }
</script>
