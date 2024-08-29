export class AccountSerivce{
    static #instance:AccountSerivce;

    private constructor() {

    }

    public static get instance(){
        if(!this.#instance){
            this.#instance = new AccountSerivce();
        }

        return this.#instance;
    }

    /**
     * Retrevs accounts for loged user
     */
    public getAccounts(){
            
    }
}