                        //3Interface_Abstraction .ts 
{

//-------------------1.Interface


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
}

//creating the class instance for calling the method

const checkEngineStarting = new Car;
checkEngineStarting.startEngine();

const checkEngineStopping = new Car;
checkEngineStopping.endEngine();

}

{

//-----------------2.abstract

}