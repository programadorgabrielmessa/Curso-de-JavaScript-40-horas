let res = document.querySelector('div#res');
let lista = document.querySelector('select#lista');
let valores = [];

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
    return l.indexOf(Number(n)) != -1;
}

function adicionar() {
    let num = document.getElementById('num');
    let valor = num.value;
    if (isNumero(valor) && !inLista(valor, valores)) {
        valores.push(Number(valor));
        let option = document.createElement('option');
        option.text = `Valor ${valor} adicionado.`;
        lista.appendChild(option);
        num.value = ''; // Limpa o campo
        num.focus(); // Foca no campo novamente
        atualizarEstatisticas();
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
}

function atualizarEstatisticas() {
    if (valores.length > 0) {
        let total = valores.length;
        let maior = Math.max(...valores);
        let menor = Math.min(...valores);
        let soma = valores.reduce((a, b) => a + b, 0);
        let media = soma / total;
        res.innerHTML = `
            <p>Ao todo, temos ${total} números cadastrados.</p>
            <p>O maior valor informado foi ${maior}.</p>
            <p>O menor valor informado foi ${menor}.</p>
            <p>Somando todos os valores, temos ${soma}.</p>
            <p>A média dos valores digitados é ${media.toFixed(2)}.</p>
        `;
    } else {
        res.innerHTML = '<p>Aguardando números...</p>';
    }
}