<template>
  <div>
    <child1></child1>
    首页
  </div>
</template>

<script>
import child1 from "../../components/index/child1";
import axios from 'axios'

export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    child1,
  },
  methods: {
    getData(){
      axios.get('/api/homeData').then().catch()
    }
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>