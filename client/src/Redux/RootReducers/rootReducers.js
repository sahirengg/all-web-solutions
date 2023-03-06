import {combineReducers} from 'redux';
import {clientPostReducers} from '../Reducers/clientReducers';




const rootReducer = combineReducers({
    clientDetails : clientPostReducers
});


export default rootReducer;