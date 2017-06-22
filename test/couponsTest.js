const couponsApi = require('../src/coupons');
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5941b6323157b629aab3eabb';
const idChannel = '59495e153157b629aab3eaf8';
const idCustomer = '';
const idCoupon = '';
const fs = require('fs');

couponsApi.setAuthToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNVQyMjowODoxMS44MzdaIiwiaWF0IjoxNDk3NTY0NDkxfQ.__5ToBfxjkKY06p08dsBGt1w7y3S1sU8ZfuU5Li2_0Q');
couponsApi.setUrl('https://generation-api-coupons.s.gigigoapps.com');

var _with = {
  channel: []
};

var fields = [];

couponsApi.getCoupons(_with, fields).then(coupons => {
  coupons.forEach((coupon) => console.log(coupon));
  console.log(coupons);
})
.catch(error => {
  console.log(error);
});
