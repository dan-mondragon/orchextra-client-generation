
var Base = require('./BaseCRUD');

module.exports =
  class Project extends Base {
    get api() {
      return "v1/projects";
    }
    get contentType() {
      return "application/json";
    }
  }