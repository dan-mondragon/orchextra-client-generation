
var Base = require('./BaseCRUD');

module.exports =
  class Channel extends Base {
    get api() {
      return "v1/channels";
    }
    get contentType() {
      return "application/json";
    }
  }