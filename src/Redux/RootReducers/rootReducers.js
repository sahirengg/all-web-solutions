import {combineReducers} from 'redux';
import userReducers from '../Reducers/userReducers';




const rootReducer = combineReducers({
    userDetails : userReducers
});


export default rootReducer;