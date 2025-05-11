                                //Conditional Types

{

type a1 = null;
type b1 = undefined;

type x = a1 extends null ? true : false;

type y = a1 extends string ? true : b1 extends undefined ? true : false;

//

type VehicleCollection ={
car:string;
bike:string;
Apple:boolean;
Wife:number;
}

type CheckVehicle<T> = T extends keyof VehicleCollection ? true : false;

type HasBike = CheckVehicle<'bike'>; //answer is true
type HasWife = CheckVehicle<4>;

}