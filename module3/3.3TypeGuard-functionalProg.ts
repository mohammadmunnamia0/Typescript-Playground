                                                        //Type guard using typeof & in
{

//type of -> type guard

type ReturnType = string|number;

const add = (param1:ReturnType, param2: ReturnType) : ReturnType => {

    if(typeof param1 === 'number' && typeof param2 === 'number'){
        return param1+param2;
    }
    else{
       return param1.toString()+param2.toString();
    }
}

const result = add(2,3);
console.log(result);
const result2 = add("2","3");
console.log(result2);

/*

User@MdMunnaMia MINGW64 /c/Web-Dev-Next-Level/Mission1/typescript/module3 (main)
$ ts-node-dev --respawn --transpile-only ./3.3TypeGuard.ts 
[INFO] 12:55:22 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.8.3)
5
23

*/

}