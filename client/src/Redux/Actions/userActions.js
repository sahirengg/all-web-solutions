


// export const changeUSerName = name => {
//     return {
//         type: "CHANGEUSERNAME",
//         payload: name
//     }
// }




export function changeUSerData(arr) {
    return function(dispatch) {
        return  dispatch({
            type: 'CHANGEUSERDATA',
           payload: arr
        });
    };
}


export function changeUSerAge(age) {
    return function(dispatch) {
        return  dispatch({
            type: 'CHANGEUSERAGE',
           payload: age
        });
    };
}