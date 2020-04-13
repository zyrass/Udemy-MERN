## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Voir la liste de la section en cours](../section_1/section_1.md)
-   [Allez à la section suivante (Section N°2)](../section_2/section_2.md)

# Vidéo N°3 - Environment & Setup

Voici les pré-requis pour le bon fonctionnement du projet.

### 1. Comptes à créer pour comprendre chaque étapes.

-   [Un compte sur Github](https://github.com/) **Nous permets de stocker notre code versionné sur internet**
-   [Un compte sur MongoDB](https://www.mongodb.com/) **Nous permets de stocker des données dans une base de donnée en ligne**
-   [Un compte sur Postman](https://www.postman.com/) **Nous permettra de tester des futurs requêtes HTTP**.

> Un équivalent à **Postman** existe en Français il s'agit de [RESTAPI](https://restapi.fr/) créer par [DYMA.FR](https://dyma.fr)

### 2 - Les outils indispensable pour un meilleur espace de travail

-   Avoir **node** d'installé sur son ordinateur

> Lien vers le site officiel : [Node](https://nodejs.org/en/)
> Node nous permet d'utiliser le gestionnaire de dépendance **NPM** (_Node package manager_)
> Afin de voir si node est installé sur son ordinateur,
> il faut ouvrir dans un _terminal_ ou _invite de commande_ et saisir cette commande :

**Pour connaître la version utilisé**, dans le terminal, nous pouvons saisir 1 ligne de commande.

```sh
# Syntaxe longue
node --version
# Synthax raccourcie
node -v
```

Un numéro de version vous sera indiqué. **Si c'est le cas vous pouvez continuer**
Egalement, nous pouvons voir le numéro de version de **NPM** avec la commande :

```sh
# Synthaxe longue
npm --version
# Synthaxe raccourcie
npm -v
```

-   Avoir **Git** et **Git/Bash** d'installé sur son ordinateur. [page officiel de git](https://git-scm.com/)

> Git est un logiciel de versioning.
> Il nous permet de revenir très simplement sur un code antérieur en cas de problème.
> Git Bash est avant tout utilisé pour les utilisateurs sur **windows**.
> En effet il va nous permettre d'utiliser des commandes linux dans notre terminal.

-   Il nous faut aussi un **IDE** d'installé sur son ordinateur. (_Integrated Development Environment_)

> En français on appel aussi EDI (_Environnement de Développement « Intégré »_)
> Plusieurs IDE existe. Pour la plus part ils sont entièrement gratuit et surtout ils font largement le travail souhaité.

Exemple de quelques IDE existant et entièrement gratuit :

1.  [visual studio code](https://visualstudio.microsoft.com/fr/) _Mon préféré et le pire c'est qu'il est développé par Microsoft :O_
2.  [atom](https://atom.io/) _Déjà testé mais je n'ai pas accroché plus que ça malgré sa qualité_
3.  [bracket](http://brackets.io/) _Pratique pour faire du html ou css au delà je le trouve limité malgré ces nombreuses extensions_

-   Postman d'installé sur son ordinateur - [Lien officiel pour postman](https://www.postman.com/)
-   Un navigateur Internet. - **Personnellement j'utiliserais Google Chrome.**
-   quelques extensions a installer pour chrome

1. [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=fr)
2. [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=fr)

-   Extension a installer dans visual Studio code

1. Prettier - Code formatter **Très pratique pour ré-indenté proprement notre code lors d'une sauvegarde du fichier**
2. ES7 React/Redux/GraphQL/React-Native snippets **Raccourcis pour écrire plus rapidement du code react**

### Configuration de Prettier l'extension de visual studio code

> Pour se rendre dans la configuration il faut cliquer sur : **Fichier** > **Préférences** > **Paramètres**.
> Une fenêtre de configuration s'ouvre, dans la vidéo de **Brad**, à ce moment **l'interface n'est pas la même**.
> C'est tout simplement du au faite que la formation date un peu et que forcément l'IDE à été mis à jour.
> **Mais pas de panique c'est la même chose avec une interface graphique**.

Donc dans la barre de recherche, on saisit ces mots clés :

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

Emmet nous permet de saisir du code plus rapidement et donc de gagner beaucoup de temps. Le code ci-dessous permet de faire cohabiter le langage JSX de React avec Emmet.

### Exemple d'un code réaliser avec Emmet

> Ce code c'est vraiment histoire de bien comprendre de ce quoi on parle parle:

_Code Emmet_

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

> c'est chouette non ?

## Lien rapide

-   [Retourner à la description principale](../../README.md)
-   [Voir la liste de la section en cours](../section_1/section_1.md)
-   [Allez à la section suivante (Section N°2)](../section_2/section_2.md)
