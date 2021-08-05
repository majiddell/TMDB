import { combineReducers } from "redux";

import MovieReducer from "./MovieReducer";
import SelectedMovieReducer from "./SelectedMovieReducer";
import SeriesReducer from "./SeriesReducer";
import SelectedPersonReducer from "./PersonReducer";
import SelectedTVReducer from "./SelectedTVReducer";
import genreReducer from "./genreReducer";
const rootReducer = combineReducers({
  movies: MovieReducer,
  movieDetail: SelectedMovieReducer,
  series: SeriesReducer,
  person: SelectedPersonReducer,
  tvDetail: SelectedTVReducer,
  genre: genreReducer,
});

export default rootReducer;
