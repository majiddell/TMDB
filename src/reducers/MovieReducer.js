const initstate = {
  popular: [],
  latest: [],
  now_playing: [],
  upcoming: [],
  top_rated: [],

  searched: [],
  trending: [],
  isloading: true,
  random: 0,
};

function MovieReducer(state = initstate, action) {
  switch (action.type) {
    case "FETCH_MOVIE":
      return {
        ...state,
        popular: action.payload.popular,
        latest: action.payload.latest,
        now_playing: action.payload.nowPlaying,
        upcoming: action.payload.upcoming,
        top_rated: action.payload.topRated,
        isloading: false,

        trending: action.payload.trending,
      };
    case "SEARCH":
      return {
        ...state,

        searched: action.payload.searched,
      };

    case "LOADING_MOVIE":
      return {
        ...state,

        isloading: true,
      };

    default:
      return { ...state };
  }
}

export default MovieReducer;
