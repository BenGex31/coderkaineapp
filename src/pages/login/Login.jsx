import React, { useState, useEffect, useContext } from 'react';
import logoCoderKaine from '../../assets/logo/logo-coderkaine.svg';
import LoginButton from '../../components/Button/LoginButton';
import illustrationCoderKaine from '../../assets/loginImg/illustration-coderkaine.svg';
import TextFieldEmail from '../../components/TextField/TextFieldEmail';
import TextFieldPassword from '../../components/TextField/TextFieldPassword';
import './Login.css';
import colors from '../../utils/style/colors';
import Auth from '../../context/Auth';
import { login } from '../../utils/API/AuthApi';

const Login = ({ history }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [isValidEmail, setIsvalidEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [errorMessagePassword, setErrorMessagePassword] = useState('');
  //const [loginError, setLoginError] = useState('');

  const emailRegex = /\S+@\S+\.\S+/;

  const handleChangeEmail = (event) => {
    const emailValue = event.target.value;
    if (emailRegex.test(emailValue)) {
      setIsvalidEmail(true);
      setMessage('Votre adresse mail est correct!');
    } else {
      setIsvalidEmail(false);
      setMessage('Entrez une adresse mail valide!');
    }
    setEmail(event.target.value);
    console.log(email);
  };

  const handleChangePassword = () => (event) => {
    setPassword(event.target.value);
    if (event.target.value.length >= 8) {
      setIsValidPassword(true);
      setErrorMessagePassword(
        'Votre mot de passe contient plus de 8 caractères'
      );
    } else {
      setIsValidPassword(false);
      setErrorMessagePassword(
        'Votre mot de passe doit contenir 8 caractères minimum'
      );
    }
  };

  const handleClickShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      setIsAuthenticated(response);
      history.replace('/home');
    } catch ({ response }) {
      console.log(response);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.replace('/home');
    }
  }, [history, isAuthenticated]);

  return (
    <div className="loginMainContainer">
      <div className="loginContainerLeft">
        <img
          style={{ width: 73.39, height: 73.39 }}
          src={logoCoderKaine}
          alt="logo CoderKaine"
        />
        <div className="loginText">
          <h1 style={{ fontFamily: 'Montserrat, sans-serif' }}>Connexion</h1>
          <p
            style={{
              color: colors.lightBlue,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Veuillez vous connecter afin d’accéder à la plateforme et gérer la
            liste de vos employés.
          </p>
        </div>
        <div className="loginForm">
          <TextFieldEmail
            //error={isValidEmail ? false : true}
            onChange={handleChangeEmail}
            id="email"
            label="E-mail"
            variant="outlined"
          />
          {isValidEmail ? (
            <span style={{ color: 'green', fontSize: 12 }}>{message}</span>
          ) : (
            <span style={{ color: 'red', fontSize: 12 }}>{message}</span>
          )}
          <TextFieldPassword
            //error={isValidPassword ? false : true}
            id="password"
            type={passwordVisibility ? 'text' : 'password'}
            value={password}
            onChange={handleChangePassword('password')}
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            visibility
          />
          {isValidPassword ? (
            <span style={{ color: 'green', fontSize: 12 }}>
              {' '}
              {errorMessagePassword}
            </span>
          ) : (
            <span style={{ color: 'red', fontSize: 12 }}>
              {' '}
              {errorMessagePassword}
            </span>
          )}
        </div>
        <div className="loginButton">
          <LoginButton
            onClick={handleLogin}
            disabled={isValidEmail && isValidPassword ? false : true}
            variant="contained"
            text="Se connecter"
            style={
              isValidEmail && isValidPassword
                ? {
                    backgroundColor: colors.darkBlue,
                    color: 'white',
                    width: 180,
                    height: 38,
                    fontSize: 14,
                    fontWeight: 400,
                    borderRadius: 5,
                    fontFamily: 'Montserrat, sans-serif',
                  }
                : {
                    backgroundColor: colors.lightBlue,
                    color: 'white',
                    width: 180,
                    height: 38,
                    fontSize: 14,
                    fontWeight: 400,
                    borderRadius: 5,
                    fontFamily: 'Montserrat, sans-serif',
                  }
            }
          />
        </div>
      </div>
      <div
        style={{ backgroundColor: colors.lighterBlue }}
        className="loginContainerRight"
      >
        <img
          className="LoginIllustration"
          src={illustrationCoderKaine}
          alt="illustration CoderKaine"
        />
      </div>
    </div>
  );
};

export default Login;
