<template>
  <div>
    <div class="lr df">
      <div style="background: #7ccabf" class="gou">
        <div style="width: 90%">今日发布<br />{{ count }}</div>
        <i class="el-icon-check"></i>
      </div>
      <div style="background: #e78a86" class="gou">
        <div style="width: 90%">原创<br />{{ 0 }}</div>
        <i class="el-icon-tickets"></i>
      </div>
      <div style="background: #8274a2" class="gou">
        <div style="width: 90%">新留言<br />{{ 0 }}</div>
        <i class="el-icon-bell"></i>
      </div>
      <div style="background: #9ecdc0" class="gou">
        <div style="width: 90%">新消息<br />{{ 0 }}</div>
        <i class="el-icon-phone-outline"></i>
      </div>
    </div>
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
      count: 0,
    };
  },
  components: {},
  methods: {
    getData() {
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
    getcount() {
      this.arr.map((item) => {
        if (item.date === dayjs().format("YYYY/MM/DD /HH/mm/ss")) {
          this.count++;
        }
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
.lr > div {
  width: 25%;
  color: white;
  padding: 10px 0px;
  text-align: center;
}
.gou {
  display: flex;
  align-items: center;
}
</style>