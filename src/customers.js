const axios = require('axios');
const api = 'v1/customers';
const projectUtils = require('./fn/projects');

var setUrl = (url) => {
  this.url = url;
};

var setAuthToken = (token) => {
  this.token = token;
}

var getCustomers = (w, fields)  => {
  var withString = projectUtils.setWith(w);
  var fieldsString = projectUtils.setFields(fields);

  console.log(withString);
  const projects = axios.get(`${this.url}/${api}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
  });

  return projects.then((result) => {
    return result.data;
  })
  .catch(error => {
    return {
      statusCode: error.response.status,
      errors: error.response.data
    };
  });
};


var getCustomer = (idCustomer, w, fields) => {
  var withString = channelUtils.setWith(w);
  var fieldsString = channelUtils.setFields(fields);

  const customer = axios.get(`${this.url}/${api}/${idCustomer}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
  });

  return customer.then((result) => {
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
  getCustomers,
  getCustomer,
  setUrl,
  setAuthToken
};
