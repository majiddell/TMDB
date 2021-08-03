import axios from 'axios';
import react from 'react';

import {people_byID_URL, people_credit,people_image} from '../api';






 export const FetchPersonDetail = (id) => async (dispatch) => {

    dispatch({
        type:"LOADING_SELECTED_PERSON",

        })

    const selected_detail = await axios.get(people_byID_URL(id)); 
    const credit_list = await axios.get(people_credit(id)); 
    const image_list = await axios.get(people_credit(id)); 


    dispatch({
        type:"FETCH_SELECTED_PERSON",
        payload:{
                detail : selected_detail.data,
                credit : credit_list.data,
                image : image_list

        }
    })


}





export default FetchPersonDetail;




