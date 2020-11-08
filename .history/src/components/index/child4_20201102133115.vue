<template>
  <div>
    <div>
      <el-card>
      <div>Order No</div>
      <div v-for="(item,index) in orderData" :key="index"></div>
    </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    orderData: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>