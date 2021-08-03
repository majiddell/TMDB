import axios from 'axios';
import react from 'react';

import {tv_byID_URL,tv_credit,tv_reviews,tv_videos,tv_recommendations} from '../api';






 export const FetchtvDetail = (id) => async (dispatch) => {

    dispatch({
        type:"LOADING_SELECTED_TV",

        })

    const selected_detail = await axios.get(tv_byID_URL(id)); 
    const credit_list =  await axios.get(tv_credit(id)); 
    const review_List = await axios.get(tv_reviews(id));
    const video_list = await axios.get(tv_videos(id));
    const recommendation_list = await axios.get(tv_recommendations(id));

    dispatch({
        type:"FETCH_SELECTED_TV",
        payload:{
                detail : selected_detail.data,
                credit : credit_list.data,
                reviews : review_List.data.results,
                videos : video_list.data.results,
                recommendations : recommendation_list.data.results

        }
    })


}




export default FetchtvDetail;




