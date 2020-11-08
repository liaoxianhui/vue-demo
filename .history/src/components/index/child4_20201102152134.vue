<template>
  <div class="box df">
    <div class="box1">
      <el-card>
        <el-table :data="orderData" style="width: 100%">
          <el-table-column prop="num" label="Order _No" width="180">
          </el-table-column>
          <el-table-column prop="price" label="Price" width="90">
          </el-table-column>
          <el-table-column label="status">
            <template slot-scope="scope">
              <div v-if="scope.row.status === 0">
                <el-tag type="danger">pending</el-tag>
              </div>
              <div v-if="scope.row.status === 1">
                <el-tag type="succes">succes</el-tag>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>

    <div class="box2">
      <el-card>
        
      </el-card>
    </div>

    <div class="box3">
      <el-card>
        
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    orderData: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  margin: 30px;
  font-size: 14px;
}
.box1 {
  width: 33%;
}
.box2 {
  margin: 10px 0;
}
</style>