import React, { useState, useContext } from 'react';
import logoCoderKaine from '../../assets/logo/logo-coderkaine.svg';
import LoginButton from '../../components/Button/Button';
import illustrationCoderKaine from '../../assets/loginImg/illustration-coderkaine.svg';
import TextFieldEmail from '../../components/TextField/TextField';
import TextFieldPassword from '../../components/TextField/TextFieldPassword';
import colors from '../../utils/style/colors';
import Auth from '../../context/Auth';
import axios from 'axios';
import { addItem } from '../../utils/LocalStorage/LocalStorage';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const Login = ({ history }) => {
  const { setCurrentUser, setIsAuthenticated } = useContext(Auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [isValidEmail, setIsvalidEmail] = useState();
  const [message, setMessage] = useState('');
  const [isValidPassword, setIsValidPassword] = useState();
  const [errorMessagePassword, setErrorMessagePassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const emailRegex = /\S+@\S+\.\S+/;

  const handleChangeEmail = (event) => {
    const emailValue = event.target.value;
    if (emailRegex.test(emailValue)) {
      setIsvalidEmail(true);
      setMessage('Votre adresse mail est correcte !');
    } else {
      setIsvalidEmail(false);
      setMessage('Entrez une adresse mail valide !');
    }
    setEmail(event.target.value);
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
      const response = await axios.post(
        'https://api-pp.hifivework.com/apiv1/auth/login',
        {
          login: email,
          password: password,
        }
      );
      console.log('handlelogin', response.data);
      setIsAuthenticated(true);
      setCurrentUser(response.data);
      addItem('coderkaineToken', response.data.authToken);
      addItem('companyId', response.data.company.id);
      history.replace('/home');
    } catch (error) {
      console.error(error);
      setLoginError(true);
    }
  };

  return (
    <>
      <CssBaseline />
      <Grid>
        <Stack
          spacing={8.4}
          direction={{ xs: 'column', md: 'row' }}
          height="100%"
        >
          <Stack
            alignItems="center"
            width={{ lg: 460 }}
            ml={{ md: 8.5 }}
            mt={7.4}
          >
            <Stack mb={8.16375} alignItems="center">
              <img
                style={{ width: 73.39, height: 73.39 }}
                src={logoCoderKaine}
                alt="logo CoderKaine"
              />
            </Stack>
            <Stack width={350} mb={4.625} spacing={1}>
              <h1
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: colors.darkBlue,
                  fontSize: 16,
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                Connexion
              </h1>
              <p
                style={{
                  color: colors.lightBlue,
                  fontFamily: 'Montserrat, sans-serif',
                  height: 32,
                  fontSize: 13,
                  fontWeight: 500,
                  marginTop: 9,
                }}
              >
                Veuillez vous connecter afin d’accéder à la plateforme et gérer
                la liste de vos employés.
              </p>
            </Stack>
            <Stack width={{ xs: 350 }} spacing={3}>
              <Stack>
                <TextFieldEmail
                  error={isValidEmail === false ? true : false}
                  helperText={isValidEmail ? message : message}
                  sxHelperText={{ color: isValidEmail ? 'green' : 'red' }}
                  onChange={handleChangeEmail}
                  id="email"
                  label="E-mail"
                  variant="outlined"
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#1C205F',
                  }}
                />
              </Stack>
              <Stack>
                <TextFieldPassword
                  id="password"
                  label="Mot de passe"
                  type={passwordVisibility ? 'text' : 'password'}
                  value={password}
                  onChange={handleChangePassword('password')}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  visibility={passwordVisibility}
                  helperText={
                    isValidPassword
                      ? errorMessagePassword
                      : errorMessagePassword
                  }
                  errorHelperText={isValidPassword ? false : true}
                  sxHelperText={{ color: isValidPassword ? 'green' : 'red' }}
                />
              </Stack>
            </Stack>
            <Stack width={325} spacing={2} alignItems="flex-end" mt={6.125}>
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
                        textTransform: 'none',
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
                        textTransform: 'none',
                      }
                }
              />
              {loginError ? (
                <span
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 13,
                    color: 'red',
                  }}
                >
                  Votre email et/ou mot de passe est erroné !
                </span>
              ) : (
                ''
              )}
            </Stack>
          </Stack>

          <Stack
            sx={{
              backgroundColor: colors.lighterBlue,
            }}
            width="100%"
            height={{ sm: '100vh', xs: 271 }}
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              width={515.38}
              height={388.75}
              sx={{ display: { xs: 'none', sm: 'contents' } }}
            >
              <img src={illustrationCoderKaine} alt="illustration CoderKaine" />
            </Stack>
          </Stack>
        </Stack>
      </Grid>
    </>
  );
};

export default Login;
