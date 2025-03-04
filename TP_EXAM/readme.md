# TP Exam

## Partie 2 : Requêtes de lecture (Read)

### 1. Listez tous les livres disponibles

```js
db.livres.find();
```

### 2. Trouvez les livres publiés après l'an 2000

```js
db.livres.find({ date_ajout: { $gt: new Date("2000-01-01") } });
```

### 3. Trouvez les livres d'un auteur spécifique

```js
db.livres.find({ auteur: "J.R.R. Tolkien" });
```

### 4. Trouvez les livres qui ont une note moyenne supérieure à 4

```js
db.livres.find({ note_moyenne: { $gt: 4 } });
```

### 5. Listez tous les utilisateurs habitant dans une ville spécifique

```js
db.utilisateurs.find({ "adresse.ville": "Paris" });
```

### 6. Trouvez les livres qui appartiennent à un genre spécifique

```js
db.livres.find({ genre: { $in: ["Science-fiction", "Fantasy"] } });
```

### 7. Trouvez les livres qui ont à la fois un prix inférieur à 15€ et une note moyenne supérieure à 4

```js
db.livres.find({
  $and: [{ prix: { $lt: 15 } }, { note_moyenne: { $gt: 4 } }],
});
```

### 8. Trouvez les utilisateurs qui ont emprunté un livre spécifique (par titre)

```js
db.utilisateurs.find({
  "livres_empruntes.titre": "Les Misérables",
});
```

## Partie 3 : Mise à jour de documents (Update)

### 1. Mettez à jour le titre d'un livre spécifique

```js
db.livres.update(
  { titre: "Les Misérables" },
  { $set: { titre: "Les Pas Misérables" } }
);
```

### 2. Ajoutez un champ `stock` à tous les livres avec une valeur par défaut de 5

```js
db.livres.update({}, { $set: { stock: 5 } });
```

### 3. Marquez un livre comme indisponible (disponible = false)

```js
db.livres.update(
  { titre: "Les Pas Misérables" },
  { $set: { disponible: false } }
);
```

### 4. Ajoutez un nouvel emprunt dans la liste `livres_empruntes` d'un utilisateur

```js
db.utilisateurs.update(
  { _id: ObjectId("67c6ba22a0fce5938d2c134a") },
  {
    $push: {
      livres_empruntes: {
        titre: "Les Misérables",
        livre_id: ObjectId("67c6ba22a0fce5938d2c134a"),
        auteur: "Victor Hugo",
        genre: "Fantasy",
        date_ajout: new Date(),
      },
    },
  }
);
```

### 5. Changez l'adresse d'un utilisateur

```js
db.utilisateurs.update(
  {
    _id: ObjectId("67c6ba22a0fce5938d2c134a"),
  },
  {
    $set: {
      adresse: { rue: "rue de la paix", code_postal: "75001", ville: "Paris" },
    },
  }
);
```

### 6. Ajoutez un nouveau tag à un utilisateur

```js
db.utilisateurs.update(
  { _id: ObjectId("67c6ba22a0fce5938d2c134a") },
  {
    $push: {
      tags: "Hello",
    },
  }
);
```

### 7. Mettez à jour la note moyenne d'un livre

```js
db.livres.update(
  { _id: ObjectId("67c6b860a0fce5938d2c12e4") },
  {
    $set: {
      note_moyenne: 3,
    },
  }
);
```
