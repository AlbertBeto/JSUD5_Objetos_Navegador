'use strict'
/*
//Llamando elementos del html por id y por etiqueta
let elemento = document.getElementById("3");
let elementoDiv = document.getElementsByTagName("div");
console.log(elemento);
console.log(elementoDiv);
*/


let padre = document.getElementById("papa");
let hijo = document.getElementById("2");
let hijo3 = document.getElementById("3");
/*
console.log(padre);
//Este devuelve todo lo que contiene el padre. 
console.log(padre.childNodes);
//Este devuelve solo los elementos contenidos
console.log(padre.children);

//Node del padre
console.log(hijo.parentNode);
// Elemento padre
console.log(hijo.parentElement);
// Mi siguiente hermano
console.log(hijo.nextElementSibling);
// Mi posterior hermano
console.log(hijo.previousElementSibling);

//EL textContent solo modifica el texto y no usa las etiquetas HTML
hijo.textContent="Hola <b>Caracola</b>";
// Con innerHTML si que usa el HTML
hijo3.innerHTML="Hola <b>Caracola</b>";

// Si modificad el contenido de un padre borra toooodos los hijos. 
//padre.textContent="Papilla";
//Para poder modificar el texto contenido en el padre seleccionamos el parametro 
//atraves de seleccionarlo en el nodes. 
//Le pongo un + y creo una conquetenacion de strings
padre.childNodes[2].textContent+="Modifico solo el texto del padre";*/

/*
let elemento = document.getElementById("papa");
elemento = elemento.querySelectorAll("div:nth-child(odd");
for (let i of elemento){
    i.textContent +="modificado";
}*/
/*
let listado_padre=document.querySelectorAll(padre);
let impares = document.listado_padre.querySelectorAll("nth-child(even)");
*/

/*
//Creo reloj
let tempo = document.getElementById("rellotge");
setInterval(()=>{
    let tempsAra = new Date;
    tempo.textContent=tempsAra.getHours()+":"+tempsAra.getMinutes()+":"+tempsAra.getSeconds();
}, 1000);

// Crear Elementos
let nuevo_elemento = document.createElement("div");

nuevo_elemento.textContent = "Este es el div que he creado por programación";

let elemento_nuevo = document.getElementById("papa");

elemento_nuevo.appendChild(nuevo_elemento);
*/

//Creo un prompt que nos pida cosas hasta que demos un enter vacio y meta todas las cosas en un ol.
//Lo creo con l aidea de montar el objeto ol llenarlo de lis y luego meterlo en el body. 
/*
let tag_ol = document.createElement("ol");

let activa=1;
while (activa==1){
    let entrada = prompt("Introduzca el objeto para la lista o vacio para acabar");
    if (!entrada.length<1){
        let neo_li=document.createElement("li");
        neo_li.textContent=entrada;
        tag_ol.appendChild(neo_li);
    }else{
        document.body.appendChild(tag_ol);
        activa=0;
    }
}
*/


//Insertar el código anterior antes del segundo div
let tag_ol = document.createElement("ol");
let el_before = document.getElementById("2");
let contenedor_padre = document.getElementById("papa");

let activa=1;
while (activa==1){
    let entrada = prompt("Introduzca el objeto para la lista o vacio para acabar");
    if (entrada.length>0){
        let neo_li=document.createElement("li");
        neo_li.textContent=entrada;
        tag_ol.appendChild(neo_li);
    }else{
        //Con esta linea usamos el children y la posición de cual de sus hijos del contenedor padre
        contenedor_padre.insertBefore(tag_ol, contenedor_padre.children[1]);
        //En este llamo al before directamente por su nombre. 
        //contenedor_padre.insertBefore(tag_ol, el_before);
        activa=0;
    }
}


/*
//Vamos a borrar el div "3"
let div3 = document.getElementById("3");
//Opcion de hacerlo directamente
//div3.remove();

//Eliminar por herencia 
let contenedor_padre = document.getElementById("papa");
contenedor_padre.removeChild(div3);
*/

let cuanto_lis=tag_ol.children.length;
console.log(cuanto_lis);
//Esto con la cuenta negativa ya LAS ESTRUCTURAS SE ACTUALIZAN DINAMICAMENTE
/*
for(let i=cuanto_lis-1; i>=0; i--){
    tag_ol.removeChild(tag_ol.children[i]);
}
*/

while (tag_ol.children.length){
    tag_ol.removeChild(tag_ol.children[0]);
}
