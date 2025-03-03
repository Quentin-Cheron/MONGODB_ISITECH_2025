# MongoDB TP3 RESPONSE

## Augmenter le prix de tous les produits d'une catégorie de 5%

```js
db.produits.updateMany({ categorie: "Électronics" }, { $inc: { prix: 0.05 } });
```

## Ajouter un champ "promotion" à certains produits

```js
db.produits.updateMany(
  { categorie: "Électronique" },
  { $set: { promotion: true } }
);
```

## Ajouter un nouveau tag à tous les produits d'une catégorie

```js
db.produits.updateMany(
  { categorie: "Électronique" },
  { $push: { tags: "nouveau tag" } }
);
```

## Mettre à jour le stock après une "vente"

```js
db.produits.updateMany(
  { categorie: "Électronique" },
  { $inc: { "stock.quantite": -1 } }
);
```
