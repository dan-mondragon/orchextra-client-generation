const skinsApi = require('../src/skins');
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5941b6323157b629aab3eabb';
const fs = require('fs');
const idSkin = '59494b013157b629aab3eaf1';

skinsApi.setAuthToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNVQyMjowODoxMS44MzdaIiwiaWF0IjoxNDk3NTY0NDkxfQ.__5ToBfxjkKY06p08dsBGt1w7y3S1sU8ZfuU5Li2_0Q');
skinsApi.setUrl('https://generation-api-coupons.s.gigigoapps.com');


var _with = {
  users: ['clients']
};

var fields = [];

// skinsApi.getSkins(_with, fields).then(skins => {
//   skins.forEach((skin) => console.log(skin));
// })
// .catch(error => {
//   console.log(error);
// });

// skinsApi.getSkin(idSkin, _with, fields).then(skin => {
//   console.log(skin);
// })
// .catch(error => {
//   console.log(error);
// });


var skin = {
  name: 'Skin 7',
  projectId: '5949957e3157b629aab3eb28',
  userId: '592ee7d0b46c2cbdc2ace58c',
  headerColor: '#000000',
  logoMode: 'circle',
  skinColorPrimary: '#000000',
  skinColorSecondary: '#000000',
  textColorPrimary: '#000000',
  textColorSecondary: '#000000',
  favicon: fs.createReadStream('facebook_318-136394.jpg'),
  logo: fs.createReadStream('facebook_318-136394.jpg')
};

// skinsApi.createSkin(skin).then(skin => {
//   console.log(skin);
// })
// .catch(error => {
//   console.log(error);
// });

// skinsApi.createSkin(token, url, skin);


// skinsApi.deleteSkin(idSkin).then(skin => {
//   console.log(skin);
// })
// .catch(error => {
//   console.log(error);
// });


// skinsApi.replaceSkin(idSkin, skin).then(channel => {
//   console.log(channel);
// })
// .catch(error => {
//   console.log(error);
// });


skinsApi.updateSkin(idSkin, skin).then(channel => {
  console.log(channel);
})
.catch(error => {
  console.log(error);
});
