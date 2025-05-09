type vehicle = {
    bike:string;
    car:number;
    ship:string;
}

// type ChooseVehicle<T> =  T extends 'bike' | 'car' | 'ship' ? true : false ;
type ChooseVehicle<T> = T extends keyof vehicle ? true : false ;

type HasBike = ChooseVehicle<'bike'>; //hover on has bike will show ture , cause the bike is available in the vehicle , if i give plan it will show false