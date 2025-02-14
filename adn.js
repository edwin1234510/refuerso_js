let cadena = prompt("ingrese la cadena de adn : ");

function complementar(cadena) {
  let arreglo = cadena.split("");
  let nuevo = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == "a" || arreglo[i] == "A") {
      nuevo.push("u");
    } else if (arreglo[i] == "g" || arreglo[i] == "G") {
      nuevo.push("c");
    } else if (arreglo[i] == "c" || arreglo[i] == "C") {
      nuevo.push("g");
    } else if (arreglo[i] == "t" || arreglo[i] == "T") {
      nuevo.push("a");
    }
  }
  console.log(arreglo);
  console.log(nuevo);
}

complementar(cadena);





