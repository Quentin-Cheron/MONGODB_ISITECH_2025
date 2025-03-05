const { ObjectId } = require("mongodb");
const fs = require("fs");

function generateRoads(n = 10) {
  let roadArray = [];
  console.log(`Début de la génération de ${n} routes...`);

  for (let i = 0; i < n; i++) {
    const road = {
      nom: `Routes ${i + 1}`,
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
      console.log(`${i} routes générés...`);
    }
    roadArray.push(road);
  }
  console.log("Génération terminée !");
  return roadArray;
}

// Générer les données
console.log("Lancement de la génération des données...");
const roadData = generateRoads();

// Sauvegarder dans un fichier JSON
console.log("Sauvegarde des données dans librairie.json...");
fs.writeFileSync("roads.json", JSON.stringify(roadData, null, 4), "utf-8");
console.log("Fichier librairie.json généré avec succès !");
