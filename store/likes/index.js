export const state = () => ({
  list: [],
});

export const mutations = {
  setList(state, list) {
    state.list = list;
  },
};

export const actions = {
  async getByUserId(context, userId) {
    const resData = await this.$axios.get(
      "http://127.0.0.1:80/api/like/" + userId
    );
    context.commit("setList", resData.data.data);
    context.dispatch("posts/get", null, { root: true });
  },

  async store(context, like) {
    await this.$axios.post("http://127.0.0.1:80/api/like", like);
    context.dispatch("getByUserId", like.user_id);
  },

  async destroy(context, like) {
    await this.$axios.delete("http://127.0.0.1:80/api/like/" + like.id);
    context.dispatch("getByUserId", like.user_id);
  },
};
