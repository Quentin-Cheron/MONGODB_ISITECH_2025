# Rapport de TP Livrable

## Amélioration des performances

### Avant ajout de l'index

| totalDocsExamined | executionTimeMillis | Stage    | totalKeysExamined | nReturned |
| ----------------- | ------------------- | -------- | ----------------- | --------- |
| 100010            | 49                  | COLLSCAN | 0                 | 2         |
| 100010            | 46                  | COLLSCAN | 0                 | 9952      |
| 100010            | 51                  | COLLSCAN | 0                 | 2493      |
| 100010            | 72                  | COLLSCAN | 0                 | 20246     |

On peut observer que le temps d'exécution des requêtes sont beaucoup plus long, la requête analyse plus de 100000 documents pour seulement m'en retourner que quelques milliers.

### Après ajout de l'index

| totalDocsExamined | executionTimeMillis | Stage | totalKeysExamined | nReturned |
| ----------------- | ------------------- | ----- | ----------------- | --------- |
| 2                 | 3                   | FETCH | 2                 | 2         |
| 9952              | 20                  | FETCH | 9952              | 9952      |
| 2493              | 21                  | FETCH | 3493              | 2493      |
| 20256             | 46                  | FETCH | 20258             | 20246     |

On peut observer que les requêtes avec un index sont beaucoup plus rapides que celles sans index, la requête analyse seulement les documents nécessaires pour répondre à la requête.

## Identification de compromis entre performances de lecture et d'écriture

Lecture : Les index améliorent considérablement les performances de lecture en réduisant le nombre de documents examinés et le temps d'exécution des requêtes.
Écriture : Les index peuvent ralentir les opérations d'écriture (insertion, mise à jour, suppression) car chaque modification nécessite une mise à jour des index.

## choix des index pour la création d'une application de bibliothèque en production

Pour la création d'une application de bibliothèque en production, il est important de choisir les indexs de manière à optimiser les performances de lecture et d'écriture.

Voici quelques indices que j'ai choisi pour la création d'une application de bibliothèque en production :

Pour les indexes simples j'utiliserai le champ titre, auteur, genre, prix et note_moyenne.

pour les indexes composés j'utiliserai le champ titre, auteur, genre, prix et note_moyenne.

cela va dépendre de la requête, si la requête est juste une récupération de tous les livres par auteur un index simple serait suffisant, si la requête est une recherche de livres par titre, auteur, genre, prix et note_moyenne un index composé serait suffisant.
