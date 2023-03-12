const { helloWorld } = require("../utils/helpers/helloWorld");

class HelloWorld {
  constructor(fileName) {
    this.fileName = fileName;
  }

  sayHello() {
    helloWorld(this.fileName);
  }
}

module.exports = new HelloWorld("helloWorldModel.js");
