# MongoDB TP2 RESPONSE

## Ce mettre sur la base formations

```js
use formation;
```

## Récupérer tous les produits d'une catégorie

```js
db.products.find({ categorie: "Electronics" });
```

## Trouver les produits dont le prix entre 50€ et 200€

```js
db.produits.find({ prix: { $gt: 1000, $lt: 1500 } });
```

## Lister les produits en stock (stock > 0)

```js
db.produits.find({ "stock.quantite": { $gt: 0 } });
```

## Trouver les produits avec au moins 3 avis, avis est un tableau

```js
db.produits.find({ "avis.3": { $exists: true } });
```
