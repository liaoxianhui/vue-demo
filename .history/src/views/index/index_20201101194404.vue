<template>
  <div>
    <child1 :count="count"></child1>
    首页
  </div>
</template>

<script>
import child1 from "../../components/index/child1";
import axios from "axios";

export default {
  name: "",
  props: {},
  data() {
    return {
      count:{},
    };
  },
  components: {
    child1,
  },
  methods: {
    getData() {
      axios
        .get("/api/homeData")
        .then((res) => {
          this.count=res.data.data
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getData()
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>