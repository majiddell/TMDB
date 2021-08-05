import axios from "axios";

import { genre_movie, genre_tv } from "../api";

const FetchGenre = (id, moviePage, tvPage) => async (dispatch) => {
  dispatch({
    type: "LOADING_GENRE",
  });

  const movie_list = await axios.get(genre_movie(id, moviePage));
  const tv_list = await axios.get(genre_tv(id, tvPage));
  dispatch({
    type: "FETCH_GENRE",
    payload: {
      movie: movie_list.data.results,
      tv: tv_list.data.results,
      id: id,
    },
  });
};

export default FetchGenre;
