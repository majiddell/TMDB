

const initstate ={


    credit :[],
    detail:[],
    reviews:[],
    selected_isloading:true,
    videos:[],
    recommendations:[]


}


function SelectedMovieReducer  (state = initstate,action ) {

switch (action.type) {
  

            case "FETCH_SELECTED_MOVIE":
                return {...state,
               
               
                credit :action.payload.credit,
                detail:action.payload.detail,
                reviews :action.payload.reviews,
                selected_isloading : false,
                videos : action.payload.videos,
                recommendations : action.payload.recommendations
                }

                case "LOADING_SELECTED_MOVIE":
                    return {...state,
                   
                    
                    selected_isloading : true
                    }
        

    default:
        return {...state}

}


};


export default SelectedMovieReducer;
