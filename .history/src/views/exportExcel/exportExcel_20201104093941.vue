<template>
  <div>
    <el-input
      style="width: 30%"
      clearable
      v-model="input"
      placeholder="请输入商品名称"
      @input="search"
    ></el-input>
    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="NAME" label="名称" width="180">
        </el-table-column>
        <el-table-column
          prop="GOODS_SERIAL_NUMBER"
          label="商品编号"
          width="180"
        >
        </el-table-column>
        <el-table-column prop="ORI_PRICE" label="原价" width="200">
        </el-table-column>
        <el-table-column prop="PRESENT_PRICE" label="现价" width="200">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="small" type="primary" @click="modify(scope)">
              修改
            </el-button>
            <el-button size="small" type="danger" @click="del(scope)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30, 40, 50, 100]"
        :page-size="num"
        layout="total, sizes, prev,pager,next,jumper"
        :total="tableData1.length"
        :current-page="currentPage"
      >
      </el-pagination>
    </div>
    <div>
      <el-dialog title="修改内容" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="商品名称" :label-width="formLabelWidth">
            <el-input v-model="form.NAME" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="原价" :label-width="formLabelWidth">
            <el-input v-model="form.ORI_PRICE" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="现价" :label-width="formLabelWidth">
            <el-input
              v-model="form.PRESENT_PRICE"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancelEdit(form)">取 消</el-button>
          <el-button type="primary" @click="addUser(form)">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      input: "",
      tableData: [],
      tableData1: [],
      num: 10,
      currentPage: 1,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        NAME: "",
        ORI_PRICE: "",
        PRESENT_PRICE: "",
        ID: "",
        GOODS_SERIAL_NUMBER: "",
      },
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/tableData")
        .then((res) => {
          console.log(res.data.data);
          this.tableData1 = res.data.data;
          this.tableData = this.tableData1.slice(0, 10);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      this.num = val;
      this.currentPage = 1;
      this.tableData = this.tableData1.slice(0, val);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.tableData = this.tableData1.slice(
        (this.currentPage - 1) * this.num,
        this.currentPage * this.num
      );
    },
    del(scope) {
      console.log(scope);
      this.tableData1.map((item1, index) => {
        if (scope.row.NAME === item1.NAME) {
          this.tableData1.splice(index, 1);
        }
        this.tableData = this.tableData1.slice(
          (this.currentPage - 1) * this.num,
          this.currentPage * this.num
        );
      });
    },
    cancelEdit(form) {
      this.dialogFormVisible = false;
    },
    addUser(form){
      console.log(form);
    }
  },
  mounted() {
    this.getData();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>