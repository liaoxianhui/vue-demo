<template>
  <div>
    <el-input
      style="width: 30%;margin-bottom:10px"
      clearable
      v-model="input"
      @input="search"
      placeholder="请输入商品名称"
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
    <div class="df" style="margin-top:10px">
        <div class="mr">
            <download-excel class="export-excel-wrapper" :data="tableData" :fields="json_fields" name="filename.xls">
                <el-button type="primary">导出xls</el-button>
            </download-excel>
        </div>
        <div class="ml">
            <download-excel class="export-excel-wrapper" :data="tableData" :fields="json_fields" name="filename.csv" type="csv">
                <el-button type="success">导出csv</el-button>
            </download-excel>
        </div>
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
    modify(scope) {
      this.dialogFormVisible = true;
      this.form.NAME = scope.row.NAME;
      this.form.ORI_PRICE = scope.row.ORI_PRICE;
      this.form.PRESENT_PRICE = scope.row.PRESENT_PRICE;
      this.form.ID = scope.row.ID;
      this.form.GOODS_SERIAL_NUMBER = scope.row.GOODS_SERIAL_NUMBER;
    },
    cancelEdit(form) {
      this.dialogFormVisible = false;
    },
    addUser(form) {
      console.log(form);
      this.tableData.splice(form.ID, "", form);
      this.dialogFormVisible = false;
      this.tableData.NAME = this.form.NAME;
      this.tableData.ORI_PRICE = this.form.ORI_PRICE;
      this.tableData.PRESENT_PRICE = this.form.PRESENT_PRICE;
      this.tableData.ID = this.form.ID;
      this.tableData.GOODS_SERIAL_NUMBER = this.form.GOODS_SERIAL_NUMBER;
    },
    search() {
      if (this.input === "") {
        this.tableData = this.tableData1.slice(
          (this.currentPage - 1) * this.num,
          this.currentPage * this.num
        );
      } else {
        this.tableData = this.tableData1.filter((item) => {
          return JSON.stringify(item).indexOf(this.input) > -1;
        });
      }
    },
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