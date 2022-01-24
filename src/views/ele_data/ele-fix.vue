<template>
  <!-- 电梯维保单位相关资料页面 -->
  <div class="container">
    <div class="ele-title">
      <img src="@/assets/u1798.jpg" alt="" /><i
        >东芝电梯（中国）有限公司浙江分公司湖州维保点</i
      ><br /><i>联系人：李四</i><i>电话：+86 136xxxxxxxx</i>
    </div>
    <div class="user-container">
      <div class="message1">
        <div class="hezi left">
          <div class="hezi-title">
            <i class="iconfont icon-elevator"></i
            ><i class="default-font">维保电梯数量</i>
          </div>
          <i>30</i><br />
        </div>
        <div class="hezi middle">
          <div class="hezi-title">
            <i class="iconfont icon-jianyan2"></i
            ><i class="default-font">本月检验任务</i>
          </div>
          <i>25</i><br />
        </div>
        <div class="hezi right">
          <div class="hezi-title">
            <i class="iconfont icon-buhuanhegebiaozhi"></i
            ><i class="default-font">检验合格率</i>
          </div>
          <i>98%</i><br />
          <i>合格率较高！</i>
        </div>
      </div>
      <div class="message2">
        <div class="left hezi">
          <div class="hezi-title">
            <i class="iconfont icon-shijian"></i
            ><i class="default-font">平均使用时间</i>
          </div>
          <i>5.8Y</i>
        </div>
        <div class="right hezi">
          <div class="hezi-title">
            <i class="iconfont icon-pinpai"></i
            ><i class="default-font">电梯型号</i>
          </div>
          <div class="xinghao">
            <div><i>东芝CV320</i><i>20%</i></div>
            <br />
            <div><i>东芝CV320</i><i>20%</i></div>
            <br />
            <div><i>东芝CV320</i><i>20%</i></div>
            <br />
            <div><i>东芝CV320</i><i>20%</i></div>
            <br />
            <div><i>东芝CV320</i><i>20%</i></div>
            <br />
          </div>
        </div>
      </div>
      <div class="message3">
        <div class="diantilanmu">以下，是维保电梯栏目表</div>
        <div class="sousuokuang">
          <div class="dianti-search">
            <van-search
              background="#F2F2F2"
              placeholder="搜索"
              left-icon=""
              show-action="true"
              ><div class="yeshu" slot="action">
                <i>每页显示：</i><i>5</i><i>10</i><i>全部</i><i>上一页</i
                ><i>下一页</i>
              </div></van-search
            >
            <div class="xiabiao">
              <i class="iconfont icon-u1492_disabled"></i>
            </div>
          </div>
          <div class="dianti">
            <div class="left">
              <img src="@/assets/photo_u368-1.svg" alt="" />
            </div>
            <div class="middle">
              <i>浙江省湖州市吴兴区南街558号银泰百货A区1号电梯</i><br /><i
                >东芝CV320</i
              >
            </div>
            <div class="right">
              <i>1</i><br /><i>第<b>3</b>次检验</i><br /><i>详情</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ele-fix-pro",
};
</script>

<style lang="less" scoped>
.container {
  // 默认
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
  }
  // 正文
  .ele-title {
    position: relative;
    padding-top: 65px;
    padding-bottom: 15px;
    img {
      height: 47px;
      position: absolute;
      right: 0;
      top: 10px;
    }
    i:nth-of-type(1) {
      font-weight: 650;
      font-size: 32px;
      color: #333;
    }
    i:nth-of-type(2),
    i:nth-of-type(3) {
      color: #555;
      font-size: 13px;
    }
    i:nth-of-type(2) {
      margin-right: 20px;
    }
  }
  .user-container {
    padding-left: 13px;
    padding-right: 17px;
    .message1 {
      display: flex;
      justify-content: space-between;

      .left {
        color: rgba(0, 96, 91, 0.913725490196078);
        background-color: rgba(4, 189, 178, 0.913725490196078);
        i:nth-of-type(1):not(.hezi-title i) {
          font-size: 90px;
          font-weight: 700;
          margin-left: 30px;
          line-height: 140px;
        }
      }
      .middle,
      .right {
        i:nth-of-type(1):not(.hezi-title i) {
          font-size: 55px;
          font-weight: 700;
        }
        i:nth-of-type(2):not(.hezi-title i) {
          font-size: 16px;
          font-weight: 650;
        }
      }
      .middle {
        color: #a67020;
        background-color: rgba(255, 231, 71, 0.913725490196078);
        i:nth-of-type(1):not(.hezi-title i) {
          margin-left: 40px;
          line-height: 100px;
          font-size: 90px;
          font-weight: 700;
          margin-left: 30px;
          line-height: 140px;
        }
      }
      .right {
        color: #bd0017;
        background-color: rgba(255, 191, 198, 0.913725490196078);
        i:nth-of-type(1):not(.hezi-title i) {
          font-style: 70px;
          margin-left: 20px;
          line-height: 100px;
        }
      }
    }
    .message2 {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .right {
        width: 440px;
        background-color: rgba(162, 227, 255, 1);
        i {
          color: #017eb3;
        }
        .xinghao {
          height: 150px;
          overflow: scroll;
          div {
            padding: 0 60px 0 30px;
            display: flex;
            justify-content: space-between;
          }
          div:first-of-type i {
            font-size: 27px;
            font-weight: 650;
            color: #013c55;
            line-height: 40px;
          }
          div:nth-of-type(2) i {
            font-size: 21px;
            font-weight: 650;
            color: #005275;
            line-height: 40px;
          }
          div:nth-of-type(3) i {
            font-size: 20px;
            font-weight: 650;
            color: #01628c;
            line-height: 40px;
          }
          div:nth-of-type(4) i,
          div:nth-of-type(5) i {
            font-size: 18px;
            font-weight: 650;
            color: #017eb3;
            line-height: 40px;
          }
        }
      }
      .left {
        background-color: rgba(221, 185, 249, 0.913725490196078);
        i {
          color: #390760;
        }
        i:nth-of-type(1):not(.hezi-title i) {
          font-size: 73px;
          font-weight: 700;
          margin-left: 15px;
          line-height: 140px;
        }
      }
    }
    .message3 {
      margin-top: 30px;
      .diantilanmu {
        height: 70px;
        background-color: #d2d1ff;
        border-radius: 15px;
        text-align: center;
        line-height: 70px;
        color: #78779b;
        font-weight: 650;
        font-size: 32px;
        margin-bottom: 16px;
      }
      .dianti-search {
        display: flex;
        justify-content: space-between;
        .xiabiao {
          width: 38px;
          height: 38px;
          text-align: center;
          line-height: 38px;
          background-color: #d7d7d7;
          border-radius: 15px;
          i {
            font-size: 13px;
          }
        }
        .van-search {
          border-radius: 11px;
          padding: 0;
          width: 684-38px;
          padding: 5px 10px;
          .van-cell.van-cell--borderless.van-field {
            padding: 0;
          }
          .yeshu {
            margin-left: 118px;
            i:nth-of-type(2),
            i:nth-of-type(3) {
              margin-right: 10px;
            }
            i:nth-of-type(5),
            i:nth-of-type(6) {
              margin-left: 17px;
            }
            i:nth-of-type(n + 2) {
              color: #169bd5;
            }
          }
        }
      }
      .dianti {
        width: 684-38px;
        height: 74px;
        background-color: #fafbb9;
        border-radius: 0 10px 10px 0;
        box-sizing: border-box;
        display: flex;

        padding: 5px 10px 10px 5px;
        line-height: 20px;
        .left {
          flex: 6;
          img {
            width: 50px;
            margin-top: 7px;
          }
        }
        .middle {
          flex: 43;
          i:first-child {
            font-size: 13px;
            font-weight: 650;
            color: #333;
          }
          i:nth-of-type(2) {
            font-size: 11px;
            font-weight: 650;
            color: #7f7f7f;
            line-height: 50px;
          }
        }
        .right {
          flex: 9;
          text-align: right;
          i {
            font-size: 14px;
            line-height: 10px;
          }
          i:first-child {
            color: #015478;
            font-weight: 700;
          }
          i:nth-of-type(2) {
            color: #333;
            font-weight: 200;
            b {
              color: #d9001b;
              margin: 0 10px;
            }
          }
          i:nth-of-type(3) {
            color: #169bd5;
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>
