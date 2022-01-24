<template>
  <!-- 本周任务界面 -->
  <div>
    <div class="zongjindu">
      <div class="jihua">
        <i>本周计划任务：20</i><br /><i>本周已完成：8</i><br /><i
          >本周待完成：12</i
        >
      </div>
      <div class="jindu"><i>本周进度：</i></div>
    </div>
    <hr />
    <div class="research">
      <b>待检验电梯项目：</b>
      <br />
      <div class="sousuokuang">
        <van-search
          placeholder="搜索"
          background="#f2f2f2"
          left-icon=""
          show-action
          ><div class="xinxi" slot="action">
            每页显示：
            <div class="xianshi"><i>5</i><i>10</i><i>全部</i></div>
            <div class="fanye"><i>上一页</i><i>下一页</i></div>
          </div></van-search
        >
      </div>
      <div class="hezi" v-for="item in list" :key="item.id">
        <div class="diantixiangqing">
          <div><img :src="item.tupian" alt="" /></div>
          <div class="diantiweizhi">
            <i class="dizhi">{{ item.dizhi }}</i>
            <br />
            <i class="xinghao">{{ item.xinghao }}</i>
          </div>
        </div>
        <div class="jianyancishu">
          <i class="id">{{ item.id }}</i>
          <br />
          <i class="jianyan"
            >第<a>{{ item.jianyan }}</a
            >次检验</i
          >
          <br />
          <a href="#" class="xiangqing">详情</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/photo_u368-1.svg";
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          dizhi: "浙江省湖州市吴兴区南街558号银泰百货A区2号电梯",
          xinghao: "东芝CV320",
          jianyan: 2,
          tupian: img1,
        },
        {
          id: 2,
          dizhi: "浙江省湖州市吴兴区南街558号银泰百货A区2号电梯",
          xinghao: "东芝CV320",
          jianyan: 1,
          tupian: img1,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/renwu.less";
</style>
