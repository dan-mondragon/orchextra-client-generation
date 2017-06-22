const axios = require('axios');
const api = 'v1/coupons';
const couponsUtils = require('./fn/coupons');

var setUrl = (url) => {
  this.url = url;
};

var setAuthToken = (token) => {
  this.token = token;
}

var getCoupons = (w, fields)  => {
  var withString = couponsUtils.setWith(w);
  var fieldsString = couponsUtils.setFields(fields);

  const coupons = axios.get(`${this.url}/${api}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
  });

  return coupons.then((result) => {
    return result.data;
  })
  .catch(error => {
    return {
      statusCode: error.response.status,
      errors: error.response.data
    };
  });
};

var getCoupon = (idCustomer, w, fields) => {
  var withString = couponsUtils.setWith(w);
  var fieldsString = couponsUtils.setFields(fields);

  const coupon = axios.get(`${this.url}/${api}/${idCustomer}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
  });

  return coupon.then((result) => {
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
  getCoupons,
  getCoupon,
  setUrl,
  setAuthToken
};
