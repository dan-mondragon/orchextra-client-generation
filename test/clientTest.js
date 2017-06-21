const clientApi = require('../src/clients');
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI';
var url = 'https://generation-api-coupons.s.gigigoapps.com';
const idUser = '5942ee243157b629aab3eace';

// auth.authClient('qwerty', 'qwerty')
//   .then(client => {
//     clientApi.getClients(client.getToken(), url).then(clients => {
//       clients.forEach((client) => console.log(client.id));
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   })


  // clientApi.getClient(token, url,idUser).then(client => {
  //   console.log(client);
  // })
  // .catch(error => {
  //   console.log(error);
  // });

  // clientApi.createClient(token, url, {
  //   type: 'generation',
  //   name: 'nameTest2',
  //   clientId: 'clientIdTest2',
  //   clientSecret: 'secretTest2',
  //   userId: ''
  // }).then(client => {
  //   console.log(client);
  // }).catch(error => {
  //   console.log(error);
  // });


  // clientApi.deleteClient(token, url,idUser).then(client => {
  //   console.log(client);
  // })
  // .catch(error => {
  //   console.log(error);
  // });

var client = {
  type: 'generation',
  name: 'nameTest3.2',
  clientId: 'clientIdTest3',
  clientSecret: 'secretTest3',
};
  clientApi.replaceClient(token, url,idUser, client).then(client => {
    console.log(client);
  }).catch(error => {
    console.log(error);
  });
