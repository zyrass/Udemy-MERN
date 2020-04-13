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
	console.log('req :', req);
	console.log('req.body :', req.body);
	res.send('Users route POST');
});

module.exports = router;
```

-   A ce moment on se rends dans le fichier server.js et on initialise un Middleware

```js
// ... (code avant)

// Connect Database
connectDB();

// Init Middleware
// app.use(bodyParser.json());
app.use(
	express.json({
		extended: false,
	})
);

// ... (code après)
```

-   Une fois terminer on peut se rendre sur Postman et définir notre requete en y modifiant quelques options
-   Pour commencer on remplace le verbe GET par POST
-   On y modifie ensuite l'onglet `Headers` en y ajoutant **Content-Type** et sa valeur **application/json**
-   Dans l'onglet `Body` on sélectionne **row**
-   On peut à se moment ajouter dans le même onglet un petit bout de code que l'on va simuler pour voir si le UserSchema établi est correct

#### Exemple d'un 1er code

```json
{
	"name": "Brad Traversy"
}
```

-   Là, nous pouvons send le résultat. Le résultat attendu sera : **User route POST**
-   Et dans le terminal côté server nous obtiendrons bien le résultat :
    `{ name: 'Brad Traversy' }`

-   Là, à ce moment on peux utiliser la dépendance que l'on a installer soit : **express-validator**
-   Pour celà, dans le fichier **users.js** on y ajoute cette constante :

```js
const { check, validationResult } = require('express-validator');
// https://express-validator.github.io/docs/
```

-   Maintenant selon la documentation, il nous faut ajouter un second paramètre à : `router.post`

```diff
- Le code qui va être ajouté doit lui être positionné avant (req, res). L'ordre est extrêmement importante.
```

Soit nous obtenons ce code : **_Code complet_**

```js
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route POST api/user
// @desc Register user
// @access Public
router.post(
	'/',
	[
		check('name', 'Votre Nom est requis').not().isEmpty(),
        check('email', 'S.V.P, veuillez saisir un E-mail valide').isEmail(),
        check('password', 'S.V.P, veuillez saisir un password avec minimum 6 caractères).isLength({
            min: 6
        })
	],
	(req, res) => {
		console.log('req :', req);
    console.log('req.body :', req.body);

		const errors = validationResult(req);

		// Si le tableau d'errors n'est pas vide on lui définit un status d'erreur 400

		if ( !errors.isEmpty() ) {
			return res.status(400).json({
				errors: errors.array()
			})
		}

		res.send('Users route POST');
	}
);

module.exports = router;
```

-   Avec ce code, nous pouvons retourné sur Postman et faire des tests
-   Si par exemple on lance directement un requête avec uniquement le **name** nous obtiendrons un **status 400 Bad Request** avec le contenu du tableau d'erreur aisni que les messages d'erreurs associé.
-   en revanche si l'on supprime le code avec **name** nous obtiendrons l'erreur vis à vis du name en plus de ce qu'on avait déjà.
-   Pour que ça fonctionne, on définit un JSON correct :

```json
{
	"name": "Brad Traversy",
	"email": "test@test.com",
	"password": "123456"
}
```

-   Si on saisit toutes les bonnes valeurs, on se retrouve avec comme résultat un **status: 200 OK** avec **User route POST**
-   Si tout les tests on été réaliser avec succès, nous pouvons à ce moment sauvegarder notre requete en cliquant sur _la petite flèche_ à droite du bouton **save** soit : _save as_
-   Une fenêtre s'ouvre, on va tout en bas et on clique sur la collection **Users & Auth** qu'on a préalablement créer.
-   Tout en haut on définit le nom à _Register user_

## Vidéo n°11 - User Registration

-   Nous allons poursuivre avec la mise en place d'une simulation d'enregistrement d'un utilisateur dans la base de donnée de mongoDB
-   On retourne daans le fichier **users.js**
-   au niveau de la condition de la requête post de notre router, on va spécifier 4 points clés :
<ol>
	<li>On regarde si l'utilisateur existe</li>
	<li>On récupère l'avatar de l'utilisateur</li>
	<li>On va encrypter le password avec bcrypt</li>
	<li>On terminera par un retour du jsonwebtoken <small>Qui sera vu dans le prochain cours</small></li>
</ol>

-   Rappel du code du fichier JS actuel en y ajouter les emplacements que l'on va modifier

```js
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validation/check');

// @route POST api/user
// @desc Register users
// @access Public
router.post(
	'/',
	[
		check('name', 'Votre Nom est requis').not().isEmpty(),
		check('email', 'S.V.P, veuillez saisir un E-mail valide').isEmail(),
		check('password', 'S.V.P, veuillez saisir un password avec minimum 6 caractères).isLength({
			min: 6
		})
	],
	(req, res) => {
		console.log('req :', req);
		console.log('req.body :', req.body);

		const errors = validationResult(req);

		// Si le tableau d'errors n'est pas vide on lui définit un status d'erreur 400
		if ( !errors.isEmpty() ) {
			return res.status(400).json({
				errors: errors.array()
			})
		}

		// Etape 1 - On regarde si l'utilisateur existe
			// code ici ...

		// Etape 2 - On récupère l'avatar de l'utilisateur
			// code ici ...

		// Etape 3 - On va encrypter le password avec bcrypt
			// code ici ...

		// Etape 4 - On terminera par un retour du jsonwebtoken
			// code ici ...

		res.send('Users route POST');
	}
);

module.exports = router;
```

### Vidéo 11 - Etape 1 à 4 (la 4 n'est pas complète)

-   on peut voir le contenu d'un élément avec ce genre de ligne de code :

```js
// Affichera Brad Traversy
req.body.name;

// Affichera test@test.com
req.body.email;

// Affichera 123456
req.body.password;
```

-   Anciennement nous aurions écrit ce genre de code :

```js
// Définition des constantes
const name = req.body.name;
const email = req.body.email;
const password = req.body.password;
```

-   Aujourd'hui le code tient sur une seule ligne :

```js
// C'est ce qu'on appel le destructuring - Le résultat sera équivalent au code précédemment écrit.
const { name, email, password } = req.body;
```

-   Nous allons avoir besoin du models **User.js** qu'on a créé. Donc tout au début du fichier nous allons importer celui-ci.
-   Pour rappel ce fichier est exportée avec comme nom **User** :
-   Rappel de la ligne d'exportation du module **User.js**. `module.exports = User = mongoose.model('user', UserSchema);`
-   Ci-dessous, la constante utilisé pour importer le fichier **User.js**

```js
const User = require('../../models/User');
```

-   Vue que nous allons utiliser mongoose pour récupérer la data d'un utilisateur avec la méthode **findOne()**.
-   Nous allons ajouter _async_ devant **ici (req, res)** soit :

```js
router.post(
	'/',
	[
		/* check ... */
	],
	async (req, res) => {
		/* etc... */
	}
);
```

-   Ensuite on y ajoute un bloc **try / catch**. On y déplacement toutes les étapes à l'intérieur du bloc **try**. soit :
-   Dans le bloc catch on va définir **un status 500** avec une erreur server.
-   Lors de l'étape 1 nodemon rencontrera un problème. Pour delà il faudra rajouter dans les options du fichier **db.js**
    `useCreateIndex: true`

-   Une fois ceci corrigé on peut y ajouter la constante pour gérer les avatars pour l'étape 2.
    ```js
    const gravatar = require('gravatar');
    ```
-   On ajoute le code permettant de récupérer un gravatar (voir étape 2).
-   On crée à ce moment le nouvel utilisateur avec pour le moment le mot de passe qui n'est pas hashé. (voir la fin de l'étape 2)
-   Pour justement **hashé le password** et donc passé à l'étape 3, on va devoir importer la dépendance bcrypt avec cette ligne de code
    `const bcrypt = require('bcrypt');`
-   Pour l'étape 3 on va devoir ajouté un **sel** d'une taille de 10 (c'est la recommanddation officiel).
-   Egalement c'est une promesse alors on va y avouter le mot clé : **await** (Voir étape 3)
-   Pour crypter le password on va réutiliser le **sel** sur notre password avec ce code :
    `user.password = await bcrypt.hash(password, salt);`
-   On fini par une sauvegarde de l'utilisateur avec ce code : `await user.save();`
-   On peut allez rapidement sur l'étape 4 pour y modifier le message comme quoi l'utilisateur à bien été enregistré.

-   Avant de voir le code JS complet, on peut se rendre sur mongodb et regarder dans notre collection qu'on a bien des datas de renseigner
-   Dans postman on peut tester l'existance de notre utilisateur en l'ajoutant directement à nouveau avec send.

#### Voici le code complet

```diff
- Ne pas oublier la modification du fichier db.js
```

```js
const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validation');

const router = express.Router();

// @route POST api/user
// @desc Register users
// @access Public
router.post(
	'/',
	[
		check('name', 'Votre Nom est requis').not().isEmpty(),
		check('email', 'S.V.P, veuillez saisir un E-mail valide').isEmail(),
		check('password', 'S.V.P, veuillez saisir un password avec minimum 6 caractères).isLength({
			min: 6
		})
	],
	(req, res) => {
		// console.log('req :', req);
		console.log('req.body :', req.body);

		const errors = validationResult(req);

		// Si le tableau d'errors n'est pas vide on lui définit un status d'erreur 400
		if ( !errors.isEmpty() ) {
			return res.status(400).json({
				errors: errors.array()
			})
		}

		console.table( [req.body.name, req.body.email, req.body.password] );

		// Destructuring
		const { name, email, password } = req.body;

		try {

			// Etape 1 - On regarde si l'utilisateur existe
			let user = await User.findOne({ email: email });

			if (user) {
				return res.status(400).json({ errors: [{ msg: 'User déjà existant' }] });
			}

			// Etape 2 - On récupère l'avatar de l'utilisateur
			const gravatar = gravatar.url( email, {
				s: '200', // Taille de l'image ici 200px.
				r: 'pg', // Read
				d: 'mm' // Default "mm" correspond à l'image par défaut de l'utilisateur "404" permet d'avoir une autre image
			});

			user = new User({
		console.log( req.body.email );
		console.log( req.body.passwordz );{
				name,
				email,
				avatar,
				password
			});

			// Etape 3 - On va encrypter le password avec bcrypt
			const salt = await bcrypt.genSalt(10);
			user.password = await bcript.hash(password, salt);

			// Etape 4 - On terminera par un retour du jsonwebtoken
				// code ici ...

			res.send("L'utilisateur à bien été enregistrer");

		} catch( err ) {
			console.error(err.message);
			req.status('500').send('Server error');
		}
	}
);
```

-- voir la section suivante

## Vidéo n°12 - Implementing JWT

## Vidéo n°13 - Custom Auth Middleware & JWT Verify

## Vidéo n°14 - User Authentification / Login Route

```

```
