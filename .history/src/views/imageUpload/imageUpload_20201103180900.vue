<template>
  <div>
    <el-card>
      <h3>支持拖拽</h3>
      <div style="background: #e7e7e6; padding: 10px 20px; margin: 20px 0">
        Element UI自带上传组件
      </div>
      <el-upload class="upload-demo" drag action="/api/upload" multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
      <h3 style="margin: 20px 0">支持裁剪</h3>
      <div style="background: #e7e7e6; padding: 10px 20px; margin: 20px 0">
        vue-image-crop-upload
      </div>
      <el-button class="btn" type="primary" @click="toggleShow"
        >上传图片</el-button
      >
      <my-upload  
 5     @crop-success="cropSuccess" 
 6     @crop-upload-success="cropUploadSuccess"
 7     @crop-upload-fail="cropUploadFail"
 8     v-model="show" 
 9     :width="200" 
10     :height="200" 
11     img-format="png" 
12     :size="size"
13     langType='zh'
14     :noRotate='false'
15     field="Avatar1"
16     url="https://httpbin.org/post"></my-upload>
17     <img :src="imgDataUrl">
    </el-card>
  </div>
</template>

<script>
import "babel-polyfill";
import myUpload from "vue-image-crop-upload";

export default {
  name: "",
  props: {},
  data() {
    return {
     imgDataUrl: "",
        show: false,
        size:2.1
    };
  },
  components: {
    "my-upload": myUpload,
  },
  methods: {
    //控制剪切框的显示和隐藏
    toggleShow() {
      this.show = !this.show;
    },
    //剪切成功后的回调函数
    cropSuccess(imgDataUrl) {
      //  imgDataUrl其实就是图片的base64data码
      this.avatar = imgDataUrl;
      console.log(imgDataUrl); //这里打印出来的是base64格式的资源
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>