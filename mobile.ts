export class Mobile{
    name:string;
    model:string;
    trademark:string;
    sdSize:number;
    color:string;
    is5G:boolean;
    cameraNumber:number;
    price:number;

    constructor(name:string, model:string, trademark:string, sdSize:number, color:string, is5G:boolean, cameraNumber:number, price:number){
        this.name=name;
        this.model=model;
        this.trademark=trademark;
        this.sdSize=sdSize;
        this.color=color;
        this.is5G=is5G;
        this.cameraNumber=cameraNumber;
        this.price=price;
    }
}