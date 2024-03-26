import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
//import environment from './config/environment';
import router from './router';

class App {
  constructor() {
    this.app = express();
    // this.app.use(logger('dev', { skip: (req, res) => environment.nodeEnv === 'developement' }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(cors());
    this.setRoutes();
  }

  setRoutes() {
    this.app.use(router);
  }

  getApp() {
    return this.app;
  }
  // listen() {
  //   const { port } = environment;
  //   this.app.listen(port, () => {
  //     console.log(chalk.blue.inverse.bold(`Server is Running on Port : ${port}!`));
  //   });
  // }
  listen() {
    this.app.listen(3000);
  }
}

export default App;
