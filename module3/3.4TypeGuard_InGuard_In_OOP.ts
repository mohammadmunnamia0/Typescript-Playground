                                        //Instance of Guard
{
  class Animal {

    constructor(public name: string, public species: string){
    }

    makeSound() {
      console.log("Im making Sound");
    }
  }

  //Animal 1
  class Cat extends Animal {
     constructor( name: string,  species: string){
      super(name,species);
    }

    makeMeow(){
      console.log(`Im a ${this.name} and i love to makeSound Meowwwwww`)
    }
  }

  //Animal2
  class Cow extends Animal{
    constructor( name: string,  species: string){
      super(name,species);
    }
    makeHumba(){
      console.log(`Im a ${this.name} and i love to makeSound Humbaaaaa`)
    }
  }

    //----------UnSmart way to use the instanceof 

  /*
  
  const getAnimal = (animal : Animal) =>{
    // animal. -> is showing name,species,makeSound() 
    // we cant access the makeMeow() or makeHumba

    //now making the instanceof of the Cat and Cow will allow us to access the makeMeow() and makeHumba()
    if (animal instanceof Cat){
      animal.makeMeow();
    }
    else if(animal instanceof Cow){
      animal.makeHumba()
    }
  }
  
  */
  

  //----------Smart way to use the instanceof -> we can use function to do that

const IsCat = (animal : Animal) : animal is Cat=>{ //boolean = animal is Cat
  return animal instanceof Cat;
}
const IsCow = (animal : Animal) : animal is Cow =>{ //boolean = animal is Cow
  return animal instanceof Cow;
}

  //function
  const getAnimal = (animal : Animal) =>{
    // animal. -> is showing name,species,makeSound() 
    // we cant access the makeMeow() or makeHumba

    //now making the instanceof of the Cat and Cow will allow us to access the makeMeow() and makeHumba()
    if (IsCat(animal) ){
      animal.makeMeow();
    }
    else if(IsCow(animal)){
      animal.makeHumba()
    }
    else{
      animal.makeSound();
    }
  }

  const cat = new Cat('Suraiya','Cute'); // this is the instanceof the Cat Class 

  const cow = new Cow('Munna','Funny'); // this is the instanceof the Cat Class 

  
  getAnimal(cat);
  getAnimal(cow);
}
