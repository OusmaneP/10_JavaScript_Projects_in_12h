class Bank {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(money){
        this.balance += money;
        console.log({balance: this.balance})
    }

    withdraw(money){
        if(this.balance >= money){
            this.balance -= money;
            console.log({balance: this.balance})
        }
        else {
            console.log('Error not enough money in your account❌');
        }
    }

}