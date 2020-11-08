<template>
  <div class="box">
    <div>退出后台管理系统？</div>
    <div>
      <el-button type="primary" @click="exit">EXIT</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {
    exit(){
      sessionStorage.removeItem('user');
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.box{
  text-align: center;
  padding-top: 50px;
}
</style>