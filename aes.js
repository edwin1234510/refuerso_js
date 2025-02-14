
let palabra = prompt("ingrese la palabra");
function numeroDEaes(palabra) {
  let arreglo = palabra.split("");
  let contador = 0;
  for (let i = 0; i <= arreglo.length; i++) {
    if (arreglo[i] == "a") {
      contador = contador + 1;
    }
  }
  console.log(contador);
}
numeroDEaes(palabra);