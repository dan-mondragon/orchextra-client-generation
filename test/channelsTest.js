const channelsApi = require('../src/channels');
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNVQyMjowODoxMS44MzdaIiwiaWF0IjoxNDk3NTY0NDkxfQ.__5ToBfxjkKY06p08dsBGt1w7y3S1sU8ZfuU5Li2_0Q';
var url = 'https://generation-api-coupons.s.gigigoapps.com';
const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5941b6323157b629aab3eabb';
const idChannel = '59495e153157b629aab3eaf8';
const fs = require('fs');


var _with = {
  campaign: []
};

var fields = ['type'];

// channelsApi.getChannels(token, url, undefined, fields).then(channels => {
//   channels.forEach((channel) => console.log(channel));
// })
// .catch(error => {
//   console.log(error);
// });

// channelsApi.getChannel(token, url,idChannel, _with, fields).then(channel => {
//   console.log(channel);
// })
// .catch(error => {
//   console.log(error);
// });

var channel = {
  name: 'landing 1.4',
  type: 'landingPages',
  slug: 'landing-1.4',
  campaignId: '5941b6163157b629aab3eab9',
  stock: 50,
  clientId: '5942b9b63157b629aab3eabc',
  skinId: '59480e333157b629aab3eaeb'
};

// channelsApi.createChannel(token, url, channel).then(channel => {
//   console.log(channel);
// }).catch(error => {
//   console.log(error);
// });

// channelsApi.deleteChannel(token, url, idChannel).then(channel => {
//   console.log(channel);
// })
// .catch(error => {
//   console.log(error);
// });

// channelsApi.updateChannel(token, url, idChannel, channel).then(channel => {
//   console.log(channel);
// })
// .catch(error => {
//   console.log(error);
// });

channelsApi.replaceChannel(token, url, idChannel, channel).then(channel => {
  console.log(channel);
})
.catch(error => {
  console.log(error);
});
