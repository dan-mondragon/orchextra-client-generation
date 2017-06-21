const campaignsApi = require('../src/campaigns');
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5949a2a83157b629aab3eb2a';
const fs = require('fs');

// var w = {};

campaignsApi.setUrl('https://generation-api-coupons.s.gigigoapps.com');
campaignsApi.setAuthToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI');

var _with = {
  users: ['clients'],
  projects: [],
  channels: []
};

var fields = ['legals', 'description'];

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

campaignsApi.getCampaigns(_with, fields).then(campaigns => {
  campaigns.forEach((campaign) => console.log(campaign));
  // console.log(campaigns[0].user.clients);
})
.catch(error => {
  console.log(error);
});

campaignsApi.getCampaign(idCampaign, _with, fields).then(campaign => {
  console.log(campaign);
})
.catch(error => {
  console.log(error);
});

campaignsApi.deleteCampaign(idCampaign).then(campaign => {
  console.log(campaign);
})
.catch(error => {
  console.log(error);
});

campaignsApi.createCampaign(campaign).then(campaign => {
  console.log(campaign);
}).catch(error => {
  console.log(error);
});
