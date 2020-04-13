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
