const { NegoApplication } = require('nego');

class NegoBin extends NegoApplication {
  constructor() {
    super();
    this.cwd = process.cwd();
  }
  start(options = { port: 7001 }) {
    super.start(options);
  }
}

module.exports = NegoBin;