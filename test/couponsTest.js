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
var coupon = new Coupon('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI');

var query = {
    _with: [],
    fields: [],
    filter: []
};


coupon.getCoupons(query).then(coupons => {
  coupons.forEach((coupon) => console.log(coupon));  
})
.catch(error => {
  console.log(error);
});
