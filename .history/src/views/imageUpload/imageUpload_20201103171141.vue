<template>
  <div>
    <el-card>
      <h3>支持拖拽</h3>
      <div style="background:#E7E7E6;padding:10px 20px;margin:20px 0">Element UI自带上传组件</div>
      <el-upload
        class="upload-demo"
        drag
        action="/api/upload"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
      <h3 style="margin:20px 0">支持裁剪</h3>
      <div style="background:#E7E7E6;padding:10px 20px;margin:20px 0">vue-image-crop-upload</div>
      <el-button type="primary">上传图片</el-button>
    </el-card>
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
</style>