<template>
  <div class="register-container">
    <div class="xinxi">
      <div class="touxiang">
        <van-image
          width="100"
          height="100"
          round
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="gerenxinxi">
        <h1>{{ $store.state.userInfo.ming }}，这是您的个人相关信息！</h1>
        <h3>若需更改，提交更改信息，待管理员审批后，完成更改。</h3>
      </div>
    </div>
    <div class="limited">
      <van-form>
        <!-- 身份信息 -->
        <div class="default-div">
          <i class="font">身份信息</i>
          <div class="name">
            <van-field placeholder=" 姓氏" v-model="$store.state.userInfo.xing"
              ><i slot="left-icon" class="iconfont icon-u43"></i
            ></van-field>
            <van-field
              placeholder=" 名字"
              v-model="$store.state.userInfo.ming"
            ></van-field>
          </div>
          <van-field
            placeholder=" 中华人民共和国居民身份证件号"
            v-model="$store.state.userInfo.IDcard"
            :rules="userFormRules.IDcard"
            ><i slot="left-icon" class="iconfont icon-u44"></i
          ></van-field>
        </div>
        <hr />

        <!-- 工作部门 -->
        <div class="default-div">
          <i class="font">工作部门</i>
          <div class="xuanze">
            <i class="iconfont icon-u45"></i
            ><el-select
              v-model="$store.state.userInfo.place"
              placeholder="(请选择)"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <hr />
        <!-- 联系方式 -->
        <div class="default-div">
          <i class="font"> 联系方式</i>
          <van-field
            type="tel"
            maxlength="11"
            :rules="userFormRules.username"
            placeholder=" 电话号码"
            v-model="$store.state.userInfo.username"
            ><i slot="left-icon" class="iconfont icon-u51"></i
            ><template #button>
              <van-button class="button" size="small" type="default"
                >获取验证码</van-button
              >
            </template></van-field
          >
          <van-field center clearable placeholder=" 验证码"
            ><i slot="left-icon" class="iconfont icon-a-1"></i
          ></van-field>
        </div>
        <hr />
        <!-- 设置密码 -->
        <div class="default-div">
          <i class="font">更改密码</i>
          <van-field
            placeholder=" 请输入不少于6位的密码"
            type="password"
            v-model="$store.state.userInfo.password"
            ><i slot="left-icon" class="iconfont icon-u59"></i
          ></van-field>
          <van-field
            placeholder=" 确认密码"
            v-model="repassword"
            type="password"
            ><i slot="left-icon" class="iconfont icon-zhongzhimima"></i
          ></van-field>
        </div>
        <hr />
        <!-- 上传图片 -->
        <div class="default-div">
          <i class="font">上传图片</i>
          <div class="picture">
            <i slot="left-icon" class="iconfont icon-u103"></i
            ><van-uploader slot="default"
              ><img src="@/assets/u105.svg" alt=""
            /></van-uploader>
          </div>
        </div>
        <hr />
        <!-- 滑动模块 -->
        <div class="default-div">
          <i class="font">请您拖动滑块</i>
          <van-slider
            button-size="48px"
            bar-height="48px"
            active-color="#169bd5"
            v-model="slidervalue"
          />
        </div>
        <van-button class="submit" block type="info" @click="onSubmit"
          >提交更改信息</van-button
        ></van-form
      >
    </div>
  </div>
</template>

<script>
import { redirect } from "@/api/user.js";
export default {
  name: "redirected",
  watch: {
    "$store.state.userInfo.username"(newVal) {
      this.newInfo.username = newVal;
    },
    "$store.state.userInfo.password"(newVal) {
      this.newInfo.password = newVal;
    },
    "$store.state.userInfo.place"(newVal) {
      this.newInfo.place = newVal;
    },
    "$store.state.userInfo.IDcard"(newVal) {
      this.newInfo.IDcard = newVal;
    },
    "$store.state.userInfo.xing"(newVal) {
      this.newInfo.xing = newVal;
    },
    "$store.state.userInfo.ming"(newVal) {
      this.newInfo.ming = newVal;
    },
  },
  data() {
    return {
      userFormRules: {
        IDcard: [
          { required: true, message: "身份证不能为空" },
          { pattern: /^\d{18}$/, message: "身份证为18位" },
        ],
        username: [
          { required: true, message: "账号不能为空" },
          { pattern: /^\d{11}$/, message: "账号格式错误" },
        ],
      },
      repassword: "",
      newInfo: {
        user_id: this.$store.state.userInfo.user_id,
        username: this.$store.state.userInfo.username,
        password: this.$store.state.userInfo.password,
        place: this.$store.state.userInfo.place,
        IDcard: this.$store.state.userInfo.IDcard,
        xing: this.$store.state.userInfo.xing,
        ming: this.$store.state.userInfo.ming,
      },

      slidervalue: 0,

      value: "",
      options: [
        {
          value: "湖州市吴兴区质检部",
          label: "湖州市吴兴区质检部",
        },
        {
          value: "长兴检验站",
          label: "长兴检验站",
        },
        {
          value: "安吉检验站",
          label: "安吉检验站",
        },
        {
          value: "德清检验站",
          label: "德清检验站",
        },
      ],
    };
  },
  methods: {
    async onSubmit() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });
      try {
        if (this.newInfo.password !== this.repassword)
          this.$toast.fail("两次输入的密码不同，请重新输入");
        else if (this.slidervalue !== 100) this.$toast.fail("请滑动滑块");
        else {
          const res = await redirect(this.newInfo);
          if (res.data.status == 1)
            this.$toast.fail("输入信息有误，请检查后提交");
          else {
            this.$toast.success("修改成功，请重新登录！");
            this.$router.push("/login");
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
.xinxi {
  display: flex;
  margin: 20px 0 0 20px;
}
.gerenxinxi {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.touxiang {
  margin-right: 30px;
}
h1 {
  font-size: 32px;
  margin: 0;
}
h3 {
  font-size: 15px;
  margin: 0 0 5px 0;
  color: #7f7f7f;
  font-weight: 500;
}
.default-div {
  margin: 10px 0 0 101px;
}
/deep/.van-field__control {
  border: 1px solid #aaa;
  border-radius: 5px;
  width: 340px;
  height: 43px;
}
/deep/.iconfont {
  font-size: 30px;
  line-height: 30px;
  width: 60px;
}
.name {
  width: 503px;
  display: flex;
  justify-content: space-between;
}
/deep/.name .van-field__control {
  width: 152px;
}
/deep/.van-field__left-icon {
  box-sizing: border-box;
  width: 60px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.font {
  font-size: 13px;
  margin-left: 10px;
  color: #333;
  font-weight: 650;
}
.xuanze {
  margin: 20px 0 0 17px;
}
/deep/.el-input--suffix {
  width: 340px;
  margin-left: 33px;
}
/deep/.default-div {
  margin-bottom: 30px;
}
.picture {
  display: flex;
  // justify-content: center;
  align-items: center;
  margin-left: 18px;
}
/deep/.van-slider {
  width: 410px;
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 20px;
  margin: 40px 0 30px 10px;
  .van-slider__button {
    border-radius: 10px;
  }
}
/deep/.submit {
  width: 206px;
  height: 44px;
  border-radius: 5px;
  background-color: #169bd5;
  margin: 60px 0 60px 215px;
}
.limited {
  width: 642px;
  height: 100%;

  margin: 0 auto;
}
</style>
