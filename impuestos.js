//crear una funcion para calcular los impuestos,
//reciva dos argumentos numericos

let edad = parseInt(prompt("ingrese su edad :"));
let ingresos = parseFloat(prompt("ingrese el valor de sus ingresos "))

function impuestos(edad, ingresos) {
  let calcular;
  if (edad >= 18 && ingresos >= 1000) {
    calcular = (ingresos * 40) / 100;
    return calcular;
  }
  else {
    return 0;
  }
}

let rta = impuestos(edad, ingresos);
console.log(rta);