class UserSettings {
    user;
    constructor(user) {
        this.user = user;
    }

    changeSettings(settings) {
        if (this.verifyCredentials()) {
            console.log(1);
        }
    }

    verifyCredentials() {
        return true;
    }
}
