import {Mobile} from './mobile';
//Crear tres objetos Mobile:
let Nokia3210:Mobile=new Mobile('Nokia3210', '3210', 'Nokia',16,'red',false,1,230);
let iPhone3G:Mobile=new Mobile('iPhone3G', '3G', 'iPhone',32,'black',false,1,400);
let SamsungGalaxy10:Mobile=new Mobile('Samsung Galaxy 10', '10', 'Samsung',64,'gray',true,2,600);

//Mostrar todos los atributos de cada objeto:
let mobiles:Mobile[]=[Nokia3210,iPhone3G,SamsungGalaxy10]
for (let i=0;i<mobiles.length;i++){
    console.log(mobiles[i].getName());
    console.log(mobiles[i].getModel());
    console.log(mobiles[i].getTrademark());
    console.log(mobiles[i].getSdSize());
    console.log(mobiles[i].getColor());
    console.log(mobiles[i].getIs5G());
    console.log(mobiles[i].getCameraNumber());
    console.log(mobiles[i].getPrice());
}

//Modificar Nokia y mostrar sus atributos:
Nokia3210.setName('NuevoNokia 345')
Nokia3210.setModel('345')
Nokia3210.setTrademark('NuevoNokia')
Nokia3210.setSdSize(24)
Nokia3210.setColor('blue')
Nokia3210.setIs5G(true)
Nokia3210.setCameraNumber(4)
Nokia3210.setPrice(500)

console.log(Nokia3210.getName());
console.log(Nokia3210.getModel());
console.log(Nokia3210.getTrademark());
console.log(Nokia3210.getSdSize());
console.log(Nokia3210.getColor());
console.log(Nokia3210.getIs5G());
console.log(Nokia3210.getCameraNumber());
console.log(Nokia3210.getPrice());


//Mostrar atributos con printSpecs:

for (let i=0;i<mobiles.length;i++){
    mobiles[i].printSpecs();
}
