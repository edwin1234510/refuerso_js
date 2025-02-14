//escribir una funcion que reciba un arreglo y multiplique todos los elementos

const arreglo = [2, 3, 2];

function multiplicarArreglo(arreglo) {
  let contador = 1;
  for (let i = 0; i < arreglo.length; i++) {
    contador = contador * arreglo[i];
  }
  console.log(contador);
}
multiplicarArreglo(arreglo);