let letra = prompt("ingrese una palabra");

function capitalizar(letra) {
  letra.toUpperCase();
  let arreglo = letra.split("");
  for (let i = 1; i <= arreglo.length; i++) {
    arreglo.toLowerCase();
  }
  console.log(letra + arreglo)
}
capitalizar(letra);