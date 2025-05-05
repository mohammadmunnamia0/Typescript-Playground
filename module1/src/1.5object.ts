const user: {
  FirstName: string; //mandatory
  MiddleName?: String; //Optional Type -> user jodi aita naw use kore no issue cause its optional
  LastName: string; //mandatory
  number: number; //mandatory
  company: "ReturnHex"; //Literal type cant be change in future
  // readonly company : 'ReturnHex'; //Literal type cant be change in future also cant be change because of using readonly
} = {
  FirstName: "munna",
  LastName: "mia",
  number: 123,
  company: "ReturnHex", // i cant change the company name cause its been declare at the first as a Literal type
};
