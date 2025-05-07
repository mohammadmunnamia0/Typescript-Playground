// inside a  object if we write any function it is called Method

let person : {
    name:string ; 
    salary: number;
    addBalance:(bonus?:number)=>number; //addBalance method a amra akta variable use kortasi tai aita age declera kore delam akta arrow function diye , pore just value assign korbo.
    } = {
    name : 'munna',
    salary : 125000,
    addBalance( bonus=20000 ){
    return this.salary+bonus //Object er kono property jodi ami method a use korte chai amake "this.property_name" use korte hobe
    }

}

    //both are same but write in different way

{
    const poorUse  = {
        name : 'munna',
        salary : 125000,
        Balance : 0,
        addBalance( bonus:number):string  {
            return `New balance is ${this.Balance+ bonus}`;
        }
    }
    
   
}
