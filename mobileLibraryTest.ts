import {Mobile} from './mobile';
import {MobileLibrary} from './mobileLibrary';

//Crear array con cuatro objetos Mobile:
let Nokia3210:Mobile=new Mobile('Nokia3210', '3210', 'Nokia',16,'red',false,1,230);
let iPhone3G:Mobile=new Mobile('iPhone3G', '3G', 'iPhone',32,'black',false,1,400);
let SamsungGalaxy10:Mobile=new Mobile('Samsung Galaxy 10', '10', 'Samsung',64,'gray',true,2,600);
let movilRandom:Mobile=new Mobile('Movil Random X', 'X', 'Random trademark',128,'gold',true,4,900);

let mobiles:Mobile[]=[Nokia3210,iPhone3G,SamsungGalaxy10,movilRandom];

//Segundo array para probar setMobiles()
let Nokia32102:Mobile=new Mobile('Nokia32102', '32102', 'Nokia',16,'red',false,1,130);
let iPhone3G2:Mobile=new Mobile('iPhone3G2', '3G2', 'iPhone',32,'black',false,1,400);
let SamsungGalaxy102:Mobile=new Mobile('Samsung Galaxy 102', '102', 'Samsung',64,'gray',true,2,640);
let movilRandom2:Mobile=new Mobile('Movil Random X2', 'X2', 'Random trademark',128,'gold',true,4,934);
let mobiles2:Mobile[]=[Nokia32102,iPhone3G2,SamsungGalaxy102,movilRandom2];


//Crear objeto MobileLibrary con primer array:
let libreria:MobileLibrary=new MobileLibrary('Libreria Random', 'Madrid',mobiles);

console.log(libreria.getName())
console.log(libreria.getLocation())
console.log(libreria.getMobiles())
console.log(libreria.getTotalPrice())
console.log(libreria.totalPriceCalculation())

libreria.setName('Libreria no tan random')
libreria.setLocation('Salamanca')
libreria.setMobiles(mobiles2)
console.log(libreria.getName())
console.log(libreria.getLocation())
console.log(libreria.getMobiles())
console.log(libreria.getTotalPrice())
console.log(libreria.totalPriceCalculation())
