const userApi = require('../src/users');
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI';
// const url = 'https://generation-api-coupons.s.gigigoapps.com';
const idUser = '594ae4b93157b629aab3eb3f';


userApi.setUrl('https://generation-api-coupons.s.gigigoapps.com');
userApi.setAuthToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI');
var user = {
  name: 'User Test3',
  email: 'test@gigigo.com.mx',
  username: 'test',
  role: 'Role',
  password: 'gigigo',
  passwordConfirmation: 'gigigo',
  languageCode: 'es',
  projectsIds: ["5936cb98d318c404f94951e2"]
};

userApi.getUsers().then(users => {
  users.forEach((user) => console.log(user.id));
})
.catch(error => {
  console.log(error);
});

userApi.getUser(idUser).then(user => {
  console.log(user);
})
.catch(error => {
  console.log(error);
});

userApi.createUser(user).then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});

userApi.deleteUser(idUser).then(user => {
  console.log(user);
})
.catch(error => {
  console.log(error);
});

userApi.replaceUser(idUser, user).then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});
