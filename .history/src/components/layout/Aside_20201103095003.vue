<template>
  <div class="box">
    <el-col>
      <el-menu
        router
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#344055"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <div v-for="(item, index) in arr" :key="index">
          <el-menu-item :index="item.path">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      arr: [
        {
          name: "首页",
          icon: "el-icon-s-home",
          path: "/",
        },
        {
          name: "已发布",
          icon: "el-icon-s-claim",
          path: "/published",
        },
        {
          name: "统计",
          icon: "el-icon-setting",
          path: "/statistics",
        },
        {
          name: "发表文章",
          icon: "el-icon-upload",
          path: "/publishArticles",
        },
        {
          name: "标签页",
          icon: "el-icon-s-comment",
          path: "/tab",
        },
        {
          name: "导出excel",
          icon: "el-icon-s-order",
          path: "/exportExcel",
        },
        {
          name: "图片上传",
          icon: "el-icon-picture-outline",
          path: "/imageUpload",
        },
        {
          name: "退出系统",
          icon: "el-icon-s-release",
          path: "/exitSystem",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
el-col {
  height: 100%;
}
el-menu{
  height: 100%;
}
.box {
  height: 100%;
}
</style>
