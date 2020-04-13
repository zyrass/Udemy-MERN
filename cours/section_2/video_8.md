## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la liste de la section précédente (Section N°1)](../section_1/section_1.md)
-   [Allez à la vidéo précédente](./video_7.md)
-   [Allez à la liste de la section suivante (Section N°3)](../section_2/section_2.md)

# Vidéo n°8 - Route Files With Express Router

### Création d'un dossier pour la gestions des routes de l'applications

-- On créer à la racine de l'application d'un dossier appelé **routes**
-- On créer dans ce dossier **un sous-dossier** appelé : **api**
-- Ensuite on créer dans le dossier **api 4 fichiers** :

| Nom du fichier |
| -------------- |
| auth.js        |
| posts.js       |
| profile.js     |
| users.js       |

> Le contenu des fichiers sera au début similaire hormis que les routes elles seront différentes.

### Le code pour le fichier users.js :

```js
const express = require('express');
const router = express.Router();

// @route GET api/users
// @desc Type route
// @access Public

router.get('/', (req, res) => res.send('User route GET'));

module.exports = router;
```

### Le code pour le fichier auth.js :

```js
const express = require('express');
const router = express.Router();

// @route GET api/auth
// @desc Test route
// @access Public

route.get('/', (req, res) => res.send('Auth route GET'));

module.exports = router;
```

### Le code pour le fichier profile.js :

```js
const express = require('express');
const router = express.Router();

// @router GET api/profile
// @desc Test route
// @access Public

route.get('/', (req, res) => res.send('Profile route GET'));

module.exports = router;
```

### Le code pour le fichier posts.js :

```js
const express = require('express');
const router = express.Router();

// @route api/posts
// @desc Test route
// @access Public

router.get('/', (req, res) => res.send('Posts route GET'));

module.exports = router;
```

### Dans le fichier "server.js" on y ajoute les routes soit :

```js
// ... du code

// Add Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('api/posts', require('./routes/api/posts'));

// du code ...
```

-- On peut lancer le serveur avec : **npm run server**
-- Dans une page web, on tape l'url suivante : **localhost:5000/**
-- On ajoute a la fin **api/users** soit : **localhost:5000/api/users** et on devrait avoir un résultat.

### Via postman, nous pouvons tester nos routes

-- On test les 4 routes et on peut passé à la section 3 si tout est OK

## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la liste de la section précédente (Section N°1)](../section_1/section_1.md)
-   [Allez à la vidéo précédente](./video_7.md)
-   [Allez à la liste de la section suivante (Section N°3)](../section_2/section_2.md)
