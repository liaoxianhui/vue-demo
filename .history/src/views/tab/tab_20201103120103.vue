<template>
  <div>

      <el-link type="primary">未读消息</el-link>
      <el-link type="success">已读消息</el-link>
      <el-link type="warning">回收站</el-link>
      <div>
        <el-col :span="8">
          <el-card>
            <div v-for="item in list" :key="item.index">
              <div style="height:80px">
                <div>{{item}}</div>
                <div>
                  <div>{{item}}</div>
                  <div v-if="dataname===1">
                    <el-button @click="sign(item)">标记已读</el-button>
                  </div>
                  <div v-if="dataname===2">
                    <el-button @click="boxname(item)">删除</el-button>
                  </div>
                  <div v-if="dataname===3">
                    <el-button @click="reduction(item)">还原</el-button>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      nuxt:[],
      dataname:1,
      list:[],
      arr:[],
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>