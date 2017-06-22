const axios = require('axios');
const api = 'v1/clients';
const clientsUtils = require('./fn/clients');

var setUrl = (url) => {
  this.url = url;
};

var setAuthToken = (token) => {
  this.token = token;
}

var getClients = (w, fields)  => {
  var withString = clientsUtils.setWith(w);
  var fieldsString = clientsUtils.setFields(fields);

  const clients = axios.get(`${this.url}/${api}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
  });

  return clients.then((result) => {
    return result.data;
  })
  .catch(error => {
    return {
      statusCode: error.response.status,
      errors: error.response.data
    };
  });
};


var getClient = (clientId, w, fields) => {
  var withString = clientsUtils.setWith(w);
  var fieldsString = clientsUtils.setFields(fields);

  const client = axios.get(`${this.url}/${api}/${clientId}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
  });

  return client.then((result) => {
    return result.data;
  })
  .catch(error => {
    return {
      statusCode: error.response.status,
      errors: error.response.data
    };
  })
};


var createClient = (client) => {
  const add = axios.post(`${this.url}/${api}`, {
    type: client.type,
    name: client.name,
    clientId: client.clientId,
    clientSecret: client.clientSecret,
    userId: client.userId
  }, {
    headers: {'Authorization': 'Bearer ' + this.token,'Content-Type': 'application/json'}
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


var deleteClient = (clientId) => {
  const del = axios.delete(`${this.url}/${api}/${clientId}`,{
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


var replaceClient = (clientId, client) => {
  const replace = axios.put(`${this.url}/${api}/${clientId}`, {
    type: client.type,
    name: client.name,
    clientId: client.clientId,
    clientSecret: client.clientSecret,
    userId: client.userId
  },{
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


module.exports = {
  getClients,
  getClient,
  createClient,
  deleteClient,
  replaceClient,
  setUrl,
  setAuthToken
};
