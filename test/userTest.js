

// import User from '../src/users';
// var User = require('orchextra-client-generation/users');
// userApi.setUrl('https://generation-api-coupons.s.gigigoapps.comu
// userApi.setAuthToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI');
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI';
// const url = 'https://generation-api-coupons.s.gigigoapps.com';






var User = require('../src/users');
var user = new User('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI');

var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')


const idUser = '594ae5eb3157b629aab3eb41';

var userModel = {
  name: 'User Test 4',
  email: 'test@gigigo.com.mx',
  username: 'test',
  role: 'Role',
  password: 'gigigo',
  passwordConfirmation: 'gigigo',
  languageCode: 'es',
  projectsIds: ["5936cb98d318c404f94951e2"]
};

user.getUsers().then(users => {
  users.forEach((user) => console.log(user.id));
})
.catch(error => {
  console.log(error);
});

// user.getUser(idUser).then(userReturn => {
//   userReturn.deleteUser().then(user => {
//     console.log(user);
//   })
//   .catch(error => {
//     console.log(error);
//   });
//
// })
// .catch(error => {
//   console.log(error);
// });

// user.createUser(userModel).then(user => {
//   console.log(user);
// }).catch(error => {
//   console.log(error);
// });

// user.deleteUser(idUser).then(user => {
//   console.log(user);
// })
// .catch(error => {
//   console.log(error);
// });

// user.replaceUser(idUser, userModel).then(user => {
//   console.log(user);
// }).catch(error => {
//   console.log(error);
// });
