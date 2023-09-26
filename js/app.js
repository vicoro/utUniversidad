var cero = document.getElementById('cero');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');

var division = document.getElementById('division');
var multiplicacion = document.getElementById('multiplicacion');
var resta = document.getElementById('resta');
var igual = document.getElementById('igual');
var punto = document.getElementById('punto');
var suma = document.getElementById('suma');
var datos = document.getElementById('datos');
var resultado = document.getElementById('resultado');
var del = document.getElementById('del');
var reset = document.getElementById('reset');
var operador;
resultado.textContent = "";
datos.textContent = "";

igual.addEventListener('click', igualar);
reset.addEventListener('click', resetear);
del.addEventListener('click', borrar);
division.addEventListener('click', dividir);
multiplicacion.addEventListener('click', multiplicar);
suma.addEventListener('click', sumar);
resta.addEventListener('click', restar);

punto.onclick = function(e){
    let punto = resultado.textContent.indexOf(".");
    if (punto == -1) {
        if (resultado.textContent == "") {
            resultado.textContent = resultado.textContent + "0.";
        } else{
            resultado.textContent = resultado.textContent + "."
        }
    }
}

cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
}
uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
    resul  =resultado;
}
var resul;
function borrar(){
    console.log(resul.value)
}

function igualar(){
    if (isNaN(parseFloat(datos.textContent))) {
        datos.textContent = resultado.textContent;
    } else if(operador == "+"){
    resultado.textContent = parseFloat(datos.textContent) + parseFloat(resultado.textContent);
    } else if(operador == "-"){
    resultado.textContent = parseFloat(datos.textContent) - parseFloat(resultado.textContent);
    }else if(operador == "*"){
        resultado.textContent = parseFloat(datos.textContent) * parseFloat(resultado.textContent);
    }else if(operador == "/"){
        if(resultado.textContent == "0"){
            resultado.textContent = "Infinito"
        }else{
        resultado.textContent = parseFloat(datos.textContent) / parseFloat(resultado.textContent);
        }
    }
    datos.textContent = "";
}


function resetear(){
    limpiar();
    datos.textContent = "";
}

function limpiar(){
    resultado.textContent = "";
}

function dividir(){
    if (isNaN(parseFloat(datos.textContent))) {
        datos.textContent = resultado.textContent;
        if(resultado.textContent == "0"){
            resultado.textContent = "Infinito"
        }else if(datos == "Infinito"){
            resultado.textContent = "infinito"
        }
    }else{
        datos.textContent = parseFloat(datos.textContent) / parseFloat(resultado.textContent);
    }
    operador = "/";
    limpiar();

}

function multiplicar(){
    if (isNaN(parseFloat(datos.textContent))) {
        datos.textContent = resultado.textContent;
    }else{
    datos.textContent = parseFloat(datos.textContent) * parseFloat(resultado.textContent);
    }
    operador = "*";
    limpiar();
}

function restar(){
    if (isNaN(parseFloat(datos.textContent))) {
        datos.textContent = resultado.textContent;
    } else{
    datos.textContent = parseFloat(datos.textContent) - parseFloat(resultado.textContent);
    }
    operador = "-";
    limpiar();
}

function sumar(){
    if (isNaN(parseFloat(datos.textContent))) {
        datos.textContent = resultado.textContent;
    } else{
    datos.textContent = parseFloat(datos.textContent) + parseFloat(resultado.textContent);
    }
    operador = "+";
    limpiar();
}