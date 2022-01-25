<template>
  <div class="container">
    <div class="login-container">
      <img src="@/assets/designer.png" alt="" />
      <h1 style="font-size: 32px">欢迎使用！</h1>
      <router-view />
      <van-form
        @submit="onSubmit"
        validate-trigger="onBlur"
        error-message-align="left"
      >
        <van-field
          class="input"
          v-model="user.username"
          name="账户"
          label="账户"
          placeholder="请输入Elevator AR+ ID"
          :rules="userFormRules.username"
          type="number"
        />
        <van-field
          class="input"
          v-model="user.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入大于6位密码"
          :rules="userFormRules.password"
        />
        <i @click="forget">忘记密码</i>
        <div class="login">
          <div>
            <van-button round block type="info" native-type="submit"
              >登录</van-button
            >
          </div>
          <i class="create" @click="register">创建账号</i>
        </div>
      </van-form>
    </div>
    <div class="picture">
      <i class="iconfont icon-touxiang_u20"></i>
      <h3 s>尊敬的用户</h3>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import { mapMutations } from "vuex";
import { login } from "@/api/user.js";
export default {
  name: "login",
  data() {
    return {
      user: { username: "", password: "" },
      userFormRules: {
        username: [
          { required: true, message: "账号不能为空" },
          { pattern: /^\d{11}$/, message: "账号格式错误" },
        ],
        password: [
          { required: true, message: "密码不能为空" },
          { pattern: /^\S{6,18}$/, message: "密码格式错误" },
        ],
      },
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    async onSubmit() {
      // 获取表单数据
      const user = this.user;
      // 表单验证
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });
      // 提交表单登录请求
      try {
        const res = await login(user);
        if (res.data.status != 0) {
          this.$toast.fail("用户名或密码错误");
        } else {
          this.$toast.success("登录成功");
          // 获取token以及用户信息
          const token = res.data.token;
          // 解析token
          const decode = jwt_decode(token);
          // 将以上信息上传到vueX中
          this.changeLogin({
            Authorization: token,
            userInfo: decode,
          });
          this.$router.push("/index");
          // console.log(decode);
        }
      } catch (err) {
        console.log("登录失败，未知错误，请稍后重试");
        console.log(err);
        this.$toast.fail("登录失败，未知错误，请稍后重试");
      }
    },
    forget() {
      this.$router.push("/forget");
    },
    register() {
      this.$router.push("/register");
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 712px;
  height: 534px;
  background: url("../../assets/bg.png");
  display: flex;
  justify-content: center;
  align-items: center;

  .login-container {
    position: relative;
    box-sizing: border-box;
    background-color: #fff;
    width: 330px;
    height: 408px;
    padding-left: 99-74px;
    padding-top: 93-62px;
    .van-cell {
      display: flex;
      flex-direction: column;
      padding: 13px 68px 10px 0;
      span {
        color: #000;
      }
    }
    .van-button {
      padding: 0;
      width: 122px;
      height: 34px;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    i {
      margin-left: 285-98px;
      color: #555;
      font-size: 10px;
    }
    .create {
      font-size: 11px;

      margin-left: 39px;
      color: #027db4;
    }
    .login {
      position: absolute;
      left: 25px;
      bottom: 20px;
    }
  }
  .picture {
    background: url("../../assets/登录头像显示框_u14.png");
    width: 233px;
    display: flex;
    height: 408px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon-touxiang_u20 {
      font-size: 100px;
      color: #f2f2f2;
      margin-bottom: 20px;
    }
    h3 {
      font-size: 23px;
      color: #f9fdc5;
    }
  }
}
</style>
