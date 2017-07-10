

// import User from '../src/users';
// var User = require('orchextra-client-generation/users');
// userApi.setUrl('https://generation-api-coupons.s.gigigoapps.comu
// userApi.setAuthToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI');
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI';
// const url = 'https://generation-api-coupons.s.gigigoapps.com';






var User = require('../src/users');
var user = new User('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5NTQzNWRlZjNlYWU3NjliMWQ2OTNjZSIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0yOVQxNDoyNzoxMy42NzVaIiwiaWF0IjoxNDk4NzQ2NDMzfQ.FKLIBDx5REmnplIvFD5AfsB9ofXrdidP9ApSkqhMBXo');

const id = '595a7322f3eae769b1d693fb';

var userModel = {
  name: 'Test 11',
  email: 'test_test11@gigigo.com.mx',
  username: 'Test 11',
  roles: ['Role'],
  password: 'gigigo',
  passwordConfirmation: 'gigigo',
  languageCode: 'es',
  projectsIds: ["59541372f3eae769b1d693c0"]
};

var query = {
    _with: [],
    fields: ['role','name'],
    filter: {
      role: 'superadmin',
      name: 'Nehomar Correa'
    },
    page: 1,
    perPage: 2
};

user.all(query).then(users => {
    users.forEach((user) => console.log(user.data));
  // users[4].deleteUser().then(user =>s {
  //     console.log(user);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
})
.catch(error => {
  console.log(error);
});

// user.get(id).then(returnedUser => {
//   console.log(returnedUser);
//   returnedUser.replaceUser(userModel).then(user => {
//     console.log(user);
//   }).catch(error => {
//     console.log(error);
//   });
//   returnedUser.delete().then(user => {
//     console.log(user);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//   returnedUser.data.name = 'Ricardo 7';
//   returnedUser.data.username = 'Ricardo 7';
//   returnedUser.updateUser().then(user => {
//     console.log(user);
//   }).catch(error => {
//     console.log(error);
//   });
// })
// .catch(error => {
//   console.log(error);
// });


// var userDel = new User('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5NTQzNWRlZjNlYWU3NjliMWQ2OTNjZSIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0yOVQxNDoyNzoxMy42NzVaIiwiaWF0IjoxNDk4NzQ2NDMzfQ.FKLIBDx5REmnplIvFD5AfsB9ofXrdidP9ApSkqhMBXo');
// userDel.data = {name: 'Test 9',
// email: 'test_test12@gigigo.com.mx',
// username: 'Test 12',
// roles: ['Role'],
// password: 'gigigo',
// passwordConfirmation: 'gigigo',
// languageCode: 'es',
// projectsIds: ["59541372f3eae769b1d693c0"]};
// userDel.create().then(user => {
//   console.log(user);
// }).catch(error => {
//   console.log(error);
// });


// var userDel = new User('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5NTQzNWRlZjNlYWU3NjliMWQ2OTNjZSIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0yOVQxNDoyNzoxMy42NzVaIiwiaWF0IjoxNDk4NzQ2NDMzfQ.FKLIBDx5REmnplIvFD5AfsB9ofXrdidP9ApSkqhMBXo');
// user.delete(id).then(user => {
//   console.log(user);
// })
// .catch(error => {
//   console.log(error);
// });

// var userDel = new User('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5NTQzNWRlZjNlYWU3NjliMWQ2OTNjZSIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0yOVQxNDoyNzoxMy42NzVaIiwiaWF0IjoxNDk4NzQ2NDMzfQ.FKLIBDx5REmnplIvFD5AfsB9ofXrdidP9ApSkqhMBXo');
// userDel.data = {};
// userDel.data.email = 'test_test7@gigigo.com.mx';
// userDel.replace(undefined, id).then(user => {
//   console.log(user);
// }).catch(error => {
//   console.log(error);
// });

// var userDel = new User('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5NTQzNWRlZjNlYWU3NjliMWQ2OTNjZSIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0yOVQxNDoyNzoxMy42NzVaIiwiaWF0IjoxNDk4NzQ2NDMzfQ.FKLIBDx5REmnplIvFD5AfsB9ofXrdidP9ApSkqhMBXo');
// userDel.data = {};
// userDel.data.email = 'test_test12@gigigo.com.mx';
// user.update(userModel,id).then(user => {
//   console.log(user);
// }).catch(error => {
//   console.log(error);
// });
