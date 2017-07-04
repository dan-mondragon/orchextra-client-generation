const couponsApi = require('../src/coupons');
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5941b6323157b629aab3eabb';
const idChannel = '59495e153157b629aab3eaf8';
const idCustomer = '';
const idCoupon = '';
const fs = require('fs');

var Coupon = require('../src/coupons');
var coupon = new Coupon('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5NTQzNWRlZjNlYWU3NjliMWQ2OTNjZSIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0yOVQxNDoyNzoxMy42NzVaIiwiaWF0IjoxNDk4NzQ2NDMzfQ.FKLIBDx5REmnplIvFD5AfsB9ofXrdidP9ApSkqhMBXo');

var query = {
    _with: [],
    fields: [],
    filter: {},
    page: 1,
    perPage: 2
};


coupon.get(query).then(coupons => {
  if(coupons instanceof Coupon){
    coupons.forEach((coupon) => console.log(coupon));
  }
  else{
    console.log(coupons);
  }
})
.catch(error => {
  console.log(error);
});
