//Normal function

function add (num1:number,num2:number) : number{
    return num1+num2;
}
add(2,3); // calling the function



//Arrow Function
const AddArrow = (num1:number,num2:number) : number=> {
    return num1+num2;
}
AddArrow(2,3);

//Arrow function with default value and data type

const AddingWIthDefault = (num1:number = 10, num2 :number = 20) =>{
    return num1+num2;
}