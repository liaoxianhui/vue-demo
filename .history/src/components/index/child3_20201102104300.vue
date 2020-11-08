<template>
  <div>
      <ve-radar :data="chartData"></ve-radar>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      radar:{
          type:Array,
      }
  },
  data () {
    return {

    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>