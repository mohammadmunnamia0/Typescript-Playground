                                                    //Access modifiers

// * private property can only be access inside the class
// * Private property must use the naming convention "_propertyName"
//protected property can be access out side the parent class , but only in the child class which call is inherit the parent class

{
  // * private property can only be access inside the class
  // * Private property must use the naming convention "_propertyName"

  {
    //-------BankAccount
    class BankAccount {
      constructor(
        public readonly id: number,
        public name: string,
        private _balance1: number // can use or change the _balance1 out of the BankAccount class
      ) {};

      addDeposit(amount: number) {
        this._balance1 = this._balance1 + amount;
      }

      getBalance() {
        return this._balance1;
      }
    }

    //-----Student BankAccount

    class StudentAccount extends BankAccount {
      studentDeposit(amount: number) {
        // here if i want to access the "_balance1" property i cant access cause it is private
        this._balance1 = this._balance1 + amount;
      }
    }

    //------------Creating Instance and calling the methods

    const UserAccount = new BankAccount(1, "munna", 1000); // UserAccount.name = we can change this , but we cant change id cause we have declare id as a readonly property
    UserAccount.addDeposit(3000000);
    const myBalance = UserAccount.getBalance();
    console.log(`Your Current Balance is ${myBalance}`);

    const Student = new StudentAccount(1, "Suraiya", 200);
    Student.studentDeposit(100);
    const StudentBalance = Student.getBalance();
    console.log(`Your Current Balance is ${StudentBalance}`);
  }
}

//---------------------------Using protected ---------------------------------------------

{
    
  {
    //-------BankAccount
    class BankAccount {
      constructor(
        public readonly id: number,
        public name: string,
        protected _balance1: number // can use or change the _balance1 out of the BankAccount class
      ) {};

      addDeposit(amount: number) {
        this._balance1 = this._balance1 + amount;
      }

      getBalance() {
        return this._balance1;
      }
    }

    //-----Student BankAccount

    class StudentAccount extends BankAccount {
      studentDeposit(amount: number) {
        // here if i want to access the "_balance1" property i cant access cause it is private
        // But i can access "_balance2" cause it is protected
        this._balance1 = this._balance1 + amount;
      }
    }

    //------------Creating Instance and calling the methods

    const UserAccount = new BankAccount(1, "munna", 1000); // UserAccount.name = we can change this , but we cant change id cause we have declare id as a readonly property
    UserAccount.addDeposit(3000000);
    const myBalance = UserAccount.getBalance();
    console.log(`Your Current Balance is ${myBalance}`);

    const Student = new StudentAccount(1, "Suraiya", 200);
    Student.studentDeposit(100);
    const StudentBalance = Student.getBalance();
    console.log(`Your Current Balance is ${StudentBalance}`);
  }

}
