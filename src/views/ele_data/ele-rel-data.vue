<template>
  <!-- 电梯相关资料界面 -->
  <div class="container">
    <div class="message1">
      <div class="left">
        <div class="diantixinxi">
          <i>东芝电梯CV320</i><br /><i
            >浙江省湖州市吴兴区南街558号银泰百货A区2号电梯</i
          ><br /><i>地图显示</i><br /><i>使用信息</i>
        </div>
        <div class="shiyongxinxi">
          <i>使用单位：<a href="#">湖州爱山银泰百货</a></i
          ><br />
          <i>联系人：</i><i>张三</i><i>电话：</i><i>+86 13555555555</i>
        </div>
      </div>
      <div class="right">
        <van-swipe class="my-swipe" :autoplay="2333" indicator-color="white">
          <van-swipe-item v-for="item in list" :key="item.id"
            ><img :src="item.tupian" alt=""
          /></van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="message2">
      <span>制造/安装信息</span>
      <div class="zhizaoxinxi">
        <i>制造单位：</i><i>东芝电梯（中国）有限公司</i><i>制造日期：</i
        ><i>2016-3-15<br /></i><i>安装单位：</i><i>湖州杭奥电梯安装有限公司</i
        ><i>安装单位许可证号：</i><i>TSxxxxxxx-xxxx</i><br /><i
          >施工合同编号：</i
        ><i>MxxxxxxZT1</i>
      </div>
    </div>
    <div class="message3">
      <span>电梯参数</span>
      <div class="dianticanshu">
        <b>使用单位内部编号：<i>1</i></b
        ><b>使用时长：<i>1768天（4年10月3天）</i></b
        ><br /><b>设备类型：<i>曳引式客梯</i></b
        ><b>规格型号：<i>CV320</i></b
        ><b>产品编号：<i>Mxxxxxx</i></b
        ><br /><b>额定载重量：<i>3000</i>kg</b><b>额定速度：<i>0.5</i>m/s</b
        ><b>设备代码：<i>xxxxxxxxxxxxxxxxxxxx</i></b
        ><br /><b>层站门：<i>6</i>层<i>6</i>站<i>6</i>门</b
        ><b>控制方式：<i>集选</i></b
        ><b>竣工日期：<i>2016-11-18</i></b>
      </div>
    </div>
    <div class="message4">
      <span>历史检验信息</span>
      <div class="jianyanxinxi">
        <b>累计维保次数：<i>116</i></b
        ><b>电梯维保单位：<i>东芝电梯（中国）有限公司浙江分公司湖州维保点</i></b
        ><br /><b>累计检验次数：<i>4</i></b
        ><b>上一次检验人员：<i>李四</i></b>
        <div class="chakanxinxi">查看详细信息</div>
      </div>
    </div>
    <div class="ditu">
      <img
        src="https://api.map.baidu.com/staticimage/v2?ak=uER2mLmh6c8ffSQ85UewSM1oBtrsOwD7&mcode=666666&center=116.403874,39.914888&width=712&height=235&zoom=11"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/u1641.png";
import img2 from "@/assets/u1642.png";
export default {
  name: "ele-rel-data",
  data() {
    return {
      list: [
        {
          id: 1,
          mingcheng: "轿厢",
          tupian: img1,
        },
        {
          id: 2,
          mingcheng: "井道",
          tupian: img2,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  .message1 {
    height: 220px;
    position: relative;
    .left {
      width: 360px;
      .diantixinxi {
        padding: 15px 0 0 11px;
        i:first-child {
          font-size: 32px;
          font-weight: 650;
        }
        i:nth-of-type(2) {
          font-size: 15px;
          font-weight: 650;
          color: #555;
        }
        i:nth-of-type(3) {
          font-size: 13px;
          color: #169bd5;
        }
        i:nth-of-type(4) {
          font-size: 13px;
          color: #7f7f7f;
        }
      }
      .shiyongxinxi {
        box-sizing: border-box;
        padding: 20px 0 0 11px;
        width: 360px;
        height: 98px;
        background-color: rgba(250, 205, 145, 0.25);
        i {
          font-size: 15px;
          color: #000;
          font-weight: 400;
        }
        a {
          color: #027db4;
          border-bottom: 1px solid #027db4;
        }
        i:nth-of-type(2) {
          line-height: 45px;
        }
        i:nth-of-type(3),
        i:nth-of-type(5) {
          border-bottom: 1px solid #000;
        }
        i:nth-of-type(3) {
          margin-right: 20px;
        }
      }
    }
    .right {
      position: absolute;
      right: 10px;
      top: 25px;
      width: 300px;
      height: 184px;
      .van-swipe__track {
        width: 300px;
        height: 184px;
      }
      .my-swipe {
        img {
          width: 300px;
          height: 184px;
        }
      }
    }
  }
  .message2 {
    span {
      padding-left: 11px;
      font-size: 13px;
      color: #7f7f7f;
    }
    .zhizaoxinxi {
      padding: 20px 0 10px 11px;
      background-color: rgba(202, 249, 130, 0.247058823529412);
      i {
        font-size: 15px;
        color: #000;
        font-weight: 400;
      }
      i:nth-of-type(2),
      i:nth-of-type(6) {
        margin-right: 20px;
      }
      i:nth-of-type(5),
      i:nth-of-type(1),
      i:nth-of-type(9) {
        line-height: 35px;
      }
      i:nth-of-type(2n) {
        border-bottom: 1px solid #000;
      }
      i:nth-of-type(6) {
        color: #027db4;
        border-bottom: 1px solid #027db4;
      }
    }
  }
  .message3 {
    span {
      padding-left: 11px;
      font-size: 13px;
      color: #7f7f7f;
    }
    .dianticanshu {
      padding: 20px 0 10px 11px;
      background-color: rgba(128, 255, 255, 0.250980392156863);
      position: relative;
      i,
      b {
        font-size: 15px;
        color: #000;
        font-weight: 400;
      }
      i {
        border-bottom: 1px solid #000;
      }
      b :nth-of-type(9),
      b :nth-of-type(1),
      b :nth-of-type(3),
      b :nth-of-type(6) {
        line-height: 35px;
      }
      b:first-child {
        font-size: 18px;
        margin-right: 235px;
        i {
          font-size: 20px;
          color: #d9001b;
          border: none;
        }
      }
      b:nth-of-type(2) {
        font-size: 18px;
        i {
          color: #4b7902;
          font-size: 18px;
          border: none;
        }
      }
      b:nth-of-type(3),
      b:nth-of-type(4),
      b:nth-of-type(6),
      b:nth-of-type(7) {
        margin-right: 95px;
      }
      b:nth-of-type(9) {
        margin-right: 100px;
        i {
          margin-left: 5px;
          color: #015478;
          margin-right: 5px;
        }
      }
      b:nth-of-type(11) {
        position: absolute;
        right: 10px;
        bottom: 5px;
      }
    }
  }
  .message4 {
    span {
      padding-left: 11px;
      font-size: 13px;
      color: #7f7f7f;
    }
    .jianyanxinxi {
      padding: 20px 0 10px 11px;
      background-color: rgba(236, 128, 141, 0.145098039215686);
      position: relative;
      width: 712px;
      height: 123px;
      box-sizing: border-box;
      b:nth-of-type(1),
      b:nth-of-type(3) {
        font-size: 20px;
        color: #333;
        line-height: 40px;
        i {
          color: #d9001b;
          font-size: 20px;
        }
      }
      b:nth-of-type(2),
      b:nth-of-type(4) {
        font-size: 16px;
        color: #333;
        i {
          border-bottom: 1px solid #000;
        }
      }
      b:nth-of-type(1) {
        margin-right: 30px;
      }
      b:nth-of-type(3) {
        margin-right: 50px;
      }
      b:nth-of-type(2) {
        i {
          color: #027db4;
          border-bottom: 1px solid #027db4;
        }
      }
      .chakanxinxi {
        width: 140px;
        height: 40px;
        color: #fff;
        background-color: rgba(22, 155, 213, 0.866666666666667);
        border-radius: 14px;
        position: absolute;
        right: 30px;
        bottom: 20px;
        font-size: 13px;
        text-align: center;
        line-height: 40px;
      }
    }
  }
  .ditu {
    margin-top: 35px;
    img {
      width: 712px;
      height: 235px;
    }
  }
}
</style>
