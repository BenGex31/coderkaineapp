import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from '../LocalStorage/LocalStorage';

export function hasAuthenticated() {
  const token = getItem('coderkaineToken');
  const isValid = token ? tokenIsValid(token) : false;

  if (false === isValid) {
    removeItem('coderkaineToken');
  }
  return isValid;
}

export function login(email, password) {
  return axios
    .post('https://api-pp.hifivework.com/apiv1/auth/login', email, password)
    .then((response) => response.data)
    .then((token) => {
      addItem('coderkaineToken');

      return true;
    });
}

export function logout() {
  removeItem('coderkaineToken');
}

function tokenIsValid(token) {
  const { exp } = jwtDecode(token);
  if (exp * 1000 > new Date().getTime()) {
    return true;
  }
  return false;
}
