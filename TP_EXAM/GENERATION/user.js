const { ObjectId } = require("mongodb");
const fs = require("fs");

function generateUsers(n = 20000) {
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
  const author = [
    "Victor Hugo",
    "J.K. Rowling",
    "Stephen King",
    "Agatha Christie",
    "George Orwell",
    "J.R.R. Tolkien",
    "Albert Camus",
    "Gustave Flaubert",
    "Marcel Proust",
    "Alexandre Dumas",
  ];
  const city = [
    "Paris",
    "Marseille",
    "Lyon",
    "Toulouse",
    "Lille",
    "Nantes",
    "Rennes",
    "Strasbourg",
    "Montpellier",
    "Bordeaux",
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
      livres_empruntes: [
        {
          _id: new ObjectId(),
          titre: `Livre ${i + 1}`,
          auteur: author[Math.floor(Math.random() * author.length)],
          genre: tags[Math.floor(Math.random() * tags.length)],
          prix: Math.floor(Math.random() * 100) + 10,
          note_moyenne: Math.floor(Math.random() * 100) + 5,
          date_ajout: new Date(),
          disponible: true,
          date_emprunt: new Date(
            new Date(2000, 0, 1).getTime() +
              Math.random() *
                (new Date().getTime() - new Date(2000, 0, 1).getTime())
          ),
        },
      ],
      adresse: {
        rue: `Rue ${i + 1}`,
        ville: city[Math.floor(Math.random() * city.length)],
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
