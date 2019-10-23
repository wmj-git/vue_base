<template>
  <div class="shopCart">
    <b>购物车实例</b>
    <div class="shopCartTop">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名称：">
          <el-input v-model="inpName" placeholder="请输入商品名称" clearable/>
        </el-form-item>
        <el-form-item label="价格：">
          <el-input v-model="inpPrice" placeholder="请输入价格" clearable/>
        </el-form-item>
        <el-button type="primary" class="addBtn" @click="addHandle">添加</el-button>
      </el-form>
    </div>
    <div class="shopCartContainer">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="商品名称"
          width="150"
          v-model="receName">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          width="100">
        </el-table-column>
        <el-table-column
          prop="total"
          label="总价"
          width="120">
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作"
          width="120">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ShopCart',
    data() {
      return {
        inpName: '',
        inpPrice: '',
        receName: '',
        form: {
          name: '',
          region: '',
          type: []
        },
        tableData: [
          {name: '123', price: '￥50', total: '150'}
        ]
      }
    },
    methods: {
      addHandle() {
        console.log(this.inpName)
        console.log(this.tableData.name)
      }
    }
  }
</script>
<style scoped>
  .shopCart {
  }

  .shopCartTop, .shopCartContainer {
    width: 50%;
    margin: 20px auto;
    text-align: center;
  }

  .addBtn {
    float: right;
  }

  b {
    display: block;
    margin: 20px auto;
    color: rebeccapurple;
    text-align: center;
  }
</style>
