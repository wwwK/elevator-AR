<template>
  <!-- 用户信息页面 -->
  <div class="index1-container">
    <div class="container">
      <!-- 主体 -->
      <div class="zhuti">
        <!-- 头像 -->
        <div class="touxiang">
          <van-image
            width="100"
            height="100"
            round
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <!-- 欢迎信息 -->
        <div class="huanying">
          <div>
            <h1>{{ $store.state.userInfo.ming }}，你好!</h1>
          </div>
          <div><i @click="search">查看信息</i></div>
        </div>
        <!-- 任务目标 -->
        <div class="mubiao">
          <div>
            <h3>
              今日你已完成<a class="had">{{ this.done }}</a>
            </h3>
          </div>
          <div>
            <h3>
              今日您待完成<a class="should">{{ this.should }}</a>
            </h3>
          </div>
        </div>
        <!-- 工作进度 -->
        <div class="jindu">
          <div><h3>您的工作进度</h3></div>
          <van-circle
            v-model="currentRate"
            :rate="currentRate"
            size="70px"
            :text="text"
          />
        </div>
      </div>
      <hr />
      <!-- 详情 -->
      <div class="xiangqing">
        <div class="gaishu">
          <div class="renwu" @click="toRenWu">
            <i class="iconfont icon-woderenwu"></i>
          </div>
          <h2 class="font-renwu">我的任务</h2>
        </div>
        <div class="gaishu">
          <div class="jilu" @click="toJiLu">
            <i class="iconfont icon-u191"></i>
          </div>
          <h2 class="font-jilu">工作记录</h2>
        </div>
        <div class="gaishu">
          <div class="jianyan"><i class="iconfont icon-u187"></i></div>
          <h2 class="font-jianyan">开始检验</h2>
        </div>
        <div class="gaishu">
          <div class="ziliao"><i class="iconfont icon-u183"></i></div>
          <h2 class="font-ziliao">相关资料</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { test } from "@/api/user.js";
export default {
  name: "index",
  data() {
    return {
      currentRate: 0,
      total: "",
      should: "",
      done: "",
    };
  },
  created() {
    this.getData();
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    },
  },
  methods: {
    toJiLu() {
      this.$router.push("/work-record");
    },
    toRenWu() {
      this.$router.push("/rirenwu");
    },
    async getData() {
      try {
        const res = await test();
        this.total = parseInt(res.data.message[0][0].t_time);
        this.should = res.data.message[1].length;
        this.done = this.total - this.should;
        this.currentRate = 100 * (this.done / this.total);
      } catch (error) {
        console.log(error);
      }
    },
    search() {
      this.$router.push("/personal-message");
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 670px;
  margin-left: 21px;
}
.zhuti {
  display: flex;
  height: 170px;
  box-sizing: border-box;
  align-items: center;
  h3 {
    font-size: 18px;
    margin: 0;
  }
  .huanying {
    margin-left: 10px;
    h1 {
      font-size: 32px;
      margin: 0 0 45px 0;
    }
    i {
      font-size: 13px;
      color: #aaa;
    }
  }
  .mubiao {
    margin-left: 60px;
    line-height: 80px;
  }
  .had {
    font-size: 28px;
    color: #027db4;
    margin-left: 24px;
  }
  .should {
    font-size: 28px;
    color: #ff0000;
    margin-left: 24px;
  }
  .jindu {
    margin-top: 85px;
    margin-left: 40px;
    margin-bottom: 80px;
    .van-circle {
      margin-left: 20px;
    }
    h3 {
      margin-bottom: 12px;
    }
  }
  .box {
    position: relative;
  }
}
.xiangqing {
  display: flex;
  width: 100%;
  height: 310px;
  .gaishu {
    width: 166px;
    height: 310px;
    padding-left: 30px;
    padding-top: 40px;
    .renwu {
      height: 156px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url("../../assets/u220.svg") no-repeat;
    }
    .jilu {
      height: 156px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url("../../assets/u190.svg") no-repeat;
    }
    .jianyan {
      height: 156px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url("../../assets/u186.svg") no-repeat;
    }
    .ziliao {
      height: 156px;
      display: flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      background: url("../../assets/u182.svg") no-repeat;
    }
  }

  h2 {
    text-align: center;
  }
  .font-renwu {
    font-size: 24px;
    color: #b8741a;
  }
  .font-jilu {
    font-size: 24px;
    color: #70b603;
  }
  .font-jianyan {
    font-size: 24px;
    color: #027db4;
  }
  .font-ziliao {
    font-size: 24px;
    color: #d9001b;
  }
}
.iconfont {
  color: white;
  font-size: 100px;
}
</style>
