const customersApi = require('../src/customers');
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNVQyMjowODoxMS44MzdaIiwiaWF0IjoxNDk3NTY0NDkxfQ.__5ToBfxjkKY06p08dsBGt1w7y3S1sU8ZfuU5Li2_0Q';
var url = 'https://generation-api-coupons.s.gigigoapps.com';
const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5941b6323157b629aab3eabb';
const idChannel = '59495e153157b629aab3eaf8';
const idCustomer = '';
const fs = require('fs');


var _with = {
  project: []
};

var fields = [];

customersApi.getCustomers(token, url, _with, fields).then(customers => {
  customers.forEach((customer) => console.log(customer));
  console.log(customers);
})
.catch(error => {
  console.log(error);
});
