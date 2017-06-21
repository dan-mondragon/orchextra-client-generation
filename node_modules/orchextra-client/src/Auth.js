var rp = require('request-promise');
import User from "./User"

export default class Auth {
    /**
     *
     * @param url
     */
    constructor (url) {
        this.url = url
    }

    /**
     *
     * @param clientId
     * @param clientSecret
     * @returns {*|Promise.<TResult>}
     */
    authClient(clientId, clientSecret){
        var options = {
            method: 'POST',
            uri: this.url + '/auth',
            body: {
                clientId: clientId,
                clientSecret: clientSecret
            },
            json: true
        }
        /**
         *
         * @type {Auth}
         */
        var self = this
        return rp(options)
            .then(function (parsedBody) {
                self.token = parsedBody.token
                self.expiresIn = parsedBody.expiresIn
                return self
            })
    }

    /**
     *
     * @param username
     * @param password
     * @returns {*|Promise.<TResult>}
     */
    loginUser(username, password){
        var options = {
            method: 'POST',
            uri: this.url + '/login',
            body: {
                username: username,
                password: password
            },
            json: true
        }

        return rp(options)
            .then(function (parsedBody) {
                return new User(parsedBody)
            })
    }

    /**
     *
     * @returns token
     */
    getToken () {
        return this.token
    }

    /**
     *
     * @returns expiresIn
     */
    getExpiresIn () {
        return this.expiresIn
    }
}
