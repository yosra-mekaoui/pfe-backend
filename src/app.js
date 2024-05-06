import express from 'express';
import router from './router';
const mongo=require('mongoose');

import environment from './config/environment';
class App {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.setRoutes();
  }

  setRoutes() {
    this.app.use(router);
  }

  async configDatabase() {
    const { db_url } = environment;
    mongo.connect(db_url, {
   // mongoose.connect('mongodb+srv://@gewinner.xsbnq.mongodb.net/gewinner-api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    }).then(() => {
        console.info('Connected to database successfully ');
    }).catch(() => {
        console.info('ERROR : unable to connect to database ');
    });

  }

  async listen() {
    const { port } = environment;
    try {
      await this.configDatabase();
      this.app.listen(port, () => {
        console.info(`Server is Running on Port : ${port}!`);
      });
    } catch (err) {
      console.error('Error starting server:', err);
    }
  }
}

export default App;
