const express = require("express");
const routes = require("./routes");

class App {
  constructor() {
    this.serve = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.serve.use(express.json());
  }
  routes() {
    this.serve.use(routes);
  }
}

module.exports = new App().serve;