# ORCHEXTRA-CLIENT 

SDK para consumo de servicios de Autenticación de Orchextra-Client

## Instalación por npm

```js
npm i orchextra-client
```

## Ejemplo de uso

```js
var Auth = require('orchextra-client')
```
## Instanciamos la clase

```js
var auth = new Auth('https://ejemplo.com.mx')
```

## Hacemos referencia al método de Autentucación del Cliente y llamamos a los metodos que devuelven el Token y el tiempo de Expirado.

```js
auth.authClient('cliente1', '12345')
    .then(client => {
        console.log('Token:', client.getToken())
        console.log('ExpiresIn:', client.getExpiresIn())
    })

```

## Para el login del Usuario, hacemos referencia el método de Autenticación del Usuario, y llamamos a los métodos que devuelven la información completa del Usuario.

```js
auth.loginUser('user1', '12345')
    .then(user => {
        console.log('Nombre:', user.getName())
        console.log('Email:', user.email)
        console.log('Username:', user.getUsername())
    })
    .catch(error => {
        console.log('ErrorStatusCode:', error.statusCode)
    })
```
