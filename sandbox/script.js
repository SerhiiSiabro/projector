BankAccount;

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // Виведе: 1500
account.withdraw(200);
console.log(account.getBalance()); // Виведе: 1300
account.withdraw(2000); // Виведе: "Недостатньо коштів на рахунку."
