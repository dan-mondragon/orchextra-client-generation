const clientApi = require('../src/clients');
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

const idUser = '594af3153157b629aab3eb55';

clientApi.setAuthToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI');
clientApi.setUrl('https://generation-api-coupons.s.gigigoapps.com');

// auth.authClient('qwerty', 'qwerty')
//   .then(client => {
//     clientApi.getClients(client.getToken(), url).then(clients => {
//       clients.forEach((client) => console.log(client.id));
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   })

// clientApi.getClients().then(clients => {
//   clients.forEach((client) => console.log(client.id));
// })
// .catch(error => {
//   console.log(error);
// });

  // clientApi.getClient(idUser).then(client => {
  //   console.log(client);
  // })
  // .catch(error => {
  //   console.log(error);
  // });
  var client = {
    type: 'generation',
    name: 'nameTest3.3',
    clientSecret: 'secretTest3',
  };

  // clientApi.createClient(client).then(client => {
  //   console.log(client);
  // }).catch(error => {
  //   console.log(error);
  // });


  // clientApi.deleteClient(idUser).then(client => {
  //   console.log(client);
  // })
  // .catch(error => {
  //   console.log(error);
  // });

  // clientApi.replaceClient(idUser, client).then(client => {
  //   console.log(client);
  // }).catch(error => {
  //   console.log(error);
  // });
