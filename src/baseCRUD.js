const axios = require('axios');
const queryFn = require('./fn/QueryString');

class BaseCRUD {

  constructor(url, token, user, count){
    this.url = url;
    this.token = token;
    if(typeof user !== 'undefined'){
      this.data = user;
    }
    if(typeof count !== 'undefined'){
      this.total_count = count;
    }
  }

  get api(){
    return "";
  }

  all(query) {
    var queryString = queryFn.setQueryString(query);
    const users = axios.get(`${this.url}/${this.api}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return users.then((result) => {
      var Users = new Array();
      result.data.forEach(user => {
        Users.push(new this.constructor(this.url, this.token, user, result.headers['x-total-count']));
      });
      return Users;
    })
    .catch(error => {
      console.log(error);
      return Promise.reject({
        statusCode: error.response.status,
        errors: error.response.data
      });
    });
  }

  get (id, query) {
    var queryString = queryFn.setQueryString(query);
    const user = axios.get(`${this.url}/${this.api}/${id}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return user.then((result) => {
      return new this.constructor(this.url, this.token, result.data);
    })
    .catch(error => {
      console.log(error);
      return Promise.reject({
        statusCode: error.response.status,
        errors: error.response.data
      });
    })
  }

  create (model) {
    if(typeof model === 'undefined'){
      model = this.data;
    }
    const add = axios.post(`${this.url}/${this.api}`, model, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return add.then(result =>{
      return new this.constructor(this.url, this.token, result.data);
    })
    .catch(error => {
      return Promise.reject({
        statusCode: error.response.status,
        errors: error.response.data
      });
    });
  }

  delete (id) {
    if(typeof id === 'undefined'){
      if(typeof this.data !== 'undefined'){
        id = this.data.id;
      }
    }
    const del = axios.delete(`${this.url}/${this.api}/${id}`,{
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return del.then(result => {
      return result.status;
    })
    .catch(error => {
      return Promise.reject({
        statusCode: error.response.status,
        errors: error.response.data
      });
    });
  }

  replace (model, id) {
    if(typeof id === 'undefined'){
      if(typeof this.data !== 'undefined'){
        id = this.data.id;
      }
    }
    if(typeof model === 'undefined'){
      model = this.data;
    }
    const replace = axios.put(`${this.url}/${this.api}/${id}`, model,{
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return replace.then(result =>{
      this.data = result.data;
      return this;
    })
    .catch(error => {
      return Promise.reject({
        statusCode: error.response.status,
        errors: error.response.data
      });
    });
  }

  update (user, userId) {
  if(typeof userId === 'undefined'){
    if(typeof this.data !== 'undefined'){
        userId = this.data.id;
    }
  }
  if(typeof user === 'undefined'){
      user = this.data;
  }
  const update = axios.patch(`${this.url}/${this.api}/${userId}`, user,{
    headers: {'Authorization': 'Bearer ' + this.token}
  });

  return update.then(result =>{
    this.data = result.data;
    return this;
  })
  .catch(error => {
    return Promise.reject({
      statusCode: error.response.status,
      errors: error.response.data
    });
  });
}
}
module.exports = BaseCRUD;
