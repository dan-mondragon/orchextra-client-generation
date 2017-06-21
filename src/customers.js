const axios = require('axios');
var rp = require('request-promise');
var FormData = require('form-data');
const api = 'v1/customers';
const projectUtils = require('./fn/projects');

var getCustomers = (token, url, w, fields)  => {
  var withString = projectUtils.setWith(w);
  var fieldsString = projectUtils.setFields(fields);

  console.log(withString);
  const projects = axios.get(`${url}/${api}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + token}
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


var getCustomer = (token, url, idCustomer, w, fields) => {
  var withString = channelUtils.setWith(w);
  var fieldsString = channelUtils.setFields(fields);

  const customer = axios.get(`${url}/${api}/${idCustomer}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + token}
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
  getCustomer
};
