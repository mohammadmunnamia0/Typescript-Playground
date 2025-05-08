                                        // Type assertion / type narrowing

{
   const KgToGram = (Value : number | string ) : number | string |undefined =>{
        if(typeof Value === 'number')
        {
                const convertedResult1 = Value*1000;
                return `Converted Result is ${convertedResult1}`;
        }
        else if (typeof Value == 'string'){
            const convertedResult2 = parseFloat(Value)*1000;
            return `Converted Result is ${convertedResult2}`;
        }
   }

  KgToGram(1234) as number; 
  // Why I am using the as number because I knew that I have given the number "1234" so definitely it is an number type value and the function will return number string and undefined as I have given the input as a number so definitely I knew that the value will come as a number this is the reason I have xplicitly mention that "as number" and this is known as type assertion ,in simple word The function may confuse that the answer could be number string or undefined but whenever I know that what will be the answer that time I can mention the type.

}

{   // same thing with different example
    type CustomError = {
        message : string;
    }

    try{

    }
    catch(error){
        console.log((error as CustomError).message)
    }
}