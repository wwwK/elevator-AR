<template>
  <!-- 开始检验页面 -->
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
        <h1>腾满，电梯检验ing</h1>
      </div>
    </div>
    <div class="plan">
      <div class="plan-title">
        <i class="iconfont icon-dianti"></i>
        <i>计划检验电梯</i>
      </div>
      <div class="plan1">
        <div class="biaoti">
          <i>1</i><i>浙江省湖州市吴兴区南街558号银泰百货A区2号电梯</i>
        </div>
        <div class="xinxi">
          <div><i>东芝CV320</i></div>
          <div>
            <i>第五次检验</i>
            <div class="submit">开始检验</div>
          </div>
        </div>
      </div>
      <div class="plan2">
        <div class="biaoti">
          <i>2</i><i>浙江省湖州市吴兴区南街558号银泰百货A区2号电梯</i>
        </div>
        <div class="xinxi">
          <div><i>东芝CV320</i></div>
          <div>
            <i>第五次检验</i>
            <div class="submit">开始检验</div>
          </div>
        </div>
      </div>
      <div class="plan3">
        <div class="biaoti">
          <i>3</i><i>浙江省湖州市吴兴区南街558号银泰百货A区2号电梯</i>
        </div>
        <div class="xinxi">
          <div><i>东芝CV320</i></div>
          <div>
            <i>第五次检验</i>
            <div class="submit">开始检验</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/title.less";
export default {
  name: "work-begin",
};
</script>

<style lang="less" scoped>
.container {
  padding: 20px 42px 37px 30px;
  .plan {
    width: 617px;
    height: 552px;
    border-radius: 30px;
    background-color: #eaf9ff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-top: 20px;
    .plan-title {
      height: 50px;
      position: absolute;
      left: 40px;
      top: 20px;

      i {
        font-size: 22px;
        color: #027db4;
      }
      i:nth-child(2) {
        font-weight: 650;
      }
      .iconfont {
        font-size: 40px;
      }
    }
    .plan1,
    .plan2,
    .plan3 {
      min-height: 100px;
      margin-bottom: 30px;
      border-radius: 15px;
      background-color: #afe3f9;
      .biaoti {
        font-weight: 700;
      }
    }
    .plan1 {
      padding: 10px 12px 12px 15px;
      width: 550px;
      .biaoti i:first-of-type {
        font-size: 32px;
        color: #d9001b;
      }
      .biaoti {
        margin-bottom: 10px;
        i:nth-of-type(2) {
          font-size: 21px;
          color: #00415d;
        }
      }
      .xinxi {
        display: flex;
        justify-content: space-between;
        height: 60px;
        i {
          font-weight: 650;
        }
        div:first-child {
          font-size: 18px;
          color: #48565d;
          margin: 30px 0 0 20px;
        }
        div:nth-child(2) {
          i {
            font-size: 18px;
            color: #027db4;
          }
          .submit {
            margin-top: 10px;
            width: 80px;
            height: 23px;
            background-color: #169bd5;
            border-radius: 5px;
            color: white;
            font-size: 13px;
            text-align: center;
            line-height: 23px;
          }
        }
      }
    }
    .plan2 {
      padding: 10px 12px 12px 15px;
      width: 480px;
      .biaoti i:first-of-type {
        font-size: 25px;
        color: #f59a23;
      }
      .biaoti {
        margin-bottom: 10px;
        i:nth-of-type(2) {
          font-size: 17px;
          color: #017aae;
        }
      }
      .xinxi {
        display: flex;
        justify-content: space-between;
        height: 60px;
        i {
          font-weight: 650;
        }
        div:first-child {
          font-size: 18px;
          color: #48565d;
          margin: 30px 0 0 20px;
        }
        div:nth-child(2) {
          i {
            font-size: 18px;
            color: #027db4;
          }
          .submit {
            margin-top: 10px;
            width: 80px;
            height: 23px;
            background-color: #169bd5;
            border-radius: 5px;
            color: white;
            font-size: 13px;
            text-align: center;
            line-height: 23px;
          }
        }
      }
    }
    .plan3 {
      padding: 10px 12px 12px 15px;
      width: 440px;
      .biaoti i:first-of-type {
        font-size: 25px;
        color: #f5e323;
      }
      .biaoti {
        margin-bottom: 10px;
        i:nth-of-type(2) {
          font-size: 13px;
          color: #00a0e5;
        }
      }
      .xinxi {
        display: flex;
        justify-content: space-between;
        height: 60px;
        i {
          font-weight: 650;
        }
        div:first-child {
          font-size: 18px;
          color: #48565d;
          margin: 30px 0 0 20px;
        }
        div:nth-child(2) {
          i {
            font-size: 18px;
            color: #027db4;
          }
          .submit {
            margin-top: 10px;
            width: 80px;
            height: 23px;
            background-color: #169bd5;
            border-radius: 5px;
            color: white;
            font-size: 13px;
            text-align: center;
            line-height: 23px;
          }
        }
      }
    }
  }
}
</style>
