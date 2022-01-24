<template>
  <!-- 搜索界面 -->
  <div class="search-container">
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
    <div class="result">
      <div class="result-gaikuang">
        <div class="gaikuang-left">
          <i class="iconfont icon-u1555"></i><i>搜索结果</i>
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
export default {
  name: "search",
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
.search-container {
  margin-left: 10px;
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
  .multi-search {
    margin: 20px 0 45px 40px;

    display: flex;
    align-items: center;
  }
  .result {
    margin: 0 74px 0 0px;
    background-color: rgba(234, 249, 255, 1);
    border-radius: 30px;
    padding: 1px;
  }
  .result-gaikuang {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 18px 15px 18px;
    box-sizing: border-box;
    .gaikuang-left {
      color: #004e79;
      i {
        vertical-align: middle;
      }
      .iconfont {
        font-size: 36px;
      }
      :nth-child(3) {
        font-size: 18px;
        margin-left: 12px;
      }
    }
    .fanye {
      color: #169bd5;
      font-size: 16px;
      i:nth-child(2) {
        margin-left: 15px;
      }
    }
  }
  .search {
    width: 587px;
    height: 103px;
    background-color: rgba(185, 234, 255, 1);
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    margin-bottom: 30px;
    div:nth-child(1) {
      margin-left: 10px;
      line-height: 13px;
      i:first-child {
        color: #333;
        font-size: 13px;
        font-weight: 650;
        line-height: 18px;
      }
      i:nth-of-type(2) {
        color: #7f7f7f;
        font-size: 12px;
        font-weight: 650;
      }
      a {
        color: #2f4bff;
        font-size: 10px;
        font-weight: 400;
        line-height: 25px;
      }
      i:last-child {
        color: #004e79;
        font-size: 11px;
        font-weight: 400;
        a {
          margin-left: 5px;
          color: #0399b6;
        }
      }
    }
    div:nth-of-type(2) {
      margin-right: 10px;
      font-size: 12px;
      color: #797979;
      line-height: 18px;
      i:first-child {
        line-height: 20px;
      }
      i:nth-of-type(3) {
        color: #015478;
      }
      div {
        line-height: 30px;
        i:first-child {
          font-size: 18px;
          color: #46b03b;
          font-weight: 650;
        }
        i:last-child {
          margin-left: 30px;
          color: #2f4bff;
        }
      }
    }
  }
}
</style>
