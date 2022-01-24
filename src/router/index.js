import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/user/login.vue"),
  },
  {
    name: "regAndFor_nav",
    path: "/regAndFor_nav",
    component: () => import("@/components/regAndFor_nav.vue"),
    children: [
      {
        name: "forget",
        path: "/forget",
        component: () => import("@/views/user/forget.vue"),
      },
      {
        name: "register",
        path: "/register",
        component: () => import("@/views/user/register.vue"),
      },
      {
        name: "restart",
        path: "/restart",
        component: () => import("@/views/user/restart.vue"),
      },
    ],
  },
  {
    name: "account-container",
    path: "/account-container",
    component: () => import("@/components/account-container.vue"),
    children: [
      {
        name: "index",
        path: "/index",
        component: () => import("@/views/index/index.vue"),
      },
      {
        name: "personal-message",
        path: "/personal-message",
        component: () => import("@/views/user/personal-message.vue"),
      },
      {
        name: "search",
        path: "/search",
        component: () => import("@/views/rel_data/search.vue"),
      },
      {
        name: "work-record",
        path: "/work-record",
        component: () => import("@/views/work_record/work-record.vue"),
      },
      {
        name: "work-begin",
        path: "/work-begin",
        component: () => import("@/views/check_begin/work-begin.vue"),
      },
      {
        name: "work-data",
        path: "/work-data",
        component: () => import("@/views/rel_data/work-data.vue"),
      },
      {
        name: "relative-data",
        path: "/relative-data",
        component: () => import("@/views/rel_data/relative-data.vue"),
      },
    ],
  },
  {
    name: "renwulan",
    path: "/renwulan",
    component: () => import("@/components/renwulan.vue"),
    children: [
      {
        name: "rirenwu",
        path: "/rirenwu",
        component: () => import("@/views/mytest/rirenwu.vue"),
      },
      {
        name: "zhourenwu",
        path: "/zhourenwu",
        component: () => import("@/views/mytest/zhourenwu.vue"),
      },
    ],
  },
  {
    name: "account-container with return",
    path: "/account-container with return",
    component: () => import("@/components/account-container with return.vue"),
    children: [
      {
        name: "elevator-message",
        path: "/elevator-message",
        component: () => import("@/views/rel_data/ele_message.vue"),
      },
      {
        name: "ele-rel-data",
        path: "/ele-rel-data",
        component: () => import("@/views/ele_data/ele-rel-data.vue"),
      },
      {
        name: "ele-xiangxi",
        path: "/ele-xiangxi",
        component: () => import("@/views/ele_data/ele-xiangxi.vue"),
      },
    ],
  },
  {
    name: "account-container no bottom",
    path: "/account-container no bottom",
    component: () => import("@/components/account-container no bottom.vue"),
    children: [
      {
        name: "ele-user",
        path: "/ele-user",
        component: () => import("@/views/ele_data/ele-user.vue"),
      },
      {
        name: "ele-fix",
        path: "/ele-fix",
        component: () => import("@/views/ele_data/ele-fix.vue"),
      },
      {
        name: "ele-i",
        path: "/ele-i",
        component: () => import("@/views/ele_data/ele-i.vue"),
      },
    ],
  },
];
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
const router = new VueRouter({
  routes,
});
// 路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.Authorization ? true : false;
  if (
    to.path == "/login" ||
    to.path == "/register" ||
    to.path == "/forget" ||
    to.path == "/restart"
  ) {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
});
export default router;
