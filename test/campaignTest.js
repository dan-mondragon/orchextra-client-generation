const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '594beaff3157b629aab3eb5a';
const fs = require('fs');

// var w = {};

var Campaign = require('../src/campaigns');
var campaign = new Campaign('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI');

var query = {
    _with: [],
    fields: ['image'],
    filter: ['description=Esto es una prueba']
};

var campaignModel = {
  type: "digital",
  name: "campaña nueva 2",
  legals: "Legales",
  description: "Descripción",
  active: 'true',
  expirationDate: "2018-06-20T00:00:00.000Z",
  startDate: "2017-06-20T00:00:00.000Z",
  projectId: "5949957e3157b629aab3eb28"
  // image: fs.createReadStream('facebook_318-136394.jpg')
};

// campaign.getCampaigns(query).then(campaigns => {
//   campaigns.forEach((campaign) => console.log(campaign));
//   // console.log(campaigns[0].user.clients);
// })
// .catch(error => {
//   console.log(error);
// });

// campaign.getCampaign(idCampaign).then(campaignReturned => {
//   // console.log(campaignReturned);
//
//   // campaignReturned.deleteCampaign().then(campaign => {
//   //   console.log(campaign);
//   // })
//   // .catch(error => {
//   //   console.log(error);
//   // });
//
//   // campaignReturned.replaceCampaign(campaignModel).then(campaignReplaced => {
//   //   console.log(campaignReplaced);
//   // })
//   // .catch(error => {
//   //   console.log(error);
//   // });
// })
// .catch(error => {
//   console.log(error);
// });

// campaign.deleteCampaign(idCampaign).then(campaign => {
//   console.log(campaign);
// })
// .catch(error => {
//   console.log(error);
// });

// campaign.createCampaign(campaignModel).then(campaign => {
//   console.log(campaign);
// }).catch(error => {
//   console.log(error);
// });

campaign.updateCampaign(campaignModel, idCampaign).then(campaign => {
  console.log(campaign);
})
.catch(error => {
  console.log(error);
});


// campaign.replaceCampaign(campaignModel, idCampaign).then(campaign => {
//   console.log(campaign);
// })
// .catch(error => {
//   console.log(error);
// });
