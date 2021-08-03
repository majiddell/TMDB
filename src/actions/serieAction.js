import axios from 'axios';
import react from 'react';

import {on_the_air_series,popular_series} from '../api';






 const FetchSeries = () => async (dispatch) => {

const on_the_air_list = await axios.get(on_the_air_series()); 
const popular_list = await axios.get(popular_series()); 

 




dispatch ({
    type : "FETCH_SERIES",
    payload : {
        onTheAir : on_the_air_list.data.results,
        popular : popular_list.data.results
    }

})


}


export default FetchSeries;




