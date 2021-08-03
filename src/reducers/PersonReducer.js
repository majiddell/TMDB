

const initstate ={



    detail:[]
   ,
   credit : [],
   selected_isloading: false,
   image :[],

}


function SelectedPersonReducer  (state = initstate,action ) {

switch (action.type) {
  

            case "FETCH_SELECTED_PERSON":
                return {...state,
               
               
                
                detail:action.payload.detail,
                credit:action.payload.credit,
                selected_isloading : false,
                image : action.payload.image

                }

                case "LOADING_SELECTED_PERSON":
                    return {...state,
                   
                    
                    selected_isloading : true
                    }
        

    default:
        return {...state}

}


};


export default SelectedPersonReducer;
