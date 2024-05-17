const mongo = require('mongoose');
const dbConfig = require('../src/config/dbConfig');
// Nettoyer la base de données de test
async function cleanTestDatabase() {
  try {
    // Connexion à la base de données de test
    await mongo.connect(`mongodb://${dbConfig.test.DB_TEST_HOST}/${dbConfig.test.DB_TEST_NAME}`, {
      useNewUrlParser: true,
    });

    // Nettoyage des collections de test
    // Par exemple, supprimez toutes les données dans chaque collection
    await mongo.connection.db.dropDatabase();

    console.error('Cleaning test database completed.');
  } catch (error) {
    console.error('Error cleaning test database:', error);
  } finally {
    // Déconnexion de la base de données
    await mongo.disconnect();
  }
}

// Appel de la fonction pour nettoyer la base de données de test
cleanTestDatabase();
