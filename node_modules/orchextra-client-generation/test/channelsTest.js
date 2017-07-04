const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5941b6323157b629aab3eabb';
const idChannel = '594aee6d3157b629aab3eb4c';

var Channel = require('../src/channels');
var channel = new Channel('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI');

var query = {
    _with: ['client.user', 'client.customers'],
    fields: ['stock'],
    filter: []
};

var channelModel = {
  name: 'landing 1.5',
  type: 'landingPages',
  slug: 'landing-1.5',
  campaignId: '5941b6163157b629aab3eab9',
  stock: 50,
  clientId: '5942b9b63157b629aab3eabc',
  skinId: '59480e333157b629aab3eaeb'
};

// channel.getChannels(query).then(channels => {
//   channels.forEach((channel) => console.log(channel));
// })
// .catch(error => {
//   console.log(error);
// });

channel.getChannel(idChannel, query).then(channelReturned => {
  console.log(channel);

  channelReturned.deleteChannel().then(channel => {
    console.log(channel);
  })
  .catch(error => {
    console.log(error);
  });
})
.catch(error => {
  console.log(error);
});

// channel.createChannel(channelModel).then(channel => {
//   console.log(channel);
// }).catch(error => {
//   console.log(error);
// });

// channel.deleteChannel(idChannel).then(channel => {
//   console.log(channel);
// })
// .catch(error => {
//   console.log(error);
// });

// channel.updateChannel(channelModel, idChannel).then(channel => {
//   console.log(channel);
// })
// .catch(error => {
//   console.log(error);
// });

// channel.replaceChannel(channelModel, idChannel).then(channel => {
//   console.log(channel);
// })
// .catch(error => {
//   console.log(error);
// });
