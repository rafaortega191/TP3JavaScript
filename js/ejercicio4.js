let numero = prompt("ingresa un numero");
let resultado = numeros(numero);
document.write("el numero ingresado es "+resultado);

function numeros(numero){
    if(numero % 2 == 0){
        return "par";
    }else{
        return "inpar";
    }
}

