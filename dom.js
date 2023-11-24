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
let listado_padre=document.querySelectorAll("#papa");
let impares = document.listado_padre.querySelectorAll("nth-child(even)");
console.log(impares);