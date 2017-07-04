
var Base = require('./BaseCRUD');

module.exports =
  class Customer extends Base {
    get api() {
      return "v1/customers";
    }

    get contentType() {
      return "application/json";
    }
  }
