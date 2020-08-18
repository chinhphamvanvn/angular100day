export class Store {
    paymentProcessor;
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity);
    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(15 * quantity);
    }
}

export class StripePaymentProcessor {
    stripe;
    constructor(user) {
        this.stripe = new Stripe(user);
        console.log('stripe', this.stripe);
    }

    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars * 100);
    }
}

class Stripe {
    user;
    constructor(user) {
        this.user = user;
    }

    makePayment(amountIncents) {
        console.log(`${this.user} made payment of $${amountIncents / 100} with Stripe`);
    }
}


export class PaypalPaymentProcessor {
    user;
    paypal;
    constructor(user) {
        this.user = user;
        this.paypal = new Paypal();
    }

    pay(amountInDollars) {
        this.paypal.makePayment(this.user, amountInDollars * 100);
    }
}

class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $${(amountInDollars / 100) + 10} with Paypal`);
    }
}

