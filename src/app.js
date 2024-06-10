import environment from './config/environment';
import express from 'express';
import router from './router';

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

  getApp() {
    return this.app;
  }
   listen() {
     const { port } = environment;
     this.app.listen(port, () => {
        console.info(`Server is Running on Port : ${port}!`);
     });
   }

}

export default App;
