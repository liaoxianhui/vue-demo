<template>
  <div>
    <!--头部-->
    <div class="head">
      <Header :user="user" v-if="user !== ''"></Header>
    </div>
    <!--侧边栏-->
    <div class="floor">
      <div width="200px">
        <Aside></Aside>
      </div>
      <!--全部内容-->
      <div style="background: white">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/layout/Header.vue";
import Aside from "../../components/layout/Aside.vue";
export default {
  name: "",
  props: {},
  components: {
    Header,
    Aside,
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {},
  mounted() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    // console.log(this.user.username);
  },
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.head {
  height: 60px;
  position: fixed;
  top: 0;
}
</style>
