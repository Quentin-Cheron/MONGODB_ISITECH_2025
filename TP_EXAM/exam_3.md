# MongoDB Exam 3

## Exercice 3.1 Agrégation de base

### 1. Créez un pipeline d'agrégation pour calculer les statistiques suivantes par genre de livre

```js
db.livres.aggregate([
  {
    $group: {
      _id: "$genre",
      note_moyenne: { $avg: "$note_moyenne" },
      prix_moyen: { $avg: "$prix" },
      prix_min: { $min: "$prix" },
      prix_max: { $max: "$prix" },
      count: { $sum: 1 },
    },
  },
]);
```

### 2. Analysez la répartition des livres par éditeur

```js
db.livres.aggregate([
  {
    $group: {
      _id: "$editeur",
      nb_livres: { $sum: 1 },
      genres: { $addToSet: "$genre" },
      auteurs: { $addToSet: "$auteur" },
      note_moyenne: { $avg: "$note_moyenne" },
    },
  },
  {
    $project: {
      _id: 0,
      editeur: "$_id",
      nb_livres: 1,
      nb_genres: { $size: "$genres" },
      nb_auteurs: { $size: "$auteurs" },
      note_moyenne: 1,
    },
  },
]);
```

### 3 créez un pipeline d'agrégation pour analyser les habitudes d'emprunt par ville d'utilisateur.

```js
db.utilisateurs.aggregate([
  {
    $unwind: "$livres_empruntes",
  },
  {
    $group: {
      _id: {
        ville: "$adresse.ville",
        genre: "$livres_empruntes.genre",
      },
      count: { $sum: 1 },
    },
  },
  {
    $sort: { count: -1 },
  },
  {
    $group: {
      _id: "$_id.ville",
      nb_emprunt_ville: { $sum: "$count" },
      genre_plus_frequent: { $first: "$_id.genre" },
    },
  },
  {
    $project: {
      _id: 0,
      ville: "$_id",
      nb_emprunt_ville: 1,
      genre_plus_frequent: 1,
    },
  },
]);
```

## Exercice 3.2 Aggregation avancée

### 1. Analysez les durées d'emprunt en calculant

```js
db.utilisateurs.aggregate([
  { $unwind: "$livres_empruntes" },
  {
    $group: {
      _id: "$livres_empruntes",
      date_emprunt_min: { $min: "$livres_empruntes.date_emprunt" },
      date_emprunt_max: {
        $convert: { input: "$livres_empruntes.date_emprunt", to: "date" },
      },
      duree_emprunt: { $avg: { $toDate: "$livres_empruntes.date_emprunt" } },
      count: { $sum: 1 },
    },
  },

  {
    $project: {
      _id: 0,
      date_emprunt_min: 1,
      date_emprunt_max: 1,
      duree_emprunt: { $toDate: "$duree_emprunt" },
      count: 1,
    },
  },
]);
```

### 2. Utilisez l'opérateur $lookup pour joindre les collections livres et utilisateurs afin d'analyser quels livres sont les plus empruntés et par qui

```js
db.livres.aggregate([
  {
    $unwind: {
      path: "$livres_empruntes",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $lookup: {
      from: "utilisateurs",
      localField: "_id",
      foreignField: "livres_empruntes._id",
      as: "utilisateurs",
    },
  },
]);
```
