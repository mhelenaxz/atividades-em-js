const num = parseInt(prompt("Digite um número: "));

function calcularFatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * calcularFatorial(num - 1);
}


if (num < 0) {
    document.write("Não é possível calcular o fatorial de um número negativo.");
} else {
    const fatorial = calcularFatorial(num);
    document.write(`O fatorial de ${num} é ${fatorial}.`);
}