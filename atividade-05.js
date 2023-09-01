const num = parseFloat(prompt("Digite o primeiro numero: "));
const num2 = parseFloat (prompt ("Digite o segundo numero: "));
const num3 = parseFloat (prompt ("Digite o terceiro numero: "));

function calcularTriangulo(num, num2, num3){
   if (num + num2 > num3 && num2+num3 > num && num3 + num > num2) {
    document.write ("é triângulo");
   }
   else {
    document.write ("não é triângulo");
   }
}


console.log( calcularTriangulo(num, num2, num3));