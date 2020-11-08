<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      arr:[]
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get("/api/article/allArticle")
        .then((res) => {
          console.log(res.data.data);
          this.arr=res.data.data
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getdata()
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>