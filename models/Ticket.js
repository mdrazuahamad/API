const shortid = require("shortid");

const shortid = require(shortid);

class Ticket {
  constructor(username, price) {
    this.id = shortid.generate();
    this.username = username;
    this.price = price;
    this.createdAT = new Date();
    this.updatedAT = new Date();
  }
}

module.exports= Ticket
