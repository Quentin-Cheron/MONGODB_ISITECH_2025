const { ObjectId } = require("mongodb");
const fs = require("fs");

function generateUsers(n = 100000) {
  let usersArray = [];
  console.log(`Début de la génération de ${n} livres...`);
  const tags = [
    "Science-fiction",
    "Fantaisie",
    "Policier",
    "Thriller",
    "Romance",
    "Historique",
    "Philosophie",
    "Poésie",
    "Aventure",
    "Horreur",
  ];

  for (let i = 0; i < n; i++) {
    const user = {
      nom: `Utilisateur ${i + 1}`,
      prenom: `Prenom ${i + 1}`,
      email: `utilisateur${i + 1}@gmail.com`,
      age: Math.floor(Math.random() * (100 - 18 + 1)) + 18,
      date_inscription: new Date(
        new Date(2000, 0, 1).getTime() +
          Math.random() *
            (new Date().getTime() - new Date(2000, 0, 1).getTime())
      ),
      tags: tags
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * 3) + 1),
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
    };

    if (i % 100 === 0) {
      console.log(`${i} utilisateurs générés...`);
    }
    usersArray.push(user);
  }
  console.log("Génération terminée !");
  return usersArray;
}

// Générer les données
console.log("Lancement de la génération des données...");
const usersData = generateUsers();

// Sauvegarder dans un fichier JSON
console.log("Sauvegarde des données dans users.json...");
fs.writeFileSync("users.json", JSON.stringify(usersData, null, 4), "utf-8");
console.log("Fichier users.json généré avec succès !");
