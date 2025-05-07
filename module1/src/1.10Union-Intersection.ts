{
//                                                //Union and Intersection     





                                                    //Union "x | y" -> OR '|'



 type FrontEnd = 'Junior FrontEnd' | 'Senior FrontEnd';
 type Backend =  'Junior Backend' | 'Senior Backend';
 type Stack = FrontEnd | Backend ;

 const DevelopmentPath : Stack = 'Junior FrontEnd';


//creating type for object
type ObjectDetails = { // Alias for object details
    name : string;
    age : number;
    role : 'front-end Developer' | 'Full Stack Developer';
    address : string;
    gender : 'male' | 'female';
    bloodGroup : 'O+' | 'AB+' | 'AB-' | 'O-';
}

//creating object
const User1 : ObjectDetails ={
    name : 'munna',
    age : 24,
    role : 'front-end Developer',
    address : 'dhaka',
    gender : 'male',
    bloodGroup : 'O-'
}

//
}

                                                            //Intersection "&" -> and
{

    //creating type for object

type FrontEnd = { // Alias for object details
   skills : string[];
   designation1 : 'FrontEnd Developer';
}
type Backend = {
    skills : string[];
    designation2 : 'Backend Developer';
}

type FullStack = FrontEnd & Backend ;


//creating object

const Developer : FullStack = {
  skills : ['html','javascript','react'],
  designation1 : 'FrontEnd Developer',
  designation2 : 'Backend Developer'
  
}



}