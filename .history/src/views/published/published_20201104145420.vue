<template>
  <div>
    <el-table :data="arr" border style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="title" label="标题" width="180">
      </el-table-column>
      <el-table-column prop="author" label="作者" width="180">
      </el-table-column>
      <el-table-column prop="category" label="类目"  width="180"> </el-table-column>
      <el-table-column prop="source" label="来源"  width="180"> </el-table-column>
      <el-table-column prop="star" label="重要性"  width="180"> </el-table-column>
      <el-table-column prop="date" label="发布时间"  width="180"> </el-table-column>
      <el-table-column prop="author" label="操作"  width="180"> </el-table-column>
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
      arr: [],
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get("/api/article/allArticle")
        .then((res) => {
          console.log(res.data.data);
          this.arr = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getdata();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>