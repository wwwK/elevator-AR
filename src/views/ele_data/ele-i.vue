<template>
  <!-- 安装单位相关资料页面 -->
  <div class="container">
    <div class="ele-title">
      <i class="iconfont icon-weixiuguanli"></i
      ><i>湖州杭奥电梯安装工程有限公司</i>
      <br />
      <i>联系人：李四</i><i>电话：+86 136xxxxxxxx</i>
    </div>
    <div class="user-container">
      <div class="left">
        <div class="hezi up">
          <div class="hezi-title">
            <i class="iconfont icon-elevator"></i
            ><i class="default-font">安装电梯数量</i>
          </div>
          <i>1352</i>
        </div>
        <div class="hezi down">
          <div class="hezi-title">
            <i class="iconfont icon-jianyan2"></i
            ><i class="default-font">本月检验任务</i>
          </div>
          <i>198</i>
        </div>
      </div>
      <div class="middle">
        <div class="hezi">
          <div class="hezi-title">
            <i class="iconfont icon-pinpai"></i
            ><i class="default-font">主要安装电梯型号</i>
          </div>
          <div class="mingcheng">
            <i>奥特斯</i><br />
            <i>奥特斯</i><br />
            <i>奥特斯</i><br />
            <i>奥特斯</i><br />
            <i>奥特斯</i><br />
            <i>奥特斯</i><br />
            <i>奥特斯</i><br />
            <i>奥特斯</i><br />
            <i>奥特斯</i><br />
            <i>奥特斯</i><br />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="hezi up">
          <div class="hezi-title">
            <i class="iconfont icon-elevator"></i
            ><i class="default-font">检验合格率</i>
          </div>
          <i>92%</i><br />
          <i>合格率适中</i>
        </div>
        <div class="hezi down">
          <div class="hezi-title">
            <i class="iconfont icon-jianyan2"></i
            ><i class="default-font">平均使用时间</i>
          </div>
          <i>10.4Y</i>
        </div>
      </div>
    </div>
    <div class="message">
      <div class="diantilanmu">以下，是安装电梯栏目表</div>
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
</template>

<script>
export default {
  name: "ele-i",
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
    margin-bottom: 20px;
  }
  // 正文
  .ele-title {
    margin-bottom: 30px;
    i:nth-of-type(2) {
      font-weight: 650;
      font-size: 32px;
      line-height: 60px;
    }
    i:nth-of-type(3),
    i:nth-of-type(4) {
      font-size: 15px;
      font-weight: 400;
      color: #555;
    }
    i:nth-of-type(3) {
      margin-right: 20px;
    }
  }
  .user-container {
    padding-left: 13px;
    padding-right: 17px;
    display: flex;
    justify-content: space-between;
    .left {
      .up {
        background-color: rgba(220, 253, 167, 1);
        color: rgba(89, 144, 0, 0.913725490196078);
        i:nth-of-type(1):not(.hezi-title i) {
          margin-left: 0px;
          line-height: 120px;
          font-size: 75px;
          font-weight: 700;
        }
      }
      .down {
        background-color: rgba(255, 231, 71, 0.913725490196078);
        color: #a67020;
        i:nth-of-type(1):not(.hezi-title i) {
          margin-left: 20px;
          line-height: 120px;
          font-size: 75px;
          font-weight: 700;
        }
      }
    }
    .middle {
      .hezi {
        height: 422px;
        background-color: rgba(255, 177, 60, 1);
        .mingcheng {
          margin-left: 20px;
          height: 545-211px;
          overflow: scroll;

          i:first-child {
            font-size: 27px;
            font-weight: 650;
            color: #7b4d12;
            line-height: 50px;
          }
          i:nth-of-type(2) {
            font-size: 21px;
            font-weight: 650;
            color: #a66400;
            line-height: 40px;
          }
          i:nth-of-type(3) {
            color: #b76e00;
            font-size: 20px;
            font-weight: 650;
            line-height: 40px;
          }
          i:nth-of-type(n + 4) {
            font-size: 18px;
            font-weight: 650;
            line-height: 35px;
            color: #ffe7c4;
          }
        }
      }
    }
    .right {
      .up {
        background-color: rgba(185, 234, 255, 1);
        color: #006b99;
        i:nth-of-type(1):not(.hezi-title i) {
          margin-left: 0px;
          line-height: 120px;
          font-size: 75px;
          font-weight: 700;
        }
        i:nth-of-type(2):not(.hezi-title i) {
          font-size: 16px;
          font-weight: 650;
        }
      }
      .down {
        background-color: rgba(221, 185, 249, 0.913725490196078);
        color: #390760;
        i:nth-of-type(1):not(.hezi-title i) {
          margin-left: 0px;
          line-height: 120px;
          font-size: 60px;
          font-weight: 700;
        }
      }
    }
  }
  .message {
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
</style>
