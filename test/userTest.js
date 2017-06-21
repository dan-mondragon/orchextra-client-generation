const userApi = require('../src/users');
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI';
var url = 'https://generation-api-coupons.s.gigigoapps.com';
const idUser = '5942fdfb3157b629aab3eae8';


  // userApi.getUsers(token, url).then(users => {
  //   users.forEach((user) => console.log(user.id));
  // })
  // .catch(error => {
  //   console.log(error);
  // });


    // userApi.getUser(token, url,idUser).then(user => {
    //   console.log(user);
    // })
    // .catch(error => {
    //   console.log(error);
    // });


var user = {
  name: 'userName2',
  email: 'user2@gigigo.com.mx',
  username: 'username',
  role: 'userRole2',
  password: 'gigigo10',
  passwordConfirmation: 'gigigo10',
  languageCode: 'es',
  projectsIds: ["5936cb98d318c404f94951e2"]
};
    userApi.createUser(token, url, user).then(user => {
      console.log(user);
    }).catch(error => {
      console.log(error);
    });

    // userApi.deleteUser(token, url,idUser).then(user => {
    //   console.log(user);
    // })
    // .catch(error => {
    //   console.log(error);
    // });

      // userApi.replaceUser(token, url,idUser, user).then(user => {
      //   console.log(user);
      // }).catch(error => {
      //   console.log(error);
      // });
