const initstate = {
  movie: [],
  tv: [],
  selected_isloading: true,
  id: 35,
};

function genreReducer(state = initstate, action) {
  switch (action.type) {
    case "FETCH_GENRE":
      return {
        ...state,

        movie: action.payload.movie,
        tv: action.payload.tv,
        id: action.payload.id,
        selected_isloading: false,
      };

    case "LOADING_GENRE":
      return {
        ...state,

        selected_isloading: true,
      };

    default:
      return { ...state };
  }
}

export default genreReducer;
