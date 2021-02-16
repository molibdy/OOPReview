import {Triangulo} from './triangulo';
import {Punto} from './punto';

let punto1:Punto=new Punto(4,3);
let punto2:Punto=new Punto(6,7);
let punto3:Punto=new Punto(1,-2);
let triangulo1:Triangulo=new Triangulo(punto1,punto2,punto3);

console.log(triangulo1.calcularLongitudLados())