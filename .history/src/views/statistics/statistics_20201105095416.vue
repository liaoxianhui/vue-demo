<template>
  <div>
    <div class="lr df">
      <div style="background: #7ccabf">今日发布</div>
      <div style="background: #e78a86">原创</div>
      <div style="background: #8274a2">新留言</div>
      <div style="background: #9ecdc0">新消息</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then((res) => {
          console.log(res.data.data);
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
</style>