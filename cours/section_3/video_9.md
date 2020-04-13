## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la section précédente](../section_2/section_2.md)
-   [Allez à la liste de la section n°3](../section_3/section_3.md)
-   [Allez à la vidéo suivante](./video_10.md)

# Vidéo n°9 - Creating the User Model

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

## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la section précédente](../section_2/section_2.md)
-   [Allez à la liste de la section n°3](../section_3/section_3.md)
-   [Allez à la vidéo suivante](./video_10.md)
