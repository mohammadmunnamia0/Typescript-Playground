                                        //Access modifiers

// * private property can only be access inside the class 
// * Private property must use the naming convention "_propertyName"

{

class BankAccount {
    
    constructor(
        public readonly id:number,
         public name:string,
          private _balance:number){  } // cant change the _balance out of the BankAccount class 

    addDeposit(amount:number){
        this._balance = this._balance+amount;
    }

    getBalance(){
        return this._balance;
    }
}

const PoorAccount = new BankAccount(1,'munna',1000);  // PoorAccount.name = we can change this , but we cant change id cause we have declare id as a readonly property

PoorAccount.addDeposit(3000000);

const myBalance = PoorAccount.getBalance();

console.log(`Your Current Balance is ${myBalance}`);








}