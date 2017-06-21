export default class User {
    /**
     *
     * @param user
     */
    constructor(user){
        this.user = user
    }
    /**
     *
     * @return languageCode
     */
    get languageCode(){
        return this.user.languageCode
    }
    /**
     *
     * @returns role
     */
    get role(){
        return this.user.role
    }
    /**
     *
     * @returns password
     */
    get password(){
        return this.user.password
    }
    /**
     *
     * @return email
     */
    get email(){
        return this.user.email
    }

    /**
     * @return name
     */
    get name(){
        return this.user.name
    }

    /**
     *
     * @return username
     */
    get username(){
        return this.user.username
    }

    /**
     *
     * @returns projectIds
     */
    get projectIds(){
        return this.user.projectIds
    }
}
