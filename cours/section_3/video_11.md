## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la liste de la section précédente (Section N°2)](../section_2/section_2.md)
-   [Allez à la liste de la section n°3](../section_3/section_3.md)
-   [Allez à la liste de la section suivante (Section N°4)](../section_3/section_3.md)
-   [Allez à la vidéo précédente](./video_9.md)
-   [Allez à la vidéo suivante](./video_11.md)

# Vidéo n°11 - User Registration

-   Nous allons poursuivre avec la mise en place d'une simulation d'enregistrement d'un utilisateur dans la base de donnée sur mongoDB
-   On retourne dans le fichier **users.js**.
-   Au niveau de la condition de la requête post de notre router, on va spécifier 4 points clés :

1. On regarde si l'utilisateur existe</li>
2. On récupère l'avatar de l'utilisateur</li>
3. On va encrypter le password avec bcrypt</>
4. On terminera par un retour du jsonwebtoken <small>Qui sera vu dans le prochain cours</small></>

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
		check('name', 'Le champ "Nom" est requis').not().isEmpty(),
		check('email', 'Veuillez saisir un "E-mail" valide').isEmail(),
		check('password', 'Veuillez saisir un "Mot De Passe" avec minimum 6 caractères).isLength({
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

		// Etape 1 - Ici, on regardera si l'utilisateur existe dans la base de donnée
			// code ici ...

		// Etape 2 - Ici, on récupèrera l'avatar de l'utilisateur
			// code ici ...

		// Etape 3 - Ici, on encryptera le password avec bcrypt
			// code ici ...

		// Etape 4 - Ici, on terminera par un retour du jsonwebtoken (JWT)
			// code ici ...

		res.send('Users route POST');
	}
);

module.exports = router;
```

## Contenu des étapes

### Explications pour obtenir les informations

-- Avant tout, nous pouvons voir le contenu de notre requête avec ce code :

```js
req.body.name; // On affichera "Brad Traversy"
req.body.email; // On affichera "test@test.com"
req.body.password; // On affichera "123456"
```

### Explications et définitions de l'étape 1

-- Par le passé, enfin c'est encore d'actualité, nous aurions écrit ce genre de code :

```js
// Définition des constantes pour stocker l'information de notre utilisateur
const name = req.body.name;
const email = req.body.email;
const password = req.body.password;

// Constante pour tester l'avant et l'après
const test1 = req.body.name;
```

-- Aujourd'hui le code peut se tenir sur une seule ligne :

```js
// C'est ce qu'on appel le destructuring
// Le résultat sera équivalent au code précédemment écrit.
const { name, email, password } = req.body;

// Constante pour tester l'avant et l'après
const test2 = req.body.name;
```

-- Vérification si vous le souhaitez :

```js
console.table([
	{
		avant: test1,
	},
	{
		apres: test2,
	},
]);
```

-- Nous allons avoir besoin du models **User.js** qu'on a créé.

> Donc tout au début du fichier nous allons importer celui-ci.

-- Pour rappel ce fichier est exportée avec comme nom **User**

> Rappel de la ligne d'exportation _du fichier **User.js** :_

```js
module.exports = User = mongoose.model('user', UserSchema);
```

-- Ci-dessous, la constante utilisé pour importer le fichier **User.js**. A placer avec les constantes au tout début

```js
const User = require('../../models/User');
```

-- Nous allons utiliser _mongoose_ pour récupérer les données d'un utilisateur avec la méthode **findOne()**.
-- Nous allons ajouter _async_ devant **(req, res)** soit :

```js
router.post(
	'/',
	[
		/* check ... */
	],
	async (req, res) => {
		/* du code ... */
	}
);
```

-- Ensuite on y ajoute un bloc **try / catch**. On y déplacement toutes les étapes à l'intérieur du bloc **try**. soit :

```js
// ... du code
router.post(
	'/',
	[
		check('name', 'Le champ "Nom" est requis').not().isEmpty(),
		check('email', 'Veuillez saisir un "E-mail" valide').isEmail(),
		check('password', 'Veuillez saisir un "Mot De Passe" avec minimum 6 caractères).isLength({
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

		try {

			// Etape 1 - Ici, on regardera si l'utilisateur existe dans la base de donnée
				// code ici ...

			// Etape 2 - Ici, on récupèrera l'avatar de l'utilisateur
				// code ici ...

			// Etape 3 - Ici, on encryptera le password avec bcrypt
				// code ici ...

			// Etape 4 - Ici, on terminera par un retour du jsonwebtoken (JWT)
				// code ici ...

		} catch ( errors ) {

			// Ici on ajoutera un code d'erreur sous peu

		}

		res.send('Users route POST');
	}
);

module.exports = router;
```

-- Dans le bloc catch on va définir **un status 500** avec une erreur server en assignant un message d'erreur.

```js
// ... du code
try {
	// ... du code
} catch (errors) {
	console.error(errors.message);
	return req.status(500).send('Une erreur du serveur à été rencontré');
}
// du code ...
```

-- Lors de l'étape 1 **nodemon** rencontrera un problème.

> Pour delà il faudra rajouter dans les options du fichier **db.js** : `useCreateIndex: true`
> Je ne sais plus à quel moment nous avons besoin d'ajouter une autre option : `useUnifiedTopology: true`

Au cas où vous rencontrez un soucis, je vous met le code du fichier **db.js** ci-dessous :

```js
const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log('Le serveur est bien connecté....');
	} catch (error) {
		console.error(error.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
```

#### Etape 1 - Le code en lui même

-- Dans le bloc try, on définit un variable **user** qui sera ré-exploité. Cette variable contient **le model User**

> La méthode **findOne** est issue de **mongoDB**

-- On y ajoute un condition qui correspond à une vérification si notre utilisateur existe.

> Si c'est le cas on renverra un status d'erreur 400 avec au format JSON un tableau du message d'erreur

```js
// Etape 1 - On regarde si l'utilisateur existe
let user = await User.findOne({ email: email });

if (user) {
	return res.status(400).json({ errors: [{ msg: 'User déjà existant' }] });
}
```

### Passage à l'étape 2 - la gestion de l'image

-- Une fois ce petit problème corrigé, on peut y ajouter la constante pour gérer les avatars pour l'étape 2.

> Même chose que précédemment, la constante se situe tout en haut de notre fichier **users.js**

```js
const gravatar = require('gravatar');
```

-- On ajoute le code permettant de récupérer un gravatar.
-- On en profite pour créer à ce moment le nouvel utilisateur avec le mot de passe non crypté.

#### Code de l'étape 2

```js
// Etape 2 - On récupère l'avatar de l'utilisateur
const gravatar = gravatar.url(email, {
	s: '200', // Taille de l'image ici 200px.
	r: 'pg', // Read
	d: 'mm', // Default "mm" correspond à l'image par défaut de l'utilisateur "404" permet d'avoir une autre image
});

user = new User({
	name,
	email,
	avatar,
	password,
});
```

### Passage à l'étape 3 - Le cryptage du mot de passe

-- Pour justement **hashé le password**, on va devoir importer la dépendance bcrypt avec cette ligne de code :

> A savoir, dans le cours officiel, la dépendance **bcryptjs** est **déprécié**, j'ai donc utilisé la version recommandé soit **bcrypt**

```js
const bcrypt = require('bcrypt');
```

-- Pour crypter un mot de passe, on va devoir ajouté un **sel** d'une taille de 10 (c'est la recommanddation officiel).
-- Egalement, notre requête renvoie une promesse alors on va y avouter le mot clé : **await**

```js
// Etape 3 - On va encrypter le password avec bcrypt
const salt = await bcrypt.genSalt(10);
```

-- Donc, pour crypter le password on va utiliser le **sel** sur notre password avec ce code :

```js
// user.password correspond à l'objet user précédemment créer et on recherche la clé password
// la méthode hash de bcrypt prends 2 paramètres, le 1er étant notre mot de passe le second c'est le sel qu'on a généré précedemment
user.password = await bcript.hash(password, salt);
```

-- On fini par une sauvegarde de l'utilisateur avec ce code :

```js
await user.save();
```

### Etape 4 - A découvrir dans la prochaine vidéo

-- On peut allez rapidement sur l'étape 4 pour y modifier le message comme quoi l'utilisateur à bien été enregistré.

### Etape intermédiaire pour de la validation

-- Avant de voir le code JS complet, on peut se rendre sur mongodb et regarder dans notre collection qu'on a bien les données d'enregistrer.
-- Dans postman on peut tester l'existance de notre utilisateur en l'ajoutant directement à nouveau avec send.

#### Voici le code complet

```diff
- Rappel : Ne surtout pas oublier la modification du fichier db.js
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
		check('name', 'Le champ "Nom" est requis').not().isEmpty(),
		check('email', 'Veuillez saisir un "E-mail" valide').isEmail(),
		check('password', 'Veuillez saisir un "Mot De Passe" avec minimum 6 caractères).isLength({
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
				name,
				email,
				avatar,
				password
			});

			// On constatera que le mot de passe à cet instant n'est pas crypté

			// Etape 3 - On va encrypter le password avec bcrypt
			const salt = await bcrypt.genSalt(10);
			user.password = await bcript.hash(password, salt);
			await user.save();

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

## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la liste de la section précédente (Section N°2)](../section_2/section_2.md)
-   [Allez à la liste de la section n°3](../section_3/section_3.md)
-   [Allez à la liste de la section suivante (Section N°4)](../section_3/section_3.md)
-   [Allez à la vidéo précédente](./video_9.md)
-   [Allez à la vidéo suivante](./video_11.md)
