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

let fecha = new Date(); // Crea objeto Date almacena la fecha actual
console.log(typeof fecha); // Imprime object
console.log(fecha instanceof Date); // Imprime true
console.log(fecha); // Imprime fecha actual

//Con la D mayuscula y nos devuelve el tiempo Epoch que es la distancia en milisegundos con la fecha 1/1/1970
//Con esto nos devuelve el tiempo exacto. 
console.log(Date.now());
//Esto nos devuelve el date de cuando se creo fecha
console.log(Date.parse(fecha))
