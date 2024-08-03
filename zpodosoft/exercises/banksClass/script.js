
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

let amount = document.getElementById('amount');
let depositBtn = document.getElementById('deposit');
let withdrawBtn = document.getElementById('withdraw');
let balanceDiv = document.getElementById('balance');

// CREATE BANK
bankAccount = new Bank(0);


// deposit button
depositBtn.onclick = () => {
    let money = Number(amount.value);
    if (money > 0) {
        bankAccount.deposit(money);
        showBalance();
    }else
        console.log('bad input')
}

// withdraw button
withdrawBtn.onclick = () => {
    let money = Number(amount.value);
    if (money > 0){
        bankAccount.withdraw(money);
        showBalance();
    }else
        console.log('bad input')
}

// showBalance update DOM
const showBalance = () => {
    balanceDiv.innerHTML = `<p>Balance <b>$ ${bankAccount.balance.toLocaleString('en-US')} </b></p>`
}































