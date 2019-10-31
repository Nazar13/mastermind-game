import { LOGIN_ENDPOINT } from "./../services/APIs";
import { FETCH_USERS_ENDPOINT } from "./../services/APIs";
import axios from 'axios';


export const loginUserService = (request) => {  
    const req ={
      "username": "Ted",
      "password": "Ted123"
    }
  // const parameters = {
      // method: 'POST',
      // mode: 'cors',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      // redirect: 'follow', // manual, *follow, error
      // referrer: 'no-referrer', // no-referrer, *client
      // body: JSON.stringify(req)
    // };
  
    return axios.post(LOGIN_ENDPOINT, JSON.stringify(req))
      .then(res => {
        console.log('*********');
        console.log(res);
        return res;
      })
      .catch(err => console.log(err));

    // return axios.get(FETCH_USERS_ENDPOINT)
    //   .then(res => {
    //     console.log('*********');
    //     console.log(res);
    //     return res;
    //   })
    //   .catch(err => console.log(err));
  };