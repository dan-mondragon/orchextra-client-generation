const axios = require('axios');
const queryFn = require('./fn/QueryString');

var Base = require('./BaseCRUD');

module.exports=
class Customer extends Base {
  get api(){
    return "v1/customers";
  }
}
