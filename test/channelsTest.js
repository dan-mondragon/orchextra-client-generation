const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5941b6323157b629aab3eabb';

const id = '59553829f3eae769b1d693e8';

var Channel = require('../src/channels');
var channel = new Channel('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5NTQzNWRlZjNlYWU3NjliMWQ2OTNjZSIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0yOVQxNDoyNzoxMy42NzVaIiwiaWF0IjoxNDk4NzQ2NDMzfQ.FKLIBDx5REmnplIvFD5AfsB9ofXrdidP9ApSkqhMBXo');

var query = {
    _with: ['client.user', 'client.customers'],
    fields: ['stock'],
    filter: {
      stock: 100
    },
    page: 1,
    perPage: 2
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

channel.all(query).then(channels => {
  // if(channels instanceof Channel){
    channels.forEach((channel) => console.log(channel));
  // }
  // else{
  //   console.log(channels);
  // }
})
.catch(error => {
  console.log(error);
});

// channel.get(id, query).then(channelReturned => {
//   console.log(channel);

//   channelReturned.delete().then(channel => {
//     console.log(channel);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// })
// .catch(error => {
//   console.log(error);
// });

// channel.createChannel(channelModel).then(channel => {
//   console.log(channel);
// }).catch(error => {
//   console.log(error);
// });

// channel.delete(id).then(channel => {
//   console.log(channel);
// })
// .catch(error => {
//   console.log(error);
// });

// channel.update(channelModel, id).then(channel => {
//   console.log(channel);
// })
// .catch(error => {
//   console.log(error);
// });

// var channelTemp = new Channel('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5NTQzNWRlZjNlYWU3NjliMWQ2OTNjZSIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0yOVQxNDoyNzoxMy42NzVaIiwiaWF0IjoxNDk4NzQ2NDMzfQ.FKLIBDx5REmnplIvFD5AfsB9ofXrdidP9ApSkqhMBXo');
// channelTemp.data = {
//   name: 'landing 1.5',
//   type: 'landingPages',
//   slug: 'landing-1.5',
//   campaignId: '594be2d53157b629aab3eb59',
//   stock: 50,
//   clientId: '5942b9b63157b629aab3eabc',
//   skinId: '59480e333157b629aab3eaeb'
// };
// channelTemp.replace(undefined, id).then(channel => {
//   console.log(channel);
// })
// .catch(error => {
//   console.log(error);
// });
