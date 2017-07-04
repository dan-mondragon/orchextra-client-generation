const axios = require('axios');
const queryFn = require('./fn/QueryString');

var Base = require('./BaseCRUD');

module.exports=
class User extends Base {
  get api(){
    return "v1/users";
  }
}

//
// module.exports ={
//   getUsers,
//   getUser,
//   createUser,
//   deleteUser,
//   replaceUser,
//   setUrl,
//   setAuthToken
// };
