<template>
  <div class="account-container">
    <!-- 导航界面 -->
    <div class="nav">
      <div class="nav-left">
        <img src="@/assets/u197.svg" alt="" class="pl" /><img
          src="@/assets/u198.svg"
          class="pr"
          alt=""
        />
      </div>
      <div class="nav-right"><i>返回</i><i @click="back">退出登录</i></div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "account-container with return",
  methods: {
    back() {
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
    i:first-child {
      margin-right: 50px;
    }
  }
}
</style>
