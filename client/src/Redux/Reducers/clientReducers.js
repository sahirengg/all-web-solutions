import { 
    FETCH_CLIENT_REQUEST, 
    FETCH_CLIENT_SUCCESS, 
    FETCH_CLIENT_FAILURE
  } from "../Actions/types";
  
  const initialState = {
    loading: false,
     clientPostData: [],
    error: ''
  }
  
  export const clientPostReducers = (state = initialState, action) => {
  
    switch(action.type){
      case FETCH_CLIENT_REQUEST:
        return {
          ...state,
          loading: true,
        }
        case FETCH_CLIENT_SUCCESS:
          return {
            loading: false,
            clientPostData: action.payload,
            error: ''
          }
        case FETCH_CLIENT_FAILURE:
          return {
            loading: false,
            clientPostData: [],
            error: action.payload
          }
        default:
            return state
    }
  }
  
  export default clientPostReducers
  