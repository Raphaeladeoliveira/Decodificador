let textImput = document.querySelector('#input__texto');
let outImput = document.querySelector('#output');


function criptografar(){
    let texto = textImput.value;
    let resultCripto = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai')
    .replace(/o/g, 'ober').replace(/u/g, 'ufat');

    document.getElementById('output').innerHTML = '<textarea readonly class="textaux" id="input__texto">' + resultCripto +
     '</textarea>' + '<button class="btn__copiar" id="copiar" onclick="copiar()">copiar</button> '

}

f

function descriptografar(){
    let texto = textImput.value;
    let resultDescripto = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    

    document.getElementById('output').innerHTML = '<textarea readonly class="textaux" id="input__texto">' + resultDescripto +
    '</textarea>' + '<button class="btn__copiar" id="copiar" onclick="copiar()">Copiar</button> '
}

function copiar(){
    let textoCop = document.getElementById('input__texto')

    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado")
}

