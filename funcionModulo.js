export function tarjetaCredito(tipo) {
  const american = /^(37|34)/;
  const diners = /^(300|305|36|38)/;
  const discover = /^(6011)/;
  const mastercard = /^(51|55)/;
  const visa = /^(4)/;
  const regex = /[0-9]{14,16}/;
  let num;
  while (true) {
    num = prompt("ingrese el numero de la tarjeta");
    if (regex.test(num)) {
      break;
    }
    else if (regex.test(num) > 16) {
      alert("supera el maximo de 16 caracteres");
    }
    else {
      alert("algunos de los caracteres ingresador no son validos");
    }
  }
  if (tipo == 1) {
    if (num.length == 15 && american.test(num)) {
      alert("es valida la tarjeta de american express");
    }
    else if (num.length < 15 || num.length > 15) {
      alert("para ser tarjeta american express es necesario 15 caracteres");
    }
    else {
      alert("no es valida la tarjeta :(");
    }
  }
  if (tipo == 2) {
    if (num.length == 14 && diners.test(num)) {
      alert("es valida la tarjeta de diners club");
    }
    else if (num.length < 14 || num.length > 14) {
      alert("para ser tarjeta diners club es necesario 14 caracteres");
    }
    else {
      alert("no es valida la tarjeta :(");
    }
  }
  if (tipo == 3) {
    if (num.length == 16 && discover.test(num)) {
      alert("es valida la tarjeta de discover");
    }
    else if (num.length < 16 || num.length > 16) {
      alert("para ser tarjeta discover es necesario 16 caracteres");
    }
    else {
      alert("no es valida la tarjeta :(");
    }
  }
  if (tipo == 4) {
    if (num.length == 16 && mastercard.test(num)) {
      alert("es valida la tarjeta de mastercard");
    }
    else if (num.length < 16 || num.length > 16) {
      alert("para ser tarjeta mastercard es necesario 16 caracteres");
    }
    else {
      alert("no es valida la tarjeta :(");
    }
  }
  if (tipo == 5) {
    if (num.length == 16 && visa.test(num)) {
      alert("es valida la tarjeta de visa");
    }
    else if (num.length < 16 || num.length > 16) {
      alert("para ser tarjeta visa es necesario 16 caracteres");
    }
    else {
      alert("no es valida la tarjeta :(");
    }
  }
}