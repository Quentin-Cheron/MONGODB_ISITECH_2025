# MongoDB TP 2

## Exercice 2

### Ce mettre sur la base formations

```js
use formation;
```

### Récupérer tous les produits d'une catégorie

```js
db.products.find({ categorie: "Electronics" });
```

### Trouver les produits dont le prix entre 50€ et 200€

```js
db.produits.find({ prix: { $gt: 1000, $lt: 1500 } });
```

### Lister les produits en stock (stock > 0)

```js
db.produits.find({ "stock.quantite": { $gt: 0 } });
```

### Trouver les produits avec au moins 3 avis, avis est un tableau

```js
db.produits.find({ avis: { $size: 3 } });
```

## Exercice 3

### Augmenter le prix de tous les produits d'une catégorie de 5%

```jsf
db.produits.updateMany({ categorie: "Électronics" }, { $inc: { prix: 0.05 } });
```

### Ajouter un champ "promotion" à certains produits

```js
db.produits.updateMany(
  { categorie: "Électronique" },
  { $set: { promotion: true } }
);
```

### Ajouter un nouveau tag à tous les produits d'une catégorie

```js
db.produits.updateMany(
  { categorie: "Électronique" },
  { $push: { tags: "nouveau tag" } }
);
```

### Mettre à jour le stock après une "vente"

```js
db.produits.updateMany(
  { categorie: "Électronique" },
  { $inc: { "stock.quantite": -1 } }
);
```

## Exercice 4

### Trouver les produits disponibles avec tag1 et tag2

```js
db.produits.find({ tags: { $all: ["tag1", "tag2"] } });
```

### Lister les produits premium avec un stock faible (stock < 5)

```js
db.produits.find({ "stock.quantite": { $lt: 5 } });
```

### Rechercher les produits ayant reçu au moin 5 étoiles

```js
db.produits.find({ "avis.note": { $gte: 5 } });
```

### Trouver les produits d'une catégorie triés par prix décroissant, limités aux 5 premiers

```js
db.produits.find({ categorie: "Électronique" }).sort({ prix: -1 }).limit(5);
```
