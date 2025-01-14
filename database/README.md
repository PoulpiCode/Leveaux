# Requêtes SQL

Pour tout ce qui est requêtes SQL, nous utilisons le programme [sqlc](https://docs.sqlc.dev/en/latest/index.html) qui nous permet d'écrire des requêtes SQL puis de générer du code en TypeScript pour interagir avec la base de données.

Une fois que `sqlc` est installé sur votre ordinateur, naviguez dans le dossier
`database` où se trouve ce ficher *markdown*, et lancer la commande: `sqlc
generate`. Cela va générer le code selon les *queries* données dans le dossier
`./queries/`.

Si vous voulez exportez vos requêtes pour l'uliser avec le frontend,
dirigez-vous dans `main.ts` et faites l'exportation.

# Pour créer les tables

Je n'ai pas configuré `sqlc` pour qu'il manage la base de données (je n'ai pas
réussi), donc c'est à nous de créer les tables:

```bash
cat ./schemas/* | docker exec -i gerico-db psql -U postgres -d <database-name>
```

# Pour tester

## Utilisation avec NodeJS

Se trouver dans le répertoire `database`, et lancer la commande `npx tsc` pour
transpiler le code source *TypeScript* en *JavaScript*.

Executer la commande depuis le répertoire source: `node ./database/dist/main.js`

## Utilisation avec bun.js

> [Bun.js](https://bun.sh) est un nouvel interpréteur pour *JavaScript*, il a
l'avantage de pouvoir executer du code *TypeScript* sans qu'on ait à le
transpiler avant.

Executer la commande depuis le répertoire source: `bun ./database/src/main.ts`

