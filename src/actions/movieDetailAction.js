import axios from 'axios';
import react from 'react';

import {movie_byID_URL,movie_credit,movie_reviews,movie_videos,movie_recommendations} from '../api';






 export const FetchMovieDetail = (id) => async (dispatch) => {

    dispatch({
        type:"LOADING_SELECTED_MOVIE",

        })

    const selected_detail = await axios.get(movie_byID_URL(id)); 
    const credit_list =  await axios.get(movie_credit(id)); 
    const review_List = await axios.get(movie_reviews(id));
    const video_list = await axios.get(movie_videos(id));
    const recommendation_list = await axios.get(movie_recommendations(id));

    dispatch({
        type:"FETCH_SELECTED_MOVIE",
        payload:{
                detail : selected_detail.data,
                credit : credit_list.data,
                reviews : review_List.data.results,
                videos : video_list.data.results,
                recommendations : recommendation_list.data.results

        }
    })


}




export default FetchMovieDetail;




