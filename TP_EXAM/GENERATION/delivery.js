const { ObjectId } = require("mongodb");
const fs = require("fs");

function generateDeliveries(n = 10) {
  let deliveriesArray = [];
  console.log(`Début de la génération de ${n} livraisons...`);

  for (let i = 0; i < n; i++) {
    const delivery = {
      references: {
        ref_book: new ObjectId(),
        ref_user: new ObjectId(),
      },
      bibliotheque: {
        nom: `Bibliothèque ${i + 1}`,
        localisation: {
          type: "Point",
          coordinates: [
            2.35 + Math.random() * 0.02,
            48.85 + Math.random() * 0.02,
          ],
        },
      },
      adresse_utilisateur: {
        rue: `Rue ${i + 1}`,
        ville: "Paris",
        code_postal: `7500${i % 10}`,
        pays: "France",
        localisation: {
          type: "Point",
          coordinates: [
            2.32 + Math.random() * 0.02,
            48.84 + Math.random() * 0.02,
          ],
        },
      },
      position_actuelle: {
        type: "Point",
        coordinates: [
          2.34 + Math.random() * 0.02,
          48.85 + Math.random() * 0.02,
        ],
      },
      itineraire: {
        type: "LineString",
        coordinates: [
          [2.35 + Math.random() * 0.02, 48.85 + Math.random() * 0.02], // Départ
          [2.34 + Math.random() * 0.02, 48.85 + Math.random() * 0.02], // Étape
          [2.32 + Math.random() * 0.02, 48.84 + Math.random() * 0.02], // Arrivée
        ],
      },
    };

    if (i % 100 === 0) {
      console.log(`${i} livraisons générées...`);
    }
    deliveriesArray.push(delivery);
  }
  console.log("Génération terminée !");
  return deliveriesArray;
}

// Générer les données
console.log("Lancement de la génération des livraisons...");
const deliveriesData = generateDeliveries();

// Sauvegarder dans un fichier JSON
console.log("Sauvegarde des données dans delivery.json...");
fs.writeFileSync(
  "delivery.json",
  JSON.stringify(deliveriesData, null, 4),
  "utf-8"
);
console.log("Fichier delivery.json généré avec succès !");
