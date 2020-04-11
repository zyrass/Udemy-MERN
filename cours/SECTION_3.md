# Section 3 - User API Routers & JWT Authentication

## Vidéo n°9 - Creating the User Model

-   Création d'un dossier à la racine du serveur appelé : "models"
-   A l'intérieur on créer un fichier "User.js"
-   Le contenu du fichier "User.js" :

```js
const mongoose = require('mongoose');

// Création d'un schéma pour les utilisateurs
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = User = mongoose.model('user', UserSchema);
```

## Vidéo n°10 - Request & Body Validation

-   On va dans le dossiers "routes/api" et on sélectionne le fichier "users.js"
-   On modifie la route précédemment créer comme suit :

### Avant

```js
const express = require('express');
const router = express.Router();

// @route GET api/users
// @desc Test route
// @access Public
router.get('/', (req, res) => res.send('Users route GET'));

module.exports = router;
```

### Après

```js
const express = require('express');
const router = express.Router();

// @route POST api/users
// @desc Register user
// @access Public
router.post('/', (req, res) => {
	console.log({ req: [req, req.body] });
	res.send('Users route POST');
});

module.exports = router;
```

## Vidéo n°11 - User Registration

## Vidéo n°12 - Implementing JWT

## Vidéo n°13 - Custom Auth Middleware & JWT Verify

## Vidéo n°14 - User Authentification / Login Route
