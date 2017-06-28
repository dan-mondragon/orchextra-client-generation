const axios = require('axios');
const api = 'v1/clients';
const queryFn = require('./fn/QueryString');

module.exports=
class Client {
  constructor(url, token, client){
    this.url = url;
    this.token = token;
    if(typeof client !== 'undefined'){
      this.data = client;
    }
  }

  getClients(query){
    var queryString = queryFn.setQueryString(query);
    const clients = axios.get(`${this.url}/${api}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return clients.then((result) => {
      var Clients = new Array();
      result.data.forEach(client => {
        Clients.push(new Client(this.url, this.token, client));
      });
      return Clients;
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }

  getClient(clientId, query){
    var queryString = queryFn.setQueryString(query);
    const client = axios.get(`${this.url}/${api}/${clientId}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return client.then((result) => {
      return new Client(this.url, this.token, result.data);
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    })
  }


  createClient(client){
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
      return new Client(this.url, this.token, result.data);
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }


  deleteClient(clientId){
    if(typeof clientId === 'undefined'){
        clientId = this.data.id;
    }
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
  }


  replaceClient(client, clientId){
    if(typeof clientId === 'undefined'){
        clientId = this.data.id;
    }
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

// module.exports = {
//   getClients,
//   getClient,
//   createClient,
//   deleteClient,
//   replaceClient,
//   setUrl,
//   setAuthToken
// };
