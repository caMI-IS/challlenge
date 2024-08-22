var botãoCriptografar = document.querySelector(".btn-criptografar");
var botãoDescriptografar = document.querySelector(".btn-descriptografar");
var boneca = document.querySelector(".boneca");
var container = document.querySelector(".mensagem-criptografada");
var resultado = document.querySelector(".texto-resultado");


botãoCriptografar.onclick = criptografar;
botãoDescriptografar.onclick = descriptografar;


function criptografar() {
    ocultarAdelante();
    var texto = recuperarTexto();
    resultado.textContent = criptografarTexto(texto);
}

function descriptografar() {
    ocultarAdelante();
    var texto = recuperarTexto();
    resultado.textContent = descriptografarTexto(texto);
}


function recuperarTexto() {
    var cajatexto = document.querySelector("#texto");
    return cajatexto.value;
}


function ocultarAdelante() {
    boneca.classList.add("ocultar");
    container.classList.add("ocultar");
}


function criptografarTexto(mensagem) {
    var textoFinal = mensagem
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoFinal;
}


function descriptografarTexto(mensagem) {
    var textoFinal = mensagem
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoFinal;
}


var btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", function() {
    var contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
    alert("Texto copiado!");
});
