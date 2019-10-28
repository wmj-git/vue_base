<template>
  <div class="shopCart">
    <b>购物车实例</b>
    <div class="shopCartTop">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名称：">
          <el-input v-model="course" placeholder="请输入商品名称" clearable/>
        </el-form-item>
        <el-form-item label="价格：">
          <el-input v-model="price" placeholder="请输入价格" clearable/>
        </el-form-item>
        <el-button type="primary" class="addBtn" @click="addHandle" size="small">添加</el-button>
      </el-form>
    </div>
    <div class="list">
      <ul>
        <li v-for="(list,index) in listData">
          课程：{{ list.course }}---------价格：￥{{ list.price }}
          <el-button @click="addtoShop(index)" type="success" size="small">添加到购物车</el-button>
        </li>
      </ul>

    </div>
    <div class="shopCartContainer">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <!-- 设置表头数据源，并循环渲染出来，property对应列内容的字段名，详情见下面的数据源格式 -->
        <el-table-column
          v-for="(info,index) in tableHeader" :key="info.key"
          :label="info.label"
        >
          <template slot-scope="scope">
              <span>{{ scope.row[info.key] }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button @click="handleIncrease(scope.row)" type="text">+</el-button>
            <el-button @click="handleReduce(scope.row)" type="text">-</el-button>
          </template>
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
        course: '',
        price: '',
        receName: '',
        form: {
          name: '',
          region: '',
          type: []
        },
        tableData: [],
        tableHeader: [
          {
            label: '商品名称',
            key: 'course'
          },
          {
            label: '商品数量',
            key: 'count'
          },
          {
            label: '商品价格',
            key: 'totalPrice'
          }
        ],
        listData: [
          {course: 'java', price: '50'},
          {course: 'php', price: '50'},
          {course: 'c++', price: '50'},
        ]
      }
    },
    created() {
      this.addtoShop();
    },
    updated() {
      console.log(this.listData.length)
      for (var i = 0; i <= this.listData.length; i++) {
      }
    },
    methods: {
      addHandle() {
        this.listData.push({course: this.course, price: this.price});//添加到商品库
        console.log(this.course + ';' + this.price);
        this.course = '',
          this.price = ''
      },
      handleIncrease() {

      },
      handleReduce() {
      },
      addtoShop(index) {
        const goods = this.listData[index];
        console.log(goods);
        const result = this.tableData.find(v => v.course == goods.course)
        if (result) {
          result.count += 1;
        } else {
          this.tableData.push({
            course: this.tableData.course,
            count: 1,
            totalPrice: (Number(this.tableData.count) * Number(this.tableData.price))
          })
        }

      }
    }
  }
</script>
<style scoped>
  .shopCart {
  }

  .list {
    width: 50%;
  }

  .shopCartTop, .list {
    margin: 20px auto;
  }

  .shopCartContainer {
    margin: 100px auto;
  }

  li {
    line-height: 60px;
  }

  .shopCartTop, .shopCartContainer {
    width: 50%;
    text-align: center;
  }

  .el-button--text {
    font-size: 18px;
    padding: 10px;
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
