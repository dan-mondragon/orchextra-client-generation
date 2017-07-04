const axios = require('axios');
const api = 'v1/users';
const queryFn = require('./fn/QueryString');

module.exports=
class User {
  constructor(url, token, user){
    this.url = url;
    this.token = token;
    if(typeof user !== 'undefined'){
      this.data = user;
    }
  }

  getUsers(query) {
    var queryString = queryFn.setQueryString(query);
    const users = axios.get(`${this.url}/${api}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return users.then((result) => {
      var Users = new Array();
      result.data.forEach(user => {
        Users.push(new User(this.url, this.token, user));
      });
      return Users;
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }


  getUser (userId, query) {
    var queryString = queryFn.setQueryString(query);
    const user = axios.get(`${this.url}/${api}/${userId}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return user.then((result) => {
      return new User(this.url, this.token, result.data);
    })
    .catch(error => {
      console.log(error);
      return error.response.status;
    })
  }


  createUser (user) {
    const add = axios.post(`${this.url}/${api}`, user, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return add.then(result =>{
      // return result.data;
      return new User(this.url, this.token, result.data);
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }

  deleteUser (userId) {
    if(typeof userId === 'undefined'){
        userId = this.data.id;
    }
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

  replaceUser (user, userId) {
    if(typeof userId === 'undefined'){
        userId = this.data.id;
    }
    const replace = axios.put(`${this.url}/${api}/${userId}`, user,{
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return replace.then(result =>{
      this.data = result.data;
      return this;
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }

  updateUser (user, userId) {
    if(typeof userId === 'undefined'){
        userId = this.data.id;
    }
    if(typeof user === 'undefined'){
        user = this.data;
    }
    const update = axios.patch(`${this.url}/${api}/${userId}`, user,{
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return update.then(result =>{
      this.data = result.data;
      return this;
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }
}

// console.log(new User('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI'));

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
