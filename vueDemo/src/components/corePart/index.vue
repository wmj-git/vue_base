<template>
  <div>
    ----数据监听----<br><br>
    <data-watch></data-watch>
    <br><hr><br><br>
    ----插槽使用----<br><br>
    <use-slot></use-slot>
    <br><hr><br>
    ----父子通信----<br><br>
    <parent-compon></parent-compon>
    <br><hr><br>
    ----非父子通信----<br><br>
    <not-father></not-father>
    <first-borther></first-borther>
    <br><hr><br>
    ----生命周期----<br><br>
    <life-cycle></life-cycle>
    <br><hr><br>
  </div>
</template>

<script>
import dataWatch from '@/components/corePart/dataWatch'
import UseSlot from "./useSlot";
import ParentCompon from "@/components/corePart/parentChild/parentInfo";
import notFather from "@/components/corePart/notParent/notFather";
import FirstBorther from "./notParent/firstBorther";
import LifeCycle from "./lifeCycle/index";
  export default {
    name:'CorePart',
    data(){
      return{}
    },
    components:{LifeCycle, FirstBorther, ParentCompon, UseSlot, dataWatch,notFather}
  }
</script>
