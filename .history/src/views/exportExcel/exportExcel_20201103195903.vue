<template>
  <div>
    <el-input
      style="width: 30%"
      clearable
      v-model="input"
      placeholder="请输入商品名称"
    ></el-input>
    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="NAME" label="名称" width="180">
        </el-table-column>
        <el-table-column
          prop="GOODS_SERIAL_NUMBER"
          label="商品编号"
          width="180"
        >
        </el-table-column>
        <el-table-column prop="ORI_PRICE" label="原价" width="200">
           </el-table-column>
        <el-table-column prop="PRESENT_PRICE" label="现价" width="200">
           </el-table-column>
        <el-table-column fixed='right' label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="small" type="primary" @click="modify(scope)">
              修改
            </el-button>
            <el-button size="small" type="danger" @click="del(scope)">
              删除
            </el-button>
          </template>
           </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      input: "",
      tableData: [],
      tableData1: [],
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/tableData")
        .then((res) => {
          console.log(res.data.data);
          this.tableData1 = res.data.data;
          this.tableData = this.tableData1.slice(0, 10);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getData();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>