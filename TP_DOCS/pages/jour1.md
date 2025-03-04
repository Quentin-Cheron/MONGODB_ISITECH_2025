---
# Vous pouvez modifier le thème si nécessaire
theme: default
# Image de fond (optionnelle)
background: https://source.unsplash.com/collection/94734566/1920x1080
# Information sur la présentation (markdown autorisé)
title: Formation MongoDB - Jour 1
info: |
  ## Formation MongoDB - Jour 1
  Fondamentaux et Requêtes MongoDB

  Pour les étudiants du module UA3-14
# Appliquer des classes unocss à la slide courante
class: text-center
# Transitions entre slides
transition: slide-left
# Active la syntaxe MDC
mdc: true
---

# Formation MongoDB
## Jour 1 : Fondamentaux et Requêtes

<div class="pt-12">
  <span class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Appuyez sur Espace pour passer à la slide suivante <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://mongodb.com" target="_blank" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:logo-github />
  </a>
</div>

---
layout: center
class: text-center
---

# Conclusion de la journée

Synthèse et travail personnel pour demain

---

# Récapitulatif des concepts clés

<div class="grid grid-cols-2 gap-4">
<div>

## Concepts fondamentaux
- Base de données NoSQL orientée document
- Flexibilité du schéma et modèle de données JSON/BSON
- Structure: bases de données, collections, documents
- Atlas comme solution cloud vs installation locale

## CRUD operations
- Create: insertOne(), insertMany()
- Read: find(), findOne()
- Update: updateOne(), updateMany(), opérateurs $set, $inc...
- Delete: deleteOne(), deleteMany(), drop()

</div>
<div>

## Requêtes avancées
- Opérateurs de comparaison: $eq, $gt, $lt, $in...
- Opérateurs logiques: $and, $or, $not, $nor
- Requêtes sur tableaux: $all, $elemMatch, $size
- Requêtes sur documents imbriqués
- Projection, pagination et tri

## Interfaces
- MongoDB Shell (mongosh)
- MongoDB Compass
- Drivers de programmation (Node.js, Python, etc.)

</div>
</div>

---

# Pour la prochaine session

<div class="grid grid-cols-2 gap-4">
<div>

## Travail personnel
- Terminer les exercices du TP
- Explorer la documentation officielle de MongoDB
- Réfléchir aux cas d'utilisation personnels/professionnels

## Questions à se poser
- Comment optimiser mes requêtes complexes ?
- Comment modéliser mes données relationnelles en NoSQL ?
- Quels types d'index me seraient utiles ?

</div>
<div>

## Préparez-vous pour demain
Nous aborderons :
- L'indexation et l'optimisation des performances
- Les requêtes géospatiales
- Le framework d'agrégation

## Ressources supplémentaires
- [Documentation MongoDB CRUD](https://docs.mongodb.com/manual/crud/)
- [MongoDB University - M001: MongoDB Basics](https://university.mongodb.com/courses/M001/about)
- [Guide de modélisation des données](https://docs.mongodb.com/manual/core/data-modeling-introduction/)

</div>
</div>

---
layout: center
class: text-center
---

# Introduction au NoSQL et à MongoDB

Les fondamentaux pour comprendre la révolution des bases de données non-relationnelles

---
transition: fade-out
---

# Qu'est-ce que le NoSQL ?

NoSQL signifie "Not Only SQL" - une famille de bases de données qui s'éloigne du modèle relationnel traditionnel.

<div class="grid grid-cols-2 gap-4 mt-4">
<div>

## Caractéristiques principales

- Schéma flexible ou absent
- Conçu pour la scalabilité horizontale
- Optimisé pour des modèles de données spécifiques
- Compromis dans la cohérence (CAP théorème)

</div>
<div>

## Types de bases NoSQL

- **Document** : MongoDB, CouchDB
- **Clé-valeur** : Redis, DynamoDB
- **Colonne** : Cassandra, HBase
- **Graphe** : Neo4j, OrientDB

</div>
</div>

<!--
Contexte d'émergence : explosion des données du web, besoins de scaling, limites perçues des SGBDR traditionnels
-->

---

# Comparaison avec les bases relationnelles

<div class="overflow-auto">

| Concept SQL | Concept MongoDB | Description |
|-------------|-----------------|-------------|
| Database    | Database        | Conteneur physique pour les collections |
| Table       | Collection      | Groupe de documents MongoDB |
| Row         | Document        | Enregistrement unique dans une collection |
| Column      | Field           | Paire clé-valeur dans un document |
| Index       | Index           | Améliore les performances des requêtes |
| JOIN        | $lookup & Embedding | Association entre documents |
| Primary Key | _id Field       | Identifiant unique pour chaque document |

</div>

<div v-click>

## Différences fondamentales

- **Schéma** : Fixe (SQL) vs Flexible (MongoDB)
- **Relations** : Jointures explicites vs Documents imbriqués
- **Scalabilité** : Verticale vs Horizontale
- **Transactions** : ACID complet vs ACID par document (avant v4.0)
- **Requêtes** : SQL vs Syntaxe orientée objet

</div>

---
layout: two-cols
class: gap-4
---



::left::

# Pourquoi MongoDB ?

<div class="mr-1">

## Forces

- Schéma flexible adaptatif
- Modèle de données intuitif (JSON)
- Performances élevées en lecture/écriture
- Scalabilité horizontale (sharding natif)
- Requêtes riches et expressives
- Indexation avancée
- Distribution géographique
- Support de transactions multi-documents

</div>

::right::

<div class="mt-14" ></div>

## Cas d'usage

<div class="mt-0">

- Applications web et mobiles
- Gestion de contenus (CMS)
- E-commerce (catalogues produits)
- IoT et données en temps réel
- Big Data et analytique
- Gestion de métadonnées
- Stockage de données de configuration
- Caching et sessions

</div>

<div class="mt-4">
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--wXk-XIoX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2igufe1yw7vrb5cdi3kp.jpg" class="h-40 mx-auto rounded shadow" />
</div>

---
layout: center
---

# Architecture de MongoDB

<div class="grid gap-10">
<div class="flex flex-col items-center">

## Structure logique

```mermaid {scale: 0.7}
graph TD
    A[MongoDB Deployment] --> B[Databases]
    B --> C[Collections]
    C --> D[Documents]
    D --> E[Fields]
    E --> F["Values (Strings, Numbers, Arrays, etc.)"]
```

</div>
<div class="flex flex-col items-center">

## Structure physique

```mermaid {scale: 0.7}
graph TD
    A[MongoDB Deployment] --> B[Standalone]
    A --> C[Replica Set]
    A --> D[Sharded Cluster]
    C --> E[Primary Node]
    C --> F[Secondary Nodes]
    D --> G[Config Servers]
    D --> H[Mongos Routers]
    D --> I[Shards]
    I --> J[Replica Sets]
```

</div>
</div>

---

# Le Format BSON

BSON (Binary JSON) est le format de stockage et d'échange de données utilisé par MongoDB.

<div class="grid grid-cols-2 gap-4">
<div>

## Caractéristiques

- Extension binaire de JSON
- Encodage plus efficace en espace
- Support de types additionnels
- Optimisé pour la traversée rapide
- Conçu pour la sérialisation/désérialisation rapide

</div>
<div>

## Types de données BSON

- Types de base: String, Number, Boolean, Null
- Types étendus:
  - ObjectId (identifiant unique sur 12 octets)
  - Date (timestamp UNIX en millisecondes)
  - BinData (données binaires)
  - RegExp (expressions régulières)
  - Timestamp (horodatage interne)
  - NumberDecimal, NumberLong, NumberInt

</div>
</div>

<div v-click class="mt-2">

Exemple de document BSON:

```javascript
{
  _id: ObjectId("6073c7dcc216d42d5bd9a0d4"),
          nom: "Dupont",
          age: 42,
          actif: true,
          creation: ISODate("2023-03-01T14:25:00Z"),
          scores: [ 85, 92, 78 ],
          adresse: {
    rue: "123 Avenue Example",
            ville: "Paris",
            codePostal: "75001"
  }
}
```

</div>

---
layout: center
class: text-center
---

# Installation et premiers pas avec MongoDB

Configuration de l'environnement, interfaces et concepts fondamentaux

---

# Options d'installation

<div class="grid grid-cols-2 gap-8">
<div>

## MongoDB Atlas (Cloud)

1. Création d'un compte sur [mongodb.com/atlas](https://mongodb.com/atlas)
2. Déploiement d'un cluster gratuit (M0)
3. Configuration du réseau (liste blanche IP)
4. Création d'un utilisateur pour la connexion
5. Obtention de la chaîne de connexion

<div class="mt-4 text-center">
<img src="https://images.contentstack.io/v3/assets/blt7151619cb9560896/blta721487f156245a2/6666f86ebd762a68c5593599/atlas-load-sample-data.png" class="h-40 mx-auto rounded shadow" />
</div>

</div>
<div>

## Installation locale

**Windows**:
- Téléchargement de l'installateur MSI
- Assistant d'installation
- Option "MongoDB as a Service"

**macOS**:
```bash
brew tap mongodb/brew
brew install mongodb-community
```

**Linux (Ubuntu)**:
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

</div>
</div>

---

# Interfaces MongoDB

<div class="grid grid-cols-2 gap-4 mt-4">
<div>

## MongoDB Shell (mongosh)

Interface ligne de commande interactive avec syntaxe JavaScript:

```javascript
// Connexion
mongosh "mongodb+srv://user:pass@cluster.mongodb.net/dbname"

// Liste des bases de données
show dbs

// Utilisation d'une base
use ma_base

// Liste des collections
show collections

// Aide
db.help()
```

</div>
<div>

## MongoDB Compass

Interface graphique officielle pour:

- Explorer les données visuellement
- Construire et tester des requêtes
- Analyser les performances
- Gérer les index
- Importer/exporter des données

<div class="mt-4 text-center">
<img src="https://www.mongodb.com/docs/compass/current/static/d64abde6e59ae3d2e3ca87ab6864ec85/2b4d8/hero-border.webp" class="h-32 mx-auto rounded shadow" />
</div>

</div>
</div>

<div v-click class="mt-4">

## Autres interfaces

- **Drivers officiels**: Node.js, Python, Java, C#, Go, etc.
- **ODM/ORM**: Mongoose (Node.js), PyMongo (Python), Spring Data MongoDB (Java)
- **Outils tiers**: Studio 3T, NoSQLBooster

</div>

---
layout: center
class: text-center
---

# Opérations CRUD dans MongoDB

Create, Read, Update, Delete - Les fondamentaux de la manipulation de données

---

# Create : Insertion de documents

<div class="grid grid-cols-2 gap-x-4">
<div>

## insertOne()

Insertion d'un document unique:

```javascript
db.utilisateurs.insertOne({
  nom: "Dupont",
  prenom: "Jean",
  email: "jean.dupont@example.com",
  age: 35,
  actif: true
})
```

Résultat:
```javascript
{
  acknowledged: true,
          insertedId: ObjectId("...")
}
```

</div>
<div>

## insertMany()

Insertion de plusieurs documents:

```javascript
db.utilisateurs.insertMany([
  {
    nom: "Martin",
    prenom: "Sophie",
    email: "sophie.martin@example.com",
    age: 28
  },
  {
    nom: "Dubois",
    prenom: "Pierre",
    email: "pierre.dubois@example.com",
    age: 42
  }
])
```

Résultat:
```javascript
{
  acknowledged: true,
          insertedIds: {
    '0': ObjectId("..."),
            '1': ObjectId("...")
  }
}
```

</div>
</div>

<div v-click class="mt-2">

## Options importantes

- `ordered`: contrôle si les insertions doivent s'arrêter après une erreur (défaut: true)
- `writeConcern`: niveau d'accusé de réception pour l'opération d'écriture

```javascript
db.utilisateurs.insertMany(documents, { ordered: false })
```

</div>

---

# Read : Lecture de documents

<div class="grid grid-cols-2 gap-4">
<div>

## find()

Récupération de multiples documents:

```javascript
// Tous les documents
db.utilisateurs.find()

// Avec un filtre
db.utilisateurs.find({ age: { $gt: 30 } })

// Avec projection (sélection des champs)
db.utilisateurs.find(
        { actif: true },
        { nom: 1, email: 1, _id: 0 }
)
```

Méthodes de curseur:
```javascript
db.utilisateurs.find()
        .sort({ age: -1 })
        .limit(5)
        .skip(10)
```

</div>
<div>

## findOne()

Récupère un seul document:

```javascript
// Premier document correspondant
db.utilisateurs.findOne({ nom: "Dupont" })

// Avec critères multiples
db.utilisateurs.findOne({
  nom: "Dupont",
  actif: true
})
```

## Méthodes de comptage

```javascript
// Compter tous les documents
db.utilisateurs.countDocuments()

// Compter avec filtre
db.utilisateurs.countDocuments({ age: { $lt: 30 } })

// Estimation rapide (non précise)
db.utilisateurs.estimatedDocumentCount()
```

</div>
</div>

---

# Update : Mise à jour de documents

<div class="grid grid-cols-2 gap-4 mt-2">
<div>

## updateOne()

Met à jour le premier document correspondant:

```javascript
db.utilisateurs.updateOne(
        { email: "jean.dupont@example.com" },
        { $set: { age: 36, derniere_connexion: new Date() } }
)
```

## updateMany()

Met à jour tous les documents correspondants:

```javascript
db.utilisateurs.updateMany(
        { age: { $lt: 18 } },
        { $set: { categorie: "junior" } }
)
```

</div>
<div>

## replaceOne()

Remplace un document entier:

```javascript
db.utilisateurs.replaceOne(
        { _id: ObjectId("...") },
        {
          nom: "Dupont",
          prenom: "Jean-Pierre",
          email: "jp.dupont@example.com",
          age: 36
        }
)
```

## Options de mise à jour

- `upsert`: insertion si n'existe pas (défaut: false)
- `multi`: mise à jour de tous les documents correspondants (obsolète)

```javascript
db.utilisateurs.updateOne(
        { email: "nouveau@example.com" },
        { $set: { nom: "Nouveau", actif: true } },
        { upsert: true }
)
```

</div>
</div>

---

# Opérateurs de mise à jour

<div class="grid grid-cols-2 gap-4 mt-2">
<div>

## Opérateurs de champs

- `$set`: définit une valeur
```javascript
{ $set: { categorie: "premium" } }
```

- `$unset`: supprime un champ
```javascript
{ $unset: { temporaire: "" } }
```

- `$rename`: renomme un champ
```javascript
{ $rename: { "ancien_nom": "nouveau_nom" } }
```

- `$inc`: incrémente une valeur numérique
```javascript
{ $inc: { compteur: 1, score: 5 } }
```

- `$mul`: multiplie une valeur numérique
```javascript
{ $mul: { prix: 1.1 } } // +10%
```

</div>
<div>

## Opérateurs de tableaux

- `$push`: ajoute un élément à un tableau
```javascript
{ $push: { tags: "nouveau-tag" } }
```

- `$addToSet`: ajoute sans dupliquer
```javascript
{ $addToSet: { categories: "sport" } }
```

- `$pull`: retire des éléments du tableau
```javascript
{ $pull: { tags: "obsolete" } }
```

- `$pop`: retire le premier (-1) ou dernier (1) élément
```javascript
{ $pop: { historique: 1 } }
```

- Avec modificateurs
```javascript
{ $push: { scores: { $each: [85, 92, 78] } } }
```

</div>
</div>

---

# Delete : Suppression de documents

<div class="grid grid-cols-2 gap-4 mt-4">
<div>

## deleteOne()

Supprime le premier document correspondant:

```javascript
// Suppression par ID
db.utilisateurs.deleteOne(
        { _id: ObjectId("...") }
)

// Suppression par critère
db.utilisateurs.deleteOne(
        { email: "jean.dupont@example.com" }
)
```

## deleteMany()

Supprime tous les documents correspondants:

```javascript
// Suppression conditionnelle
db.utilisateurs.deleteMany(
        { actif: false }
)

// DANGER: supprime tous les documents
db.utilisateurs.deleteMany({})
```

</div>
<div>

## drop()

Supprime une collection entière:

```javascript
// Suppression de la collection
db.utilisateurs.drop()
```

## Points importants

- Les suppressions sont définitives
- La haute disponibilité peut compliquer la suppression
- Les suppressions conservent les index et métadonnées

## Alternatives à la suppression

- **Logique**: Marquer comme supprimé
```javascript
db.utilisateurs.updateMany(
        { inactif_depuis: { $lt: dateLimite } },
        { $set: { supprime: true } }
)
```

- **TTL**: Index avec expiration automatique
```javascript
db.sessions.createIndex(
        { derniere_activite: 1 },
        { expireAfterSeconds: 3600 }
)
```

</div>
</div>

---
layout: center
class: text-center
---

# Requêtes avancées

Filtres complexes, opérateurs et fonctions avancées pour extraire précisément l'information

---

# Opérateurs de comparaison

<div class="grid grid-cols-2 gap-4 mt-2">
<div>

## Opérateurs de base

- `$eq`: égal (défaut)
```javascript
{ age: { $eq: 30 } }  // équivalent à { age: 30 }
```

- `$ne`: non égal
```javascript
{ status: { $ne: "inactif" } }
```

- `$gt`: supérieur à
```javascript
{ age: { $gt: 18 } }
```

- `$gte`: supérieur ou égal à
```javascript
{ age: { $gte: 18 } }
```

- `$lt`: inférieur à
```javascript
{ prix: { $lt: 100 } }
```

- `$lte`: inférieur ou égal à
```javascript
{ prix: { $lte: 100 } }
```

</div>
<div>

## Opérateurs d'appartenance

- `$in`: dans une liste de valeurs
```javascript
{ categorie: { $in: ["A", "B", "Premium"] } }
```

- `$nin`: non présent dans une liste
```javascript
{ categorie: { $nin: ["Archivé", "Supprimé"] } }
```

## Combinaison d'opérateurs

```javascript
// Prix entre 10 et 50
db.produits.find({
  prix: {
    $gte: 10,
    $lte: 50
  }
})

// Utilisateurs entre 18 et 30 ans non "premium"
db.utilisateurs.find({
  age: { $gte: 18, $lte: 30 },
  categorie: { $ne: "premium" }
})
```

</div>
</div>

---

# Opérateurs logiques

<div class="grid grid-cols-2 gap-4 mt-2">
<div>

## $and (ET logique)

Implicite lorsque plusieurs conditions sont dans le même objet:

```javascript
// Implicite (recommandé si possible)
db.utilisateurs.find({
  age: { $gt: 18 },
  actif: true
})

// Explicite (nécessaire pour conditions multiples sur même champ)
db.utilisateurs.find({
  $and: [
    { age: { $gt: 18 } },
    { age: { $lt: 65 } }
  ]
})
```

## $not (NON logique)

Inverse un critère:

```javascript
db.utilisateurs.find({
  age: { $not: { $lt: 18 } }
})
```

</div>
<div>

## $or (OU logique)

Au moins une condition doit être vraie:

```javascript
db.utilisateurs.find({
  $or: [
    { categorie: "premium" },
    { credits: { $gt: 100 } }
  ]
})
```

## $nor (NI...NI logique)

Aucune des conditions ne doit être vraie:

```javascript
db.utilisateurs.find({
  $nor: [
    { bloque: true },
    { supprime: true }
  ]
})
```

## Combinaisons complexes

```javascript
db.utilisateurs.find({
  $or: [
    { categorie: "admin" },
    {
      $and: [
        { age: { $gte: 18 } },
        { verification: true }
      ]
    }
  ]
})
```

</div>
</div>

---

# Requêtes sur les tableaux

<div class="grid grid-cols-2 gap-4 mt-2">
<div>

## Recherche simple

Correspond si le tableau contient la valeur:

```javascript
// Utilisateurs avec le tag "premium"
db.utilisateurs.find({ tags: "premium" })
```

## $all (tous les éléments)

Correspond si le tableau contient tous les éléments spécifiés:

```javascript
// Utilisateurs avec TOUS ces tags
db.utilisateurs.find({
  tags: { $all: ["premium", "newsletter"] }
})
```

## $size (taille exacte)

Correspond si le tableau a exactement N éléments:

```javascript
// Utilisateurs avec exactement 3 appareils
db.utilisateurs.find({ appareils: { $size: 3 } })
```

</div>
<div>

## $elemMatch (correspondance complexe)

Correspond si au moins un élément du tableau satisfait tous les critères:

```javascript
// Produits avec au moins une note ≥ 4 ET vérifiée
db.produits.find({
  avis: {
    $elemMatch: {
      note: { $gte: 4 },
      verifie: true
    }
  }
})
```

## Opérateurs de position

Accéder à des éléments spécifiques:

```javascript
// Premier élément du tableau
db.produits.find({ "tailles.0": "M" })

// Recherche dans chaque élément
db.produits.find({ "avis.note": { $gte: 4 } })

// Filtrer ET projeter avec slice
db.articles.find(
        { categorie: "tech" },
        { titre: 1, contenu: 1, commentaires: { $slice: 5 } }
)
```

</div>
</div>

---

# Requêtes sur les documents imbriqués

<div class="grid grid-cols-2 gap-4 mt-2">
<div>

## Notation par points

Accès aux champs imbriqués:

```javascript
// Utilisateurs qui vivent à Paris
db.utilisateurs.find({
  "adresse.ville": "Paris"
})

// Accès à un niveau plus profond
db.utilisateurs.find({
  "preferences.notifications.email": true
})
```

## Recherche sur documents entiers

Correspondance exacte (y compris l'ordre des champs):

```javascript
// Match exact sur le sous-document
db.utilisateurs.find({
  adresse: {
    rue: "123 Avenue Example",
    ville: "Paris",
    codePostal: "75001"
  }
})
```

</div>
<div>

## Combinaison de critères

```javascript
// Plusieurs conditions sur sous-documents
db.utilisateurs.find({
  "adresse.ville": "Paris",
  "adresse.codePostal": { $in: ["75001", "75002"] },
  "profil.experience": { $gte: 5 }
})
```

## Requêtes sur tableaux d'objets

```javascript
// Commandes avec produit spécifique
db.commandes.find({
  "produits.id": "P12345"
})

// Commandes avec produit spécifique ET quantité > 2
db.commandes.find({
  produits: {
    $elemMatch: {
      id: "P12345",
      quantite: { $gt: 2 }
    }
  }
})
```

</div>
</div>

---

# Projection et limitation des résultats

<div class="grid grid-cols-2 gap-4 mt-2">
<div>

## Projection (sélection des champs)

```javascript
// Inclusion (1)
db.utilisateurs.find(
        { age: { $gt: 18 } },
        { nom: 1, email: 1 }
)

// Exclusion (0)
db.utilisateurs.find(
        { age: { $gt: 18 } },
        { mot_de_passe: 0, __v: 0 }
)

// Avec champs imbriqués
db.utilisateurs.find(
        { actif: true },
        { "nom": 1, "adresse.ville": 1 }
)
```

> Note: Sauf pour _id, on ne peut pas mélanger inclusion et exclusion dans une même projection.

</div>
<div>

## Limitation et pagination

```javascript
// Limiter le nombre de résultats
db.produits.find().limit(10)

// Sauter des résultats (offset)
db.produits.find().skip(20)

// Pagination (page 3, 10 éléments par page)
db.produits.find().skip(20).limit(10)
```

## Tri des résultats

```javascript
// Tri ascendant (1)
db.produits.find().sort({ prix: 1 })

// Tri descendant (-1)
db.produits.find().sort({ date_creation: -1 })

// Tri multi-critères
db.produits.find().sort({
  categorie: 1,     // Trier par catégorie (A-Z)
  prix: -1          // Puis par prix (du plus cher au moins cher)
})
```

</div>
</div>

---
layout: center
class: text-center
---

# Travaux Pratiques

Mise en pratique des concepts vus aujourd'hui

---

# TP 1 : Configuration de l'environnement

<div class="grid grid-cols-2 gap-4">
<div>

## Objectif
Mettre en place un environnement MongoDB fonctionnel et se familiariser avec l'interface.

## Étapes

1. **Création d'un compte MongoDB Atlas**
  - Inscription sur [mongodb.com/atlas](https://mongodb.com/atlas)
  - Déploiement d'un cluster gratuit (M0)

2. **Configuration des accès**
  - Création d'un utilisateur de base de données
  - Configuration des règles réseau (whitelist IP)

3. **Connexion avec MongoDB Compass**
  - Installation de MongoDB Compass
  - Utilisation de la chaîne de connexion
  - Exploration de l'interface

</div>
<div>

## Tâches à réaliser

4. **Création de vos premières collections**
  - Créer une base de données "formation"
  - Créer deux collections : "utilisateurs" et "produits"

5. **Importation de données initiales**
  - Télécharger les fichiers d'exemple fournis
  - Utiliser la fonctionnalité d'import de Compass

6. **Première exploration**
  - Identifier la structure des documents
  - Utiliser l'interface de filtrage de Compass
  - Tester quelques requêtes simples

<div class="mt-4 text-center">
<img src="https://webassets.mongodb.com/_com_assets/cms/mongodb-compass-sgxbxkb63i.png" class="h-32 mx-auto rounded" />
</div>

</div>
</div>

---

# TP 2 : Manipulation de données avec les opérations CRUD

<div class="grid grid-cols-2 gap-4">
<div>

## Exercice 1 : Création d'un jeu de données
1. Création d'une collection "ecommerce_produits"
2. Insertion d'au moins 10 produits avec:
  - nom, description, prix, stock
  - catégorie et sous-catégorie
  - caractéristiques techniques (objet imbriqué)
  - commentaires/avis (tableau d'objets)
  - tags (tableau simple)

## Exercice 2 : Requêtes de lecture
1. Récupérer tous les produits d'une catégorie
2. Trouver les produits dont le prix est entre 50€ et 200€
3. Lister les produits en stock (stock > 0)
4. Trouver les produits avec au moins 3 avis

</div>
<div>

## Exercice 3 : Mises à jour
1. Augmenter le prix de tous les produits d'une catégorie de 5%
2. Ajouter un champ "promotion" à certains produits
3. Ajouter un nouveau tag à tous les produits d'une catégorie
4. Mettre à jour le stock après une "vente"

## Exercice 4 : Requêtes complexes
1. Trouver les produits disponibles avec tag1 ET tag2
2. Lister les produits premium avec un stock faible (<5)
3. Rechercher les produits ayant reçu au moins un avis 5 étoiles
4. Trouver les produits d'une catégorie, triés par prix décroissant, limités aux 5 premiers

## Livrable
- Script MongoDB avec toutes les requêtes commentées
- Document de réflexion sur la modélisation des données choisie

</div>
</div>

---

# Modélisation des données dans MongoDB

<div class="grid grid-cols-2 gap-4">
<div>

## Approches de modélisation

### Documents embarqués (dénormalisation)
- Regroupement des données liées dans un seul document
- Lectures plus rapides et atomiques
- Idéal pour les relations "un-à-plusieurs" limitées

```javascript
{
  _id: ObjectId("..."),
          titre: "Smartphone XYZ",
          prix: 699,
          fabricant: {
    nom: "TechCorp",
            pays: "USA",
            fondation: 1985
  },
  specifications: {
    ecran: "6.5 pouces",
            processeur: "Octa-core",
            stockage: "128GB"
  }
}
```

</div>
<div>

### Références (normalisation)
- Séparation des données dans différentes collections
- Utilisation de références entre documents
- Idéal pour les relations "plusieurs-à-plusieurs"

```javascript
// Collection produits
{
  _id: ObjectId("p1"),
          titre: "Smartphone XYZ",
        prix: 699,
        fabricant_id: ObjectId("m1")
}

// Collection fabricants
{
  _id: ObjectId("m1"),
          nom: "TechCorp",
        pays: "USA",
        fondation: 1985
}
```

</div>
</div>

<div v-click>

## Facteurs de décision
- Fréquence d'accès aux données liées ensemble
- Volume et croissance des données liées
- Ratio de lecture vs écriture
- Contraintes d'atomicité des opérations
- Besoins de cohérence des données

</div>

---

# Patterns de modélisation

<div class="grid grid-cols-2 gap-4">
<div>

## Pattern "Un-à-Plusieurs" (Embarqué)

**Exemple : Articles et commentaires**
```javascript
{
  _id: ObjectId("..."),
          titre: "Introduction à MongoDB",
          auteur: "Jean Dupont",
          date: ISODate("2023-01-15"),
          contenu: "...",
          commentaires: [
    {
      auteur: "Marie",
      texte: "Article très instructif",
      date: ISODate("2023-01-16")
    },
    {
      auteur: "Paul",
      texte: "Merci pour ces explications",
      date: ISODate("2023-01-17")
    }
  ]
}
```

### Avantages
- Un seul accès pour récupérer l'article et ses commentaires
- Atomicité des mises à jour
- Pas de jointure nécessaire

### Limites
- Taille maximale de document (16Mo)
- Dépassement possible si trop de commentaires

</div>
<div>

## Pattern "Plusieurs-à-Plusieurs" (Référence)

**Exemple : Étudiants et cours**
```javascript
// Collection cours
{
  _id: ObjectId("c1"),
          titre: "MongoDB Avancé",
        description: "...",
        credits: 3
}

// Collection étudiants
{
  _id: ObjectId("e1"),
          nom: "Dupont",
        prenom: "Jean",
        cours_inscrits: [
  ObjectId("c1"),
  ObjectId("c2")
]
}

// Alternative: Collection intermédiaire
{
  _id: ObjectId("..."),
          etudiant_id: ObjectId("e1"),
        cours_id: ObjectId("c1"),
        date_inscription: ISODate("..."),
        note: 17
}
```

### Avantages
- Flexibilité et évolutivité
- Données maintenues à jour en un seul endroit
- Gestion efficace des relations complexes

</div>
</div>

---

# Considérations pratiques pour la modélisation

<div class="grid grid-cols-2 gap-4">
<div>

## Cardinalité et croissance

- **Un-à-un (1:1)** : Généralement embarqué, sauf si données rarement utilisées
- **Un-à-plusieurs (1:N)** :
  - Si N est petit et stable → Embarqué
  - Si N est grand ou variable → Références
- **Plusieurs-à-plusieurs (N:M)** : Généralement références

## Schéma polymorphe

Différents types de documents dans la même collection:

```javascript
// Document type "personne"
{
  _id: ObjectId("..."),
          type: "personne",
        nom: "Dupont",
        age: 35
}

// Document type "entreprise"
{
  _id: ObjectId("..."),
          type: "entreprise",
        nom: "TechCorp",
        secteur: "Technologie",
        employes: 1500
}
```

</div>
<div>

## Pattern d'attributs calculés

Stockage des agrégats pré-calculés:

```javascript
// Produit avec compteurs pré-calculés
{
  _id: ObjectId("..."),
          nom: "Laptop Pro",
        prix: 1299,
        // Valeurs pré-calculées mises à jour à chaque action
        nb_vues: 1528,
        nb_commentaires: 43,
        note_moyenne: 4.7
}
```

## Compromis à considérer

- **Performance de lecture vs écriture**
- **Cohérence vs flexibilité**
- **Simplicité vs optimisation**
- **Atomicité vs distribution**

<div class="mt-2 text-sm">
💡 MongoDB est flexible : commencez simple, surveillez les performances, et adaptez votre modèle au fil du temps.
</div>

</div>
</div>

---

# Bonnes pratiques en production

<div class="grid grid-cols-2 gap-4">
<div>

## Conception du schéma

- Prioriser l'usage et les requêtes pour la conception
- Éviter la profondeur excessive dans les documents
- Limiter la taille des tableaux (risque de dépassement)
- Choisir des noms de champs courts mais descriptifs
- Documenter le schéma et ses évolutions

## Gestion des identifiants

- Utiliser ObjectId ou UUID pour les références
- Éviter les identifiants séquentiels en forte charge
- Considérer les identifiants composites si pertinent
- Conserver l'unicité des identifiants métier importants

</div>
<div>

## Optimisation des performances

- Embarquer les données fréquemment accédées ensemble
- Éviter les requêtes gigantesques (utiliser skip/limit/pagination)
- Indexer les champs fréquemment interrogés ou triés
- Surveiller la taille des documents avec des tableaux
- Planifier la distribution des données (sharding)

## Évolution du schéma

- Adopter une approche progressive pour les migrations
- Gérer les versions de schéma au niveau applicatif
- Prévoir la compatibilité ascendante et descendante
- Tester les migrations sur un environnement de pré-production
- Utiliser des outils ETL pour les transformations complexes

</div>
</div>

<div v-click>

## Erreurs courantes à éviter
- Relations trop complexes ou multiples niveaux d'imbrication
- Modèle "one size fits all" pour tous les cas d'usage
- Manque de planification pour la croissance des données
- Sous-estimation des besoins en indexation
- Copie directe d'un modèle relationnel en MongoDB

</div>

---

# Sécurité dans MongoDB

<div class="grid grid-cols-2 gap-4">
<div>

## Authentification

- **Utilisateurs et rôles**: Créer des utilisateurs dédiés avec privilèges minimaux
  ```javascript
  db.createUser({
    user: "app_user",
    pwd: "secure_password",
    roles: [
      { role: "readWrite", db: "app_database" }
    ]
  })
  ```

- **Méthodes d'authentification**:
  - SCRAM (par défaut)
  - X.509 certificats
  - LDAP (Enterprise)
  - Kerberos (Enterprise)

</div>
<div>

## Autorisation

- **Rôles prédéfinis**:
  - `read`, `readWrite`
  - `dbAdmin`, `userAdmin`
  - `clusterAdmin`, `backup`, `restore`

- **Rôles personnalisés**:
  ```javascript
  db.createRole({
    role: "reportingRole",
    privileges: [
      {
        resource: { db: "sales", collection: "orders" },
        actions: [ "find" ]
      }
    ],
    roles: []
  })
  ```

## Chiffrement

- Transport (TLS/SSL)
- Stockage (Enterprise)
- Champs sensibles (Client-Side Field Level Encryption)

</div>
</div>

<div v-click>

## Mesures de sécurité additionnelles

- Exécuter MongoDB dans un réseau privé/VPC
- Configurer le pare-feu (bindIp, Network Access Lists)
- Surveillance active des accès et opérations
- Auditant des opérations (Enterprise)
- Mises à jour régulières de sécurité

</div>

---

# Haute disponibilité et réplication

<div class="grid grid-cols-2 gap-4">
<div>

## Principes de la réplication

- Ensemble de réplicas (Replica Set)
- 1 nœud primaire (Primary) + N nœuds secondaires
- Élection automatique d'un nouveau primaire en cas de défaillance
- Garantie de cohérence (CP dans le théorème CAP)

```mermaid {scale: 0.7}
graph TD
    A[Client] --> B[Primary]
    B --> C[Secondary 1]
    B --> D[Secondary 2]
    B --> E[Secondary 3]
    C -.-> D
    D -.-> E
    E -.-> C
```

</div>
<div>

## Configuration d'un Replica Set

```javascript
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongodb0.example.net:27017" },
    { _id: 1, host: "mongodb1.example.net:27017" },
    { _id: 2, host: "mongodb2.example.net:27017" }
  ]
})
```

## Types de nœuds secondaires

- **Standard**: Réplique complète, peut devenir primaire
- **Priority 0**: Ne peut pas devenir primaire
- **Hidden**: Invisible aux applications
- **Delayed**: Réplication différée (protection contre erreurs)
- **Arbiter**: Sans données, participe aux élections

</div>
</div>

<div v-click>

## Considérations pour la réplication

- Minimum 3 nœuds pour la haute disponibilité
- Distribuer les nœuds sur différentes zones/régions
- Configurer correctement `writeConcern` et `readPreference`
- Surveiller l'état de réplication (`rs.status()`)
- Planifier la maintenance avec `stepDown()`

</div>

---

# Performances et optimisation

<div class="grid grid-cols-2 gap-4">
<div>

## Analyse des performances

- **Outils de diagnostic**:
  - `explain()`
  - `db.collection.stats()`
  - Profiler MongoDB
  ```javascript
  db.setProfilingLevel(1, { slowms: 100 })
  ```
  - MongoDB Atlas Monitoring

## Stratégies d'optimisation

- Requêtes adaptées aux index
- Limitation des résultats (ne récupérer que le nécessaire)
- Projections pour limiter les champs retournés
- Structure de données optimisée pour les cas d'usage
- Utilisation de collations appropriées pour les tri

</div>
<div>

## Bonnes pratiques d'indexation

- Indexer les champs fréquemment interrogés
- Créer des index composites pour les requêtes complexes
- Éviter les index inutilisés ou redondants
- Surveiller la taille et l'impact des index
- Construire les index en arrière-plan pour la production
```javascript
db.users.createIndex(
        { "last_login": 1 },
        { background: true }
)
```

## Techniques d'optimisation avancées

- Chunking pour les grandes opérations d'écriture
- Read preference adapté au cas d'usage
- Compression des données (snappy/zlib)
- Utilisation de la fonction `bulkWrite()` pour les opérations groupées

</div>
</div>

<div v-click>

## Problèmes courants de performance

- Requêtes sans index (COLLSCAN)
- Documents trop volumineux
- Working set plus grand que la RAM disponible
- Fragmentation des collections
- Verrouillage excessif (lock contention)

</div>

---

# Sauvegarde et récupération

<div class="grid grid-cols-2 gap-4">
<div>

## Stratégies de sauvegarde

- **Méthodes**:
  - Sauvegarde logique (mongodump/mongorestore)
  - Sauvegarde par copie de fichiers
  - Sauvegarde par snapshot de volume
  - Backup continu avec MongoDB Cloud/Atlas

## Sauvegarde avec mongodump

```bash
# Sauvegarde complète d'une base
mongodump --uri="mongodb://user:pwd@host:port/db" --out=/backup/path

# Sauvegarde d'une collection spécifique
mongodump --collection=users --db=app_database --out=/backup/path
```

</div>
<div>

## Restauration des données

```bash
# Restauration complète
mongorestore --uri="mongodb://user:pwd@host:port" /backup/path

# Restauration avec options spécifiques
mongorestore --drop --nsInclude="app.*" /backup/path
```

## Points à considérer

- Fréquence des sauvegardes adaptée à la criticité
- Sauvegardes complètes vs incrémentielles
- Test régulier des procédures de restauration
- Réplication comme complément (pas comme remplacement)
- Stratégie de rétention (combien de temps conserver)
- Conservation hors site/multisite

</div>
</div>

<div v-click>

## Plan de reprise d'activité (PRA/DRP)

- Définir les objectifs de temps de reprise (RTO)
- Définir les objectifs de point de reprise (RPO)
- Documenter les procédures de restauration
- Former l'équipe aux procédures d'urgence
- Tester régulièrement le PRA dans des conditions réalistes

</div>

---

# MongoDB en environnement distribué

<div class="grid grid-cols-2 gap-4">
<div>

## Sharding (partitionnement)

- Distribution horizontale des données sur plusieurs serveurs
- Permet de gérer des volumes de données très importants
- Augmente les capacités de lecture/écriture

## Architecture du sharding

```mermaid {scale: 0.7}
graph TD
    A[Applications] --> B[Router mongos]
    B --> C[Config Servers]
    B --> D[Shard 1]
    B --> E[Shard 2]
    B --> F[Shard 3]
    D --> G[Replica Set]
    E --> H[Replica Set]
    F --> I[Replica Set]
```

</div>
<div>

## Clés de sharding

- **Choix crucial** pour la distribution et les performances
- Types de distribution:
  - Hashed: distribution uniforme
  - Ranged: requêtes par plages optimisées

```javascript
// Sharding d'une collection
sh.shardCollection(
        "database.collection",
        { user_id: "hashed" } // ou { timestamp: 1 }
)
```

## Considérations

- Opérations de resharding complexes
- Transactions distribuées (depuis MongoDB 4.2)
- Shard key immuable (sauf depuis MongoDB 4.4)
- Surcoût administratif et de ressources
- Complexité de dépannage accrue

</div>
</div>

<div v-click>

## Quand implémenter le sharding?

- Limites de capacité de stockage atteintes
- Contraintes de performances d'écriture/lecture
- Besoin de localisation géographique des données
- Nécessité d'isolation des workloads

> **Note**: Commencer sans sharding et évoluer au besoin est souvent la meilleure approche.

</div>

---

# Microservices et MongoDB

<div class="grid grid-cols-2 gap-4">
<div>

## Approches d'architecture

- **Database-per-Service**:
  - Une base par microservice
  - Isolation et autonomie
  - Réduction des conflits de schéma
  - Évolutivité indépendante

- **Collection-per-Service**:
  - Collections dédiées par service
  - Base de données partagée
  - Transactions multi-collections possibles
  - Gestion simplifiée

</div>
<div>

## Défis et solutions

- **Requêtes distribuées**:
  - API Gateway
  - CQRS (Command Query Responsibility Segregation)
  - Vues matérialisées

- **Cohérence des données**:
  - Cohérence éventuelle
  - Compensation/Saga pattern
  - Outbox pattern

- **Évolution de schéma**:
  - Versions multiples de l'API
  - Migrations progressives
  - Projections personnalisées

</div>
</div>

<div v-click>

## Bonnes pratiques avec MongoDB

- Concevoir pour la scalabilité horizontale
- Utiliser des identifiants universels (UUID)
- Modéliser pour minimiser les jointures entre services
- Exploiter le Change Streams pour les événements
- Déployer séparément mais monitorer globalement
- Automatiser la création et le déploiement d'instances

</div>

---
layout: center
class: text-center
---

# Conclusion de la journée

Synthèse et travail personnel pour demain

---

# Récapitulatif des concepts clés

<div class="grid grid-cols-2 gap-4">
<div>

## Concepts fondamentaux
- Base de données NoSQL orientée document
- Flexibilité du schéma et modèle de données JSON/BSON
- Structure: bases de données, collections, documents
- Atlas comme solution cloud vs installation locale

## CRUD operations
- Create: insertOne(), insertMany()
- Read: find(), findOne()
- Update: updateOne(), updateMany(), opérateurs $set, $inc...
- Delete: deleteOne(), deleteMany(), drop()

</div>
<div>

## Requêtes avancées
- Opérateurs de comparaison: $eq, $gt, $lt, $in...
- Opérateurs logiques: $and, $or, $not, $nor
- Requêtes sur tableaux: $all, $elemMatch, $size
- Requêtes sur documents imbriqués
- Projection, pagination et tri

## Modélisation et bonnes pratiques
- Documents embarqués vs références
- Considérations de cardinalité
- Sécurité et performance
- Réplication et haute disponibilité

</div>
</div>

---

# Pour la prochaine session

<div class="grid grid-cols-2 gap-4">
<div>

## Travail personnel
- Terminer les exercices du TP
- Explorer la documentation officielle de MongoDB
- Réfléchir aux cas d'utilisation personnels/professionnels

## Questions à se poser
- Comment optimiser mes requêtes complexes ?
- Comment modéliser mes données relationnelles en NoSQL ?
- Quels types d'index me seraient utiles ?

</div>
<div>

## Préparez-vous pour demain
Nous aborderons :
- L'indexation et l'optimisation des performances
- Les requêtes géospatiales
- Le framework d'agrégation

## Ressources supplémentaires
- [Documentation MongoDB CRUD](https://docs.mongodb.com/manual/crud/)
- [MongoDB University - M001: MongoDB Basics](https://university.mongodb.com/courses/M001/about)
- [Guide de modélisation des données](https://docs.mongodb.com/manual/core/data-modeling-introduction/)

</div>
</div>

---
layout: