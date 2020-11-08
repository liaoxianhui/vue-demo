<template>
  <div class="box df">
    <div class="box1">
      <el-card>
        <div class="df">
          <div>Order No</div>
          <div>Price</div>
          <div>status</div>
        </div>
        <div v-for="(item, index) in orderData" :key="index" class="df ma">
          <div style="margin-right:10px">{{ item.num }}</div>
          <div style="margin-right:10px">{{ item.price }}</div>
          <div v-if="item.status===0">pending</div>
          <div v-else-if="item.status===1">success</div>
        </div>
      </el-card>
    </div>
    
    <div class="box1">
      <el-card>
        <div class="df">
          <div>Order No</div>
          <div>Price</div>
          <div>status</div>
        </div>
        <div v-for="(item, index) in orderData" :key="index" class="df ma">
          <div style="margin-right:10px">{{ item.num }}</div>
          <div style="margin-right:10px">{{ item.price }}</div>
          <div v-if="item.status===0">pending</div>
          <div v-else-if="item.status===1">success</div>
        </div>
      </el-card>
    </div>
    <div class="box1">
      <el-card>
        <div class="df">
          <div>Order No</div>
          <div>Price</div>
          <div>status</div>
        </div>
        <div v-for="(item, index) in orderData" :key="index" class="df ma">
          <div style="margin-right:10px">{{ item.num }}</div>
          <div style="margin-right:10px">{{ item.price }}</div>
          <div v-if="item.status===0">pending</div>
          <div v-else-if="item.status===1">success</div>
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
.box {
  margin: 30px;
  font-size: 14px;
}
.box1{
  width: 33%;
}
.box2{
  margin: 10px 0;
}
</style>