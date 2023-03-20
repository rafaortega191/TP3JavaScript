function mostrarLista(lista) {
    document.write(`<ul>`);
    for (let i = 0; i < lista.length; i++) {
      document.write(`<li>`);
      document.write(`${lista[i]}`);
      document.write(`</li>`);
    }
    document.write(`</ul>`);
  }
  const texto =
    "Aceptar para  seguir ingrsando o \n Cancelar para no agregar mas";
  let ciudades = [];
  do {
    let ciudad = prompt("Ingrese un nombre de una ciudad");
    while (ciudad === null || ciudad === "") {
      alert("No se ingreso niguna ciudad");
      ciudad = prompt("Ingrese un nombre de una ciudad");
    }
    ciudades.push(ciudad);
  } while (confirm(texto));
  document.write(`<h2>Lista de ciudades</h2>`);
  mostrarLista(ciudades);
  document.write(`El arreglo de ciudades tiene ${ciudades.length} elementos`);
  document.write(`<br>`);
  document.write(`<ul>`);
  document.write(`<li> Item de la 1era posicion ${ciudades[0]}</li>`);
  ciudades.length >= 3 ? document.write(`<li> Item de la 3era posicion ${ciudades[2]}</li>`): document.write(`<li> El array no tiene mas de 3 elementos</li>`);
  document.write(`<li> Item de la ultima posicion ${ciudades[ciudades.length - 1]}</li>`);
  document.write(`</ul>`);
  document.write(`<h2>Lista de ciudades nueva</h2>`);
  ciudades.push("Paris");
  mostrarLista(ciudades);
  document.write("Se agregro en la ultima posicion Paris");
  document.write(`<br>`);
  ciudades.length >= 2 ? document.write(`Item de la segunda posicion ${ciudades[1]}`) : document.write(`El array no tiene mas de 2 elementos`);
  document.write(`<br>`);
  ciudades.splice(1, 1, "Barcelona");
  document.write(`<h2>Lista de ciudades nueva</h2>`);
  mostrarLista(ciudades);
  document.write("Se sustituyo el item de la 2da posicion por 'Barcelona'");