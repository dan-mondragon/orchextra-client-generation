# Orchextra-client-generation

Orchextra SDK para el consumo del módulo de Generación.

### Instalación (npm)
```js
npm install orchextra-client-generation
```
## Ejemplos

### Usuarios
```js
var User = require('../src/users');
var user = new User('https://generation-api-coupons.s.gigigoapps.com', 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
```
#### Listado de Usuarios
```js
var query = {
    _with: [],
    fields: ['role','name'],
    filter: ['name=Nehomar Correa']
};
user.getUsers(query).then(users => {  
  users.forEach((user) => console.log(user.data));
})
.catch(error => {
  console.log(error);
});
```
#### Información de Usuario
```js
const idUser = '5942f7c73157b629aab3eae4';
user.getUser(idUser).then(user => {
  console.log(user);
})
.catch(error => {
  console.log(error);
});

```
#### Crear Usuario
```js
var userModel = {
  name: 'Ricardo ',
  email: 'test_test4@gmail.com.mx',
  username: 'Ricardo 4',
  role: 'Role',
  password: 'Password1',
  passwordConfirmation: 'Password1',
  languageCode: 'es',
  projectsIds: ["5936cb98d318c404f94951e2"]
};
user.createUser(userModel).then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});
```
#### Eliminar Usuario
```js
user.deleteUser(idUser).then(user => {
  console.log(user);
})
.catch(error => {
  console.log(error);
});
```
#### Reemplazar Usuario
```js
user.replaceUser(userModel,idUser).then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});
```
#### Actualizar Usuario
```js
user.updateUser(userModel,idUser).then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});
```
#### Trabajar con objetos
Debido a que los métodos devuelven un objeto (en este caso del tipo "User"), es posible realizar acciones sobre ellos.
Por ejemplo, eliminar un usuario de tu arreglo de usuarios. Para lo anterior, ya no es necesario enviar el id.
```js

user.getUsers(query).then(users => {  
  users.forEach((user) => console.log(user.data));
  users[4].deleteUser().then(user => {
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    });
})
.catch(error => {
  console.log(error);
});
```
También puedes, por ejemplo, actualizar un objeto de la siguiente forma
```js

user.getUser(idUser).then(returnedUser => {
  returnedUser.data.name = 'Ricardo';
  returnedUser.data.username = 'ricardo@gmail.com';
  returnedUser.updateUser().then(user => {
    console.log(user);
  }).catch(error => {
    console.log(error);
  });
})
.catch(error => {
  console.log(error);
});
```

### Campañas
```js
var Campaign = require('orchextra-client-generation/campaigns');
var campaign = new Campaign('https://generation-api-coupons.s.gigigoapps.com', 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
```
#### Listado de Campañas
```js
var query = {
    _with: [],
    fields: ['image','description'],
    filter: ['description=campaña prueba']
};

campaign.getCampaigns(query).then(campaigns => {
  campaigns.forEach((campaign) => console.log(campaign));
})
.catch(error => {
  console.log(error);
});
```
#### Información de Campaña
```js
const idCampaign = '594beaff3157b629aab3eb5a';

campaign.getCampaign(idCampaign).then(campaign => {
  console.log(campaign);
})
.catch(error => {
  console.log(error);
});
```
#### Crear Campaña
```js
var campaignModel = {
  type: "digital",
  name: "campaña nueva 2",
  legals: "Legales",
  description: "Descripción",
  active: 'true',
  expirationDate: "2018-06-20T00:00:00.000Z",
  startDate: "2017-06-20T00:00:00.000Z",
  projectId: "5949957e3157b629aab3eb28",
  image: fs.createReadStream('facebook_318-136394.jpg')
};
campaign.createCampaign(campaignModel).then(campaign => {
  console.log(campaign);
}).catch(error => {
  console.log(error);
});
```
#### Eliminar Campaña
```js
campaign.deleteCampaign(idCampaign).then(campaign => {
  console.log(campaign);
})
.catch(error => {
  console.log(error);
});
```
#### Actualizar Campaña
```js
campaign.updateCampaign(campaignModel, idCampaign).then(campaign => {
  console.log(campaign);
})
.catch(error => {
  console.log(error);
});
```
#### Reemplazar Campaña
```js
campaign.replaceCampaign(campaignModel, idCampaign).then(campaign => {
  console.log(campaign);
})
.catch(error => {
  console.log(error);
});
```
#### Trabajar con objetos
Debido a que los métodos devuelven un objeto (en este caso del tipo "Campaign"), es posible realizar acciones sobre ellos.
Por ejemplo, eliminar la campaña actual. Para lo anterior, ya no es necesario enviar el id.
```js
campaign.getCampaign(idCampaign).then(campaignReturned => {
  console.log(campaignReturned);
  campaignReturned.deleteCampaign().then(campaign => {
    console.log(campaign);
  })
  .catch(error => {
    console.log(error);
  });
})
.catch(error => {
  console.log(error);
});
```
