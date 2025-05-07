                                                    //object Destructuring

const user = {
    id:123,
    name:{
        firstName:'munna',
        middleName:'mohammad',
        lastName:'mia'
    },
    profession: 'student',
    address:'dhaka',
    contact:'01858201032'
}

const {address} = user; //normal process to Destructuring data from user 

const { name:{firstName,middleName,lastName} } = user; //normal process to Destructuring  nested data from user 


const { name:{ firstName : Name} } = user; //Name Alias , here  'firstName' is renamed as 'Name'




                                                        //Array Destructuring

const myFriends : string []= ['suraiya','munna','tonmoy','x','y','z'];

const [bestFriend,b,c] = myFriends; // bestFriend=suraiya, b= munna, c=tonmoy

const [Wife,...rest] =  myFriends; //wife = suraiya, munna, tonmoy, x, y, z