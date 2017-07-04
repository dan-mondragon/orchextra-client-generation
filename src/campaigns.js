
var Base = require('./BaseCRUD');

module.exports =
  class Campaign extends Base {
    get api() {
      return "v1/campaigns";
    }
    get contentType() {
      return "FormData";
    }
  }