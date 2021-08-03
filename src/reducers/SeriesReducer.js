

const initstate ={

    onTheAir : [],
    popularSeries : [],
 

}


function SeriesReducer  (state = initstate,action ) {

switch (action.type) {
    case "FETCH_SERIES":
        return {...state,
            onTheAir : action.payload.onTheAir,
            popularSeries : action.payload.popular
        }
        
    default:
        return {...state}

}


};


export default SeriesReducer;
