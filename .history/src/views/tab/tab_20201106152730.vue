<template>
  <div>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="`未读消息${arr.length}`" name="first">
          <el-card>
            <div v-for="(item, index) in arr" :key="item.id">
              <div
                style="border-bottom: 1px solid gray; padding: 20px 0"
                class="df jc_b ai_c"
              >
                <div>{{ item.content }}</div>
                <div class="df ai_c">
                  <div style="margin-right: 20px">{{ item.time }}</div>
                  <el-button @click="unread(item, index)" size="small"
                    >标记已读</el-button
                  >
                </div>
              </div>
            </div>
            <div v-if="arr.length === 0">暂无消息</div>
            <div v-else style="margin-top: 20px">
              <el-button type="primary" @click="allreaded">全部已读</el-button>
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane :label="`已读消息${count1.length}`" name="second">
          <el-card>
            <div v-for="item in count1" :key="item.id">
              <div
                style="border-bottom: 1px solid gray; padding: 20px 0"
                class="df jc_b ai_c"
              >
                <div>{{ item.content }}</div>
                <div class="df ai_c">
                  <div style="margin-right: 20px">{{ item.time }}</div>
                  <el-button size="small" @click="sign(item)">删除</el-button>
                </div>
              </div>
            </div>
            <div v-if="count1.length === 0">暂无消息</div>
            <div v-else style="margin-top: 20px">
              <el-button type="primary" @click="allreaded">全部删除</el-button>
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="回收站" name="third">
          <el-card>
            <div v-for="item in count2" :key="item.id">
              <div
                style="border-bottom: 1px solid gray; padding: 20px 0"
                class="df jc_b ai_c"
              >
                <div>{{ item.content }}</div>
                <div class="df ai_c">
                  <div style="margin-right: 20px">{{ item.time }}</div>
                  <el-button size="small" @click="sign(item)">还原</el-button>
                </div>
              </div>
            </div>
            <div v-if="count2.length === 0">暂无消息</div>
            <div v-else style="margin-top: 20px">
              <el-button type="primary" @click="allreaded">全部清空</el-button>
            </div>
          </el-card>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      activeName: "first",
      count1: [],
      count2: [],
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
    // 点击标记已读
    unread(item, index) {
      this.arr.splice(index, 1);
      this.count1.push(item);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>