<template>
  <div class="box">
    <el-card>
      <ve-radar :data="chartData"></ve-radar>
    </el-card>
    <el-card>
      <ve-pie :data="chartData"></ve-pie>
    </el-card>
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
</style>