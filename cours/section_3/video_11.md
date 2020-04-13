## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la liste de la section n°3](../section_2/section_2.md)
-   [Allez à la vidéo précédente](./video_7.md)
-   [Allez à la section suivante](../section_3/section_3.md)

# Vidéo n°11 - User Registration

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
