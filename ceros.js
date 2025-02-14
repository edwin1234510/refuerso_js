
let arreglo = [1, 0, 2, 0, 0, 3, 4, 0, 0, 5];

function removerCeros(arreglo) {
  let nuevo = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] != 0) {
      nuevo.push(arreglo[i]);
    }
  }
  console.log(arreglo);
  console.log(nuevo);
}
removerCeros(arreglo);