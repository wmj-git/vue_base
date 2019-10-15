<template>
  <div>
    <data-watch></data-watch>
    <br><hr><br><br>
    <use-slot></use-slot>
    <br><hr><br>
    <parent-compon></parent-compon>
    <br><hr><br>
    <not-father></not-father>
    <first-borther></first-borther>
    <br><hr><br>
  </div>
</template>

<script>
import dataWatch from '@/components/Core/dataWatch'
import UseSlot from "./useSlot";
import ParentCompon from "@/components/Core/parentChild/parentInfo";
import notFather from "@/components/Core/notParent/notFather";
import FirstBorther from "./notParent/firstBorther";
  export default {
    name:'Watch',
    data(){
      return{}
    },
    components:{FirstBorther, ParentCompon, UseSlot, dataWatch,notFather}
  }
</script>
