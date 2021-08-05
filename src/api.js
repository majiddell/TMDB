const key = "4406f627cb1536482e8bd57a487954d4";

const baseURL = "https://api.themoviedb.org/3/";

//const movieURL = `${baseURL}movie/${id}?api_key=${key}`

export function toprated_movie() {
  return `${baseURL}movie/top_rated?api_key=${key}&language=en-US&page=1`;
}
export function upcoming_movie() {
  return `${baseURL}movie/upcoming?api_key=${key}&language=en-US&page=1`;
}
export function popular_movie() {
  return `${baseURL}movie/popular?api_key=${key}&language=en-US&page=1`;
}
export function now_playing_movie() {
  return `${baseURL}movie/now_playing?api_key=${key}&language=en-US&page=1`;
}
export function latest_movie() {
  return `${baseURL}movie/latest?api_key=${key}&language=en-US&page=1`;
}

//Trending

export function trending_week_all() {
  return `${baseURL}trending/all/week?api_key=${key}&language=en-US&page=1`;
}

//search
export function search(keyword) {
  return `${baseURL}search/multi?api_key=${key}&language=en-US&page=1&query=${keyword}&popularity`;
}

//selected movie apis

export function movie_credit(id) {
  return `${baseURL}movie/${id}/credits?api_key=${key}&language=en-US&page=1&maxLength=20`;
}
export function movie_reviews(id) {
  return `${baseURL}movie/${id}/reviews?api_key=${key}&language=en-US&page=1`;
}
export function movie_byID_URL(id) {
  return `${baseURL}movie/${id}?api_key=${key}`;
}
export function movie_videos(id) {
  return `${baseURL}movie/${id}/videos?api_key=${key}`;
}
export function movie_recommendations(id) {
  return `${baseURL}movie/${id}/recommendations?api_key=${key}`;
}

//////tv

export function on_the_air_series() {
  return `${baseURL}tv/on_the_air/?api_key=${key}`;
}
export function popular_series() {
  return `${baseURL}tv/popular/?api_key=${key}`;
}

export function tv_credit(id) {
  return `${baseURL}tv/${id}/credits?api_key=${key}&language=en-US&page=1&maxLength=20`;
}
export function tv_reviews(id) {
  return `${baseURL}tv/${id}/reviews?api_key=${key}&language=en-US&page=1`;
}
export function tv_byID_URL(id) {
  return `${baseURL}tv/${id}?api_key=${key}`;
}
export function tv_videos(id) {
  return `${baseURL}tv/${id}/videos?api_key=${key}`;
}
export function tv_recommendations(id) {
  return `${baseURL}tv/${id}/recommendations?api_key=${key}`;
}

/////people
export function people_byID_URL(id) {
  return `${baseURL}person/${id}?api_key=${key}`;
}
export function people_credit(id) {
  return `${baseURL}person/${id}/combined_credits?api_key=${key}`;
}
export function people_image(id) {
  return `${baseURL}person/${id}/image?api_key=${key}`;
}

////Genre

export function genre_movie(id, page) {
  return `${baseURL}discover/movie/?api_key=${key}&with_genres=${id}&page=${page}`;
}
export function genre_tv(id, page) {
  return `${baseURL}discover/tv/?api_key=${key}&with_genres=${id}&page=${page}`;
}
