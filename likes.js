let num = prompt("ingrese un numero");
function likes(num) {
  if (num.length < 4) {
    console.log(num);
  }
  if (num.length == 4) {
    console.log(num[0]+"k");
  }
  if (num.length > 4 && num.length <= 5) {
    console.log(num[0]+num[1]+"k");
  }
  if (num.length > 5 && num.length <= 6) {
    console.log(num[0]+num[1]+num[2]+"k");
  }
  if (num.length > 6) {
    console.log(num[0]+"M");
  }
}
console.log(likes(num));

