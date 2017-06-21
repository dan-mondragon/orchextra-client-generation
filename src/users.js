const axios = require('axios');
const api = 'v1/users';

var getUsers = (token, url)  => {
  const users = axios.get(`${url}/${api}`, {
    headers: {'Authorization': 'Bearer ' + token}
  });

  return users.then((result) => {
    return result.data;
  })
  .catch(error => {
    return error.code;
  });
};


var getUser = (token, url, userId) => {
  const user = axios.get(`${url}/${api}/${userId}`, {
    headers: {'Authorization': 'Bearer ' + token}
  });

  return user.then((result) => {
    return result.data;
  })
  .catch(error => {
    return error.response.status;
  })
};


var createUser = (token, url, user) => {
  const add = axios.post(`${url}/${api}`, user, {
    headers: {'Authorization': 'Bearer ' + token}
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


var deleteUser = (token, url, userId) => {
  const del = axios.delete(`${url}/${api}/${userId}`,{
    headers: {'Authorization': 'Bearer ' + token}
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

var replaceUser = (token, url, userId, user) => {
  const replace = axios.put(`${url}/${api}/${userId}`, user,{
    headers: {'Authorization': 'Bearer ' + token}
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
  replaceUser
};
