## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la liste de la section précédente (Section N°1)](../section_1/section_1.md)
-   [Allez à la liste de la section suivante (Section N°3)](../section_2/section_2.md)
-   [Allez à la vidéo précédente](./video_5.md)
-   [Allez à la vidéo suivante](./video_7.md)

# Vidéo n°6 - Install Dependancies & Basic Express Setup

### Etapes initialisation du projet

1. On créer un dossier appelé **MEARN** ou tout autre nom de préférence sans espace
2. On prends notre **terminal** ou bien nous utilisons celui intégré à **Visual Studio code** en allant dans : **Terminal** > **Nouveau terminal**
3. Dans ce terminal, nous allons saisir une 1ère commande :

```sh
# "git init" va nous permettre d'initialiser notre répertoire pour du versioning
# Pour pouvoir utiliser cette commande, il faut avoir installé git sur son ordinateur
git init
```

4. On va dans ce même terminal saisir une 2ème commande :

```sh
# "npm init" va nous permettre d'initialiser notre projet via des informations que l'on va saisir
# Ces informations seront récupérer sur un fichier "package.json"
npm init
```

| Les modifications à éditer | valeurs                        |
| -------------------------- | ------------------------------ |
| description                | Réseau Social pour développeur |
| entry point                | server.js                      |
| author                     | Brad Traversy                  |
| License                    | MIT                            |

Voici le fichier **package.json** qui sera initialisé

```json
{
	"name": "mern",
	"version": "1.0.0",
	"description": "Réseau Social pour développeur",
	"main": "server.js",
	"scripts": {
		"start": "node server" // Cette ligne n'est pas celle fournit lors de l'initialisation
	},
	"author": "Brad Traversy",
	"license": "MIT"
}
```

> Pour ce qui est de la configuration de ce fichier, il faut modifier la partie **scripts** par :

```json
{
	// ... du code
	"scripts": {
		"start": "node server",
		"server": "nodemon server"
	}
	// ... du code
}
```

> le second script, sera utilisé à l'étape 6

**Ces deux lignes de code nous permettrons via l'invite de commande de saisir ces commandes** :

| Code JSON                    | Commande à saisir dans un terminal | Résultat obtenu                                                                              |
| ---------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------- |
| `"start": "node server"`     | `npm start`                        | On démarre le projet et celui-ci se lancera dans une page web                                |
| `"server": "nodemon server"` | `npm run server`                   | Cette commande va nous permettre de lancer le server qui sera visible dans un autre terminal |

5. On créer un fichier **à la racine de notre projet** manuellement **sans nom** mais avec une extension spécifique `.gitignore`

> Le fichier ".gitignore" nous servira à indiquer quelles fichiers/dossiers
> on ne souhaitera pas suivre pour alourdir ou se protéger de quelques données senssible

D'ailleurs dans ce fichier, on va déjà pouvoir ajouter ce contenu :

```sh
# Excludes this folders
node_modules/
```

6. Installations de plusieurs dépendances :

```sh
# Les 2 commandes à saisir :
npm i express express-validator bcrypt config gravatar jsonwebtoken mongoose request
npm i -D nodemon concurrently
```

> bcrypt à été modifier dans le sens ou dans une vidéo, il est noté que la version utilisé est déprécié

7. Création à la racine du projet un fichier appelé : **server.js**

> Si vous avez bien suivie, ce fichier correspond **au point d'entrer du package.json**

```json
{
	// du code
	"main": "server.js"
	// du code
}
```

### Contenu du fichier server.js

```js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API Runnning'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```

> Une fois le fichier créer dans le terminal on peut lancer le server avec la commande vu précédemment

```sh
npm run server
```

## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la liste de la section précédente (Section N°1)](../section_1/section_1.md)
-   [Allez à la liste de la section suivante (Section N°3)](../section_2/section_2.md)
-   [Allez à la vidéo précédente](./video_5.md)
-   [Allez à la vidéo suivante](./video_7.md)
