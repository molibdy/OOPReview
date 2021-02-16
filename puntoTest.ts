import {Punto} from './punto';

let punto1:Punto=new Punto(4,3);
let punto2:Punto=new Punto(6,7);
let punto3:Punto=new Punto(1,-2);
let punto4:Punto=new Punto(-3,5);
let punto5:Punto=new Punto(5,10);

console.log(punto1.getX())
console.log(punto1.getY())
console.log(punto1.toString())
punto1.setX(5);
punto1.setY(9);
console.log(punto1.getX())
console.log(punto1.getY())
console.log(punto1.toString())

console.log(punto1.distanciaAlOrigen());
console.log(punto1.calcularDistancia(punto2));

console.log(punto1.calcularCuadrante());
console.log(punto1.calcularMasCercano([punto2,punto3,punto4,punto5]))