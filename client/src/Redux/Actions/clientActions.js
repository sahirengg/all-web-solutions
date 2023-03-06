import {
    FETCH_CLIENT_FAILURE,
    FETCH_CLIENT_REQUEST,
    FETCH_CLIENT_SUCCESS
  } from "./types";
  
  
  export const fetchClientRequest = () => {
    return {
      type: FETCH_CLIENT_REQUEST
    }
  }
  
  export const fetchClientSuccess = clientData => {
    return {
      type: FETCH_CLIENT_SUCCESS,
      payload: clientData
    }
  }
  
  export const fetchClientFailure = error => {
    return {
      type: FETCH_CLIENT_FAILURE,
      payload: error
    }
  }