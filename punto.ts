export class Punto{
    private x:number;
    private y:number;

    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }

    public toString():string{
        return `(${this.x},${this.y})`
    }

    public distanciaAlOrigen():number{
        return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
    }

    public calcularDistancia(otroPunto:Punto):number{
        return Math.sqrt(Math.pow(this.x-otroPunto.x,2)+Math.pow(this.y-otroPunto.y,2))
    }

    public calcularCuadrante():number{
        let cuadrante:number=0
        if(this.x>0 && this.y>0){
            cuadrante=1
        }
        else if(this.x<0 && this.y>0){
            cuadrante=2
        }
        else if(this.x<0 && this.y<0){
            cuadrante=3
        }
        else if(this.x>0 && this.y<0){
            cuadrante=4
        }
        return cuadrante
    }

    public calcularMasCercano(puntos:Punto[]):Punto{
        let distanciaMenor:number=Math.sqrt(Math.pow(this.x-puntos[0].x,2)+Math.pow(this.y-puntos[0].y,2))
        let masCercano:Punto=puntos[0]
        for (let i=0;i<puntos.length;i++){
            if(distanciaMenor>Math.sqrt(Math.pow(this.x-puntos[i].x,2)+Math.pow(this.y-puntos[i].y,2))){
                distanciaMenor=Math.sqrt(Math.pow(this.x-puntos[i].x,2)+Math.pow(this.y-puntos[i].y,2));
                masCercano=puntos[i];
            }
        }
        return masCercano
    }

    public getX():number{
        return this.x;
    }
    public getY():number{
        return this.y;
    }
    public setX(x){
        this.x=x;
    }
    public setY(y){
        this.y=y;
    }
}