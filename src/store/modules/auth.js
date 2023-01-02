import axios from "axios";
import {getCookie, setCookie, deleteCookie} from "@/utils/cookie"

const state = {
  user: null,
  posts: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  StateUser: (state) => state.user,
};

const actions = {
  async Register({dispatch, commit}, form) {
    const response = await axios.post('auth/users/register', form)
    if (!response.data.success) return
    if (!response.data.token) return
    await commit("setUser", response.data.user.login);
    setCookie("token", response.data.token, 1)
  },  

  async LogIn({dispatch, commit}, form) {
    const response = await axios.post('auth/users/login', form)
    if (!response.data.success) return
    if (!response.data.token) return
    await commit("setUser", response.data.username);
    setCookie("token", response.data.token, 1)
  }, 

  // async LogIn({commit}, user) {
  //   await axios.post("login", user);
  //   await commit("setUser", user.get("username"));
  // },

  async CreatePost({ dispatch }, post) {
    await axios.post("post", post);
    return await dispatch("GetPosts");
  },

  async GetPosts({ commit }) {
    let response = await axios.get("posts");
    commit("setPosts", response.data);
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
    deleteCookie("token")
  },
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },

  setPosts(state, posts) {
    state.posts = posts;
  },
  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};