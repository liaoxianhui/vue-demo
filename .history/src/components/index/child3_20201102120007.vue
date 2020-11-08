<template>
  <div class="box">
    <div class="box1">
      <el-card>
        <ve-radar :data="chartData"></ve-radar>
      </el-card>
    </div>
    <div class="box1">
      <el-card>
        <ve-pie :data="chartData1"></ve-pie>
      </el-card>
    </div>
    <div class="box1">
      <el-card>
        <ve-histogram :data="chartData"></ve-histogram>
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
    pie: {
      type: Array,
    },
    histogram:{
      type:Array,
    }
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
      chartData1: {
        columns: ["name", "data"],
        rows: [],
      },
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.chartData.rows = this.radar;
    this.chartData1.rows = this.pie;
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  display: flex;
  margin: 20px 30px;
}
.box1 {
  width: 33%;
}
</style>