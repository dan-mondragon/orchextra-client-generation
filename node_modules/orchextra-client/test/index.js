
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

/** PROMESAS **/
auth.authClient('qwerty', 'qwerty')
    .then(client => {
        console.log('Token:', client.getToken())
        console.log('ExpiresIn:', client.getExpiresIn())
    })

auth.loginUser('nehomar.correa', 'gigigo10')
    .then(user => {
        console.log('Nombre:', user.name)
        console.log('Email:', user.email)
        console.log('Username:', user.username)
    })
    .catch(error => {
        console.log('ErrorStatusCode:', error.statusCode)
    })
