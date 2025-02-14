const arreglo = [5, 3, 2, 3, 1, 7, 2];
let inicio = parseInt(prompt("posicion inicial :"));
let final = parseInt(prompt("posicion final :"));
function sumar(inicio,final) {
  if (inicio < arreglo.length && inicio < final && inicio >= 0) {
    let conta = 0;
    for (let i = inicio; i <= final; i++){
      conta = conta + arreglo[i] 
    }
    console.log(conta);
  }
  else {
    throw new Error("el rango supera el limite del arreglo");
    
  }
  
}

console.log(sumar(inicio,final));