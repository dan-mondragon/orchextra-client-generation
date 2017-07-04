const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5953f4876c368c7358d0c2d9';
const fs = require('fs');

var Campaign = require('../src/campaigns');
var campaign = new Campaign('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5NTQzNWRlZjNlYWU3NjliMWQ2OTNjZSIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0yOVQxNDoyNzoxMy42NzVaIiwiaWF0IjoxNDk4NzQ2NDMzfQ.FKLIBDx5REmnplIvFD5AfsB9ofXrdidP9ApSkqhMBXo');

var query = {
  _with: [],
  fields: ['image','description'],
  filter: {
    description: 'Esto es una prueba'
  },
  page: 1,
  perPage: 2
};

var campaignModel = {
  type: "digital",
  name: "campaña nueva 4",
  legals: "Legales N",
  description: "Descripción Nueva 2",
  active: 'true',
  expirationDate: "2018-06-20T00:00:00.000Z",
  startDate: "2017-06-20T00:00:00.000Z",
  projectId: "5949957e3157b629aab3eb28",
  image: fs.createReadStream('facebook_318-136394.jpg')
};

campaign.getCampaigns(query).then(campaigns => {
    if(campaigns instanceof Campaign){
      campaigns.campaigns.forEach((campaign) => console.log(campaign));
    }
    else{
      console.log(campaigns);
    }
  // console.log(campaigns[0].user.clients);
  // console.log(campaigns);
})
.catch(error => {
  console.log(error);
});

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
//   console.log(campaignModel);
//   campaignReturned.updateCampaign(campaignModel).then(campaign => {
//     console.log(campaign);
//   })
//   .catch(error => {
//     console.log(error);
//   });
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
//
// campaign.createCampaign(campaignModel).then(campaign => {
//   console.log(campaign);
// }).catch(error => {
//   console.log(error);
// });

// console.log(campaignModel);
// campaign.updateCampaign(campaignModel, idCampaign).then(campaign => {
//   console.log(campaign);
// })
// .catch(error => {
//   console.log(error);
// });


// campaign.replaceCampaign(campaignModel, idCampaign).then(campaign => {
//   console.log(campaign);
// })
// .catch(error => {
//   console.log(error);
// });
