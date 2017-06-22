# Orchextra-client-generation

Orchextra SDK para el consumo del módulo de Generación.

### Instalación (npm)
```js
npm install orchextra-client-generation
```
## Ejemplos

### Campañas
```js
var campaignsApi = require('orchextra-client-generation/campaigns');
campaignsApi.setUrl('https://generation-api-coupons.s.gigigoapps.com');
campaignsApi.setAuthToken('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
```
#### Listado de Campañas
```js
var _with = {
  users: ['clients'],
  projects: [],
  channels: []
};
var fields = ['legals', 'description'];

campaignsApi.getCampaigns(_with, fields).then(campaigns => {
  campaigns.forEach((campaign) => console.log(campaign));
})
.catch(error => {
  console.log(error);
});
```
#### Información de Campaña
```js
const idCampaign = '5949a2a83157b629aab3eb2a';
campaignsApi.getCampaign(idCampaign, _with, fields).then(campaign => {
  console.log(campaign);
})
.catch(error => {
  console.log(error);
});

```
#### Crear Campaña
```js
var campaign = {
  type: "digital",
  name: "campaña nueva",
  legals: "Legales",
  description: "Descripción",
  active: 'true',
  expirationDate: "2018-06-20T00:00:00.000Z",
  startDate: "2017-06-20T00:00:00.000Z",
  projectId: "592ef58012638c2edb5e45a8",
  image: fs.createReadStream('facebook_318-136394.jpg')
};
campaignsApi.createCampaign(campaign).then(campaign => {
  console.log(campaign);
}).catch(error => {
  console.log(error);
});
```
#### Eliminar Campaña
```js
campaignsApi.deleteCampaign(idCampaign).then(campaign => {
  console.log(campaign);
})
.catch(error => {
  console.log(error);
});
```

### Usuarios
```js
var usersApi = require('orchextra-client-generation/users');
usersApi.setUrl('https://generation-api-coupons.s.gigigoapps.com');
usersApi.setAuthToken('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
```
#### Listado de Usuarios
```js
usersApi.getUsers().then(users => {
  users.forEach((user) => console.log(user.id));
})
.catch(error => {
  console.log(error);
});
```
#### Información de Usuario
```js
const idUser = '5942f7c73157b629aab3eae4';
usersApi.getUser(idUser).then(user => {
  console.log(user);
})
.catch(error => {
  console.log(error);
});

```
#### Crear Usuario
```js
var user = {
  name: 'Daniel',
  email: 'daniel@gigigo.com.mx',
  username: 'Daniel',
  role: 'Role',
  password: 'gigigo',
  passwordConfirmation: 'gigigo',
  languageCode: 'es',
  projectsIds: ["5936cb98d318c404f94951e2"]
};
usersApi.createUser(user).then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});
```
#### Eliminar Usuario
```js
usersApi.deleteUser(idUser).then(user => {
  console.log(user);
})
.catch(error => {
  console.log(error);
});
```
#### Reemplazar Usuario
```js
usersApi.replaceUser(idUser, user).then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});
```
