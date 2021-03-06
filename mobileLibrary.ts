import {Mobile} from './mobile';

export class MobileLibrary{
    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;

    constructor(name:string, location:string, mobiles:Mobile[]){
        this.name=name;
        this.location=location;
        this.mobiles=mobiles;
        this.totalPrice=this.totalPriceCalculation()
    }

    public getName():string{
        return this.name;
    }
    public getLocation():string{
        return this.location;
    }
    public getMobiles():Mobile[]{
        return this.mobiles;
    }
    public getTotalPrice():number{
        return this.totalPrice;
    }

    public setName(name:string){
        this.name=name;
    }
    public setLocation(location:string){
        this.location=location;
    }
    public setMobiles(mobiles:Mobile[]){
        this.mobiles=mobiles;
        this.totalPrice=this.totalPriceCalculation()
    }
    // public setTotalPrice(totalPrice:number){
    //     this.totalPrice=totalPrice;
    // }

    public printLibrary(){
        console.log('* These are all my mobiles:');
        for (let i=0;i<this.mobiles.length;i++){
            this.mobiles[i].printSpecs()
        }
        console.log(`* Price overall: ${this.totalPrice}`)
    }

    private totalPriceCalculation():number{
        let totalPrice:number=0;
        for(let i=0;i<this.mobiles.length;i++){
            totalPrice+=this.mobiles[i].getPrice();
        }
        return totalPrice;
    }
}