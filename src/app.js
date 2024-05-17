import express from 'express';
import router from './router';
// const mongo = require('mongoose');
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './api-doc/swagger.json';

import environment from './config/environment';

import dbConfig from './config/dbConfig';
import Database from './database/database';
import chalk from 'chalk';

class App {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.setRoutes();
    this.setupSwagger();
  }

  setRoutes() {
    this.app.use(router);
  }

  configDatabase() {
    const { nodeEnv } = environment;
    const database = new Database(nodeEnv, dbConfig);
    database.connect();
  }

  setupSwagger() {
    // Configurez Swagger UI pour servir la documentation Swagger à partir du fichier JSON
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  async listen() {
    const { port } = environment;
    try {
      this.configDatabase();
      this.app.listen(port, () => {
        console.info(
          chalk.cyanBright.inverse(
            `Execution Enviroment: ${environment.nodeEnv.toLocaleUpperCase()} | Server is Running on Port : ${port}!`
          )
        );
      });
    } catch (err) {
      console.error(chalk.redBright.inverse('Error starting server:', err));
    }
  }
}

export default App;
