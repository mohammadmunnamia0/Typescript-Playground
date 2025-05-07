// Ternary-optionalChaining-NullishCoalescing




                                                        //Ternary
{
  const age: number = 15;

  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log(isAdult);
  console.log({ isAdult }); // printing as a object
}



                                                        // nullish coalescing

{
  // nullish coalescing "??" -> use for null or undefine decision making, if there is a null or undefine value that time it will make a decision and set a value like guest we mention in below .
  const isAuth = null;

  const result = isAuth ?? "Guest";
  console.log({ result });
}




                                                       //optional chaining


{


//optional chaining is same as nullish coalescing make decision while there is null or Undefine value.


  type UserDetails = {
    name: string;
    age: number;
    address: {
      city: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const User1: UserDetails = {
    name: "munna",
    age: 24,
    address: {
      city: "Dhaka",
      presentAddress: "Dhaka",
    },
  };

  const CheckAddress1 = User1.address.permanentAddress;
  console.log({CheckAddress1}); // answer is Undefine 

  const CheckAddress2 = User1?.address?.permanentAddress ?? "No permanentAddress"; // //optional chaining is same as nullish coalescing make decision while there is null or Undefine value.

  console.log({CheckAddress2}); // answer is No permanentAddress 

}
