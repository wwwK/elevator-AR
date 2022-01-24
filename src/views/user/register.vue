<template>
  <div class="register-container">
    <div class="title">
      <i class="animate__animated animate__shakeX">创建您的Elevator AR+ ID！</i>
    </div>
    <div class="limited">
      <van-form @submit="onSubmit"
        ><!-- 身份信息 -->
        <div class="default-div">
          <i class="font">身份信息</i>
          <div class="name">
            <van-field placeholder=" 姓氏" v-model="onFormData.xing"
              ><i slot="left-icon" class="iconfont icon-u43"></i
            ></van-field>
            <van-field
              placeholder=" 名字"
              v-model="onFormData.ming"
            ></van-field>
          </div>
          <van-field
            placeholder=" 中华人民共和国居民身份证件号"
            v-model="onFormData.IDcard"
            maxlength="18"
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
            ><el-select v-model="onFormData.place" placeholder="(请选择)">
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
            placeholder=" 电话号码"
            maxlength="11"
            :rules="userFormRules.username"
            v-model="onFormData.username"
            ><i slot="left-icon" class="iconfont icon-u51"></i
            ><template #button>
              <van-button
                class="button"
                size="small"
                type="default"
                native-type="button"
                >获取验证码</van-button
              >
            </template></van-field
          >
          <van-field
            center
            clearable
            placeholder=" 验证码"
            v-model="onFormData.IDcode"
            ><i slot="left-icon" class="iconfont icon-a-1"></i
          ></van-field>
        </div>
        <hr />
        <!-- 设置密码 -->
        <div class="default-div">
          <i class="font">设置密码</i>
          <van-field
            placeholder=" 请输入不少于6位的密码"
            type="password"
            v-model="onFormData.password"
            ><i slot="left-icon" class="iconfont icon-u59"></i
          ></van-field>
          <van-field
            placeholder=" 确认密码"
            type="password"
            v-model="onFormData.repassword"
            ><i slot="left-icon" class="iconfont icon-zhongzhimima"></i
          ></van-field>
        </div>
        <hr />
        <!-- 上传图片 -->
        <div class="default-div">
          <i class="font">上传图片</i>
          <div class="picture">
            <i slot="left-icon" class="iconfont icon-u103"></i
            ><van-uploader :after-read="change" slot="default" v-model="avatar"
              ><img src="@/assets/u105.svg" alt="" v-show="show"
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
        <van-button class="submit" block type="info" native-type="submit"
          >下一步</van-button
        >
      </van-form>
    </div>
  </div>
</template>

<script>
import { register } from "@/api/user.js";
export default {
  name: "register",
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
      onFormData: {
        xing: "",
        ming: "",
        IDcard: "",
        username: "",
        IDcode: "",
        password: "",
        repassword: "",
        place: "",
      },

      show: true,
      avatar: [],
      slidervalue: 0,

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
    change(file) {
      this.show = !this.show;
      this.headerImg = file.content;
      var formData = new FormData();
      formData.append("avatar", file.file);
    },
    async onSubmit() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });
      console.log(this.onFormData.na);
      try {
        if (this.onFormData.password !== this.onFormData.repassword)
          this.$toast.fail("两次输入的密码不同，请重新输入");
        else if (this.slidervalue !== 100) this.$toast.fail("请滑动滑块");
        else {
          const res = await register(this.onFormData);
          console.log(res);
          if (res.data.status == 1)
            this.$toast.fail("输入信息有误，请检查后提交");
          else {
            if (res.data.status == 2) {
              if (this.onFormData.username.length == 11) {
                this.$toast.fail("用户名已被注册，请更换用户名");
              } else {
                this.$toast.fail("用户名长度为11位，请重新输入");
              }
            } else {
              this.$toast.success("注册成功");
              this.$router.push("/login");
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
  background: url("../../assets/提示语背景_u35.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 650;
  font-size: 32px;
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
