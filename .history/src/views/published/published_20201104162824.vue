<template>
  <div>
    <el-table :data="arr" border style="width: 100%">
      <el-table-column type="index" label="#"> </el-table-column>
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="category" label="类目"> </el-table-column>
      <el-table-column prop="source" label="来源"> </el-table-column>
      <el-table-column prop="star" label="重要性">
        <template slot-scope="scope">
          <el-rate v-model="scope.row.star" disabled> </el-rate>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="发布时间"> </el-table-column>
      <el-table-column label="操作" width="300px">
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="modify(scope)">
            修改
          </el-button>
          <el-button size="small" type="danger" @click="del(scope)">
            删除
          </el-button>
          <el-button size="small" type="success" @click="see(scope)"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-dialog title="修改内容" :visible.sync="dialogFormVisible">
        <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="文章标签" prop="lab">
          <el-input v-model="ruleForm.lab" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="abstract">
          <el-input v-model="ruleForm.abstract" autocomplete="off"></el-input>
        </el-form-item>
        <div class="df">
          <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
          </el-form-item>
          <el-form-item label="类目" prop="category">
            <el-select v-model="ruleForm.category" placeholder="请选择">
              <el-option label="vue" value="vue"></el-option>
              <el-option label="react" value="react"></el-option>
              <el-option label="node.js" value="node.js"></el-option>
              <el-option label="javascript" value="javascript"></el-option>
              <el-option label="性能优化" value="性能优化"></el-option>
              <el-option label="小程序" value="小程序"></el-option>
              <el-option label="工具类" value="工具类"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="来源" prop="source">
            <!-- <el-input v-model="ruleForm.source"></el-input> -->
            <el-select v-model="ruleForm.source" placeholder="请选择">
              <el-option label="原创" value="原创"></el-option>
              <el-option label="转载" value="转载"></el-option>
              <el-option label="与他人合作" value="与他人合作"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重要性" prop="importance">
            <!-- <el-input v-model="ruleForm.importance"></el-input> -->
            <el-select v-model="ruleForm.importance" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发表时间" prop="ptime">
            <!-- <el-input v-model="ruleForm.ptime"></el-input> -->
            <el-date-picker
              v-model="ruleForm.ptime"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </el-form-item>
        </div>
        <div id="main">
          <el-form-item label="来源" prop="text">
          <mavon-editor v-model="ruleForm.text" />
          </el-form-item>
        </div>
        <el-form-item style="text-align: center; margin-top: 20px">
          <el-button type="primary" @click="release">发布</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
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
      arr: [],
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get("/api/article/allArticle")
        .then((res) => {
          console.log(res.data.data);
          this.arr = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(scope) {
      console.log(scope);
      this.arr.map((item1, index) => {
        if (scope.row.title === item1.title) {
          this.arr.splice(index, 1);
        }
      });
    },
    modify(scope) {
      // this.dialogFormVisible = true;
      // this.form.NAME = scope.row.NAME;
      // this.form.ORI_PRICE = scope.row.ORI_PRICE;
      // this.form.PRESENT_PRICE = scope.row.PRESENT_PRICE;
      // this.form.ID = scope.row.ID;
      // this.form.GOODS_SERIAL_NUMBER = scope.row.GOODS_SERIAL_NUMBER;
    },
  },
  mounted() {
    this.getdata();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>