<template>
  <div class="forget-container">
    <div class="title">
      <i class="animate__animated animate__shakeX">重置密码！</i>
    </div>
    <div class="limited">
      <div class="zhuce">
        <i class="define">请输入您的新密码！</i
        ><van-form
          ><van-field
            v-model="formData.newPwd"
            type="password"
            placeholder="请输入不少于6位的新密码"
            ><i slot="left-icon" class="iconfont icon-u59"></i
          ></van-field>
          <van-field
            center
            clearable
            type="password"
            placeholder="确认新密码"
            v-model="pwdAgain"
            ><i
              slot="left-icon"
              class="iconfont icon-zhongzhimima"
            ></i></van-field
        ></van-form>
      </div>
      <hr />
      <div class="default-div">
        <i class="font">请您推动滑块！</i>
        <van-slider
          button-size="48px"
          bar-height="48px"
          active-color="#169bd5"
          v-model="slidervalue"
        />
      </div>
    </div>

    <van-button class="submit" block type="info" @click="restart"
      >重置密码</van-button
    >
  </div>
</template>

<script>
import { restart } from "@/api/user.js";
export default {
  name: "forget",
  data() {
    return {
      slidervalue: 0,
      pwdAgain: "",
      formData: {
        username: "",
        newPwd: "",
      },
    };
  },
  created() {
    this.formData.username = this.$store.state.username;
    if (this.formData.username == "") {
      this.$router.push("/forget");
    }
    // console.log(formData);
  },
  methods: {
    async restart() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });
      try {
        if (this.slidervalue != 100) this.$toast.fail("请滑动滑块");
        else {
          if (this.formData.newPwd != this.pwdAgain) {
            this.$toast.fail("密码不一致！");
          } else {
            const res = await restart(this.formData);
            if (res.data.status == 2) this.$toast.fail("密码不能相同！");
            else {
              if (res.data.status == 1) {
                this.$toast.fail("未知错误，修改密码失败");
              } else if (res.data.status == 0) {
                this.$toast.success("修改密码成功！");
                this.$router.push("/login");
              }
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
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
  padding: 45px 0 10px 95px;
}

/deep/.van-slider {
  width: 410px;
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 20px;
  margin: 20px 0 30px 10px;
  .van-slider__button {
    border-radius: 10px;
  }
}
.default-div {
  margin: 10px 0 0 101px;
}
.font {
  font-size: 13px;
  margin-left: 10px;
  color: #333;
  font-weight: 650;
}
/deep/.submit {
  width: 206px;
  height: 44px;
  border-radius: 5px;
  background-color: #169bd5;
  margin: 20px 0 60px 250px;
}
.limited {
  width: 642px;
  height: 100%;

  margin: 0 auto;
}
</style>
