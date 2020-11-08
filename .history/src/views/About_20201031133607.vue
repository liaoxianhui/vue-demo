<template>
  <div></div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {
    getData(){
          axios.get('/api/').then(res=>{
              console.log(res.data);
          }).catch(err=>{
              console.log(err);
          })
      }
  },
  mounted() {
    this.getData()
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>