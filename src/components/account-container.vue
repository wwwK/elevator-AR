<template>
  <div class="account-container">
    <!-- 导航界面 -->
    <div class="nav">
      <div class="nav-left">
        <img
          src="@/assets/u197.svg"
          alt=""
          class="pl animate__animated animate__bounce"
        /><img
          src="@/assets/u198.svg"
          class="pr animate__animated animate__bounce"
          alt=""
        />
      </div>
      <div class="nav-right"><i @click="back">退出登录</i></div>
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
  name: "account-container",
  methods: {
    back() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  height: 50px;
  background-color: #c6eeff;

  .nav-left {
    margin: 9px 0 0 12px;
    display: flex;
    align-items: center;
    .pf {
      height: 30px;
    }
    .pr {
      height: 12px;
    }
  }
  .nav-right {
    margin: 12px 12px 0 0;
    i {
      color: #015478;
      font-size: 13px;
    }
  }
}
.state {
  height: 100px;
  background-color: rgba(242, 242, 242, 1);
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
