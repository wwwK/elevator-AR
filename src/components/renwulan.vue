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
      <div class="nav-right"><i @click="back">退出登录</i></div>
    </div>
    <!-- 任务界面 -->
    <div class="container">
      <div class="title">
        <div class="touxiang">
          <van-image
            width="60"
            height="60"
            round
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div class="huanying">
          <h1>{{ this.$store.state.userInfo.ming }}，以下是您要处理的任务!</h1>
        </div>
      </div>
      <hr />
      <div>
        <div class="renwu">
          <div>
            <i class="iconfont icon-u332"></i><i class="renwufont">今日任务</i>
          </div>
          <div>
            <i class="iconfont icon-u320"></i><i class="renwufont">本周任务</i>
          </div>
          <div>
            <i class="iconfont icon-u308"></i><i class="renwufont">本月任务</i>
          </div>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "renwulan",
  methods: {
    back() {
      this.$router.push("/login");
    },
  },
  data() {
    return {};
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
.container {
  padding: 0 50px 0 30px;
  .huanying {
    margin-left: 10px;
    h1 {
      font-size: 32px;
      margin: 0 0 0px 10px;
    }
  }
}
.title {
  height: 100px;
  box-sizing: border-box;
  display: flex;
  // justify-content: center;
  align-items: center;
}
.renwu {
  display: flex;
  justify-content: space-between;
  div {
    .iconfont {
      font-size: 50px;
      margin-right: 25px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c6eeff;
    width: 190px;
    height: 55px;
    border-radius: 10px;
    .renwufont {
      font-size: 18px;
    }
  }
}
</style>
