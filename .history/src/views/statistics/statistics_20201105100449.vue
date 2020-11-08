<template>
  <div>
    <div class="lr df">
      <div style="background: #7ccabf" class="gou">
        <div>今日发布<br />{{0}}</div>
      <i class="el-icon-check" size='20'></i>
      </div>
      <div style="background: #e78a86">原创<br />{{0}}</div>
      <div style="background: #8274a2">新留言<br />{{0}}</div>
      <div style="background: #9ecdc0">新消息<br />{{0}}</div>
    </div>
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
.gou{
  display: flex;
  align-items: center;
}
</style>