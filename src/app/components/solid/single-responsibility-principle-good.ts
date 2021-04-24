/*
    Single responsibility principle: là mỗi class chỉ nên chịu trách nhiệm về một
    tính năng duy nhất. Nếu xuất hiện đoạn code mà không thuộc về trách nhiệm
    của class đó thì nên tách đoạn code đó ra một class khác xử lý.
*/

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
        if(this.user.role === "Admin") {
            return true;
        }
        return false;
    }
}
