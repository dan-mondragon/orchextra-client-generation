

// import User from '../src/users';
// var User = require('orchextra-client-generation/users');
// userApi.setUrl('https://generation-api-coupons.s.gigigoapps.comu
// userApi.setAuthToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI');
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI';
// const url = 'https://generation-api-coupons.s.gigigoapps.com';






var User = require('../src/users');
var user = new User('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI');

const idUser = '59514fc83157b629aab3eb84';

var userModel = {
  name: 'Ricardo 4',
  email: 'test_test4@gigigo.com.mx',
  username: 'Ricardo 4',
  role: 'Role',
  password: 'gigigo',
  passwordConfirmation: 'gigigo',
  languageCode: 'es',
  projectsIds: ["5936cb98d318c404f94951e2"]
};

var query = {
    _with: [],
    fields: ['role','name'],
    filter: ['name=Nehomar Correa']
};

user.getUsers(query).then(users => {
  // console.log(users);
  users.forEach((user) => console.log(user.data));
  // users[4].deleteUser().then(user => {
  //     console.log(user);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
})
.catch(error => {
  console.log(error);
});

user.getUser(idUser).then(returnedUser => {
  console.log(returnedUser);
  // returnedUser.replaceUser(userModel).then(user => {
  //   console.log(user);
  // }).catch(error => {
  //   console.log(error);
  // });
  // returnedUser.deleteUser().then(user => {
  //   console.log(user);
  // })
  // .catch(error => {
  //   console.log(error);
  // });
})
.catch(error => {
  console.log(error);
});

user.createUser(userModel).then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});

user.deleteUser(idUser).then(user => {
  console.log(user);
})
.catch(error => {
  console.log(error);
});

user.replaceUser(userModel,idUser).then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});

user.updateUser(userModel,idUser).then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});
