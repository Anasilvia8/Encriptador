var btnEncriptar = document.querySelector(".botonEncriptar");
var btnDesencriptar = document.querySelector(".botonDesencriptar");
var munieco = document.querySelector(".contenedorMuneco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var btncopiar = document.querySelector(".boton-copiar");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btncopiar.onclick = copiar; 

function encriptar(){
    ocultarSeccion();
    resultado.textContent=encriptarTexto(recuperarTexto()); //el texto recuperado pasa a ser parte del parrafo vacio
}

function desencriptar(){
    ocultarSeccion();
    resultado.textContent= desencriptarTexto(recuperarTexto());
}

function copiarAlPortapapeles(texto) {
    const { clipboard } = navigator
    if (clipboard) {
       //puedes copiar texto al portapapeles
       return clipboard.writeText(texto)
    } else {
       // no puedes copiar texto al portapapales
       return Promise.reject(new Error('ClipboardAPI no implementado en el navegador'))
    }
 }
btncopiar.addEventListener('click', function (event) {
    event.preventDefault();
    let codigoACopiar = document.querySelector('#textoCopiado');
    copiarAlPortapapeles(codigoACopiar.textContent); //ejecuto mi función para copiar
    
    
});

function copiar(){
    var textoCifrado = document.querySelector("<p>");
    textoCifrado.ariaSelected();
    document.execCommand('copy');
    
}

//recupera lo que esta en el textarea y retorna eso a traves del value
function recuperarTexto(){
    var area = document.querySelector(".textarea");
    return area.value;  //muestra la informacion entendiblemente
}

function encriptarTexto(mensaje){
    var texto = mensaje;  //en ese parametro se le pasa a la variable, usa ese parametro por que se recibe infomcion del usuario
    var textoFinal = "";

    for(i = 0; i<texto.length; i++){
        if(texto[i]== "a"){ //se pone en la posicion del texto y la compara con la letra
            textoFinal = textoFinal + "ai"; //funciona como un acumulativo de las nuevas letras
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;  //en ese parametro se le pasa a la variable, usa ese parametro por que se recibe infomcion del usuario
    var textoFinal = "";
    console.log(mensaje)

    for(i = 0; i<texto.length; i++){
        if(texto[i]== "a"){ //se pone en la posicion del texto y la compara con la letra
            textoFinal = textoFinal + "a"; 
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}



function ocultarSeccion(){
    munieco.classList.add("ocultar"); //la clase ocultar se le añade a la clase munieco
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}







