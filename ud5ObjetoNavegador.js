//Con esto abrimos una ventana la cual queda lincada a la variable subVentana para hacerle mas cosas
//Cuidado ya que al escribir el window.open se activa y lo lanza. 
//Para que no pasase deberiamos crear una función y tener los datos por separado y montarlo al pedirlo
//let subVentana=window.open("https://www.google.es","nueva","height=600,width=800");

//Aqui confirmamos 
//subVentana.close();

//window.location.assign("https://www.google.es");
/*
document.write(window.navigator.appName);

document.write(window.navigator.appCodeName);

document.write(window.navigator.appVersion);

document.write(window.navigator.userAgent);
document.write(window.navigator.cookieEnabled);
*/
/*
document.writeln("Albert <br>");
document.write("Pérez")
*/


//Aqui cambio el title con el js de document.
//Ya no hace falta llamar a window.document.
//document.title = "Js Objeto Document"

/*
//GESTIÓN DE FECHAS 
let fecha = new Date(); // Crea objeto Date almacena la fecha actual
console.log(typeof fecha); // Imprime object
console.log(fecha instanceof Date); // Imprime true
console.log(fecha); // Imprime fecha actual

//Con la D mayuscula y nos devuelve el tiempo Epoch que es la distancia en milisegundos con la fecha 1/1/1970
//Con esto nos devuelve el tiempo exacto. 
console.log(Date.now());
//Esto nos devuelve el date de cuando se creo fecha
console.log(Date.parse(fecha))
*/
/*
//EXPRESIONES REGULARES
let cad = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme...";

let mi_expresion = /Mancha/;
let mi_2_expresion = /c[ou]/;
document.write(cad+"<br>");
document.write(mi_expresion+"<br>");
document.write(mi_expresion.test(cad)+"<br>");
document.write(mi_2_expresion+"<br>");
document.write(mi_2_expresion.test(cad)+"<br>");
//Esto imprime un array. Pero solo pone el primero que encuentra. 
console.log(mi_2_expresion.exec(cad));

let cad2 = "22 Carme 23";
let expresion_23 = /\s\w\s\[0-9]/
document.write(expresion_23.test(cad2)+"<br>");

let dni = "38118313-e";
let expresion_dni = /^[0-9]{8}[-][a-z]$/i
document.write("DNI"+"<br>");
document.write(expresion_dni.test(dni)+"<br>");

let fecha = "31/12/1980";
let expresion_fecha = /^[0-3][0-9][/][0|1][0-9][/]([0-9]{2}|[0-9]{4})$/i
let expresion_fecha2 = /^[0-9]{2}[/][0-9]{2}[/]([0-9]{2}|[0-9]{4})$/i
document.write("Fecha"+"<br>");
document.write(expresion_fecha.test(fecha)+"<br>");

let telefono = "(+123) 123-456-789";
let expresion_telefono = /^[(+]{2}[0-9]{1,3}[)]\s[0-9]{3}[-][0-9]{3}[-][0-9]{3}$/i;
let expresion_telefono2 = /^[0-9]{2}[/][0-9]{2}[/]([0-9]{2}|[0-9]{4})$/i;
document.write("Teléfono"+"<br>");
document.write(expresion_telefono.test(telefono)+"<br>");

let email_simple = "albert@ggg.coms";
let expresion_email_simple = /^[a-z]+[@][a-z]+[.]([com|org|es])+$/i
document.write("Email"+"<br>");
document.write(expresion_email_simple.test(email_simple)+"<br>");
*/

//TIMERS
//Aqui primero imprimimos en la consola la hora y luego la voilvemos a imprimi 5 segundos despues. 
//Con console log no hay problema pero si lo hacemos document.write sacaria el primero pero como 
//cierra el flujo a los 5 segundos hace un decoument.write fuera de flujo con lo que limpia todo el html
// pega el horario pero se ha cargado el flujo HTML anterior. 
//POR ESTO NO HAY QUE USAR EL DOCUMENT.WRITE
/*
document.write(new Date().toString()); // Imprime inmediatamente la fecha actual
//Guardamos el temporizador en una variable
let temporizadorUno = setTimeout(() => document.write(new Date().toString()), 5000); // Se ejecutará en 5 segundos(5000 ms);
//Borro el temporizador con la varible anterior. 
clearTimeout(temporizadorUno);
*/


//El ejercicio esta mal. Hay que crear la idInterval en funcion. 
let intervalo = prompt("En que intervalos de segundos quieres mostrar en pantalla?");
let maximo_segundos = prompt("En que segundo quieres que pare?");
let num = 0;
let aviso = "";
let intervaloInt = parseInt(intervalo);
let maximo_segundosInt = parseInt(maximo_segundos);
//setInterval(() => console.log(num++), 1000); // Imprime un número y lo incrementa cada segundo
function idInterval(){ setInterval(() => {
    console.log(num = num + intervaloInt);
    if (num >= maximo_segundosInt) { // Cuando imprimimos 10, paramos el timer para que no se repita más
        alert("Ha completado la cuenta de " + maximo_segundosInt);
        num = 0;
        maximo_segundosInt=1;
        aviso = prompt("Quiere volver hacer cuenta atras s/n?");
        if (aviso == "s"){
           
            num = 0;
            maximo_segundosInt=1;
            idInterval();
        
        } else { clearInterval(idInterval); }}
}, intervaloInt * 1000);}


idInterval();

function preguntar(){
    let t1 =parseInt
}
