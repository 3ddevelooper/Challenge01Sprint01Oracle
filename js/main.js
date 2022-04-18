var mensaje = document.querySelector("#texto");
var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");
var btnCopiar = document.querySelector("#copiar");
var mensajeFinal = document.querySelector("#mensaje_final");
var mensajeSecreto;
var fechaFooter = document.querySelector("#fecha");
var lateral = document.querySelector('#lateral');
var lateral2 = document.querySelector('#lateral2');


function mensajeEncriptar(texto) {
    if (texto == "a") {
        texto = "ia";
        return texto;
    } else if (texto == "e") {
        texto = "enter";
        return texto;
    } else if (texto == "i") {
        texto = "imes";
        return texto;
    } else if (texto == "o") {
        texto = "ober";
        return texto;
    } else if (texto == "u") {
        texto = "ufat";
        return texto;
    }
}

function encriptar(texto) {
    var mensajeEncriptado = texto.replace(/a|e|i|o|u/g, mensajeEncriptar);
    return mensajeEncriptado;
}

function mensajeDesencriptar(texto) {
    if (texto == "ia") {
        texto = "a";
        return texto;
    } else if (texto == "enter") {
        texto = "e";
        return texto;
    } else if (texto == "imes") {
        texto = "i";
        return texto;
    } else if (texto == "ober") {
        texto = "o";
        return texto;
    } else if (texto == "ufat") {
        texto = "u";
        return texto;
    }
}

function desencriptar(texto) {
    var mensajeDesencriptado = texto.replace(/ia|enter|imes|ober|ufat/g, mensajeDesencriptar);
    return mensajeDesencriptado;
}

btnEncriptar.addEventListener("click", function(event) {
    event.preventDefault();
    var texto = mensaje.value;
    lateral.style.display = 'none';
    lateral2.style.display = 'block';
    mensajeSecreto = encriptar(texto.toLowerCase());
    mensajeFinal.innerHTML = mensajeSecreto;
    mensaje.value = "";

});

btnDesencriptar.addEventListener("click", function(event) {
    event.preventDefault();
    var texto = mensaje.value;
    lateral.style.display = 'none';
    lateral2.style.display = 'block';
    mensajeSecreto = desencriptar(texto.toLowerCase());
    mensajeFinal.innerHTML = mensajeSecreto;
    mensaje.value = "";
})

btnCopiar.addEventListener("click", function(event) {

    lateral.style.display = 'block';
    lateral2.style.display = 'none';
    mensaje.value = mensajeSecreto;
    navigator.clipboard.writeText(mensajeSecreto);
})

function soloLetras(e) {
    tecla = (document.body) ? e.keyCode : e.which;

    if (tecla == 8) {
        return true;
    }
    patron = /^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
fechaFooter.innerHTML = (new Date().getFullYear() + " ");