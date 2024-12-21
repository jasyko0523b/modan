export const state = () => ({
  list: [],
});

export const mutations = {
  setList(state, list) {
    state.list = list;
  },
};

export const actions = {
  async show(context, postId) {
    const resData = await this.$axios.get("http://127.0.0.1:80/api/comment/" + postId);
    context.commit("setList", resData.data.data);
  },
  async store(context, comment) {
    await this.$axios.post("http://127.0.0.1:80/api/comment", comment);
    context.dispatch("show", comment.post_id);
  },
/*  async destroy(context, id) {
    await this.$axios.delete("http://127.0.0.1:80/api/commnet/" + id);
    context.dispatch("showComments");
  },*/
};
