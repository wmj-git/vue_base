<template>
  <div>
    <div>
      使用背景：<br>
      1)需要频繁创建和销毁组件（显示与隐藏：v-if）<br><br>
      2)组件缓存<br>
      1.内置组件<!--<keep-alive>--> ：用这个包裹频繁创建销毁的组件，可性能调优。<br><br>
      2.被其包裹的组件，在v-if=false时，停用但是不销毁<br><br>
      3.v-if=true激活但是不创建<br><br>
      4.避免频繁创建组件对象的性能损耗<br><br>
      5.组件的激活和停用（activated和deactivated）<br><br>
      3)成对比较<br>
      1.created和beforeCreate(前者可操作数据,后者数据没有初始化即没有创建组件)<br><br>
      2.mounted和beforeMount(前者可操作DOM,后者还未生成DOM)<br><br>
      3.updated和beforeUpdate(前者可获取最终数据，后者可二次修改)<br><br>
      4.destroyed和beforeDestroy<br><br>
    </div>
    <br><br>
    <div class="liftCycle_test" v-if = "componentShow">
      <b>{{ msg }}</b>
      <button @click="clickMe">ClickMe</button>
    </div>
    <br>
    <keep-alive>
      <keep-component v-if="componentShow"></keep-component>
    </keep-alive>
    <button @click="DestroyMe">{{ btnContent }}</button>
  </div>
</template>
<script>
  import keepComponent from "./keepComponent";
  export default {
    name: 'lifeCycle',
    components: {keepComponent},
    data() {
      return {
        msg: '我是原来的数据',
        componentShow: true,
        btnContent:'DestroyMe'
      }
    },
    beforeCreate() {
      console.log("组件创建前");
      console.log(this.msg);
    },
    created() {
      console.log("组件创建后");
      console.log(this.msg);
    },
    beforeMount() {
      console.log("未生成DOM");
      console.log(this.$el)
      //console.log(document.body.innerHTML)

    },
    mounted() {
      console.log("可操作DOM,将获取整个DOM节点");
      console.log(this.$el)
      //console.log(document.body.innerHTML)
    },
    beforeUpdate() {
      //console.log("数据更新前:" + document.body.innerHTML)//msg：我是原来的数据
    },
    updated() {
      //console.log("数据更新后:" + document.body.innerHTML)//msg：我被修改了
    },
   /* beforeDestroy() {
      console.log('销毁前:')
    },
    destroyed() {
      console.log('销毁后:')
    },*/
    deactivated(){
      console.log("组件停用")
    },
    activated(){
      console.log("组件激活")
    },
    methods: {
      clickMe() {
        this.msg = '我被修改了';
      },
      DestroyMe() {
        this.componentShow = !this.componentShow //切换显示与隐藏
        if(this.componentShow == true){
          this.btnContent = this.btnContent
        }else {
          this.btnContent = 'ActiveMe'
        }
      }
    }
  }
</script>
<style></style>
