import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    userInfo: "",
    Authorization: localStorage.getItem("Authorization")
      ? localStorage.getItem("Authorization")
      : "",
    Information: localStorage.getItem("Information")
      ? localStorage.getItem("Information")
      : "",
  },
  mutations: {
    handleData(state, value) {
      state.userInfo = value;
    },
    getData(state, data) {
      state.username = data;
    },
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      state.userInfo = user.userInfo;
      localStorage.setItem("Authorization", user.Authorization);
      localStorage.setItem("Information", user.userInfo);
    },
  },
  actions: {},
  modules: {},
});
