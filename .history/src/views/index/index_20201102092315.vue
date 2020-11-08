<template>
  <div>
    <child1 :count="count"></child1>
    <child1 :line="count"></child1>
    首页
  </div>
</template>

<script>
import child1 from "../../components/index/child1";
import child2 from "../../components/index/child2";
import axios from "axios";

export default {
  name: "",
  props: {},
  data() {
    return {
      count: {},
      line:{},
    };
  },
  components: {
    child1,
    child2,
  },
  methods: {
    getData() {
      axios
        .get("/api/homeData")
        .then((res) => {
          this.count = res.data.data;
          // console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getline() {
      axios
        .get("/api/homeChat")
        .then((res) => {
          this.line = res.data.data;
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getData();
    this.getline()
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>