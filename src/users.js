const axios = require('axios');
const api = 'v1/users';

class User {

  constructor(url, token){
    this.url = url;
    this.token = token;
  }

  getUsers() {
    const users = axios.get(`${this.url}/${api}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return users.then((result) => {
      return result.data;
    })
    .catch(error => {
      return error.code;
    });
  }


  getUser (userId) {
    const user = axios.get(`${this.url}/${api}/${userId}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return user.then((result) => {
      return result.data;
    })
    .catch(error => {
      return error.response.status;
    })
  }


  createUser (user) {
    const add = axios.post(`${this.url}/${api}`, user, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return add.then(result =>{
      return result.data;
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }

  deleteUser (userId) {
    const del = axios.delete(`${this.url}/${api}/${userId}`,{
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return del.then(result => {
      return result.status;
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }

  replaceUser (userId, user) {
    const replace = axios.put(`${this.url}/${api}/${userId}`, user,{
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return replace.then(result =>{
      return result.data;
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  };
}

// console.log(new User('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI'));

module.exports = {
  class: User
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
