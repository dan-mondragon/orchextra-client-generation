const skinsApi = require('../src/skins');
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNVQyMjowODoxMS44MzdaIiwiaWF0IjoxNDk3NTY0NDkxfQ.__5ToBfxjkKY06p08dsBGt1w7y3S1sU8ZfuU5Li2_0Q';
var url = 'https://generation-api-coupons.s.gigigoapps.com';
const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5941b6323157b629aab3eabb';
const fs = require('fs');


// skinsApi.getSkins(token, url).then(skins => {
//   skins.forEach((skin) => console.log(skin));
// })
// .catch(error => {
//   console.log(error);
// });


var skin = {
  name: 'Skin 6',
  projectId: '592ef58012638c2edb5e45a8',
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

skinsApi.createSkin(token, url, skin).then(skin => {
  console.log(skin);
})
.catch(error => {
  console.log(error);
});

// skinsApi.createSkin(token, url, skin);