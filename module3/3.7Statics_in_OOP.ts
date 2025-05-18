                                                    //Statics in OOP

{

class Counter {
    count : number = 0;

    //function1 for increment
     increment(){
        return (this.count = this.count+1);
    }

    //function2 for decrement
     decrement(){
        return (this.count = this.count-1);
    }
}

//now lets call the two function increment & decrement ,by creating their Instance

const Levelup = new Counter();
console.log(Levelup.count);

const LevelDown = new Counter();
console.log(LevelDown.count);











}