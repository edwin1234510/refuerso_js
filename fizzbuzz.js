//escribir una funcion llamada fizzbuzz que resiba un numero y retorne un string
//"fizz" si el numero es multiplo de 3
//"buzz" si el numero es multiplo de 5
//"fizzbuzz" si son multiplo tando de 3 como de 5
//si no cumple con las condiciones debe retonar el mismo numero

let num = parseInt(prompt("ingrese un número :"));
function fizzbuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizzbuzz");
  }
  else {
    if (num % 3 == 0) {
      console.log("fizz");
    }
    else {
      if (num % 5 == 0) {
        console.log("buzz");
      }
      else {
        console.log(num);
      }
    }
  }

}
fizzbuzz(num);