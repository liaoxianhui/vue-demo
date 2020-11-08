<template>
<div>
    <el-container>
        <!--头部-->
        <el-header>
            <Header :user='user' v-if="user!==''"></Header>
        </el-header>
        <!--侧边栏-->
        <el-container>
            <el-aside width="200px">
                <Aside></Aside>
            </el-aside>
            <!--全部内容-->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
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
            user: {}
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
.el-header {
    padding: 0 !important;
}

.el-main {
    background-color: rgb(238, 240, 243);
}
</style>
