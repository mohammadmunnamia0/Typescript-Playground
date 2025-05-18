                        //3Interface_Abstraction .ts 
{

//-------------------1.Interface

//Interface class means = idea about the work 

interface Vehicle { //interface class only have the method , it will never had a body .
    startEngine():void ;
    endEngine():void;
}

class Car implements Vehicle { // to access the interface methods we have it use "implements" 

    startEngine(): void {
        console.log(`Im Starting the Engine`);
    }

    endEngine(): void {
        console.log(`Im Stopping the Engine`)
    }

    test(){
        console.log(`Hi Im testing Method - I am not the part of parent class , but still im useable without error.`)
    }
    //Till now what you have seen that if we didn't declare anything in the parent class, we cannot write that on the child class. But  Now, as we are using the interface, so inside the interface class, whatever the method, property, or whatever it is,in there, we can definitely have to implement or use it on the child class.And also We can use some extra variable,method. so it will not create any error.
}

//creating the class instance for calling the method

const checkEngineStarting = new Car;
checkEngineStarting.startEngine();

const checkEngineStopping = new Car;
checkEngineStopping.endEngine();

}

//-----------------2.abstract


{

//abstract class means = idea about the work 
abstract class Vehicle { //interface class only have the method

      abstract startEngine():void;
      abstract endEngine():void;
}
  
class Car extends Vehicle { // to access the abstract methods we have it use "implements" 

    startEngine(): void {
        console.log(`Im Starting the Engine`);
    }

    endEngine(): void {
        console.log(`Im Stopping the Engine`)
    }

    test(){
        console.log(`Hi Im testing Method - I am not the part of parent class , but still im useable without error.`)
    }
   
}

//creating the class instance for calling the method
/*
const checkEngineStarting = new Vehicle; // Cannot create an instance of an abstract class. -> Means we cant create any instance directly from abstract class
checkEngineStarting.startEngine();
*/

const checkEngineStarting = new Car;
checkEngineStarting.startEngine();

}