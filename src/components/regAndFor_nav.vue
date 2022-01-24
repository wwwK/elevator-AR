<template>
  <div class="account-container">
    <!-- 导航界面 -->
    <div class="nav">
      <div class="animate__animated animate__fadeIn">
        <img src="@/assets/u38.png" alt="" /><i class="theme"
          >Elevator AR+ ID</i
        >
      </div>
      <div class="choose">
        <i @click="login">登录</i><i @click="create">创建您的Elevator AR+ ID</i
        ><i @click="forget">忘记密码</i>
      </div>
    </div>

    <router-view />
    <!-- 底部区域 -->
    <div class="state">
      <div class="left">Copyright @ 2021 Cjlu.保留所有权利</div>
      <div>
        <div class="tele">
          若您需要更多帮助，请您致电：<a href="#">0572-2523107</a>
        </div>
        <div class="right">中国计量大学、湖州市特种设备检测院技术支持</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "account",
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    create() {
      this.$router.push("/register");
    },
    forget() {
      this.$router.push("/forget");
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: rgba(242, 242, 242, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 39px;
    margin-top: 4px;
    vertical-align: middle;
  }
  i {
    font-size: 12px;
    color: #027db4;
    margin: 0 auto;
  }
  .theme {
    font-size: 19px;
    font-weight: 650;
    margin: 0 5px;
    color: #000;
  }
  .choose i {
    margin: 0 5px;
  }
}
.state {
  // position: relative;
  height: 100px;
  background-color: rgba(242, 242, 242, 1);
  // display: flex;
  // justify-content: space-between;
  font-size: 11px;
  color: #7f7f7f;
  position: relative;
  .left {
    position: absolute;
    bottom: 17px;
    left: 18px;
  }
  .right {
    position: absolute;
    bottom: 17px;
    right: 18px;
  }
  .tele {
    font-size: 14px;
    position: absolute;
    top: 15px;
    right: 20px;
    a {
      color: #169bd5;
    }
  }
}
</style>
