<template>
  <div>
    <div class="box">
      <el-button type="success">查看</el-button>
      <el-button type="primary">发布</el-button>
    </div>   <div>
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
            <el-input v-model="ruleForm.category"></el-input>
          </el-form-item>
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="vue" value="1"></el-option>
            <el-option label="react" value="2"></el-option>
            <el-option label="node.js" value="3"></el-option>
            <el-option label="javascript" value="3"></el-option>
            <el-option label="性能优化" value="3"></el-option>
            <el-option label="小程序" value="3"></el-option>
            <el-option label="工具类" value="3"></el-option>
            <el-option label="其他" value="3"></el-option>
          </el-select>
          <el-form-item label="来源" prop="source">
            <el-input v-model="ruleForm.source"></el-input>
          </el-form-item>
          <el-form-item label="重要性" prop="importance">
            <el-input v-model="ruleForm.importance"></el-input>
          </el-form-item>
          <el-form-item label="发表时间" prop="ptime">
            <el-input v-model="ruleForm.ptime"></el-input>
          </el-form-item>
        </div>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      select: '',
      ruleForm: {
        lab: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        importance: "",
        ptime: "",
      },
      rules: {
        lab: [{ required: true, message: "不能为空", trigger: "blur" }],
        abstract: [{ required: true, message: "不能为空", trigger: "blur" }],
        author: [{ required: true, message: "不能为空", trigger: "blur" }],
        category: [{ required: true, message: "不能为空", trigger: "blur" }],
        source: [{ required: true, message: "不能为空", trigger: "blur" }],
        importance: [{ required: true, message: "不能为空", trigger: "blur" }],
        ptime: [{ required: true, message: "不能为空", trigger: "blur" }],
      },
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
  background: #39816b;
  text-align: right;
  margin-bottom: 20px;
}
</style>