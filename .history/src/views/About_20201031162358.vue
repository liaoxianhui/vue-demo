<template>
  <div class="box">
    <div class="bgc">
      <el-card class="box-card">
        <div class="interface">注册界面</div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          status-icon
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="ruleForm.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="ruleForm.password"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              v-model="ruleForm.checkPass"
              placeholder="请再次输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register">注册</el-button>
            <el-button type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    var validatePass1 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不能为空，请输入用户名!"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空，请输入密码!"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空，请再次输入密码!"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: "",
      },

      rules: {
        username: [
          {
            required: true,
            message: "用户名，不用为空",
            trigger: 'blur',
          },
          {
            min: 2,
            max: 8,
            message: "2-8位",
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
            min:6,
            max:12,
            message:'密码6-12位',
            trigger:'blur',
          },
          {
            validator: validatePass2,
            trigger: "blur",
          },
        ],
        checkPass: [
          {
            required: true,
            message: "密码，不能为空",
            trigger: "blur",
          },
          {
            validator: validatePass3,
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    register(){
      this.$refs.ruleForm.validate((valid)=>{
        if(valid){
          axios.post('api/user/register',{
            username:this.ruleForm.username,
            password:this.ruleForm.password,
          }).then(res=>{
            if(res.data.code===200){
              this.$message.success(res.data.message)
            }else if(res.data.code===1){
              this.$message.warning(res.data.message);
              this.ruleForm.username=''
              this.ruleForm.password=''
              this.ruleForm.checkPass=''
            }
          }).catch()
          alert('submit')
        }else{
          console.log('error');
          return false
        }
      })
    }
  },
  mounted() {
    this.getData();
  },
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
.bgc {
  // background: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2899993874,1088991247&fm=26&gp=0.jpg');
  // background: pink;
}
.interface {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}
.box-card {
  width: 480px;
}
</style>