<template>
  <div>
    <div class="lr df">
      <div style="background: #7ccabf" class="gou">
        <div style="width:90%">今日发布<br />{{0}}</div>
      <i class="el-icon-check" width="20px"></i>
      </div>
      <div style="background: #e78a86" class="gou">
        <div style="width:90%">原创<br />{{0}}</div>
      <i class="el-icon-tickets"></i>
      </div>
      <div style="background: #8274a2" class="gou">
         <div style="width:90%">新留言<br />{{0}}</div>
      <i class="el-icon-bell"></i>
      </div>
      <div style="background: #9ecdc0" class="gou">
         <div style="width:90%">新消息<br />{{0}}</div>
      <i class="el-icon-phone-outline"></i>
      </div>
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