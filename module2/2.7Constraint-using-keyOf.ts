                                    //Generic  Constraint using keyof operator

{
type Vehicle ={
    bike:string;
    card:string;
    ship:string;
}

type Owner1 = "bike" | "car" | "ship" ; // we just write the Union operator manually 

//Lets do it using "keyof"
type Owner2 = keyof Vehicle;

}

{
    const getPropertyVAlue =<X,Y extends keyof X> (obj:X,key:Y) =>{
        return obj[key];
    }

    const user ={
        id:1,
        name:'munna',
        address:'dhaka'
    }

    const result = getPropertyVAlue(user,"id")
}