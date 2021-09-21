# TODO

L'objectif est de réaliser les 3 taches suivantes sous forme d'une application React :

1. Se connecter : formulaire de connexion avec 2 champs saisies login + password et 1 bouton pour se connecter.
2. Afficher la liste des utilisateurs : sous forme de tableau.
3. Modifier un utilisateur : formulaire avec 2 champs de saisies nom + prénom et 1 bouton pour mettre à jour un utilisateur.

Envoyer le zip (sans les node_modules) contenant le code source que vous avez réalisé à l'adresse contact@coderkaine.com pour valider l'exercice.

# Contrat d'api

- Utiliser l'application Postman et importer le fichier `Coderkaine CDI Front-end Dev.postman_collection.json` pour avoir le contrat d'api contentn 3 exemples vous permettant de réaliser l'exercice. Voir la vidéo `Aide import Postman.mov` pour savoir comment importer dans Postman.

# 3 requêtes du contrat d'api

Niveau sécurité applicatif, nous utilisons `OAuth 2.0 Bearer Token` (voir doc : https://www.oauth.com/oauth2-servers/making-authenticated-requests/).

## 1. Se connecter

Login : contact+usertest@coderkaine.com
Password : #K5nCK/8

- endpoint : https://api-pp.hifivework.com/apiv1/auth/login

Dans la réponse de la requete login, vous récupérerez un grand nombre de champs dont :

- `id` : l'id de l'utilisateur courant
- `authToken` : le jeton d'authentification Bearer de l'utilisateur
- `company.id` : l'id de l'entreprise de l'utilisateur

## 2. Lister les employés

- endpoint : https://api-pp.hifivework.com/apiv1/company/[companyId]/employees

## 3. Mettre à jour un employé

- endpoint : https://api-pp.hifivework.com/apiv1/auth/[userId]

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
