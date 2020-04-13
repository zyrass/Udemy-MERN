## Vidéo n°6 - Install Dependancies & Basic Express Setup

-   Ajout d'un fichier .gitignore en y ajoutant le répertoire "node_modules/"
-   Utilisatiopn de la commande "git init"
-   Utilisation et Initilisation de nodeJS avec un "npm init"
-   La configuration est simple :

    ```
    description: Réseau Social pour développeur
    entry point: server.js
    author: Brad Traversy
    License: MIT
    ```

-   Dans le fichier "package.json", on doit modifier le script avec l'ajout de cette ligne :

    ```json
    // npm start
    "start": "node server",
    // npm run server
    "server": "nodemon server"
    ```

-   On install les dépendances : **npm i express express-validator bcrypt.js config gravatar jsonwebtoken mongoose request**
-   On install Nodemon: **npm i -D nodemon concurrently**

-   Création d'un fichier serveur.js
    Contenu du fichier server.js :

    ```js
    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 5000;

    app.get('/', (req, res) => res.send('API Runnning'));
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    ```

-   Une fois le fichier créer dans le terminal on peut lancer le server
