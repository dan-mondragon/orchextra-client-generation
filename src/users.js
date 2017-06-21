const axios = require('axios');
const api = 'v1/users';

var setUrl = (url) => {
  this.url = url;
};

var setAuthToken = (token) => {
  this.token = token;
}

var getUsers = ()  => {
  const users = axios.get(`${this.url}/${api}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
  });

  return users.then((result) => {
    return result.data;
  })
  .catch(error => {
    return error.code;
  });
};


var getUser = (userId) => {
  const user = axios.get(`${this.url}/${api}/${userId}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
  });

  return user.then((result) => {
    return result.data;
  })
  .catch(error => {
    return error.response.status;
  })
};


var createUser = (user) => {
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
};

var deleteUser = (userId) => {
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
};

var replaceUser = (userId, user) => {
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


module.exports ={
  getUsers,
  getUser,
  createUser,
  deleteUser,
  replaceUser,
  setUrl,
  setAuthToken
};
