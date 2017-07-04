const idClient = '594bf6cd3157b629aab3eb65';

var Client = require('../src/clients');
var client = new Client('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5NTQzNWRlZjNlYWU3NjliMWQ2OTNjZSIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0yOVQxNDoyNzoxMy42NzVaIiwiaWF0IjoxNDk4NzQ2NDMzfQ.FKLIBDx5REmnplIvFD5AfsB9ofXrdidP9ApSkqhMBXo');

var query = {
    _with: ['user.clients', 'user.projects'],
    fields: ['type'],
    filter: {
      type: 'generation'
    },
    page: 1,
    perPage: 2
};

var clientModel = {
  type: 'generation',
  name: 'nameTest5',
  clientSecret: 'secretTest3.5',
  clientId: 'clientIdNew3'
};

// auth.authClient('qwerty', 'qwerty')
//   .then(client => {
//     clientApi.getClients(client.getToken(), url).then(clients => {
//       clients.forEach((client) => console.log(client.id));
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   })

client.getClients(query).then(clients => {
  if(clients instanceof Client){
    clients.forEach((client) => console.log(client.data));
  }
  else{
    console.log(clients);
  }
})
.catch(error => {
  console.log(error);
});


// client.getClient(idClient, query).then(clientReturned => {
//   console.log(clientReturned.data);
//   // clientReturned.deleteClient().then(client => {
//   //   console.log(client);
//   // })
//   // .catch(error => {
//   //   console.log(error);
//   // });
//
//   // clientReturned.replaceClient(clientModel).then(client => {
//   //   console.log(client);
//   // }).catch(error => {
//   //   console.log(error);
//   // });
//   clientReturned.data.name = 'nameTest5';
//   clientReturned.data.type = 'generation';
//   clientReturned.data.clientId = 'clientIdNew4';
//   clientReturned.updateClient().then(client => {
//     console.log(client);
//   }).catch(error => {
//     console.log(error);
//   });
// })
// .catch(error => {
//   console.log(error);
// });


// client.createClient(clientModel).then(client => {
//   console.log(client.data);
// }).catch(error => {
//   console.log(error);
// });


// client.deleteClient(idClient).then(client => {
//   console.log(client);
// })
// .catch(error => {
//   console.log(error);
// });

// client.replaceClient(clientModel, idClient).then(client => {
//   console.log(client);
// }).catch(error => {
//   console.log(error);
// });

// client.updateClient(clientModel, idClient).then(client => {
//   console.log(client);
// }).catch(error => {
//   console.log(error);
// });
