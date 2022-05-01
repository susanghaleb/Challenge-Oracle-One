(() => {
    'uses-strict'
    console.log('load script correctly')
})()


function encriptar (){
    var texto = document.querySelector("#input-text").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-text").value;
}

var botonEncriptar = document.querySelector("#boton-encriptar"); botonEncriptar.onclick = encriptar;

function desencriptar (){ 
    var texto = document.querySelector("#input-text").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".text-input-salida").value = textoCifrado; 
    document.querySelector("#input-text").value;
}

var botonDesencriptar = document.querySelector("#boton-desencriptar"); botonDesencriptar.onclick = desencriptar;


function copiar() {
    navigator.clipboard.writeText(
        document.getElementById("encrypted-text").value
    );
}
document.querySelector("#boton-copiar").addEventListener("click", copiar);