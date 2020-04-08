# Section 2 - Express & MongoDB Setup

## Vidéo n°5 - MongoDB Atlas Setup

### MondoDB

-   Création d'un compte sur : https://mongodb.com/
-   Une fois enregistrer, il faut créer un nouveau projet (context > New Project)
-   On lui donne un nom "MEARN" puis on clique sur "next"
-   On clique sur "Create Project"
-   Une fenetre apparait on clique sur "Build a Cluster"
-   On sélectionne le premier choix (gratuit) en cliquant sur "Create a cluster"
-   On choisit le serveur qui stockera notre data "AWS" et "Frakfurt (eu-central-1)"
-   On clique sur Cluster Tier en s'assurant bien que nous avons une sandbox gratuite
-   Tout en bas on clique sur Cluster Name et on donne un nom à la base. Moi j'indique "DevConnector"
-   On clique Sur Create Cluster

-   On patiente le temps que la bdd se créé...

-   On clique sur Database Access et on ajout un User dans la DATABASE
-   On donne un nom et un password puis on s'assure que nous avons choisis : Read and write to any database
-   On clique sur "Network Access" et on ajout un Adresse IP. (On clique sur "ALLOW ACCESS FROM ANYWHERE et on confirme)

-   Les réglages sont fini on peut cliquer sur Clusters et "connect"

-   pour voir le contenu de la connexion on clique sur "Connect your application" et il reste plus qu'à copier le code soit pour l'exemple :
    `mongodb+srv://zyrass04:<password>@devconnector-jsojh.mongodb.net/test?retryWrites=true&w=majority`

### Mongoose

-   La doc officiel de mongoose : https://mongoosejs.com/

## Vidéo n°6 - Install Dependancies & Basic Express Setup

-   Ajout d'un fichier .gitignore en y ajoutant le répertoire "node_modules/"
-   Utilisatiopn de la commande "git init"
-   Utilisation et Initilisation de nodeJS avec un "npm init"
-   La configuration est simple :
    `description: Réseau Social pour développeur`
    `entry point: server.js`
    `author: Alain Guillon`
    `License: MIT`

-   Dans le fichier "package.json", on doit modifier le script avec l'ajout de cette ligne :
    `"start": "node server"` // npm start
    `"server": "nodemon server"` // npm run server

-   On install les dépendances : `npm i express express-validator bcrypt.js config gravatar jsonwebtoken mongoose request`
-   On install Nodemon: `npm i -D nodemon concurrently`

-   Création d'un fichier serveur.js
    Contenu du fichier server.js :

    -- const express = require('express);
    -- const app = express();
    -- app.get('/', (req, res) => res.send('API Runnning'));
    -- const PORT = process.env.PORT || 5000;
    -- app.listen(PORT, () => console.log(`Server started on port ${ PORT }`));

-   Une fois le fichier créer dans le terminal on peut lancer le server

## Vidéo n°7 - Connecting To MongoDB with Mongoose

-   Dans MongoDB on clique sur "connect" puis sur "connect your application" et on copie "l'url" généré

-   Dans notre application on créer un dossier "config"
-   Dans le dossier "config" on créer un fichier "default.json"
    -- Ce fichier "default.json" sera utilisé grâce à la dépendance "config" qu'on a installé dans notre "package.json"

-   dans le fichier "default.json" on lui ajoute l'URL qu'on a récupérer dans mongoDB. Le code pour moi sera le suivant :
    `{`
    `"mongoURI": "mongodb+srv://zyrass04:<password>@devconnector-jsojh.mongodb.net/test?retryWrites=true&w=majority"`
    `}`
-   On créer dans le dossier "config" un autre fichier "db.js" qui nous permettra de nous connecter à la base de donnée.
    -- Le contenu du fichier est le suivant :
    `const mongoose = require('mongoose');`
    `const config = require('config');` // https://www.npmjs.com/package/config
    `const db = config.get('mongoURI');`
    `const connectDB = async () => {`
    `try {`
    `await mongoose.connect(db, {`
    `useNewUrlParser: true`
    `useUnifiedTopology: true`
    `});`
    `console.log('MongoDB Connected...');`
    `} catch (error) {`
    `console.error( error.message )`;
    `process.exit(1); // Exit process with failure`
    `}`
    `};`
    `module.exports = connectDB;`

-   A ce moment on peut re lancer le server et tout devrait marcher correctement.
-   soit dans un terminal : "npm run server"

## Vidéo n°8 - Route Files With Express Router

-   On créer à la racine de l'application d'un dossier appelé "routes"
-   On créer un sous-dossier appelé : "api"
-   Ensuite on créer dans le dossier "api" 4 fichiers :
    -- "auth.js", "posts.js", "profile.js", "users.js"

    -- Le contenu des fichiers sera au début similaire hormis que les routes elles seront différentes.

    Pour users.js :
    `const express = require('express');`
    `const router = express.Router();`
    `// @route GET api/users`
    `// @desc Test route`
    `// @access Public`
    `route.get('/', (req, res) => res.send('User route'));`
    `module.exports = router;`

    Pour auth.js :
    `const express = require('express');`
    `const router = express.Router();`
    `// @route GET api/auth`
    `// @desc Test route`
    `// @access Public`
    `route.get('/', (req, res) => res.send('Auth route'));`
    `module.exports = router;`

    Pour profile.js :
    `const express = require('express');`
    `const router = express.Router();`
    `// @router GET api/profile`
    `// @desc Test route`
    `// @access Public`
    `route.get('/', (req, res) => res.send('Profile route'));`
    `module.exports = router;`

    Pour posts :
    `const express = require('express');`
    `const router = express.Router();`
    `// @route api/posts`
    `// @desc Test route`
    `// @access Public`
    `router.get('/', (req, res) => res.send('Posts route') );`
    `module.exports = router;`

-   Dans le fichier "server.js" on y ajoute les routes soit :
    `// Define Routes`
    `app.use('/api/users', require('./routes/api/users') );`
    `app.use('/api/auth', require('./routes/api/auth') );`
    `app.use('/api/profile', require('./routes/api/profile') );`
    `app.use('api/posts', require('./routes/api/posts') );`

-   On peut lancer le serveur avec : "npm run server"
-   Dans une page web, on tape l'url : "localhost:5000/"
-   On ajoute a la fin "api/users" soit : "localhost:5000/api/users" et on devrait avoir un résultat. On test les 4 routes et on peut passé à la section 3 si tout est OK
