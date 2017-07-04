
var Base = require('./BaseCRUD');

module.exports =
  class Skin extends Base {
    get api() {
      return "v1/skins";
    }

    get contentType() {
      return "FormData";
    }
  }