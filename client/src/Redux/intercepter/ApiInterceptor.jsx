import axios from 'axios';
import { API_STATUS } from '../../constants/constants';
import { useHistory } from 'react-router-dom';
import { PAGE_ROUTES } from '../../routes/RoutesConstants';
import { getLocalStorageItem } from '../../methods/commonMethods';

axios.interceptors.request.use(
  (config) => {
    const token = getLocalStorageItem('dataToken')
    config.headers.Authorization = `Bearer ${token}`;
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

export default axios;
