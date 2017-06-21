const axios = require('axios');
var rp = require('request-promise');
var FormData = require('form-data');
const api = 'v1/coupons';
const couponsUtils = require('./fn/coupons');

var getCoupons = (token, url, w, fields)  => {
  var withString = couponsUtils.setWith(w);
  var fieldsString = couponsUtils.setFields(fields);

  const coupons = axios.get(`${url}/${api}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + token}
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

var getCoupon = (token, url, idCustomer, w, fields) => {
  var withString = couponsUtils.setWith(w);
  var fieldsString = couponsUtils.setFields(fields);

  const coupon = axios.get(`${url}/${api}/${idCustomer}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + token}
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
  getCoupon
};
