<template>
  <div>
    <el-col :span="8">
      <el-card shadow="always">
        <div>
          <h1>支持拖拽</h1>
          <br />
          <div class="element">Element UI自带上传组件</div>
          <el-upload class="upload-demo" drag action="/api/upload" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </div>
        <br />
        <br />
        <div>
          <h1>支持裁剪</h1>
          <br />
          <div class="element">vue-image-crop-upload</div>
          <!--HTML部分-->
          <div id="image">
            <el-button type="primary" class="btn" @click="toggleShow"
              >上传图片</el-button
            >
            <my-upload
              @crop-success="cropSuccess"
              @crop-upload-success="cropUploadSuccess"
              @crop-upload-fail="cropUploadFail"
              v-model="show"
              :width="20"
              :height="20"
              img-format="png"
              :size="size"
              langType="zh"
              :noRotate="false"
              field="file"
              url="/api/upload"
            ></my-upload>
            <img :src="imgDataUrl" />
          </div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import "babel-polyfill"; // es6 shim
import myUpload from "vue-image-crop-upload";
export default {
  name: "",
  props: {},
  components: {
    "my-upload": myUpload,
  },
  data() {
    return {
      avatar: "", //用于存储剪切完图片的base64Data和显示回调图片
      show: false, //剪切框显示和隐藏的flag
      size: 2.1,
      imgDataUrl: "",
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      console.log(imgDataUrl, field);
    },
    //上传成功回调
    cropUploadSuccess(jsonData, field) {
      this.imgDataUrl = jsonData.files.file;
      console.log(jsonData);
      console.log(imgDataUrl);
      console.log("field: " + field);
    },
    //上传失败回调
    cropUploadFail(status, field) {
      console.log("上传失败状态" + status);
      console.log("field: " + field);
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.el-col {
  width: 100%;
}

.element {
  width: 85%;
  height: 50px;
  background-color: #eeeeee;
  line-height: 50px;
  padding-left: 30px;
  margin-bottom: 30px;
}
</style>