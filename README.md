# Orchextra-client-generation

Orchextra SDK para el consumo del módulo de Genreación.

### Instalación (npm)

npm install orchextra-client-generation

## Ejemplos

### Usuarios
var userApi = require('orchextra-client-generation/users');

#### Listado de Usuarios
userApi.getUsers(token, url).then(users => {
  users.forEach((user) => console.log(user.id));
})
.catch(error => {
  console.log(error);
});
#### Información de Usuario
userApi.getUser(token, url,idUser).then(user => {
  console.log(user);
})
.catch(error => {
  console.log(error);
});
#### Crear Usuario
userApi.createUser(token, url, user).then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});
#### Eliminar Usuario
userApi.deleteUser(token, url,idUser).then(user => {
  console.log(user);
})
.catch(error => {
  console.log(error);
});
#### Reemplazar Usuario
userApi.replaceUser(token, url,idUser, user).then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});
