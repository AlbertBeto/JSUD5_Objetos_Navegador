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

/*
//Insertar el código anterior de meter una ol antes del segundo div del html
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
*/

/*
//Vamos a borrar el div "3"
let div3 = document.getElementById("3");
//Opcion de hacerlo directamente
//div3.remove();
*/

/*
//Eliminar por herencia PARA QUE FUNCIONE HAY QUE ACTIVAR EL EJERCICIO ANTERIOR. 
let contenedor_padre = document.getElementById("papa");
contenedor_padre.removeChild(div3);


let cuanto_lis=tag_ol.children.length;
console.log(cuanto_lis);
//Esto con la cuenta negativa ya LAS ESTRUCTURAS SE ACTUALIZAN DINAMICAMENTE
/*
for(let i=cuanto_lis-1; i>=0; i--){
    tag_ol.removeChild(tag_ol.children[i]);
}*/
/*//ESTE ES EL MODO MÁS USADO
//Con este codigo borramos de manera continua el  objeto hijo 0 hasta que no haya mas. 
// ya que el while funciona mientras sea true y en Js mientras haya algo que no sea 0 es true. 
while (tag_ol.children.length){
    tag_ol.removeChild(tag_ol.children[0]);
}
*/

//CON ESTE CAMBIAMOS EL VALOR O ATRIBUTO DEL HIJO DE UN ELEMENTO. 
//element.replaceChild(newChildElem, oldChildElem) 

///////ATRIBUTOS PARA ELEMENTOS
/*
//DIV PADRE Y CREAMOS 10 DIV INTERNOS Y LE DAMOS UN ID
//AL ACABAR DOS PROMPTS QUE NOS PIDAN UN NUMERO DE DIV Y UN MENSAJE A IMPRIMIR EN EL. 

let padre_de_muchos = document.getElementById("padre_de_muchos");

for(let i=1;i<11;i++){
    //primero creo un div
    let neo_div = document.createElement("div");
    // Le doy un atributo con el i del for
    neo_div.setAttribute("id",i);
    //Le añadimos un texto 
    neo_div.textContent="Este es el contenedor "+i;
    // Metemos el div en el div contenedor. 
    padre_de_muchos.appendChild(neo_div); 
}

let escoge_div=prompt("Que Div quieres pintar?");
let mensaje_div = prompt("Que mensaje quieres pintar?")

//Esto es en dos pasos. Primero identificamos el div y luego le hacemos el textContent
//let div_mod = document.getElementById(escoge_div);
//div_mod.textContent="Este es el contenedor "+escoge_div+". El mensaje es: "+mensaje_div;
//En un solo paso sería:
document.getElementById(escoge_div).textContent="Este es el contenedor "+escoge_div+". El mensaje es: "+mensaje_div;
*/
// ATRIBUTO STYLE
// Unos 400 divs vacios con width 100% con solo 2 o 3 pxs de heigth para hacer un gradiente de color. 
// prompr con cinco popciones grises, azules, verdes, rojos, multicolori.
//Margins 0

let escoge_color = prompt("Escoge que gama de colores quieres? 1-Grises 2-Rojo 3-Verde 4-Azul 5-Multicolori");

let padre_de_muchos = document.getElementById("padre_de_muchos");
let grey_counter = 0;
for(let i=1;i<401;i++){
    //primero creo un div
    let neo_div = document.createElement("div");
    // Le doy un atributo con el i del for
    neo_div.setAttribute("id",i);
    //Le meto el atributo ancho
    neo_div.style.width="100%";
    //Le meto la altura
    neo_div.style.height="2px";
    //Color de fondo....
    
    if(escoge_color==1){
        if(i<256){
        neo_div.style.backgroundColor="rgb("+i+","+i+","+i+")";}else{
            grey_counter=grey_counter+2;
            neo_div.style.backgroundColor="rgb("+(i-grey_counter)+","+(i-grey_counter)+","+(i-grey_counter)+")";
        };
    };
    if(escoge_color==2){
        if(i<256){
        neo_div.style.backgroundColor="rgb("+i+",0,0)";}else{
            neo_div.style.backgroundColor="rgb(255,"+(i-255)+",0)";
        };
    };
    if(escoge_color==3){
        if(i<256){
        neo_div.style.backgroundColor="rgb(0,"+i+",0)";}else{
        neo_div.style.backgroundColor="rgb(0,255,"+(i-255)+")";
        };  
    };
    if(escoge_color==4){
        if(i<256){
        neo_div.style.backgroundColor="rgb(0,0,"+i+")";}else{
        neo_div.style.backgroundColor="rgb(0,"+(i-255)+",255)";
        };  
    };
    if(escoge_color==5){
        //Este funciona y es una sola linea
       neo_div.style.backgroundColor="rgb("+(Math.floor(Math.random()*255))+","+(Math.floor(Math.random()*255))+","+(Math.floor(Math.random()*255))+")";
    }
        /*//Este bloque funciona perfectamente pero es muy extenso y empieza en oscuro y acaba en clarito no mola
        let aleatorio= Math.random()*10;
        let redondo = Math.floor(aleatorio);
        console.log(redondo);
        if (redondo==0){
            if(i<256){
                neo_div.style.backgroundColor="rgb("+i+","+i+","+i+")";}else{
                grey_counter=grey_counter+2;
                neo_div.style.backgroundColor="rgb("+(i-grey_counter)+","+(i-grey_counter)+","+(i-grey_counter)+")";
            };
        } else if(redondo>0 && redondo<4){
            if(i<256){
                neo_div.style.backgroundColor="rgb("+i+",0,0)";}else{
                    neo_div.style.backgroundColor="rgb(255,"+(i-255)+",0)";
                };
        } else if(redondo>3 && redondo<7){
            if(i<256){
                neo_div.style.backgroundColor="rgb(0,"+i+",0)";}else{
                neo_div.style.backgroundColor="rgb(0,255,"+(i-255)+")";
                };
        
        } else if(redondo>6 && redondo<10){
            if(i<256){
                neo_div.style.backgroundColor="rgb(0,0,"+i+")";}else{
                neo_div.style.backgroundColor="rgb(0,"+(i-255)+",255)";
                }; 
        };*/
    
    // Metemos el div en el div contenedor. 
    padre_de_muchos.appendChild(neo_div); 
    
};
