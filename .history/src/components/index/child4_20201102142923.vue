<template>
  <div class="box df">
    <div class="box1">
      <el-card>
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="num"
        label="Order _No"
        width="260">
      </el-table-column>
      <el-table-column
        prop="Price"
        label="Price"
        width="180">
      </el-table-column>
      <el-table-column
        label="status">
        <template slot-scope="scope">
          <div v-if="scope.row.status">
            
          </div>
        </template>
      </el-table-column>
    </el-table>


        <div class="df">
          <div style="margin-right:5px">
            <div>Order No</div>
            <div v-for="(item, index) in orderData" :key="index" class="df ma">
            <div style="margin-right:5px">{{ item.num }}</div>
            </div>
          </div>
          <div style="margin-right:5px">
            <div></div> Price</div>
          <div>status</div>
        </div>
        
          
          
          <div v-if="item.status===0" style="color:orange">pending</div>
          <div v-else-if="item.status===1" style="color:green">success</div>
        
      </el-card>
    </div>
    
    <div class="box1">
      <el-card>
        <div class="df">
          <div>Order No</div>
          <div>Price</div>
          <div>status</div>
        </div>
        <div v-for="(item, index) in orderData" :key="index" class="df ma">
          <div style="margin-right:10px">{{ item.num }}</div>
          <div style="margin-right:10px">{{ item.price }}</div>
          <div v-if="item.status===0">pending</div>
          <div v-else-if="item.status===1">success</div>
        </div>
      </el-card>
    </div>

    <div class="box1">
      <el-card>
        <div class="df">
          <div>Order No</div>
          <div>Price</div>
          <div>status</div>
        </div>
        <div v-for="(item, index) in orderData" :key="index" class="df ma">
          <div style="margin-right:10px">{{ item.num }}</div>
          <div style="margin-right:10px">{{ item.price }}</div>
          <div v-if="item.status===0">pending</div>
          <div v-else-if="item.status===1">success</div>
        </div>
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
.box1{
  width: 33%;
}
.box2{
  margin: 10px 0;
}
</style>