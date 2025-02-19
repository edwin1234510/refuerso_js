let letra = prompt("ingrese una palabra");

function capitalizar(letra) {
  let arreglo = letra.split("");
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == 0) {
      arreglo[0].toUperCase();
    }
    console.log(arreglo[i])
  }
  
}
capitalizar(letra);