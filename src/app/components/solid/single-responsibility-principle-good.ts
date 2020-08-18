class UserSettings2 {
    user;
    auth;
    constructor(user) {
        this.user = user;
        this.auth = new UserAuth(user);
    }

    changeSettings(settings) {
        if (this.auth.verifyCredentials()) {
            console.log(1);
        }
    }
}

class UserAuth {
    user;
    constructor(user) {
        this.user = user;
    }

    verifyCredentials() {

    }
}
