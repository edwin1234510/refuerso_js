//genere un patron de asterisco en forma de piramide
let altura = parseInt(prompt("ingrese la altura de la piramide"));

const piramide = (altura) => {
  for (let i = 1; i < altura; i++){
    let asterisco = "";

    for (let t = altura; t > 0; t++){
      asterisco += " ";
    }
    for (let z = 1; z < i * 2; z++){
      asterisco += "*";
    }
    console.log(asterisco);
  }
  
}
piramide(altura);