const { ObjectId } = require("mongodb");
const fs = require("fs");

function generateUsers(n = 100000) {
  let usersArray = [];
  console.log(`Début de la génération de ${n} livres...`);

  for (let i = 0; i < n; i++) {
    const user = {
      id_user: new ObjectId(),
      date_last_activity: new Date(
        new Date(2000, 0, 1).getTime() +
          Math.random() *
            (new Date().getTime() - new Date(2000, 0, 1).getTime())
      ),
      session: {
        token: `token-${i + 1}`,
        expires: new Date(
          new Date(2000, 0, 1).getTime() +
            Math.random() *
              (new Date().getTime() - new Date(2000, 0, 1).getTime())
        ),
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
fs.writeFileSync(
  "session_users.json",
  JSON.stringify(usersData, null, 4),
  "utf-8"
);
console.log("Fichier users.json généré avec succès !");
