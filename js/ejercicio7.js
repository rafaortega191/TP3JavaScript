let j = prompt("Ingrese un numero");
escribirTablaMultiplicar(j);

function escribirTablaMultiplicar(j) {
  for (i = 1; i <= 10; i++) {
    document.write(j + "x " + i + "= " + j * i);
    document.write("<br>");
  }
}
