<template>
  <!-- 相关资料界面 -->
  <div class="container">
    <div class="title">
      <div><i>欢迎，来到Elevator AR+资料库！</i></div>
    </div>
    <div class="xianshi">
      <div class="jianyanziliao">
        <div>
          <i class="iconfont icon-qichexiangguan-weixiu"></i><br /><i
            >检验资料</i
          >
        </div>
      </div>
      <div class="diantixinxi">
        <div><i class="iconfont icon-ziliaoku"></i><br /><i>电梯信息</i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "relative-data",
};
</script>

<style lang="less" scoped>
.title {
  height: 52px;
  background-color: #3ac1fb;
  div {
    margin: 0 auto;
  }
  i {
    font-size: 32px;
    color: #005377;
    font-weight: 650;
  }
}
.xianshi {
  display: flex;
  padding: 50px 80px 30px 50px;
  justify-content: space-between;
  div {
    width: 231px;
    height: 273px;
    border-radius: 30px;
    i {
      font-size: 32px;
      font-weight: 650;
    }
    i:first-child {
      font-size: 128px;
      line-height: 195px;
    }
  }
  .jianyanziliao {
    i {
      color: #005275;
    }
    text-align: center;
    align-items: center;
  }
  .diantixinxi {
    i {
      color: #8e0a00;
    }
    text-align: center;
    align-items: center;
  }
  .jianyanziliao {
    background: linear-gradient(to left, #72d5ff, #169bd5);
  }
  .diantixinxi {
    background: linear-gradient(to left, #ffa781, #d51616);
  }
}
</style>
