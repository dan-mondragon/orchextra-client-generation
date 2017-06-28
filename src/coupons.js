const axios = require('axios');
const api = 'v1/coupons';
const queryFn = require('./fn/QueryString');

module.exports=
class Coupon {
  constructor(url, token, coupon){
    this.url = url;
    this.token = token;
    if(typeof coupon !== 'undefined'){
      this.data = coupon;
    }
  }

  getCoupons(query){
    var queryString = queryFn.setQueryString(query);
    const coupons = axios.get(`${this.url}/${api}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return coupons.then((result) => {
      var Coupons = new Array();
      result.data.forEach(coupon => {
        Coupons.push(new Coupon(this.url, this.token, coupon));
      });
      return Coupons;
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }

  getCoupon(idCustomer, query){
    var queryString = queryFn.setQueryString(query);
    const coupon = axios.get(`${this.url}/${api}/${idCustomer}?${queryString}}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return coupon.then((result) => {
      return new Coupon(this.url, this.token, result.data);
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
//   getCoupons,
//   getCoupon,
//   setUrl,
//   setAuthToken
// };
