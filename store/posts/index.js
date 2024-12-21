export const state = () => ({
  list: [],
});

export const mutations = {
  setList(state, list) {
    state.list = list;
  },
};

export const actions = {
  async get(context) {
    const resData = await this.$axios.get("http://127.0.0.1:80/api/post");
    context.commit("setList", resData.data.data);
  },

  async store(context, post) {
    await this.$axios.post("http://127.0.0.1:80/api/post", post);
    context.dispatch("getPosts");
  },

  async destroy(context, id) {
    await this.$axios.delete("http://127.0.0.1:80/api/post/" + id);
    context.dispatch("getPosts");
  },
};
