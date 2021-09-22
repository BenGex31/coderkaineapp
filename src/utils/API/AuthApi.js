import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from '../LocalStorage/LocalStorage';

export function hasAuthenticated() {
  const token = getItem('coderkaineToken');
  const result = token ? true : false;

  if (false === result) {
    removeItem('coderkaineToken');
  }
  return result;
}

export function login(email, password) {
  return axios
    .post('https://api-pp.hifivework.com/apiv1/auth/login', {login: email, password: password})
    .then((response) => response.data)
    .then((token) => {
      addItem('coderkaineToken', token);

      return true;
    });
}

export function logout() {
  removeItem('coderkaineToken');
}

/*function tokenIsValid(token) {
  const { exp } = jwtDecode(token);
  if (exp * 1000 > new Date().getTime()) {
    return true;
  }
  return false;
}*/