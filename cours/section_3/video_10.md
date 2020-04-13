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
