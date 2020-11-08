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
        columns: ["name", "sales", 'ministration',"techology",'delelopmer',"marketing" ],
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