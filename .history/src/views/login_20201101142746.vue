<template>
  <div class="box">
    <div class="bgc">
      <el-card class="box-card">
        <div class="interface">登录界面</div>
        <el-form
          :model="form"
          :rules="rules"
          ref="form"
          label-width="100px"
          class="demo-form"
          status-icon
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="form.username"
              placeholder="请输入用户名"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="form.password"
              placeholder="请输入密码"
              autocomplete="off"
              show-password
            ></el-input>
          </el-form-item>
          <div class="flag">
            <el-form-item label="验证码" prop="code">
              <el-input
                v-model="form.code"
                placeholder="请输入验证码"
              ></el-input>
            </el-form-item>
            <div v-html="this.code1" @click="code"></div>
          </div>

          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="primary" @click="register">注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  data() {
    let validatePass1 = (rule, value, callback) => {
      if (typeof value !== "string") {
        callback(new Error("用户名不能有中文"));
      }
      callback();
    };

    return {
      code1: "",
      form: {
        username: "",
        password: "",
        code: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名，不用为空",
            trigger: "blur",
          },
          {
            validator: validatePass1,
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码，不能为空",
            trigger: "blur",
          },
          {
            min: 6,
            message: "密码大于6位",
            trigger: "blur",
          },
        ],
        Verification: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    code() {
      axios
        .get("/api/captcha")
        .then((res) => {
          if (res.data) {
            this.code1 = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          axios
            .post("/api/user/login", {
              username: this.form.username,
              password: this.form.password,
              code: this.form.code,
            })
            .then((res) => {
              if (res.data.code === 200) {
                let nowtime = dayjs().format("YYYY年MM月DD日  HH时mm分ss秒");
                this.$message.success(res.data.message);
                let user = {
                  username: this.form.username,
                  password: this.form.password,
                  time: nowtime,
                };
                console.log(user);
                sessionStorage.setItem("user", JSON.stringify(user));
                this.$router.push("/");
              } else if (res.data.code === 1) {
                this.$message.warning(res.data.message);
                this.form.code = "";
                axios
                  .get("/api/captcha")
                  .then((res) => {
                    if (res.data) {
                      this.code1 = res.data;
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else if (res.data.code === 500) {
                this.$message.error(res.data.message);
                this.form.password = "";
                this.form.code = "";
                axios
                  .get("/api/captcha")
                  .then((res) => {
                    if (res.data) {
                      this.code1 = res.data;
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          this.$message.error("错误");
          this.form.username = "";
          this.form.password = "";
        }
      });
    },
    register() {
      this.$router.push("/register");
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2899993874,1088991247&fm=26&gp=0.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
}
// .bgc {
//   // background: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2899993874,1088991247&fm=26&gp=0.jpg');
//   // background: pink;
// }
.interface {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}
.box-card {
  width: 480px;
}
.flag {
  display: flex;
}
</style>