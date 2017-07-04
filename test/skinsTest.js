const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5941b6323157b629aab3eabb';
const fs = require('fs');
const id = '595bdcf0f3eae769b1d6941a';

// skinsApi.setAuthToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNVQyMjowODoxMS44MzdaIiwiaWF0IjoxNDk3NTY0NDkxfQ.__5ToBfxjkKY06p08dsBGt1w7y3S1sU8ZfuU5Li2_0Q');
// skinsApi.setUrl('https://generation-api-coupons.s.gigigoapps.com');

var Skin = require('../src/skins');
var skin = new Skin('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5NTQzNWRlZjNlYWU3NjliMWQ2OTNjZSIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0yOVQxNDoyNzoxMy42NzVaIiwiaWF0IjoxNDk4NzQ2NDMzfQ.FKLIBDx5REmnplIvFD5AfsB9ofXrdidP9ApSkqhMBXo');


var query = {
  _with: ['users.clients', 'users.projects'],
  fields: [],
  filter: {},
  page: 1,
  perPage: 3
};

var skinModel = {
  name: 'Skin 16',
  projectId: '5949957e3157b629aab3eb28',
  userId: '5936efd5d318c404f94951ee',
  headerColor: '#000000',
  logoMode: 'circle',
  skinColorPrimary: '#000000',
  skinColorSecondary: '#000000',
  textColorPrimary: '#000000',
  textColorSecondary: '#000000',
  favicon: fs.createReadStream('facebook_318-136394.jpg'),
  logo: fs.createReadStream('facebook_318-136394.jpg')
};

skin.getSkins(query).then(skins => {
  skins.forEach((skin) => console.log(skin));
})
  .catch(error => {
    console.log(error);
  });

// skin.all(query).then(skins => {
//   skins.forEach((skin) => console.log(skin));
// })
//   .catch(error => {
//     console.log(error);
//   });


// skin.get(id).then(skinReturned => {
//   console.log(skinReturned);
//   skinReturned.delete().then(skin => {
//     console.log(skin);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//   // skinReturned.replaceSkin(skin).then(skin => {
//   //   console.log(skin);
//   // })
//   // .catch(error => {
//   //   console.log(error);
//   // });

//   // skin.updateSkin(skinModel, idSkin).then(s => {
//   //   console.log(s);
//   // })
//   // .catch(error => {
//   //   console.log(error);
//   // });

// })
// .catch(error => {
//   console.log(error);
// });


// skin.delete(id).then(skin => {
//   console.log(skin);
// })
// .catch(error => {
//   console.log(error);
// });


// skin.create(skinModel).then(skin => {
//   console.log(skin);
// })
// .catch(error => {
//   console.log(error);
// });

// skinsApi.createSkin(token, url, skin);

// skin.replace(skinModel,id).then(skin => {
//   console.log(skin);
// })
// .catch(error => {
//   console.log(error);
// });

// var skinModel2 = {
//   favicon: fs.createReadStream('twitter.png'),
//   logo: fs.createReadStream('twitter.png')
// };

// skin.update(skinModel2, id).then(skin => {
//   console.log(skin);
// })
// .catch(error => {
//   console.log(error);
// });
