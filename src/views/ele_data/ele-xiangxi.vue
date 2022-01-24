<template>
  <!-- 电梯检验详细信息 -->
  <div class="container">
    <div class="ele-title">
      <i>浙江省湖州市吴兴区南街558号银泰百货A区1号电梯</i>
    </div>
    <div class="message">
      <div class="left">
        <div class="hezi up">
          <div class="hezi-title">
            <i></i><i class="default-font">电梯厂商</i>
          </div>
          <i>东芝</i>
        </div>
        <div class="hezi down">
          <div class="hezi-title">
            <i class="iconfont icon-shijian"></i
            ><i class="default-font">电梯使用时间</i>
          </div>
          <i>4.8Y</i>
        </div>
      </div>
      <div class="middle">
        <div class="hezi up">
          <div class="hezi-title">
            <i class="iconfont icon-touxiang_u20"></i
            ><i class="default-font">电梯型号</i>
          </div>
          <i>CV320</i>
        </div>
        <div class="hezi down">
          <div class="hezi-title">
            <i class="iconfont icon-buhuanhegebiaozhi-2"></i
            ><i class="default-font">上次检验人员</i>
          </div>
          <i>李四</i>
        </div>
      </div>
      <div class="right">
        <div class="hezi up">
          <div class="hezi-title">
            <i class="iconfont icon-buhuanhegebiaozhi-2"></i
            ><i class="default-font">检验合格率</i>
          </div>
          <i>100%</i><i>合格率较高！</i>
        </div>
        <div class="hezi down">
          <div class="hezi-title">
            <i class="iconfont icon-riqi"></i
            ><i class="default-font">下次检验日期</i>
          </div>
          <i>2021年<br />12月23日</i>
        </div>
      </div>
    </div>
    <div class="jianyan-record">
      <div class="jianyan-title">
        <div class="hezi-title">
          <i class="iconfont icon-u1555"></i><i>检验历史记录</i>
        </div>
        <div class="success"><i>全部</i><i>合格</i><i>不合格</i></div>
        <div class="shijian"><i>时间排序</i><i>顺序</i><i>倒序</i></div>
        <div class="fanye"><i>上一页</i><i>下一页</i></div>
      </div>
      <div class="jianyan-content">
        <div class="left">
          <i>第<b>1</b>次检验</i><br /><i>检验类型：<b>定期检验</b></i>
        </div>
        <div class="right">
          <i>检验日期：2016/12/23</i><br /><i>检验人员：赵四</i><br /><i
            >检验报告</i
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ele-xiangxi",
};
</script>

<style lang="less" scoped>
.container {
  padding: 12px 20px 40px 10px;
  // 定义
  .default-font {
    font-size: 14px;
    margin-left: 5px;
  }
  .hezi-title {
    i:first-child {
      width: 25px;
      vertical-align: middle;
    }
  }
  .hezi {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    background-color: pink;
    padding: 10px 0 30px 16px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  //   正文
  .ele-title {
    padding-right: 110px;
    font-size: 32px;
    color: #333;
    font-weight: 650;
    line-height: 50px;
  }
  .message {
    display: flex;
    justify-content: space-between;
    .left {
      .up {
        background-color: rgba(255, 191, 198, 0.913725490196078);
        color: #bd0017;
        i:nth-of-type(1):not(.hezi-title i) {
          font-size: 50px;
          line-height: 140px;
          font-weight: 650;
        }
      }
      .down {
        background-color: rgba(221, 185, 249, 0.913725490196078);
        color: #390760;
        i:nth-of-type(1):not(.hezi-title i) {
          font-size: 73px;
          font-weight: 700;
          line-height: 140px;
        }
      }
    }
    .middle {
      .up {
        color: #006b99;
        background-color: rgba(185, 234, 255, 1);
        i:nth-of-type(1):not(.hezi-title i) {
          font-size: 55px;
          font-weight: 700;
          line-height: 140px;
        }
      }
      .down {
        color: #a67020;
        background-color: rgba(250, 205, 145, 0.913725490196078);
        i:nth-of-type(1):not(.hezi-title i) {
          font-size: 55px;
          font-weight: 650;
          line-height: 140px;
        }
      }
    }
    .right {
      .up {
        background-color: rgba(196, 232, 137, 0.913725490196078);
        color: #4d7d00;
        i:nth-of-type(1):not(.hezi-title i) {
          font-size: 70px;
          font-weight: 700;
          line-height: 110px;
        }
        i:nth-of-type(2):not(.hezi-title i) {
          font-size: 16px;
          font-weight: 650;
        }
      }
      .down {
        background-color: rgba(4, 189, 178, 0.913725490196078);
        color: rgba(0, 96, 91, 0.913725490196078);
        div {
          margin-bottom: 20px;
        }
        i:nth-of-type(1):not(.hezi-title i) {
          font-size: 41px;
          font-weight: 700;
        }
      }
    }
  }
  .jianyan-record {
    background-color: rgba(244, 253, 207, 1);
    border-radius: 30px;
    min-height: 100px;
    padding: 20px 10px 30px 10px;
    box-sizing: border-box;
    .jianyan-title {
      display: flex;
      justify-content: space-between;
      .hezi-title {
        color: #617900;
        i:nth-of-type(2) {
          font-size: 18px;
          margin-left: 5px;
        }
      }
      .success {
        width: 157px;
        height: 28px;
        border-radius: 10px;
        background-color: rgba(196, 232, 137, 0.913725490196078);
        line-height: 23px;
        text-align: center;
        i {
          font-size: 13px;
          color: #169bd5;
        }
        i:nth-of-type(1),
        i:nth-of-type(2) {
          margin-right: 23px;
        }
      }
      .shijian {
        width: 157px;
        height: 28px;
        border-radius: 10px;
        background-color: rgba(196, 232, 137, 0.913725490196078);
        line-height: 23px;
        text-align: center;
        i {
          font-size: 13px;
          color: #169bd5;
        }
        i:nth-of-type(1),
        i:nth-of-type(2) {
          margin-right: 23px;
        }
      }
      .fanye {
        font-size: 16px;
        line-height: 30px;
        color: #169bd5;
        i:first-of-type {
          margin-right: 20px;
        }
      }
    }
    .jianyan-content {
      display: flex;
      height: 74px;
      box-sizing: border-box;
      padding-left: 18px;
      justify-content: space-between;
      .left {
        line-height: 35px;
        i:nth-of-type(1) {
          font-size: 20px;
          color: #617900;
          b {
            font-size: 20px;
            color: #d9001b;
            margin: 0 5px;
          }
        }
        i:nth-of-type(2) {
          font-size: 14px;
          color: #617900;
        }
      }
      .right {
        width: 160px;
        text-align: left;
        position: relative;
        i {
          font-size: 14px;
        }
        i:nth-of-type(3) {
          position: absolute;
          right: 0;
          bottom: 0;
          font-size: 13px;
          color: #169bd5;
        }
      }
    }
  }
}
</style>
