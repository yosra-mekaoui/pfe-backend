import mongo from 'mongoose';
import Project from '../app/models/project';
import Teletravail from '../app/models/teletravail';
import Role from '../app/models/role';
import Doc from '../app/models/doc';
import Conge from '../app/models/conge';
import Annonce from '../app/models/annonce';
import Tache from '../app/models/tache';
import Team from '../app/models/team';
import chalk from 'chalk';

class Database {
  constructor(environement, dbConfig) {
    this.nodeEnv = environement;
    this.dbConfig = dbConfig;
  }

  #getConnection() {
    return `mongodb://${this.dbConfig[this.nodeEnv].DB_HOST}/${this.dbConfig[this.nodeEnv].DB_NAME}`;
  }

  connect() {
    mongo
      .connect(this.#getConnection())
      .then(async () => {
        await Project.createCollection();
        await Teletravail.createCollection();
        await Role.createCollection();
        await Doc.createCollection();
        await Conge.createCollection();
        await Annonce.createCollection();
        await Tache.createCollection();
        await Team.createCollection();
        console.info(chalk.gray('Connected to database successfully'));
      })
      .catch(() => {
        console.info('ERROR : unable to connect to database ');
      });
  }

  disconnect() {
    mongo.disconnect();
  }
}

export default Database;
