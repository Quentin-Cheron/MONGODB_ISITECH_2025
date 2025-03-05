const { ObjectId } = require("mongodb");
const fs = require("fs");

function generateDelivery(n = 10) {
  let librairieArray = [];
  console.log(`Début de la génération de ${n} livres...`);

  for (let i = 0; i < n; i++) {
    const delivery = {
      references: [
        {
          ref_book: ObjectId(),
          ref_user: ObjectId(),
        },
      ],
    };

    if (i % 100 === 0) {
      console.log(`${i} bibliotèques générés...`);
    }
    librairieArray.push(delivery);
  }
  console.log("Génération terminée !");
  return librairieArray;
}

// Générer les données
console.log("Lancement de la génération des données...");
const librairieData = generateLibrairie();

// Sauvegarder dans un fichier JSON
console.log("Sauvegarde des données dans delivery.json...");
fs.writeFileSync(
  "delivery.json",
  JSON.stringify(librairieData, null, 4),
  "utf-8"
);
console.log("Fichier delivery.json généré avec succès !");
