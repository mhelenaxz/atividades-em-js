
const num = parseFloat(prompt("Digite o numero:"));

function verificarPar(num){
if (num%2==0){
    document.write ("par")
}else {
    document.write ("impar")
}
}

console.log( verificarPar(num))