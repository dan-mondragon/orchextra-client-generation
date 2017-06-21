const campaignApi = require('../src/campaigns');
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI';
var url = 'https://generation-api-coupons.s.gigigoapps.com';
const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '59494be73157b629aab3eaf2';
const fs = require('fs');

// var w = {};

var _with = {
  users: [],
  projects: [],
  channels: []
};

var fields = ['legals', 'description'];

console.log(_with);

// var _with = ['users','channels', 'projects'];
// var _with = [];

// campaignApi.getCampaigns(token, url, _with, fields).then(campaigns => {
//   campaigns.forEach((campaign) => console.log(campaign));
//   // console.log(campaigns[0].user.clients);
// })
// .catch(error => {
//   console.log(error);
// });

// campaignApi.getCampaign(token, url, idCampaign, _with, fields).then(campaign => {
//   console.log(campaign);
// })
// .catch(error => {
//   console.log(error);
// });

campaignApi.deleteCampaign(token, url, idCampaign).then(campaign => {
  console.log(campaign);
})
.catch(error => {
  console.log(error);
});



var campaign = {
  type: "digital",
  name: "campaña nueva",
  legals: "Legales",
  description: "Descripción",
  active: 'true',
  expirationDate: "2018-06-20T00:00:00.000Z",
  startDate: "2017-06-20T00:00:00.000Z",
  projectId: "592ef58012638c2edb5e45a8",
  image: fs.createReadStream('facebook_318-136394.jpg')
};

// campaignApi.createCampaign(token, url, campaign).then(campaign => {
//   console.log(campaign);
// }).catch(error => {
//   console.log(error);
// });
