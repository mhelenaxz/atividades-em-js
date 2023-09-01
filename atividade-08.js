
const valor = parseFloat(prompt("Digite o valor total: "));
const desconto = parseFloat(prompt("Digite o desconto: "));
 
function verificarDesc() {
    return (valor * desconto /100)
}

const valorComDesconto = valor - verificarDesc();

document.write ("O valor com desconto é de: R$", valorComDesconto.toFixed(2));
