<template>
  <div>
    <el-table :data="arr" border style="width: 100%">
      <el-table-column type="index" label="#"> </el-table-column>
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="category" label="类目"> </el-table-column>
      <el-table-column prop="source" label="来源"> </el-table-column>
      <el-table-column prop="star" label="重要性">
        <template slot-scope="scope">
          <el-rate v-model="scope.row.star" disabled> </el-rate>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="发布时间" width="230px">
      </el-table-column>
      <el-table-column label="操作" width="210px">
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="modify(scope.row)">
            修改
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="del(scope.$index, scope.row)"
          >
            删除
          </el-button>
          <el-button size="small" type="success" @click="see(scope.row)"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
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
          this.arr.map((item) => {
            item.date = dayjs(item.date).format("YYYY年MM月DD日 HH时mm分ss秒");
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // del(scope) {
    //   console.log(scope);
    //   this.arr.map((item1, index) => {
    //     if (scope.row.title === item1.title) {
    //       this.arr.splice(index, 1);
    //     }
    //   });
    // },
    del(index, row) {
      axios
        .post("/api/article/delete", {
          id: row._id,
        })
        .then((res) => {
          this.arr.splice(index, 1);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    see(row) {
      this.$router.push({
        path: "/see",
        query: {
          id: row._id,
        },
      });
    },

    modify(row) {
      this.$router.push({
        path: "/update",
        query: {
          id: row._id,
        },
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