<template>
  <div>
    <el-table :data="arr" border style="width: 100%">
      <el-table-column type="index" label="#"> </el-table-column>
      <el-table-column prop="title" label="标题" > </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="category" label="类目"> </el-table-column>
      <el-table-column prop="source" label="来源"> </el-table-column>
      <el-table-column prop="star" label="重要性">
        <template slot-scope="scope">
          <el-rate
            v-model="scope.row.star"
            disabled
          >
          </el-rate>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="发布时间"> </el-table-column>
      <el-table-column label="操作" width="300px">
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="modify(scope)">
            修改
          </el-button>
          <el-button size="small" type="danger" @click="del(scope)">
            删除
          </el-button>
          <el-button size="small" type="success" @click="see(scope)">查看</el-button>
        </template>
      </el-table-column>
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
    del(scope){
      console.log(scope);
      this.arr.map((item1, index) => {
        if (scope.row.NAME === item1.NAME) {
          this.tableData1.splice(index, 1);
        }
        this.tableData = this.tableData1.slice(
          (this.currentPage - 1) * this.num,
          this.currentPage * this.num
        );
      });
    }
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