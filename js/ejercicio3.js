let bandera = 0;
let resultado = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
do {
  let dado1 = parseInt(Math.floor(Math.random() * (6 - 1 + 1) + 1));
  let dado2 = parseInt(Math.floor(Math.random() * (6 - 1 + 1) + 1));
  let sumaDados = dado1 + dado2;
  for (let i = 0; i < 12; i++) {
    if (sumaDados === i + 2) {
      resultado[i]++;
      i = 12;
    }
  }
  bandera++;
} while (bandera < 50);
document.write(`<table>`);
document.write(`<thead>`);
document.write(`<tr>`);
document.write(`<th>Suma🎲</th>`);
document.write(`<th>Apariciones🎲</th>`);
document.write(`</tr>`);
document.write(`</thead>`);
document.write(`<tbody>`);
for (let numerosFilas = 0; numerosFilas < resultado.length; numerosFilas++) {
  document.write(`<tr>`);
  for (let numerosColumnas = 0; numerosColumnas < 2; numerosColumnas++) {
    document.write(`<th>`);
    if (numerosColumnas === 0) {
      document.write(`${numerosFilas + 2}`);
    } else {
      let cuenta = resultado[numerosFilas];
      document.write(`${cuenta}`);
    }
    document.write(`</th>`);
  }
  document.write(`</tr>`);
}
document.write(`</tbody>`);
document.write(`</table>`);