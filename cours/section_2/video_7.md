## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la liste de la section n°2](../section_2/section_2.md)
-   [Allez à la vidéo précédente](./video_6.md)
-   [Allez à la vidéo suivante](./video_8.md)

# Vidéo n°7 - Connecting To MongoDB with Mongoose

-   Dans MongoDB on clique sur "connect" puis sur "connect your application" et on copie "l'url" généré

-   Dans notre application on créer un dossier "config"
-   Dans le dossier "config" on créer un fichier "default.json"
    -- Ce fichier "default.json" sera utilisé grâce à la dépendance "config" qu'on a installé dans notre "package.json"

-   dans le fichier "default.json" on lui ajoute l'URL qu'on a récupérer dans mongoDB. Le code pour moi sera le suivant :

    ```json
    {
    	"mongoURI": "mongodb+srv://zyrass04:<password>@devconnector-jsojh.mongodb.net/test?retryWrites=true&w=majority"
    }
    ```

-   On créer dans le dossier "config" un autre fichier "db.js" qui nous permettra de nous connecter à la base de donnée.
    -- Le contenu du fichier est le suivant :

    ```js
    const mongoose = require('mongoose');
    const config = require('config'); // https://www.npmjs.com/package/config
    const db = config.get('mongoURI');

    const connectDB = async () => {
    	try {
    		await mongoose.connect(db, {
    			useNewUrlParser: true,
    			useUnifiedTopology: true,
    		});
    		console.log('MongoDB Connected...');
    	} catch (error) {
    		console.error(error.message);
    		process.exit(1); // Exit process with failure
    	}
    };

    module.exports = connectDB;
    ```

-   A ce moment on peut re lancer le server et tout devrait marcher correctement.
-   soit dans un terminal : **"npm run server"**

## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la liste de la section n°2](../section_2/section_2.md)
-   [Allez à la vidéo précédente](./video_5.md)
-   [Allez à la vidéo suivante](./video_7.md)
