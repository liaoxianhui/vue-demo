<template>
  <div class="box">
    <div class="box1">
      <el-card>
        <ve-radar :data="chartData"></ve-radar>
      </el-card>
    </div>
    <div class="box1">
      <el-card>
        <ve-radar :data="chartData"></ve-radar>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    radar: {
      type: Array,
    },
  },
  data() {
    return {
      chartData: {
        columns: [
          "name",
          "sales",
          "ministration",
          "techology",
          "delelopmer",
          "marketing",
        ],
        rows: [],
      },
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.chartData.rows = this.radar;
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box{
  display: flex;
}
.box1{
  width: 300px;
}
</style>