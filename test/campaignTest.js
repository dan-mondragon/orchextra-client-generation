const idUser = '5942fdfb3157b629aab3eae8';
const id = '595c006df3eae769b1d6941e';
const fs = require('fs');

var Campaign = require('../src/campaigns');
var campaign = new Campaign('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5NTQzNWRlZjNlYWU3NjliMWQ2OTNjZSIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0yOVQxNDoyNzoxMy42NzVaIiwiaWF0IjoxNDk4NzQ2NDMzfQ.FKLIBDx5REmnplIvFD5AfsB9ofXrdidP9ApSkqhMBXo');

var query = {
  _with: [],
  fields: ['image', 'description'],
  filter: {
    description: 'Esto es una prueba'
  },
  page: 2
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

campaign.all(query).then(campaigns => {
  console.log(campaigns);
  campaigns.forEach((campaign) => console.log(campaign));
})
  .catch(error => {
    console.log(error);
  });

// campaign.get(id).then(campaignReturned => {
//   console.log(campaignReturned);

//   campaignReturned.delete().then(campaign => {
//     console.log(campaign);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//   // campaignReturned.replaceCampaign(campaignModel).then(campaignReplaced => {
//   //   console.log(campaignReplaced);
//   // })
//   // .catch(error => {
//   //   console.log(error);
//   // });

//   // campaignReturned.updateCampaign(campaignModel).then(campaign => {
//   //   console.log(campaign);
//   // })
//   // .catch(error => {
//   //   console.log(error);
//   // });
// })
// .catch(error => {
//   console.log(error);
// });

// campaign.delete(id).then(campaign => {
//   console.log(campaign);
// })
// .catch(error => {
//   console.log(error);
// });

// campaign.create(campaignModel).then(campaign => {
//   console.log(campaign);
// }).catch(error => {
//   console.log(error);
// });

// campaign.update(campaignModel, id).then(campaign => {
//   console.log(campaign);
// })
// .catch(error => {
//   console.log(error);
// });


// campaign.replace(campaignModel, id).then(campaign => {
//   console.log(campaign);
// })
// .catch(error => {
//   console.log(error);
// });
