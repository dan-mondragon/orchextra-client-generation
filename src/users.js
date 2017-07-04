
var Base = require('./BaseCRUD');

module.exports =
  class User extends Base {
    get api() {
      return "v1/users";
    }

    get contentType() {
      return "application/json";
    }
  }