
const num = parseFloat(prompt("Digite a primeira nota: "));
const num2 = parseFloat (prompt ("Digite a segunda nota: "));
const num3 = parseFloat (prompt ("Digite a terceira nota: "))

function calcularMedia(num, num2, num3){
   return (num + num2 + num3)/3;
}

const media = calcularMedia(num, num2, num3);

document.write ("A média é: ", media);
