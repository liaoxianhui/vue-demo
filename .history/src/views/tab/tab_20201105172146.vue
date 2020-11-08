<template>
  <div>
    <div class="df">
      <div>
        <el-link @click="Unread" style="margin-right: 10px"
          >未读消息({{ nuxt.length }})</el-link
        >
      </div>
      <div>
        <el-link @click="Read" style="margin-right: 10px"
          >已读消息({{ count1.length }})</el-link
        >
      </div>
      <div>
        <el-link @click="recovery" style="margin-right: 10px"
          >回收站({{ nuxt2.length }})</el-link
        >
      </div>
    </div>
    <div>
      <el-col>
        <el-card>
          <div v-for="item in list" :key="item.id">
            <div
              style="
                height: 80px;
                border-bottom: 1px solid gray;
                line-height: 80px;
              "
              class="df jc_b"
            >
              <div>{{ item.content }}</div>
              <div class="df">
                <div style="margin-right: 20px">{{ item.time }}</div>
                <div v-if="dataname === 1">
                  <el-button @click="sign(item)">标记已读</el-button>
                </div>
                <div v-if="dataname === 2">
                  <el-button @click="boxname(item)">删除</el-button>
                </div>
                <div v-if="dataname === 3">
                  <el-button @click="reduction(item)">还原</el-button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="list.length === 0">暂无消息</div>
          <div
            v-if="dataname === 1 && list.length !== 0"
            style="margin-top: 20px"
          >
            <el-button type="primary" @click="allreaded">全部已读</el-button>
          </div>
          <div
            v-if="dataname === 2 && list.length !== 0"
            style="margin-top: 20px"
          >
            <el-button type="primary" @click="alldel">全部删除</el-button>
          </div>
          <div
            v-if="dataname === 3 && list.length !== 0"
            style="margin-top: 20px"
          >
            <el-button type="primary" @click="clear">全部清除</el-button>
          </div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      nuxt: [],
      count1: [],
      count2: [],
      dataname: 1,
      list: [],
      arr: [
        {
          id: 1,
          read: false,
          recycle: false,
          time: "2020-02-22 12:00:00",
          content: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
        },
        {
          id: 2,
          read: false,
          recycle: false,
          time: "2020-02-22 13:00:00",
          content: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
        },
        {
          id: 3,
          read: false,
          recycle: false,
          time: "2020-02-22 14:00:00",
          content: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
        },
        {
          id: 4,
          read: false,
          recycle: false,
          time: "2020-02-22 15:00:00",
          content: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
        },
      ],
    };
  },
  components: {},
  methods: {
    // 跳转未读
    Unread() {
      this.dataname = 1;
      this.list = this.arr.filter((item) => {
        return item.read === false && item.recycle === false;
      });
      this.nuxt = this.list;
    },
    // 跳转已读
    Read() {
      this.dataname = 2;
      this.list = this.arr.filter((item) => {
        return item.read === true && item.recycle === false;
      });
    },
    // 跳转回收站
    recovery() {
      this.dataname = 3;
      this.list = this.arr.filter((item) => {
        return item.read === true && item.recycle === true;
      });
    },
    // 点击已读
    sign(item) {
      item.read = true;
      this.list = this.arr.filter((item) => {
        return item.read === false && item.recycle === false;
      });
      this.nuxt = this.list;
      this.count1 = this.list;
    },
    // 点击删除
    boxname(item) {
      item.recycle = true;
      this.list = this.arr.filter((item) => {
        return item.read === true && item.recycle === false;
      });
      this.nuxt = this.list;
      this.count2=this.list;
    },
    // 点击还原
    reduction(item) {
      item.recycle = false;
      this.list = this.arr.filter((item) => {
        return item.read === true && item.recycle === true;
      });
      this.nuxt = this.list;
    },
    // 全部已读
    allreaded() {
      this.list.map((item) => {
        item.read = true;
      });
      this.list = this.arr.filter((item) => {
        return item.read === false && item.recycle === false;
      });
      this.count = this.list;
    },
    // 全部删除
    alldel() {
      this.list.map((item) => {
        item.recycle = true;
      });
      this.list = this.arr.filter((item) => {
        return item.read === true && item.recycle === false;
      });
      this.nuxt = this.list;
    },
    // 全部清除
    clear() {
      this.list.map((item1) => {
        this.arr.map((item, index) => {
          if (item.id === item1.id) {
            this.arr.splice(index, 1);
          }
        });
      });
      this.list = this.arr.filter((item) => {
        return item.read === true && item.recycle === true;
      });
    },
  },
  mounted() {
    // 获取数据
    this.list = this.arr.filter((item) => {
      return item.read === false && item.recycle === false;
    });
    this.nuxt = this.list;
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>