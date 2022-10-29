const initialState = [{
    name: "Sahir",
    age: "32"
}]


const userReducers = (state = initialState, action) => {
    switch(action.type){
        case "CHANGEUSERDATA" : {
            return {
                ...state ,
                name: action.payload
            }
        }
        case "CHANGEUSERAGE" : {
            return {
                ...state,
                age: action.payload
            }
        }

        default :
        return state;
    }
}


export default userReducers;