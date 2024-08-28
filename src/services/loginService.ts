export class LoginSerivce{
    static #instance: LoginSerivce;
    
    private constructor(){}

    public static get instance(){
        if(!LoginSerivce.#instance){
            LoginSerivce.#instance = new LoginSerivce();
        }

        return LoginSerivce.#instance;
    }

    /**
     * Sends encoded credentials to the server, retreves JWT with session details.
     * @returns true if login attempt was successful
     */
    public async login(/*credentials*/){
        return true
    }

    /**
     * Prolongs session and gets new refresh token
     * @returns true if session refresh attemp was successful
     */
    public async refresh(/*session refresh token*/){
        return true;
    }

    /**
     * Destroys session and invalidates related tokens
     * @returns true if logout was successful
     */
    public async logout(){
        return true;
    }
}