

var validacion = false;
var textoEncriptado;
var textoDesencriptado;

window.onload = function () {
    document.getElementById("input-texto").focus();
}

//Validar texto
function verificarTexto() {

    var inputUsuario = document.getElementById("input-texto").value;

    if ((/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(inputUsuario)) ||
        (/[0-9]/.test(inputUsuario)) ||
        (/[A-Z]/.test(inputUsuario))) {
        alert("No se permiten caracteres especiales y/o mayúsculas");
        validacion = false;
    } else if (inputUsuario == "") {
        alert("Ingrese un texo para encriptar/desencriptar");
        validacion = false;
    } else {
        validacion = true;
    }
}


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

//Encriptar texto
function encriptarTexto() {

    var inputUsuario = document.getElementById("input-texto").value;

    verificarTexto();

    if (validacion == true) {

        textoEncriptado = inputUsuario.replace(/e/g, "enter");
        textoEncriptado = textoEncriptado.replace(/i/g, "imes");
        textoEncriptado = textoEncriptado.replace(/a/g, "ai");
        textoEncriptado = textoEncriptado.replace(/o/g, "ober");
        textoEncriptado = textoEncriptado.replace(/u/g, "ufat");

        document.getElementById("msg").value = textoEncriptado;
        document.getElementById("input-texto").value = "";

        var encabezado = document.getElementById("encabezado");
        encabezado.textContent = "Mensaje Encriptado:";
    }
}


/* Reglas de desencriptación:
    "enter" es convertido para "e"
    "imes" es convertido para "i"
    "ai" es convertido para "a"
    "ober" es convertido para "o"
    "ufat" es convertido para "u"
    Solo letras minusculas
   No se permite acentuación de palabras*/


//Desenctriptar texto
function desencriptarTexto() {

    var inputUsuario = document.getElementById("input-texto").value;

    verificarTexto();

    if (validacion == true) {

        textoDesencriptado = inputUsuario.replace(/enter/g, "e");
        textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
        textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
        textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
        textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

        document.getElementById("msg").value = textoDesencriptado;
        document.getElementById("input-texto").value = "";

        var encabezado = document.getElementById("encabezado");
        encabezado.textContent = "Mensaje Desencriptado:";
    }
}

//Evitar que la página recargue.
function evitarRecarga(event) {

    event.preventDefault();
    return false;

}

//Copiar texto.
function copiarTexto() {

    var textoCopiado = document.getElementById("msg");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);

}

/*var botonEnciptar = document.getElementById("btn-encriptar");
botonEnciptar.onclick = encriptarTexto;

var botonDesencriptar = document.getElementById("btn-desencriptar");
botonDesencriptar.onclick = desencriptarTexto;

var botonCopiar = document.getElementById("btn-copy");
botonCopiar.onclick = copiarTexto;*/

