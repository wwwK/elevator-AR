<template>
  <div class="forget-container">
    <div class="title">
      <i class="animate__animated animate__shakeX">忘记密码？</i>
    </div>
    <div class="zhuce">
      <i class="define">请输入您的注册电话！</i
      ><van-form>
        <van-field
          v-model="username"
          type="tel"
          placeholder="电话号码"
          :rules="userFormRules.username"
          ><i slot="left-icon" class="iconfont icon-u51"></i
          ><template #button>
            <van-button class="button" size="small" type="default"
              >获取验证码</van-button
            >
          </template></van-field
        >
        <van-field center clearable placeholder="验证码"
          ><i slot="left-icon" class="iconfont icon-a-1"></i></van-field
        ><van-button class="submit" block type="info" @click="next"
          >下一步</van-button
        ></van-form
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "forget",
  methods: {
    next() {
      if (this.username.length != 11) this.$toast.fail("请输入11位手机号");
      else {
        this.$router.push("/restart");
        this.$store.commit("getData", this.username);
      }
    },
  },
  data() {
    return {
      userFormRules: {
        username: [
          { required: true, message: "账号不能为空" },
          { pattern: /^\d{11}$/, message: "账号格式错误" },
        ],
      },
      username: "",
    };
  },
};
</script>

<style lang="less" scoped>
.title {
  height: 68px;
  width: 712px;
  background: url("../../assets/u115.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 650;
  font-size: 32px;
}
/deep/.van-field__left-icon {
  height: 40px;
  width: 50px;
}
.iconfont {
  font-size: 30px;
  line-height: 30px;
}
/deep/.van-field__control {
  border: 2px solid #aaa;
  border-radius: 5px;
  width: 340px;
  height: 43px;
}
/deep/.button {
  border: none;
  color: #169bd5;
}
.define {
  font-size: 13px;
  padding: 0 0 5px 13px;
}
.zhuce {
  padding: 45px 0 75px 120px;
}
/deep/.submit {
  width: 206px;
  height: 44px;
  border-radius: 5px;
  background-color: #169bd5;
  margin: 80px 0 0 120px;
}
</style>
