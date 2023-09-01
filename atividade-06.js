
const base = parseFloat(prompt("Digite o número da base: "));
const altura = parseFloat (prompt ("Digite o número da altura: "));

function calcularArea(base, altura){
   return (base * altura / 2);
}

const area = calcularArea(base, altura);

document.write ("A área é: ", area);
