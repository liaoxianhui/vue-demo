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
        <el-table-column prop="date" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="name" label="商品编号" width="180">
        </el-table-column>
        <el-table-column prop="address" label="原价"> </el-table-column>
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
          this.tableData1=res.data.data
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