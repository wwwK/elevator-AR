<template>
  <!-- 今日任务界面 -->
  <div>
    <div class="zongjindu">
      <div class="jihua">
        <i
          >今日计划任务：<b>{{ this.total }}</b></i
        ><br /><i
          >今日已完成：<b>{{ this.done }}</b></i
        ><br /><i
          >今日待完成：<b>{{ this.should }}</b></i
        >
      </div>
      <div class="jindu"><i>今日进度：</i></div>
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
      <div class="hezi" v-for="(item, index) in list" :key="index">
        <div class="diantixiangqing">
          <div><img :src="item.tupian" alt="" /></div>
          <div class="diantiweizhi">
            <i class="dizhi">{{ item.location + item.site }}</i>
            <br />
            <i class="xinghao">{{ item.ele_type }}</i>
          </div>
        </div>
        <div class="jianyancishu">
          <i class="id">{{ index + 1 }}</i>
          <br />
          <i class="jianyan"
            >第<a>{{ item.count }}</a
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
import { rirenwu_msg, count } from "@/api/user.js";

export default {
  created() {
    this.getData();
    // location.reload();
  },
  methods: {
    async getData() {
      const res = await rirenwu_msg();
      this.total = parseInt(res.data.message[0][0].t_time);
      this.should = res.data.message[1].length;
      this.done = this.total - this.should;
      this.list = res.data.message[1];
      for (let j = 0; j < this.list.length; j++) {
        this.post.unique_id = this.list[1].unique_id;
        const res2 = await count(this.post);
        this.count.unshift(res2.data.message.length);
        this.list[j].count = this.count[j];
        console.log(this.count);
        this.$forceUpdate();
      }
    },
  },
  data() {
    return {
      total: "",
      should: "",
      done: "",
      count: [],
      post: { unique_id: "" },
      list: [],
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/renwu.less";
</style>
