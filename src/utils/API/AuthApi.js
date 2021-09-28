//import { useContext } from 'react';
//import axios from 'axios';
//import jwtDecode from 'jwt-decode';
import {
  getItem /*, addItem*/,
  removeItem,
} from '../LocalStorage/LocalStorage';

export function hasAuthenticated() {
  const token = getItem('coderkaineToken');
  const result = token ? true : false;

  if (false === result) {
    removeItem('coderkaineToken');
  }
  return result;
}

/*export const LoginUser = (email, password) => {
  return (
    axios
      .post('https://api-pp.hifivework.com/apiv1/auth/login', {
        login: email,
        password: password,
      })
      .then((response) => response.data)
      .then((response) => console.log(response))
      .then((token) => {
        addItem('coderkaineToken', token);

        return true;
      })
  );
};*/

export function logout() {
  removeItem('coderkaineToken');
  removeItem('companyId');
}

/*function tokenIsValid(token) {
  const { exp } = jwtDecode(token);
  if (exp * 1000 > new Date().getTime()) {
    return true;
  }
  return false;
}*/
