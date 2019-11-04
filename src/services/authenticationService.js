import { FETCH_USERS_ENDPOINT } from "./../services/APIs";
import axios from 'axios';

export const loginUserService = (request) => {  
    return axios.get(FETCH_USERS_ENDPOINT)
      .then(res => res.data)
      .catch(err => console.log(err));      
  };