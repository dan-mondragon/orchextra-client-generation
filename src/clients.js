const axios = require('axios');
const api = 'v1/clients';

var getClients = (token, url)  => {
  const clients = axios.get(`${url}/${api}`, {
    headers: {'Authorization': 'Bearer ' + token}
  });

  return clients.then((result) => {
    return result.data;
  })
  .catch(error => {
    return error.code;
  });
};


var getClient = (token, url, clientId) => {
  const client = axios.get(`${url}/${api}/${clientId}`, {
    headers: {'Authorization': 'Bearer ' + token}
  });

  return client.then((result) => {
    return result.data;
  })
  .catch(error => {
    return error.response.status;
  })
};


var createClient = (token, url, client) => {
  const add = axios.post(`${url}/${api}`, {
    type: client.type,
    name: client.name,
    clientId: client.clientId,
    clientSecret: client.clientSecret,
    userId: client.userId
  }, {
    headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'}
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


var deleteClient = (token, url, clientId) => {
  const del = axios.delete(`${url}/${api}/${clientId}`,{
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


var replaceClient = (token, url, clientId, client) => {
  const replace = axios.put(`${url}/${api}/${clientId}`, {
    type: client.type,
    name: client.name,
    clientId: client.clientId,
    clientSecret: client.clientSecret,
    userId: client.userId
  },{
    headers: {'Authorization': 'Bearer ' + token}
  });

  return replace.then(result =>{
    return result.data;
  })
  .catch(error => {
    return {
      statusCode: error.response.status,
      errors: error.response.data.errors.errors
    };
  });
};


module.exports = {
  getClients,
  getClient,
  createClient,
  deleteClient,
  replaceClient
};
