const num = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
 
function verificarNum() { 
    if (num > num2) {
        document.write("O maior número é o: ", num);
    }
    else {
        document.write("O maior número é o: ", num2);
    }
}

verificarNum(); 
