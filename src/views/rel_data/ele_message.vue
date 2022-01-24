<template>
  <!-- 电梯信息界面 -->
  <div class="container">
    <div class="title">
      <img src="@/assets/u1488.svg" alt="" /><i>Elevator AR+ 搜索</i>
    </div>
    <div class="multi-search">
      <i class="iconfont icon-u1492_disabled"></i
      ><van-dropdown-menu class="xiala" active-color="black" round>
        <van-dropdown-item
          v-model="value1"
          :options="option1"
        /> </van-dropdown-menu
      ><van-search left-icon="" placeholder="请输入您要的搜索内容" />
      <div class="button-search"><i>搜索一下</i></div>
    </div>
    <div class="xinghao">
      <img src="@/assets/u1527.png" alt="" /><img
        src="@/assets/u1527.png"
        alt=""
      /><img src="@/assets/u1527.png" alt="" /><img
        src="@/assets/u1527.png"
        alt=""
      /><br /><img src="@/assets/u1527.png" alt="" /><img
        src="@/assets/u1527.png"
        alt=""
      /><img src="@/assets/u1527.png" alt="" /><img
        src="@/assets/u1527.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "elevator-message",
  data() {
    return {
      value1: 0,

      option1: [
        { text: "地址", value: 0 },
        { text: "型号", value: 1 },
        { text: "检验时间", value: 2 },
        { text: "检验结果", value: 3 },
        { text: "检验人员", value: 4 },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  padding: 40px 712-677px 30px 20px;
  .title {
    margin-left: 170px;
    img {
      margin-right: 20px;
    }
    i {
      font-size: 32px;
      font-weight: 700;
    }
  }
  .multi-search {
    margin: 20px 0 45px 40px;

    display: flex;
    align-items: center;
    .icon-u1492_disabled {
      font-size: 13px;
      color: #00577d;
      margin-right: 5px;
    }
    /deep/.xiala {
      width: 67px;
      border: #027db4 2px solid;

      border-radius: 10px;
    }
    /deep/.van-dropdown-menu__bar {
      height: 32px;
      background-color: #c6eeff;
      border-radius: 8px;
    }
    /deep/.van-search {
      width: 415px;
      border: #81d3f8 2px solid;
      border-radius: 0 15px 0 15px;
      height: 36px;
    }
    /deep/.van-cell--borderless {
      height: 30px;
      line-height: 20px;
    }
    .button-search {
      width: 91px;
      height: 32px;
      background-color: #169bd5;
      border-radius: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: 13px;
        color: white;
        font-weight: 300;
      }
    }
  }
  .xinghao {
    padding-left: 20px;
    width: 645px;
    height: 294px;

    img {
      width: 130px;
      height: 130px;
      margin: 0 15px 0 15px;
    }
  }
}
</style>
