<template>
    <div class="dataBind">
        <!--单向数据绑定-->
        <input v-bind:value="name" :class="name">
         <!--双向数据绑定（也是绑定name,name值改变则单向的也变了）-->
        <input v-model="name" :class="name">
         效果显示：{{ name }}
         <!--<button @click="clickMe">点击我改变name</button>-->
         <button @click="name='这个是改变后的内容'">点击我改变name</button>
    </div>
</template>
<script>
export default {
    name:'dataBind',
    data(){
        //数据单向绑定和多项绑定
        return{
            name:'hello'//单向数据绑定：js改变可影响页面，但是页面改变不能影响js,双向绑定则会改变页面

        }
    },
    methods:{
        clickMe:function(){
           this.name='改变后的内容'
           //该函数需要获取变量名，所以需要用this关键字，若是在页面直接获取则不需要，实现方式如下：
           //<button @click="name='这个是改变后的内容'">点击我改变name</button>
        }
    }

}
</script>
