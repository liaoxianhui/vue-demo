<template>
  <div>
      <ve-line :data="chartData" :settings="chartSettings"></ve-line>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      line:{
          type:Object,
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