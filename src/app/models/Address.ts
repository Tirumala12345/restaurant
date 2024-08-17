export class Address{
    add1:string;
    add2:string;
    pincode:string;
    state:string;
    city:string;

    constructor( add1:string,add2:string,pincode:string, state:string,city:string){
        this.add1=add1;
        this.add2=add2;
        this.pincode=pincode;
        this.state=state;
        this.city=city;
    }
}
