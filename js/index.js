//Desafío Nro 2- Juan Luis Silva Rios.

//Archivo Principal para el Desarrollo de Tienda de Autos Clásicos.

//---------------------------Variables Generales----------------------------
//Precios
const toyotaPrice = 20500;
const ferrariPrice = 70000;
const mercedesPrice = 105000;

//Stock
let toyotaStock = 12;
let ferrariStock = 4;
let mercedesStock = 2;

//Varaibles Generales
let unit = 0; //cantidad elegida por el usuario
let total = 0;

//---------------------------Variables Generales----------------------------


//------------------------------Ciclo Principal-----------------------------

const option =parseInt(prompt("Bienvenidos, por favor selecciona el auto de Lujo que deseas: \n1. *Toyota Classic 1950. \n2. *Ferrari Classic 1975. \n3. *Mercedes Classic 1940. \n4. *Exit"))

if(option === 1){

    unit =parseInt(prompt ("¿Cuántas unidades te gustaría Adquirír?"));
    if(unit <= toyotaStock){
        total = unit * toyotaPrice;
        alert("El Costo por tu(s) auto(s) Toyota es: " + total + " $ Americanos");
        toyotaStock = toyotaStock - unit;
    }else{
        alert("Actualmente, sólo contamos con: " + toyotaStock + " Unidades");
    }

} else if(option ===2){

    unit =parseInt(prompt ("¿Cuántas unidades te gustaría Adquirír?"));
    if(unit <= ferrariStock){
        total = unit * ferrariPrice;
        alert("El Costo total por tu(s) auto(s) Ferrari es: " + total + " $ Americanos");
        ferrariStock = ferrariStock - unit;
    }else{
        alert("Actualmente, sólo contamos con: " + ferrariStock + " Unidades");
    }

} else if(option ===3){

    unit =parseInt(prompt ("¿Cuántas unidades te gustaría Adquirír?"));
    if(unit <= mercedesStock){
        total = unit * mercedesPrice;
        alert("El Costo total por tu(s) auto(s) es: " + total + " $ Americanos");
        mercedesStock = mercedesStock - unit;
    }else{
        alert("Actualmente, sólo contamos con: " + mercedesStock + " Unidades");
    }

} else if( option === 4){
    alert("Muchas Gracias por su visitar nuestro Web Site")
}

alert ("Gracias por visitar nuestros autos Clásicos de Lujo.")


//------------------------------Ciclo Principal--------------------------