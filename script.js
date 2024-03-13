//Actividad 1 
//alert("Hola este es mi Javascript");

///////Actividad 2
// let nombre = "Cindy";
// nombre="Nicole";

// var nombre1="Cindy";

// // Las más utilizadas son let y const.
// // Su diferencia es que let puede variar su contenido y le podemos asignar otro.
// // En cambio a const no, por ser una constante. 
// // Es decir que recibe un valor que quedará fijo desde que se asigne.

// const nombre2="Cindy";
// // nombre2="Karina";

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

document.addEventListener("DOMContentLoaded",function(){
    let contenidoTitulo="Pepito";
    let titulo=document.querySelector(".logo a.fa-discord");
    console.log(titulo);

//INNERHTML=trae todo el elemento
//INNERTEXT=solo el texto
    titulo.innerHTML= contenidoTitulo;
});



// //CONDICIONALES
// let textoTitulo=titulo.innerText;
// console.log(textoTitulo);

// if(textoTitulo=="Hola"){
//     titulo.innerHTML="Otro"
// } else{
//     console.log("no se cumple")
// }


////FUNCIONES
document.addEventListener("DOMContentLoaded",function(){
let nombre1="Cindy";
let ciudad1="Lima";
let gusto1="café";

let parrafo=document.querySelector(".parrafo2");

//DIFFER = BUSCAR???
///Hay muy buenos chicos ! pueden buscarlo ustedes mismos, buscando creadores de contenidos en español, como MiduDev, Fernando Herrera, Leonidas Esteban, Vida MRR
function cambiarTexto(nombre, ciudad, gusto){
    //Para centrar el texto en una ventana= ALT+Z
    //Comilla invertida= ALT + 96 = `
    let contenido=`Me llamo ${nombre}, nací en ${ciudad} y vivo en Lima. Me gusta el ${gusto} y salir en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen`;
    return contenido;
}

parrafo.innerText=cambiarTexto(nombre1,ciudad1,gusto1);
});





