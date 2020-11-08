<template>
  <div>
    <ve-radar :data="chartData"></ve-radar>
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
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [],
      },
    };
  },
  components: {},
  methods: {},
  mounted() {
      this.chartData.rows=this.radar
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>