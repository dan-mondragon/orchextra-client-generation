# Orchextra-client-generation

Orchextra SDK para el consumo del módulo de Genreación.

### Instalación (npm)
```js
npm install orchextra-client-generation
```
## Ejemplos

### Usuarios
```js
var userApi = require('orchextra-client-generation/users');
```
#### Listado de Usuarios
```js
userApi.getUsers(token, url).then(users => {
  users.forEach((user) => console.log(user.id));
})
.catch(error => {
  console.log(error);
});
```
#### Información de Usuario
```js
userApi.getUser(token, url,idUser).then(user => {
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

userApi.createUser(token, url, user).then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});
```
#### Eliminar Usuario
```js
userApi.deleteUser(token, url,idUser).then(user => {
  console.log(user);
})
.catch(error => {
  console.log(error);
});
```
#### Reemplazar Usuario
```js
userApi.replaceUser(token, url,idUser, user).then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});
```
