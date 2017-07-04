const axios = require('axios');
const api = 'v1/customers';
const queryFn = require('./fn/QueryString');

module.exports=
class Customer {
  constructor(url, token, customer){
    this.url = url;
    this.token = token;
    if(typeof customer !== 'undefined'){
      this.data = customer;
    }
  }

  getCustomers(query){
    var queryString = queryFn.setQueryString(query);
    const customers = axios.get(`${this.url}/${api}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return customers.then((result) => {
      var Customers = new Array();
      result.data.forEach(customer => {
        Customers.push(new Customer(this.url, this.token, customer));
      });
      return Customers;
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }

  getCustomer(idCustomer, query){
    var queryString = queryFn.setQueryString(query);
    const customer = axios.get(`${this.url}/${api}/${idCustomer}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return customer.then((result) => {
      return new Customer(this.url, this.token, result.data);
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
//   getCustomers,
//   getCustomer,
//   setUrl,
//   setAuthToken
// };
