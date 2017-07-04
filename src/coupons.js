var Base = require('./BaseCRUD');

module.exports =
  class Coupon extends Base {
    get api() {
      return "v1/coupons";
    }

    get contentType() {
      return "application/json";
    }
  }