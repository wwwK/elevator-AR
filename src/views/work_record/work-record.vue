<template>
  <!-- 工作记录界面 -->
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
        <h1>腾满，以下是您的工作记录!</h1>
      </div>
    </div>
    <hr />
    <div class="jixiao">
      <div class="left">
        <div class="top">
          <van-swipe
            class="my-swipe1"
            :autoplay="3000"
            :duration="1500"
            indicator-color="white"
            :width="200"
            :height="160"
          >
            <van-swipe-item><span>今日检验数量</span><i>11</i></van-swipe-item>
            <van-swipe-item><span>本周检验数量</span><i>105</i></van-swipe-item>
            <van-swipe-item><span>本月检验数量</span><i>246</i></van-swipe-item>
          </van-swipe>
        </div>
        <div class="bottom">
          <van-swipe
            class="my-swipe2"
            :autoplay="3000"
            :duration="1500"
            indicator-color="white"
            :width="200"
            :height="160"
            vertical
          >
            <van-swipe-item
              ><span>本年绩效评定</span><i>96.5</i
              ><i>您超过了92%的用户</i></van-swipe-item
            >
            <van-swipe-item
              ><span>上月绩效评定</span><i>75.6</i
              ><i>您超过了18%的用户</i></van-swipe-item
            >
          </van-swipe>
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="data">
      <div class="data-container">
        <i>您的工作数据</i>
        <div class="peizhi12 shijian">
          <div class="shijian-left">
            <i>您的工作时间</i>
            <div class="shijianfenpei">
              <div class="jinri">
                <i>今日</i><br /><i>{{ this.ave_time.jinri }}</i>
              </div>
              <div class="benzhoujinri">
                <i>本周平均每日</i><br /><i>{{ this.ave_time.benzhou }}</i>
              </div>
              <div class="benyuejinri">
                <i>本月平均每日</i><br /><i>{{ this.ave_time.benyue }}</i>
              </div>
            </div>
          </div>
          <div class="shijian-right"></div>
        </div>
        <div class="peizhi12 buhege">
          <div class="buhege-left">
            <i>您检验的不合格电梯</i>
            <div class="buhegeshuliang">
              <div class="jinri">
                <i>今日</i><br /><i>{{ this.low_qual.jinri }}台(9%)</i>
              </div>
              <div class="benzhoujinri">
                <i>本周平均每日</i><br /><i
                  >{{ this.low_qual.benzhou }}台(8.5%)</i
                >
              </div>
              <div class="benyuejinri">
                <i>本月平均每日</i><br /><i
                  >{{ this.low_qual.benyue }}台(7.3%)</i
                >
              </div>
            </div>
          </div>
          <div class="buhege-right"></div>
        </div>
        <div class="xinghao">
          <van-tabs
            v-model="active1"
            type="card"
            background="#f7f498"
            color="#333"
            line-width="0px"
            title-active-color="white"
            ><i slot="nav-left">您检验的型号</i>
            <van-tab title="本日">
              <div class="diantixinghao">
                <i v-for="item in xinghao" :key="item.id"
                  >{{ item.id }}.{{ item.xinghao }} </i
                ><i>其他</i>
              </div>
            </van-tab>
            <van-tab title="本周">
              <div class="diantixinghao">
                <i v-for="item in xinghao" :key="item.id"
                  >{{ item.id }}.{{ item.xinghao }} </i
                ><i>其他</i>
              </div>
            </van-tab>
            <van-tab title="本月">
              <div class="diantixinghao">
                <i v-for="item in xinghao" :key="item.id"
                  >{{ item.id }}.{{ item.xinghao }} </i
                ><i>其他</i>
              </div>
            </van-tab>
            <van-tab title="本年">
              <div class="diantixinghao">
                <i v-for="item in xinghao" :key="item.id"
                  >{{ item.id }}.{{ item.xinghao }} </i
                ><i>其他</i>
              </div>
            </van-tab>
            <van-tab title="总计">
              <div class="diantixinghao">
                <i v-for="item in xinghao" :key="item.id"
                  >{{ item.id }}.{{ item.xinghao }} </i
                ><i>其他</i>
              </div>
            </van-tab>
          </van-tabs>
        </div>
        <div class="didian">
          <van-tabs
            v-model="active2"
            type="card"
            background="#f7f498"
            color="#333"
            line-width="0px"
            title-active-color="white"
            ><i slot="nav-left">您检验的电梯</i>
            <van-tab title="本日">
              <div class="diantididian">
                <i v-for="item in didian" :key="item.id"
                  >{{ item.id }}.{{ item.didian }} </i
                ><i>其他</i>
              </div>
            </van-tab>
            <van-tab title="本周">
              <div class="diantididian">
                <i v-for="item in didian" :key="item.id"
                  >{{ item.id }}.{{ item.didian }} </i
                ><i>其他</i>
              </div>
            </van-tab>
            <van-tab title="本月">
              <div class="diantididian">
                <i v-for="item in didian" :key="item.id"
                  >{{ item.id }}.{{ item.didian }} </i
                ><i>其他</i>
              </div>
            </van-tab>
            <van-tab title="本年">
              <div class="diantididian">
                <i v-for="item in didian" :key="item.id"
                  >{{ item.id }}.{{ item.didian }} </i
                ><i>其他</i>
              </div>
            </van-tab>
            <van-tab title="总计">
              <div class="diantididian">
                <i v-for="item in didian" :key="item.id"
                  >{{ item.id }}.{{ item.didian }} </i
                ><i>其他</i>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <div class="result">
      <div class="result-gaikuang">
        <div class="gaikuang-left">
          <van-search placeholder="搜索" left-icon="">
            <div slot="label" class="biaoti">
              <i class="iconfont icon-u1555"></i>您检验的电梯<i></i>
            </div>
            <i slot="right-icon" class="iconfont icon-u1090"></i>
          </van-search>
          <van-dropdown-menu class="xiala" active-color="black">
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
        <div class="fanye"><i>上一页</i><i>下一页</i></div>
      </div>
      <div class="search">
        <div>
          <i>浙江省湖州市吴兴区南街558号银泰百货A区2号电梯</i><br /><i
            >东芝CV320</i
          ><br /><a href="#">电梯详情</a><br /><i
            >检验类型<a href="#">定期检验</a></i
          >
        </div>
        <div>
          <i>检验日期:2016/12/23</i><br /><i> 14:30</i><br /><i
            >检验时长：1h3min</i
          ><br /><i>检验人员：张三</i><br />
          <div><i>合格</i><i>检验报告</i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ave_time, low_qual, ele_type } from "@/api/user.js";
import "@/styles/search.less";
export default {
  created() {
    this.getTime();
  },
  methods: {
    async getTime() {
      const res = await ave_time();
      const res2 = await low_qual();
      const res3 = await ele_type();

      this.ave_time.jinri = res.data.message.t_today;
      this.ave_time.benzhou = res.data.message.t_week;
      this.ave_time.benyue = res.data.message.t_month;
      this.low_qual.jinri = res2.data.message[0].length;
      this.low_qual.benzhou = res2.data.message[1].length;
      this.low_qual.benyue = res2.data.message[2].length;
    },
  },
  data() {
    return {
      ave_time: { jinri: "", benzhou: "", benyue: "" },
      low_qual: { jinri: "", benzhou: "", benyue: "" },
      type_count: [],
      value1: 0,
      option1: [
        { text: "今日", value: 0 },
        { text: "本周", value: 1 },
        { text: "本月", value: 2 },
        { text: "全部", value: 3 },
      ],
      active1: 2,
      active2: 0,
      xinghao: [
        { id: 1, xinghao: "东芝CV320" },
        { id: 2, xinghao: "东芝CV321" },
        { id: 3, xinghao: "东芝CV322" },
        { id: 4, xinghao: "东芝CV323" },
        { id: 5, xinghao: "东芝CV324" },
        { id: 6, xinghao: "东芝CV325" },
        { id: 7, xinghao: "东芝CV326" },
        { id: 8, xinghao: "东芝CV327" },
        { id: 9, xinghao: "东芝CV328" },
        { id: 10, xinghao: "东芝CV329" },
      ],
      didian: [
        { id: 1, didian: "银泰百货" },
        { id: 2, didian: "银泰百货" },
        { id: 3, didian: "银泰百货" },
        { id: 4, didian: "银泰百货" },
        { id: 5, didian: "银泰百货" },
        { id: 6, didian: "银泰百货" },
        { id: 7, didian: "银泰百货" },
        { id: 8, didian: "银泰百货" },
        { id: 9, didian: "银泰百货" },
        { id: 10, didian: "银泰百货" },
      ],
    };
  },
  name: "work-record",
};
</script>

<style lang="less" scoped>
.container {
  width: 632px;
  margin-left: 27px;
  .title {
    height: 100px;
    box-sizing: border-box;
    display: flex;
    // justify-content: center;
    align-items: center;
    .huanying {
      margin-left: 10px;
      h1 {
        font-size: 32px;
        margin: 0 0 0px 10px;
      }
    }
  }
  .jixiao {
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    .top {
      .my-swipe1 .van-swipe-item {
        color: #c6eeff;
        border-radius: 20px;
        text-align: center;
        background-color: #c6eeff;
        position: relative;
        span {
          position: absolute;
          left: 12px;
          top: 17px;
          font-size: 16px;
          font-weight: 650;
        }
        i {
          line-height: 170px;
          font-size: 72px;
          font-weight: 650;
        }
        i,
        span {
          color: #006b99;
        }
      }
      /deep/.my-swipe1.van-swipe {
        width: 200px;
        height: 160px;
      }
      .my-swipe1 .van-swipe-item:nth-of-type(2) {
        background-color: #ddb9f9;
        i,
        span {
          color: #390760;
        }
      }
      .my-swipe1 .van-swipe-item:nth-of-type(3) {
        background-color: #facd91;
        i,
        span {
          color: #a67020;
        }
      }
    }

    .bottom {
      margin-top: 20px;
      /deep/.my-swipe2.van-swipe {
        width: 200px;
        height: 160px;
      }
      .my-swipe2 .van-swipe-item {
        color: #fff;
        font-size: 20px;
        text-align: center;
        background-color: #ffbfc6;
        position: relative;
        border-radius: 20px;
        span {
          position: absolute;
          top: 20px;
          left: 13px;
          color: #d9001b;
          font-size: 16px;
          font-weight: 650;
        }
        i:first-of-type {
          line-height: 160px;
          font-weight: 650;
          font-size: 72px;
          color: #d9001b;
        }
        i:last-child {
          position: absolute;
          bottom: 13px;
          left: 13px;
          font-size: 14;
          color: #bd0017;
        }
      }
      .my-swipe2 .van-swipe-item:last-of-type {
        background-color: #caf982;
        span,
        i {
          color: #4d7d00;
        }
      }
    }
    .right {
      width: 390px;
      height: 340px;
      background-color: #ffffe7;
      border-radius: 30px;
    }
  }
  .data {
    width: 631px;
    height: 685px;
    background-color: #426abf;
    border-radius: 20px;
    box-sizing: border-box;
    .data-container {
      padding: 13px 13px 37px 13px;

      i:first-child {
        color: #fffb8f;
        font-size: 16px;
        font-weight: 650;
      }
      .peizhi12 {
        margin: 20px 0;
        padding: 10px 0 0 15px;
        width: 605px;
        height: 100px;
        background-color: #f7f498;
        box-sizing: border-box;
        border-radius: 15px;
        i {
          font-size: 16px;
          color: #7d7000;
          font-weight: 400;
        }
        .shijianfenpei {
          width: 450px;
          display: flex;
          justify-content: space-between;
          div {
            i:first-child {
              font-size: 10px;
              color: #015478;
            }
            i:last-of-type {
              font-size: 28px;
              font-weight: 700;
            }
            width: 150px;
          }
        }
        .buhegeshuliang {
          width: 450px;
          display: flex;
          justify-content: space-between;
          div {
            i:first-child {
              font-size: 10px;
              color: #015478;
            }
            i:last-of-type {
              font-size: 28px;
              font-weight: 700;
            }
            width: 150px;
          }
        }
      }
      .xinghao {
        margin: 20px 0;
        box-sizing: border-box;
        padding: 10px 5px;
        i {
          color: #6b6e00;
          font-size: 16px;
          font-weight: 400;
        }
        width: 605px;
        height: 170px;
        background-color: #f7f498;
        border-radius: 15px;
        /deep/ .van-tabs__nav.van-tabs__nav--card {
          width: 320px;
          height: 15px;
          border: 0;
        }
        /deep/.van-tab {
          border-radius: 7.5px;
          border: 0;
          width: 32px;
          background-color: #81d3f8;
          font-size: 9px;
          margin: 0 5px;
        }
        /deep/.van-tab--active {
          background-color: #027db4 !important;
        }
        .diantixinghao {
          width: 600px;
          height: 128px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          i {
            font-size: 20px;
            font-weight: 650;
            color: #878a01;
            line-height: 30px;
          }
          i:first-child {
            color: #555700;
            font-weight: 700;
          }
          i:nth-child(2) {
            font-weight: 650;
            color: #7a7d01;
          }
          i:nth-child(3) {
            font-weight: 650;
            color: #878a01;
          }
        }
      }
      .didian {
        margin: 10px 0;
        box-sizing: border-box;
        padding: 10px 5px;
        i {
          color: #6b6e00;
          font-size: 16px;
          font-weight: 400;
        }
        width: 605px;
        height: 170px;
        background-color: #f7f498;
        border-radius: 15px;
        /deep/ .van-tabs__nav.van-tabs__nav--card {
          width: 320px;
          height: 15px;
          border: 0;
        }
        /deep/.van-tab {
          border-radius: 7.5px;
          border: 0;
          width: 32px;
          background-color: #81d3f8;
          font-size: 9px;
          margin: 0 5px;
        }
        /deep/.van-tab--active {
          background-color: #027db4 !important;
        }
        .diantididian {
          width: 600px;
          height: 128px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          i {
            font-size: 20px;
            font-weight: 650;
            color: #878a01;
            line-height: 30px;
          }
          i:first-child {
            color: #555700;
            font-weight: 700;
          }
          i:nth-child(2) {
            font-weight: 650;
            color: #7a7d01;
          }
          i:nth-child(3) {
            font-weight: 650;
            color: #878a01;
          }
        }
      }
    }
  }
  .result {
    background-color: rgba(244, 253, 207, 1);

    .result-gaikuang div:first-child i:nth-of-type(2) {
      font-size: 18px;
    }
    .gaikuang-left {
      width: 513-43px;
      display: flex;
      justify-content: space-between;
    }
    .search {
      background-color: #f4fdcf;
    }
    /deep/.van-search {
      background-color: rgba(244, 253, 207, 1);
      padding: 0;
    }
    /deep/.van-search__content {
      height: 22px;
    }
    /deep/.van-cell--borderless {
      padding: 0;
    }
    /deep/.van-field__control {
      background-color: #e2ecbb;
    }
    /deep/.van-ellipsis {
      font-size: 8px;
    }
    /deep/.van-search__content.van-search__content--square {
      background-color: rgba(244, 253, 207, 1);
      padding-left: 5px;
    }
    /deep/.xiala {
      width: 97px;
    }
    /deep/.van-dropdown-menu__bar {
      height: 22px;
    }
    /deep/.van-dropdown-menu__item {
      background-color: #e2ecbb;
    }
    .biaoti {
      color: #617900;
      font-size: 18px;
      vertical-align: middle;
      i {
        margin-right: 5px;
      }
      i:first-child {
        font-size: 36px;
      }
    }
    .iconfont.icon-u1090 {
      font-size: 13px;
      font-weight: 400;
      color: #4d7d00;
    }
  }
}
</style>
