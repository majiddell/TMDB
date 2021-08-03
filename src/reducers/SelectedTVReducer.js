

const initstate ={


    credit :[],
    detail:[],
    reviews:[],
    selected_isloading:true,
    videos:[],
    recommendations:[]


}


function SelectedTVReducer  (state = initstate,action ) {

switch (action.type) {
  

            case "FETCH_SELECTED_TV":
                return {...state,
               
               
                credit :action.payload.credit,
                detail:action.payload.detail,
                reviews :action.payload.reviews,
                selected_isloading : false,
                videos : action.payload.videos,
                recommendations : action.payload.recommendations
                }

                case "LOADING_SELECTED_TV":
                    return {...state,
                   
                    
                    selected_isloading : true
                    }
        

    default:
        return {...state}

}


};


export default SelectedTVReducer;
