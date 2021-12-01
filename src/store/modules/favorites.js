export default {
  state: {
    movieList: [],
    movieTitles: []
  },
  getters: {
    getMovieList: state => state.movieList,
    getMovieTitles: state => state.movieTitles
  },
  mutations: {
    addMovie (state, newMovie) {
      state.movieList.push(newMovie)
    }
  },
  actions: {
    addMovie({ commit }) {
      commit('addMovie')
    },

  },
}