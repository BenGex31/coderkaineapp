import React, { useState } from 'react';
import logoCoderKaine from '../../assets/logo/logo-coderkaine.svg';
import LoginButton from '../../components/Button/LoginButton';
import illustrationCoderKaine from '../../assets/loginImg/illustration-coderkaine.svg';
import TextFieldEmail from '../../components/TextField/TextFieldEmail';
import TextFieldPassword from '../../components/TextField/TextFieldPassword';
import './Login.css';
import colors from '../../utils/style/colors';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  //const [loginError, setLoginError] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handleChangePassword = () => (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
            onChange={handleChangeEmail}
            id="email"
            label="E-mail"
            variant="outlined"
          />
          <TextFieldPassword
            id="password"
            type={passwordVisibility ? 'text' : 'password'}
            value={password}
            onChange={handleChangePassword('password')}
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            visibility
          />
        </div>
        <div className="loginButton">
          <LoginButton variant="contained" text="Se connecter" />
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
