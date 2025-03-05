const fs = require("fs");

const genres = [
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
const editeurs = [
  "Gallimard",
  "Hachette",
  "Albin Michel",
  "Seuil",
  "Flammarion",
  "Folio",
  "Actes Sud",
  "Le Livre de Poche",
  "Pocket",
  "Robert Laffont",
];

function generateBooks(n = 100000) {
  let books = [];
  console.log(`Début de la génération de ${n} livres...`);
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

  for (let i = 0; i < n; i++) {
    const book = {
      titre: `Livre ${i + 1}`,
      auteur: author[Math.floor(Math.random() * author.length)],
      annee_publication: Math.floor(Math.random() * (2025 - 1900 + 1)) + 1900,
      editeur: editeurs[Math.floor(Math.random() * editeurs.length)],
      genre: genres
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * 3) + 1),
      nombre_pages: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
      langue: "Français",
      disponible: Math.random() < 0.5,
      stock: Math.floor(Math.random() * 21),
      note_moyenne: Math.round((Math.random() * (5 - 1) + 1) * 10) / 10,
      description: `Description du livre ${i + 1}.`,
      prix: Math.round((Math.random() * (100 - 5) + 5) * 100) / 100,
      isbn: String(
        Math.floor(Math.random() * (9999999999999 - 1000000000000 + 1)) +
          1000000000000
      ),
      date_ajout: new Date(
        new Date(2000, 0, 1).getTime() +
          Math.random() *
            (new Date().getTime() - new Date(2000, 0, 1).getTime())
      ).toISOString(),
    };

    if (i % 100 === 0) {
      console.log(`${i} livres générés...`);
    }
    books.push(book);
  }
  console.log("Génération terminée !");
  return books;
}

// Générer les données
console.log("Lancement de la génération des données...");
const booksData = generateBooks();

// Sauvegarder dans un fichier JSON
console.log("Sauvegarde des données dans books.json...");
fs.writeFileSync("books.json", JSON.stringify(booksData, null, 4), "utf-8");
console.log("Fichier books.json généré avec succès !");
