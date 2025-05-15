{
                                                         
type Person ={
    name:string;
    age:number;
    email?:string;
}
                                                        // Pick Type -> select specific 

type Name = Pick<Person,"name"|"age">;

                                                        //Omit -> delete 

type ContactInfo = Omit<Person, "name"|"age">; // Bad dewa , ContactInfo te email bad desi.

                                                        //Requires -> make all Required

type PersonRequired = Required<Person>; // in Person email is optional but here , all the things in person is required 

                                                        //Partial -> make all optional

type PersonPartial = Partial<Person>; // in Person age,name is Required but here , all the things in person is Partial 

                                                        //Normal Type where we can change the value 
const person2:Person = {
    name:'munna',
    age:24,
    email:'munna@gmail.com'
}
person2.name = "Suraiya";

                                                        //ReadOnly -> we cant change the values

type PersonReadOnly = Readonly<Person>

const person3:PersonReadOnly = {
    name:'munna',
    age:24,
    email:'munna@gmail.com'
}
/* person3.name = "Suraiya"; // cant change the value cause its Readonly type. */


                                                        //Record

                                                        //Can't insert or add new values without the values that are define in the objects

type Objects1 = {
    a:string;
    b:string
}

const obj1 : Objects1  = {
    a:'munna',
    b:'suraiya',
    c:'pupul' //it will show error 'c' does not exist in type 'Objects1'. cause there is no parameter in the Objects1 Type
}


/*type Objects2 = {
    a:string;
    b:string
}*/  //if i follow this then i will definitely faced some error, thats why for the convenient we use "Record" -> type Objects2 = Record<string,string>;

type Objects2 = Record<string,string>; // 1st string is the key of the object , cause in a object they are represent as a string
                                       // 2nd string is the returnType , as we can see all the values are written in string , But what if someone put number value?

// type Name = Record<keyof,returnType>

const obj2 : Objects2  = {
    a:'munna',
    b:'suraiya',
    c:'pupul' ,
    d:6, // this will show error cause we have said that the values will be in string ,  but if we use "type Objects2 = Record<string,unknown>; " that time there is no error.
}

//--------------------------------------


type Objects3 = Record<string,unknown>;


const obj3 : Objects3  = {
    a:'munna',
    b:'suraiya',
    c:'pupul' ,
    d:6,

}
                                                        