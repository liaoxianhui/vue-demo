<template>
  <div>
    <div>
      <el-card>
      <div>
        <div>Order No</div>
        <div>Price</div>
        <div>status</div>
      </div>
      <div v-for="(item,index) in orderData" :key="index">

      </div>
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