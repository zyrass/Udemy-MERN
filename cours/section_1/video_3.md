# Section N°1 - Introduction

## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la section suivante](../section_2/section_2.md)

## Vidéo N°3 - Environment & Setup

> Voici les pré-requis pour le bon fonctionnement du projet.

1. Compte à créé pour une meilleure expérience.

..1. [Un compte sur Github](https://github.com/) _Permet de stocker notre code versionné en ligne_
..2. [Un compte sur Postman](https://www.postman.com/) _Permet de testé des futurs requêtes http_
.... Equivalent en Français : [RESTAPI de DYMA](https://restapi.fr/)
..3. [Un compte sur MongoDB](https://www.mongodb.com/)

2. Les outils indispensable

..1. Avoir **node** d'installé sur son ordinateur
... Lien vers le site officiel : [Node](https://nodejs.org/en/)
... Node nous permet d'utiliser le gestionnaire de dépendance **NPM**
... Afin de voir si node est installé sur son ordinateur, il faut ouvrir dans un _terminal_ ou _invite de commande_ et saisir cette commande :
... `node --version` ou bien `node -v`
... Un numéro de version sera indiqué. Si c'est le cas vous pouvez continuer
... On peut également regarder le numéro de version de npm avec la commande :
... `npm --version` ou `npm -v`

..2. Avoir **Git** et **Git/Bash** d'installé sur son ordinateur.
... Git est un logiciel de versioning, il nous permet de revenir très simplement sur un code antérieur en cas de problème.
... Git Bash est avant tout utilisé pour les utilisateurs sur **windows**. En effet il va nous permettre d'utiliser des commande linux dans notre terminal.

..3. Un **IDE** d'installé sur sa machine.
... Plusieurs IDE existe. Pour la plus part ils sont entièrement gratuit et surtout ils font largement le travail souhaité.
... Exemple de quelques IDE existant et entièrement gratuit :

-   [visual studio code](https://visualstudio.microsoft.com/fr/) _Mon préféré et le pire c'est qu'il est développé par Microsoft :O_
-   [atom](https://atom.io/) _Déjà testé mais je n'ai pas accroché plus que ça malgré sa qualité_
-   [bracket](http://brackets.io/) _Pratique pour faire du html ou css au delà je le trouve limité malgré les extensions_
-   etc...

..4. Postman d'installé sur son ordinateur
... [Lien officiel](https://www.postman.com/)

..5. Un navigateur Internet. _J'utiliserai Google Chrome à titre personnel_

3. Extension à installé pour chrome

..1. [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=fr)
..2. [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=fr)

4. Extension à installé dans visual Studio code

..1. Prettier - Code formatter _Très pratique pour ré-indenté proprement notre code lors d'une sauvegarde du fichier_
..2. ES7 React/Redux/GraphQL/React-Native snippets _Raccourcis pour écrire plus rapidement du code react_

### Configuration de Prettier l'extension de visual studio code

> Pour se rendre dans la configuration il faut cliquer sur : **Fichier** > **Préférences** > **Paramètres**. Une fenêtre de configuration s'ouvre, dans la vidéo de Brad, à ce moment l'interface n'est pas la même. C'est tout simplement du au faite que la formation date un peu et que forcément l'IDE à été mis à jour. _Mais pas de panique c'est la même chose avec une interface graphique_. donc dans la barre de recherche, on saisit ces mots clés :

| Mot clé        | Valeur - _Entre parenthèse, c'est mes valeurs_                                     |
| -------------- | ---------------------------------------------------------------------------------- |
| format on save | Il faut que ce soit coché                                                          |
| fontsize       | 26 c'est ce que Brad inscrit. Libre à vous de choisir la taille souhaité. (16)     |
| tabSize        | Définit le nombre d'espace qui sera utilisé lors de l'appui sur la tabulation. (2) |
| wordWrap       | **on**                                                                             |
| prettier       | JSX single quote **doit être coché**                                               |
|                | Single Quote **doit être coché**                                                   |
|                | Semi **doit être coché**                                                           |
|                | Enabled Languages _on doit cliquer sur_ **Edit in settings.json**                  |

Une fenêtre s'ouvre et là on ajoute ce bou de code (Du json).

```json
"emmet.includeLanguages": { "javascript": "javascriptreact" },
```

> Emmet nous permet de saisir du code plus rapidement et donc de gagner beaucoup de temps. Le code ci-dessous permet de faire cohabiter le langage JSX de React avec Emmet.

_Petit exemple d'un code réaliser avec Emmet pour bien comprendre de ce que l'on parle_

```
ul>(li>a{item $})*6
```

_Résultat obtenu_

```html
<ul>
	<li><a href="">item 1</a></li>
	<li><a href="">item 2</a></li>
	<li><a href="">item 3</a></li>
	<li><a href="">item 4</a></li>
	<li><a href="">item 5</a></li>
	<li><a href="">item 6</a></li>
</ul>
```

> c'est vraiment très pratique, vous ne trouvez pas !?

## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Allez à la section suivante](../section_2/section_2.md)
