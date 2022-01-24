<template>
  <!-- 检验资料界面 -->
  <div class="container">
    <div class="title">这些是检验资料。</div>
    <div class="work-container">
      <div class="data">
        <div class="work-title">
          <van-search
            placeholder="搜索"
            background="rgba(207, 253, 243, 1)"
            show-action="true"
            left-icon=""
          >
            <i slot="right-icon" class="iconfont icon-u1090"></i>
            <div slot="left" class="title-left">
              <i class="iconfont icon-u1555"> </i><i>检验资料</i>
            </div>
            <div class="fanye" slot="action"><i>上一页</i><i>下一页</i></div>
          </van-search>
        </div>
        <div class="work-data">
          <div class="book">
            <div class="img">
              <img src="@/assets/photo_u1387.svg" alt="" />
            </div>
            <div class="wenzi">
              <div class="top">
                <i>TSG T7001-2009</i><br /><i
                  >电梯监督检验和定期检验规则——曳引与强制驱动电梯</i
                >
              </div>
              <div class="bottom">
                <div class="wenzi-left">类别：特种设备安全技术规范</div>
                <div class="wenzi-right">阅读</div>
              </div>
            </div>
          </div>
          <hr />
          <div class="book">
            <div class="img">
              <img src="@/assets/photo_u1387.svg" alt="" />
            </div>
            <div class="wenzi">
              <div class="top">
                <i>TSG T7001-2009</i><br /><i
                  >电梯监督检验和定期检验规则——曳引与强制驱动电梯</i
                >
              </div>
              <div class="bottom">
                <div class="wenzi-left">类别：特种设备安全技术规范</div>
                <div class="wenzi-right">阅读</div>
              </div>
            </div>
          </div>
          <hr />
          <div class="book">
            <div class="img">
              <img src="@/assets/photo_u1387.svg" alt="" />
            </div>
            <div class="wenzi">
              <div class="top">
                <i>TSG T7001-2009</i><br /><i
                  >电梯监督检验和定期检验规则——曳引与强制驱动电梯</i
                >
              </div>
              <div class="bottom">
                <div class="wenzi-left">类别：特种设备安全技术规范</div>
                <div class="wenzi-right">阅读</div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "work-data",
};
</script>

<style lang="less" scoped>
.title {
  height: 49px;
  background-color: #72d5ff;
  font-size: 30px;
  color: #effdfc;
  font-weight: 650;
}
.work-container {
  margin: 20px 50px 20px 15px;
  .data {
    background-color: rgba(207, 253, 243, 1);
    border-radius: 30px;
    height: auto;
    overflow: scroll;
    padding-top: 20px;
    box-sizing: border-box;
    .work-title {
      .title-left {
        display: flex;
        align-items: center;
        i {
          color: #00715d;
          margin-left: 10px;
        }
        i:first-child {
          font-size: 36px;
        }
        i:last-child {
          font-size: 18px;
          line-height: 18px;
        }
      }
      /deep/.van-search.van-search--show-action {
        width: 630px;
        margin-left: 13px;
      }
      /deep/.van-search__content.van-search__content--square {
        background-color: #cffdf3;
        color: #000;
        margin-right: 80px;
        .iconfont {
          font-size: 18px;
        }
      }
      /deep/.van-field__control {
        background-color: #9ae5d7;
      }
      .fanye {
        margin-right: 30px;
        i {
          font-size: 16px;
          color: #169bd5;
        }
        i:first-child {
          margin-right: 15px;
        }
      }
    }
    .work-data {
      width: 613px;
      height: 500px;
      margin-left: 18px;
      .book {
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
        .wenzi {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 480px;
          i:first-child {
            font-size: 22px;
            font-weight: 700;
          }
          i:nth-of-type(2) {
            font-size: 16px;
            font-weight: 650;
          }
          .bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .wenzi-left {
              color: #7f7f7f;
              font-size: 15px;
            }
            .wenzi-right {
              background-color: rgba(22, 155, 213, 1);
              border-radius: 5px;
              color: #fff;
              font-size: 16px;
              width: 140px;
              height: 40px;
              text-align: center;
              line-height: 40px;
            }
          }
        }
      }
    }
  }
}
</style>
