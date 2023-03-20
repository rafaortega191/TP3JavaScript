const perimetro = (altura,base) => 2*(altura+base);
let ladoA = parseInt(prompt('Ingrese el valor de un lado del rectangulo'));
let ladoB = parseInt(prompt('Ingrese el otro valor de un lado del rectangulo'));
document.write(`El perimetro de su rectangulo es de ${perimetro(ladoA,ladoB)}`)