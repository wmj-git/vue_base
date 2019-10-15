<template>
  <div>插槽使用：
    slot是子组件里给DOM留下的坑位，是动态的DOM<br><br>
    <b>ref</b>获取子组件实例（识别：ref='xxx'；获取：.$refs.xxx）<br><br>
    <b>$parent:</b>获取父组件实例（可在子组件直接使用this.$parent即可）<br><br>
    父组件：<input type="text" v-model="inpString">
    <child-component ref="children">
      <div slot="slotName">插槽内容已有名字，即指定坑位</div>
    </child-component>

  </div>
</template>

<script>
  import ChildComponent from "./childComponent";

  export default {
    name: 'useSlot',
    components: {ChildComponent},
    data() {
      return {
        inpString: '',
      }
    },
    mounted() {//dom挂在完成
      //$el可直接拿到DOM根节点

      console.log(this.$refs.children.$el)
    }
  }
</script>
