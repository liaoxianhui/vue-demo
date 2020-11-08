<template>
  <div class="box df">
    <div class="box1">
      <el-card>
        <el-table :data="orderData" style="width: 100%">
          <el-table-column prop="num" label="Order _No" width="300">
          </el-table-column>
          <el-table-column prop="price" label="Price" width="110">
          </el-table-column>
          <el-table-column label="status">
            <template slot-scope="scope">
              <div v-if="scope.row.status === 0">
                <el-tag type="danger" style="width: 80px; text-align: center"
                  >pending</el-tag
                >
              </div>
              <div v-if="scope.row.status === 1">
                <el-tag type="succes" style="width: 80px; text-align: center"
                  >succes</el-tag
                >
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>

    <div class="box2">
      <el-card>
        <div class="df jc_b">
          <div v-if="Select === false">
            <i class="el-icon-caret-bottom" @click="down"></i>
          </div>
          <div v-if="Select === true">
            <i class="el-icon-caret-top" @click="up"></i>
          </div>
          <div>Todo List</div>
        </div>
        <div v-for="(item,index) in todolist" :key="index" class=" df jc_b" style="margin-bottom:10px">
          <div class=" df">
            <div style="margin-right:10px">
              <el-checkbox v-model="item.checked" @change="solo"></el-checkbox>
            </div>
            <div>{{item.name}}</div>
          </div>
          <div>
            <i class="el-icon-close" @click="close(item,index)"></i>
          </div>
        </div>
        <div class=" df jc_b">
          <div>{{todolist.length}} items left</div>
          <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </div>
      </el-card>
    </div>

    <div class="box3">
      <el-card> </el-card>
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
    todolist: {
      type: Array,
    },
  },
  data() {
    return {
      Select: false,
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
.box {
  margin: 30px;
  font-size: 14px;
}
.box1 {
  width: 40%;
}
.box2 {
  width: 30%;
  height: 100%;
}
.box3 {
  width: 30%;
}
</style>