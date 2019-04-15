class Account {
  constructor(login, email){
    this.login = login;
    this.email = email;
  }
  getInfo(){
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  }
}

const account = new Account('Mangozedog', 'mango@dog.woof');

console.log(Account.prototype.getInfo); // function
account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
