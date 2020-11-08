<template>
  <div>
    <div class=" df">
      <div style="background:#7CCABF;">今日发布</div>
      <div style="background:#E78A86;">原创</div>
      <div style="background:#8274A2;">新留言</div>
      <div style="background:#9ECDC0;">新消息</div>
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
</style>