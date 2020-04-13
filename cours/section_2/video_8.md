## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la liste de la section n°2](../section_2/section_2.md)
-   [Allez à la vidéo précédente](./video_7.md)
-   [Allez à la section suivante](../section_3/section_3.md)

# Vidéo n°8 - Route Files With Express Router

-   On créer à la racine de l'application d'un dossier appelé "routes"
-   On créer un sous-dossier appelé : "api"
-   Ensuite on créer dans le dossier "api" 4 fichiers :
    -- "auth.js", "posts.js", "profile.js", "users.js"

    -- Le contenu des fichiers sera au début similaire hormis que les routes elles seront différentes.

    Pour users.js :

    ```js
    const express = require('express');
    const router = express.Router();

    // @route GET api/users
    // @desc Type route
    // @access Public

    router.get('/', (req, res) => res.send('User route'));

    module.exports = router;
    ```

    Pour auth.js :

    ```js
    const express = require('express');
    const router = express.Router();

    // @route GET api/auth
    // @desc Test route
    // @access Public

    route.get('/', (req, res) => res.send('Auth route'));

    module.exports = router;
    ```

    Pour profile.js :

    ```js
    const express = require('express');
    const router = express.Router();

    // @router GET api/profile
    // @desc Test route
    // @access Public

    route.get('/', (req, res) => res.send('Profile route'));

    module.exports = router;
    ```

    Pour posts :

    ```js
    const express = require('express');
    const router = express.Router();

    // @route api/posts
    // @desc Test route
    // @access Public

    router.get('/', (req, res) => res.send('Posts route'));

    module.exports = router;
    ```

-   Dans le fichier "server.js" on y ajoute les routes soit :

    ```js
    // Add Define Routes
    app.use('/api/users', require('./routes/api/users'));
    app.use('/api/auth', require('./routes/api/auth'));
    app.use('/api/profile', require('./routes/api/profile'));
    app.use('api/posts', require('./routes/api/posts'));
    ```

-   On peut lancer le serveur avec : **"npm run server"**
-   Dans une page web, on tape l'url : **"localhost:5000/"**
-   On ajoute a la fin "api/users" soit : **"localhost:5000/api/users"** et on devrait avoir un résultat.
-   On test les 4 routes et on peut passé à la section 3 si tout est OK

## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la liste de la section n°2](../section_2/section_2.md)
-   [Allez à la vidéo précédente](./video_7.md)
-   [Allez à la section suivante](../section_3/section_3.md)
