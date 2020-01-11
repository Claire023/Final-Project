export class  User {
    constructor(
        //vrai User :
        //  id : number,
        //  pseudo : string,
        //  mail : string, 
        //  password : string,

        //pour les tests : 
        public email : string,
        public  id: string,
        private _token : string, 
        private _tokenExpirationDate: Date

    ){}


    get token() {
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
return this._token;
    }
}

