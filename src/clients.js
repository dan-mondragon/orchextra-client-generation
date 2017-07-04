
var Base = require('./BaseCRUD');

module.exports =
  class Client extends Base {
    get api() {
      return "v1/clients";
    }
    get contentType() {
      return "application/json";
    }
  }