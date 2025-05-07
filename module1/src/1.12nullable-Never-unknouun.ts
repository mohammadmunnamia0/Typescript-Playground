                                                // nullable-Never-unknown


{

   {

        const searchResult = (value : string) =>{
            const result = value ? 'Searching Result' : "No Result"
            console.log({result})
        }
        searchResult('munna'); // output "Searching Result"
        // searchResult(null); // it will show error
    
    } 

                                //nullable

    {
    
        //what if i put null that time it will show error cause i didn't mention that the parameter can also have null 
    
        const searchResult = (value : string | null) =>{
            const result = value ? 'Searching Result' : "No Result"
            console.log({result})
        }
    
         searchResult(null); // no error and the output is No Result
    
    }
}



                                                        //unknown

{

    const getSpeed =(value : unknown) =>{
        if(typeof value === "number")
        {
            const Speed = (value*1000)/3600;
            console.log(`Your Speed is ${Speed} ms^-1`);
        }

        else if(typeof value === "string"){

            const FetchTheNumberFromString = value.split(' ');
            console.log(FetchTheNumberFromString); //output is "[ '1000', 'kmh^-1' ]"
            // const [number, junk] = value.split(' '); // also can be written in this way using Array Destructuring

            const [number, junk] = FetchTheNumberFromString; //Array Destructuring
            console.log(number); // output is 1000 , 1000 is a string now

            const Speed = (parseFloat(number)*1000)/3600; // we use parseFloat to convert from string to number
            console.log(`Your Speed is ${Speed} ms^-1`);

        }

        else{
            console.log('Invalid Input')
        }
    }
    // getSpeed(1000); // the result is "Your Speed is 277.77777777777777 ms^-1"
    // getSpeed('1000 kmh^-1') // it will not work cause it is a string , lets use else if condition to fix this -> now it will work
    getSpeed(null); // output "Invalid Input"



}


