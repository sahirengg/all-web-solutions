import axios from "axios";
import {saveClientInfo} from './config';
import {
  fetchClientRequest,fetchClientFailure,fetchClientSuccess,
} from '../Actions/clientActions'

export const saveClientInfoApi = async (data,dispatch) => {
  dispatch(fetchClientRequest())
  try {
    const res = await axios.post(saveClientInfo.postClientData,data);
    dispatch(fetchClientSuccess(res));
    return res;
  }

  catch (err) {
    dispatch(fetchClientFailure(err?.response?.data))
    console.log("save client api error------", err)
    return err?.response?.data;
  }
}

// export const divisionPostData = async (value,dispatch) =>{
//   dispatch(fetchDivisionPostRequest())
//   try {
//     const res = await axios.post(divisionApi?.postUrl, value);
//     dispatch(fetchDivisionPostSuccess(res));
//     return res;
//   }
//   catch (error) {
//     dispatch(fetchDivisionPostFailure(error?.response?.data));
//     return error?.response?.data;
//   }
// }