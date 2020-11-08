<template>
  <div class="md">
    <el-row :gutter="12">
      <el-col style="width:100%" :span="8">
        <el-card>
          <ve-line :data="chartData" :settings="chartSettings"></ve-line>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    line: {
      type: Array,
    },
  },
  data() {
    this.chartSettings = {
      metrics: ["expected", "actual"],
      dimension: ["date"],
    };
    return {
      chartData: {
        columns: ["date", "expected", "actual"],
        rows: [],
      },
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.chartData.rows = this.line;
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>