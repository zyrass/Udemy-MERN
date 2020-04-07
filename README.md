# MEARN project

## Pré-requis

### Les outils indispensable

-   Avoir node d'installé
-   Git / Git Bash
-   Un IDE ( visual studio code, atom, bracket etc...)

### Compte gratuit à créer

-   Un compte sur Postman
-   Un compte Github

### Dans chrome (Extension)

-   React Developer Tools
-   Redux DevTools

### Dans visual Studio code

-   Prettier - Code formatter
-   ES7 React/Redux/GraphQL/React-Native snippets

## Configuration de Prettier

-   format on save [X]

-   prettier
    -- Prettier: JSX Single Quote [X]
    -- Prettier: Single Quote [X]
    -- Prettier: Semi [X]

    -- Prettier: Disable Languages, on clique sur Edit in settings.json

    -- on y ajoute : `emmet.includeLanguages": { "javascript": "javascriptreact" },`

-   fontsize 26
-   tabSize 2
-   wordWrap on

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
