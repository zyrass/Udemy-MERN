# Section N°2 - Express & MongoDB Setup

## Lien rapide

-   [Retourner à la description principale](../blop/master/README.md)
-   [Allez à la section précédente](../blop/master/cours/section_1/section_1.md)
-   [Allez à la section suivante](../blop/master/cours/section_3/section_3.md)

## Vidéo n°5 - MongoDB Atlas Setup

### MondoDB

1. Création d'un compte sur : `https://mongodb.com/`
2. Une fois enregistrer, il faut créer un nouveau projet (Menu context > New Project)
3. On lui donne un nom **MEARN** puis on clique sur **next**
4. On clique sur **Create Project**
5. Une fenêtre apparait, on clique sur **Build a Cluster**
6. On sélectionne le premier choix _qui est gratuit_ en cliquant sur **Create a cluster**
7. On choisit le serveur qui stockera notre data (**_par exemple :_ AWS** et **Frakfurt (eu-central-1)**
8. On clique sur **Cluster Tier** en vérifiant bien que nous avons une sandbox gratuite.
9. Tout en bas on clique sur **Cluster Name** et on lui donne un nom.
   ... En suivant le cours de **Mr Traversy**, j'indique **DevConnector**
   ... Une fois le nom définit, on clique sur **Create Cluster**
   ... _On patiente le temps que la bdd soit créé_.
10. Une fois créé, on clique sur **Database Access** et on ajout un _User dans la DATABASE_.
11. On donne _un nom_ et _un password_ puis on s'assure que nous avons choisis : **Read and write to any database**
12. On clique sur **Network Access** et on ajoute une Adresse IP.
    ... On clique sur **ALLOW ACCESS FROM ANYWHERE** et on confirme

> Les réglages sont fini on peut cliquer sur **Clusters** et **connect**
> Pour voir le contenu de la connexion on clique sur **Connect your application** et il reste plus qu'à copier le code pour se connecter à mongoDB.

Pour l'exemple :
`mongodb+srv://zyrass04:<password>@devconnector-jsojh.mongodb.net/test?retryWrites=true&w=majority`

### Mongoose

-   La doc officiel de mongoose est disponible à cette adresse : [Lien vers la documentation officiel](https://mongoosejs.com/)
