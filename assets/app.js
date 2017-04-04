// variables globales contadoras 
var contadorClicks = 0;
var contadorCaracteres = 0;

// para llamar elementos que voy a usar y que no deben contar clicks
var areaTexto = document.getElementById("comentarioNuevo");
var areaAutor = document.getElementById("areaAutor");
var botonEnviar = document.getElementById("botonEnviar");

//------------------------------------------------------------------------

// para contar clicks
function contadoraDeClicks(){
    contadorClicks += 1;
    var cantidadClicks = document.getElementById("cantidadClicks");
    cantidadClicks.innerText =contadorClicks;
}
// para aplicar en áreas donde no se cuentan clicks
function noContarClicks(){
    event.stopPropagation();
}

//------------------------------------------------------------------------

// para contar caracteres en textarea
function contadoraDeCaracteres(){
    contadorCaracteres = areaTexto.value.length;
    var cantidadCaracteres = document.getElementById("cantidadCaracteres");
    cantidadCaracteres.innerText = contadorCaracteres;
}

//------------------------------------------------------------------------

// para publicar comentario
function publicarTwit(){
    if(areaTexto.value !== ""){
         var seccionPublicaciones = document.getElementById("publicaciones");
        
        // elementos que componen mi publicación
        var tarjetaPublicacion = document.createElement("article");
        var twitNuevo = document.createElement("p");
        var autorTwit = document.createElement("h5");
        
        twitNuevo.innerText = areaTexto.value;
        autorTwit.innerText = areaAutor.value;
        
        tarjetaPublicacion.appendChild(autorTwit);
        tarjetaPublicacion.appendChild(twitNuevo);
        
        seccionPublicaciones.insertBefore(tarjetaPublicacion,seccionPublicaciones.firstChild);
        
        areaTexto.value = "";
        areaAutor.value = "";
        contadoraDeCaracteres();
    } 
}

//------------------------------------------------------------------------

// PARA AGREGAR EVENTOS A LOS ELEMENTOS DE HTML CORRESPONDIENTES
document.addEventListener("click",contadoraDeClicks);
areaTexto.addEventListener("keyup",contadoraDeCaracteres);
areaTexto.addEventListener("click",noContarClicks);
areaAutor.addEventListener("click",noContarClicks);
botonEnviar.addEventListener("click",noContarClicks);
botonEnviar.addEventListener("click",publicarTwit);
