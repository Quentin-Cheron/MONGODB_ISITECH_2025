const { ObjectId } = require("mongodb");
const fs = require("fs");

function generateLibrairie(n = 10) {
  let librairieArray = [];
  console.log(`Début de la génération de ${n} livres...`);

  for (let i = 0; i < n; i++) {
    const librairie = {
      nom: `Librairie ${i + 1}`,
      adresse: {
        rue: `Rue ${i + 1}`,
        ville: `Ville ${i + 1}`,
        code_postal: `75000${i + 1}`,
        pays: "France",
        localisation: {
          type: "Polygon",
          coordinates: [
            [
              [2.351, 48.856],
              [2.353, 48.856],
              [2.353, 48.855],
              [2.351, 48.855],
              [2.351, 48.856],
            ],
          ],
        },
      },
    };

    if (i % 100 === 0) {
      console.log(`${i} bibliotèques générés...`);
    }
    librairieArray.push(librairie);
  }
  console.log("Génération terminée !");
  return librairieArray;
}

// Générer les données
console.log("Lancement de la génération des données...");
const librairieData = generateLibrairie();

// Sauvegarder dans un fichier JSON
console.log("Sauvegarde des données dans librairie.json...");
fs.writeFileSync(
  "librairie.json",
  JSON.stringify(librairieData, null, 4),
  "utf-8"
);
console.log("Fichier librairie.json généré avec succès !");
