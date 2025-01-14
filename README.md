# gerico

## Créer un ficher `.env`

> Ce fichier doit se trouver dans la source du projet.

Ce fichier est important, il permet de configuer les variables d'environnements,
il doit se composer ainsi:

```dotenv
POSTGRES_USER=postgres # Ne pas changer le nom d'utilisateur
POSTGRES_PASSWORD=1234 # Mettez ce que vous voulez
POSTGRES_DB=gericodb # Idem pour le nom de la DB
POSTGRES_HOST=localhost # Idem pour ça
POSTGRESS_PORT=5432 # Et idem pour ça
```

## Lancer le projet pour développer

> Prérequis: Avoir docker d'installé

### Lancer les conteneurs docker
```bash
docker-compose up --build
```
Le flag `-d` peut être utile si vous voulez l'avoir en arrière plan.

### Voir les modifications
Vous pouvez voir les modifications que vous apportez en temps réel en allant sur
`http://localhost:3000`

Vous pouvez aussi accéder à `http://localhost` qui est le serveur web *nginx*,
mais il faudra raffraichir la page pour voir les changements.

### Si erreurs : 

+ `npm init` dans gerico puis relancer docker-compose.
+ sur windows, evitez d'utiliser le terminal windows. Utilisez wsl our bash.
+ Essayer de changer de réseaux.

## Contribution

Chacun d'entre nous a une branche dédiée: `dev/votre_prénom`.
Veillez à bien push depuis votre branche.
Si vous voulez *merge* vos changements dans la branche `master`, merci de faire un
*Pull request* depuis GitHub.
