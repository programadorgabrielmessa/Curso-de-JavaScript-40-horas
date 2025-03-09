function verificarIdade(anoNascimento) {
    let idade = 2025 - anoNascimento;
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log(verificarIdade(2000)); // Saída: Maior de idade
console.log(verificarIdade(2010)); // Saída: Menor de idade