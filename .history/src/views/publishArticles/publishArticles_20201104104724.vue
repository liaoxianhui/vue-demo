<template>
  <div>
    <div class="box">
      <el-button type="success">查看</el-button>
      <el-button type="primary">发布</el-button>
    </div>
    <div>
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
        <div>
          <el-form-item label="作者" prop="author">
            <el-input v-model.number="ruleForm.author"></el-input>
          </el-form-item>
          <el-form-item label="类目" prop="author">
            <el-input v-model.number="ruleForm.author"></el-input>
          </el-form-item>
          <el-form-item label="来源" prop="author">
            <el-input v-model.number="ruleForm.author"></el-input>
          </el-form-item>
          <el-form-item label="重要性" prop="author">
            <el-input v-model.number="ruleForm.author"></el-input>
          </el-form-item>
          <el-form-item label="发表时间" prop="author">
            <el-input v-model.number="ruleForm.author"></el-input>
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
  background: #39816b;
  text-align: right;
}
</style>