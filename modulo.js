
import { tarjetaCredito } from "./funcionModulo.js";
let tipo = parseInt(prompt(`indique el tipo de tarjeta :
(1)american express
(2)diners club
(3)discover
(4)mastercard
(5)visa`));
tarjetaCredito(tipo);