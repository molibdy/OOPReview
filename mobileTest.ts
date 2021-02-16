import {Mobile} from './mobile';

//Crear tres objetos Mobile:
let Nokia3210:Mobile=new Mobile('Nokia3210', '3210', 'Nokia',16,'red',false,1,230);
let iPhone3G:Mobile=new Mobile('iPhone3G', '3G', 'iPhone',32,'black',false,1,400);
let SamsungGalaxy10:Mobile=new Mobile('Samsung Galaxy 10', '10', 'Samsung',64,'gray',true,2,600);

//Mostrar todos los atributos de cada objeto:
let mobiles:Mobile[]=[Nokia3210,iPhone3G,SamsungGalaxy10]
let attributes:string[]=Object.keys(Nokia3210)
for (let i=0;i<mobiles.length;i++){
    for(let j=0;j<attributes.length;j++){
        console.log(mobiles[i][attributes[j]]);
    }
}

//Modificar Nokia y mostrar sus atributos:
Nokia3210.is5G=true
Nokia3210.cameraNumber=4
for(let j=0;j<attributes.length;j++){
    console.log(Nokia3210[attributes[j]]);
}