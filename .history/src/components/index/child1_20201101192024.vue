<template>
  <div>

  </div>
</template>

<script>
import countTo from 'vue-count-to'

export default {
  name: '',
  props:{
      count:{
          type:Object,
          required:true,
      }
  },
  data () {
    return {
    }
  },
  components: {
      countTo,
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>