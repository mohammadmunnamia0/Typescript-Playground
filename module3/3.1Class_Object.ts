{
  //creating class
  class Car {
  public name: string;
   public owner:string;
    public model: string;

    //created constructor for parameter or values
    constructor(name: string, model: string, owner:string) {
      this.name = name;
      this.owner = owner;
      this.model = model;
    }

    //method -> we use normal function to use the "this."
    cardetails() {
      console.log(`The Owner of this ${this.name} ${this.model} is ${this.owner}`);
    }
  }

  //creating objects car1, car2
  const car1 = new Car("Ford", "Zip","Md Munna mia");
  const car2 = new Car("Mercedes", "Benz S-Class", "Md Munna mia");

  //calling the method for each object
  car1.cardetails();
  car2.cardetails()

/*
        Output : 
User@MdMunnaMia MINGW64 /c/Web-Dev-Next-Level/Mission1/typescript/module3 (main)
$ ts-node-dev --respawn --transpile-only ./3.1Class_Object.ts 
The Owner of this Ford Zip is Md Munna mia
The Owner of this Mercedes Benz S-Class is Md Munna mia

*/

}

/*--------------------Same Code but below one is more readable , because we use public keyword in side the constructor argument which will reduce the code write ability.---------------*/

{
  
  class Car {
   
    constructor(public name: string, public model: string, public owner:string) {
     
    }

    //method -> we use normal function to use the "this."
    cardetails() {
      console.log(`The Owner of this ${this.name} ${this.model} is ${this.owner}`);
    }
  }

  //creating objects car1, car2
  const car1 = new Car("Ford", "Zip","Md Munna mia");
  const car2 = new Car("Mercedes", "Benz S-Class", "Md Munna mia");

  car1.cardetails();
  car2.cardetails()


}
