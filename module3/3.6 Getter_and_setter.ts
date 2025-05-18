                                            // Getter_and_setter
{
    
  {
    //-------BankAccount

    class BankAccount {
      constructor(
        public readonly id: number,
        public name: string,
        protected _balance1: number 
      ) {};

      /*
      
      addDeposit(amount: number) {
        this._balance1 = this._balance1 + amount;  // This one is a function , we can do the same thing Using setter method , that time it will work as a property but will do the work of a function
      }

      
      */

      set Deposit(amount:number){
        this._balance1 = this._balance1 + amount;
      }


      /*  
      
      getBalance() {
        return this._balance1;
      } // This one is a function , we can do the same thing Using getter method , that time it will work as a property but will do the work of a function
      
      */
      
      get Balance() {
        return this._balance1;
      }

    }

    //------------Creating Instance and calling the methods



    const UserAccount = new BankAccount(1, "munna", 100); 

    // UserAccount.addDeposit(300); //Before using setter
    UserAccount.Deposit=300; // After using setter

    // const myBalance = UserAccount.getBalance(); // As we have use getter we cant call use this function call , we will call it as a property, but it will work as a function
    // const myBalance = UserAccount.addDeposit;
    const myBalance = UserAccount.Balance;
    console.log(`Your Current Balance is ${myBalance}`);

   
  }

}