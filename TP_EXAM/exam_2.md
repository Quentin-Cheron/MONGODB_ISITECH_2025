# MongoDB Exam 2

## TP 1 : Indexation et optimisation des performances

### Exercicie 1.1 Préparation et analyse des performances sans index

#### 1. Génération des données

```js
for (let i = 0; i < 10; i++) {
  db.livres.insertOne({
    titre: `Livre ${i}`,
    auteur: `Auteur ${i}`,
    genre: "Science-fiction",
    prix: Math.floor(Math.random() * 100) + 10,
    note_moyenne: Math.floor(Math.random() * 100) + 5,
    date_ajout: new Date(),
    disponible: true,
  });
}
```

Voici un exemple de génération de données,
les fonctions utilisées sont dans les fichiers books.js et user.js dans le dossier GENERATION

#### 2. Analysez les performances des requêtes suivantes sans index

```js
db.livres.explain("executionStats").find({ titre: "Livre 1" });
```

```js
db.livres.explain("executionStats").find({ auteur: "Victor Hugo" });
```

```js
db.livres.explain("executionStats").find({
  $and: [
    { prix: { $gt: 10 } },
    { prix: { $lt: 20 } },
    { note_moyenne: { $gt: 4 } },
  ],
});
```

```js
db.livres
  .explain("executionStats")
  .find({
    $and: [
      { genre: { $in: ["Science-fiction", "Fantasy"] } },
      { langue: "Français" },
    ],
  })
  .sort({ note_moyenne: -1 });
```

#### 3. Pour chaque requête, notez dans un tableau

| totalDocsExamined | executionTimeMillis | Stage    | totalKeysExamined | nReturned |
| ----------------- | ------------------- | -------- | ----------------- | --------- |
| 100010            | 49                  | COLLSCAN | 0                 | 2         |
| 100010            | 46                  | COLLSCAN | 0                 | 9952      |
| 100010            | 51                  | COLLSCAN | 0                 | 2493      |
| 100010            | 72                  | COLLSCAN | 0                 | 20246     |

### Exercice 1.2 Création d'index simples et composites

#### 1. Créez des index appropriés pour optimiser chacune des requêtes précédentes

```js
db.livres.createIndex({ titre: 1 });

db.livres.explain("executionStats").find({ titre: "Livre 1" });
```

```js
db.livres.createIndex({ auteur: 1 });

db.livres.explain("executionStats").find({ auteur: "Victor Hugo" });
```

```js
db.livres.createIndex({ prix: 1, note_moyenne: 1 });

db.livres.explain("executionStats").find({
  $and: [
    { prix: { $gt: 10 } },
    { prix: { $lt: 20 } },
    { note_moyenne: { $gt: 4 } },
  ],
});
```

```js
db.livres.createIndex({ genre: 1 });

db.livres
  .explain("executionStats")
  .find({
    $and: [
      { genre: { $in: ["Science-fiction", "Fantasy"] } },
      { langue: "Français" },
    ],
  })
  .sort({ note_moyenne: -1 });
```

| totalDocsExamined | executionTimeMillis | Stage | totalKeysExamined | nReturned |
| ----------------- | ------------------- | ----- | ----------------- | --------- |
| 2                 | 3                   | FETCH | 2                 | 2         |
| 9952              | 20                  | FETCH | 9952              | 9952      |
| 2493              | 21                  | FETCH | 3493              | 2493      |
| 20256             | 46                  | FETCH | 20258             | 20246     |

On peut observer que les requêtes avec un index sont beaucoup plus rapides que celles sans index.

### Exercice 1.3 Index spécialisés

#### 1. Créez un index de texte (text index) sur les champs titre et description des livres.

```js
db.livres.createIndex({ titre: "text", description: "text" });
```

### 2. Testez une recherche de texte simple et analysez ses performances.

```js
db.livres
  .explain("executionStats")
  .find({ $text: { $search: "Description du livre 1." } });
```

| totalDocsExamined | executionTimeMillis | Stage      | totalKeysExamined | nReturned |
| ----------------- | ------------------- | ---------- | ----------------- | --------- |
| 100010            | 94                  | TEXT_MATCH | 100012            | 100010    |

On peut y voir une augmentation du temps d'exécution du fais de la recherche textuelle.

#### 3. Création d'une nouvelle collection sessions_utilisateurs

Ajout de la collection session_utilisateurs avec :

- Un ID utilisateur
- Une date de dernière activité
- Des données de session

#### 4. Création d'index TTL

```js
db.sessions_utilisateurs.createIndex(
  { date_last_activity: 1 },
  { expireAfterSeconds: 1800 }
);
```

Cela va créer un index TTL sur la collection sessions_utilisateurs pendant 30min.

## TP 2 : Requêtes géospatiales

### Exercice 2.1 Enrichissement des données

#### 1 Modification du schéma des données

```js
adresse: {
        rue: `Rue ${i + 1}`,
        ville: `Ville ${i + 1}`,
        code_postal: `75000${i + 1}`,
        pays: "France",
        localisation: {
          type: "Point",
          coordinates: [Math.random() * 180 - 90, Math.random() * 180 - 90],
        },
      },
```

#### 2 création d'une nouvelle collection bibliotheque

```js
db.createCollection("bibliotheques");
```

#### 3 Créez les index géospatiaux nécessaires sur les collections utilisateurs et bibliotheque

```js
db.utilisateurs.createIndex({ "adresse.localisation": "2dsphere" });

db.bibliotheques.createIndex({ "adresse.localisation": "2dsphere" });
```

### Exercice 2.2 Requêtes de proximité

#### 1 Trouver les 5 utilisateurs les plus proches d'un point donnée dans un rayon de 5km

```js
db.utilisateurs
  .find({
    "adresse.localisation": {
      $geoWithin: {
        $centerSphere: [[48.864716, 2.349014], 5 / 6378.1],
      },
    },
  })
  .limit(5);
```

#### 2 Trouver les bibliothèques les plus proches d'un utilisateur spécifique

```js
db.bibliotheques.find({
  "adresse.localisation": {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [
          [
            [2.2490597817787954, 48.916295123277784],
            [2.2275351459927903, 48.799552000530134],
            [2.4541748745009304, 48.78712944207157],
            [2.468063771952222, 48.92265098790673],
            [2.3616109090404764, 48.943285006559165],
            [2.2490597817787954, 48.916295123277784],
          ],
        ],
      },
    },
  },
});
```

#### 3 Utilisez l'opérateur $geoNear dans un pipeline d'agrégation

```js
db.bibliotheques.aggregate([
  {
    $geoNear: {
      near: {
        type: "Point",
        coordinates: [2.3522, 48.8566],
      },
      distanceField: "distance",
      maxDistance: 5000,
      spherical: true,
    },
  },
]);
```

### Exercice 2.3 Requêtes géospatiales avancées

#### 1 Utiliser $geoWithin pour trouver tous les utilisateurs

```js
db.utilisateurs.find({
  "adresse.localisation": {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [
          [
            [2.32, 48.87],
            [2.38, 48.87],
            [2.38, 48.83],
            [2.32, 48.83],
            [2.32, 48.87],
          ],
        ],
      },
    },
  },
});
```

#### 2 Trouvez tous les utilisateurs qui se trouvent dans la zone de service d'une bibliothèque spécifique

```js
db.utilisateurs.findOne({
  "adresse.localisation": {
    $geoIntersects: {
      $geometry: {
        type: "Point",
        coordinates: [2.351, 48.856],
      },
    },
  },
});
```

#### 3 Créez une collection rues avec au moins une rue représentée comme un LineString GeoJSON, puis utilisez $geoIntersects pour trouver les bibliothèques dont la zone de service intersecte cette rue

```js
db.rues.createIndex({ "adresse.localisation": "2dsphere" });
```

```js
db.rues.findOne({
  "adresse.localisation": {
    $geoIntersects: {
      $geometry: {
        type: "Point",
        coordinates: [2.351, 48.856],
      },
    },
  },
});
```

### Exercice 2.4 Cas d'utilisation métier

#### 1 Créez une collection livraisons pour suivre les livraisons de livres.

#### 2 Implémentez une fonction pour mettre à jour la position d'une livraison.

```js
const { MongoClient, ObjectId } = require("mongodb");

// Connexion à MongoDB
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const dbName = "bibliotheques_amazon";
const collectionName = "livraisons";

async function updateDeliveryPosition(deliveryId, newCoordinates) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.updateOne(
      { _id: new ObjectId(deliveryId) },
      {
        $set: {
          position_actuelle: {
            type: "Point",
            coordinates: newCoordinates,
          },
        },
      }
    );

    if (result.matchedCount === 0) {
      console.log("Aucune livraison trouvée avec cet ID.");
    } else {
      console.log("Position de la livraison mise à jour !");
    }
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
  } finally {
    await client.close();
  }
}

const livraisonId = "65f123abc123456789abcdef";
ID;
const nouvellePosition = [2.36, 48.857];
longitude, latitude;

updateDeliveryPosition(livraisonId, nouvellePosition);
```

#### 3. Créez une requête pour trouver toutes les livraisons en cours dans un rayon de 1km autour d'un point donné.

```js
db.livraisons.find({
  position_actuelle: {
    $geoWithin: {
      $centerSphere: [[48.864716, 2.349014], 1 / 6378.1],
    },
  },
});
```
