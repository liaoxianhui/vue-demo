<template>
  <div class="box">
    <div>
      <el-card>
      <div class=" df">
        <div>Order No</div>
        <div>Price</div>
        <div>status</div>
      </div>
      <div v-for="(item,index) in orderData" :key="index" class="df">
        <div>{{item.num}}</div>
        <div>{{item.price}}</div>
        <div>{{item.status}}</div>
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
.box{
  margin: 30px;
}
</style>