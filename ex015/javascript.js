document.addEventListener('DOMContentLoaded', () => {
    // Seleção dos elementos do DOM
    const inicio = document.getElementById('txti');
    const fim = document.getElementById('txtf');
    const passo = document.getElementById('txtp');
    const res = document.getElementById('res');
    const contarBtn = document.getElementById('contarBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Função principal para contar
    const contar = () => {
        const i = Number(inicio.value);
        const f = Number(fim.value);
        const p = Number(passo.value);

        // Validação dos campos
        if (!inicio.value || !fim.value || !passo.value) {
            res.innerHTML = 'Erro! Preencha todos os campos!';
            return;
        }
        if (p <= 0) {
            res.innerHTML = 'Erro! O passo deve ser maior que zero!';
            return;
        }

        res.innerHTML = 'Contando: <br>';
        let sequence = '';
        
        // Contagem crescente ou regressiva
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                sequence += `${c} 👉 `;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                sequence += `${c} 👉 `;
            }
        }
        res.innerHTML += sequence + '🏁';
    };

    // Evento para o botão Contar
    contarBtn.addEventListener('click', contar);

    // Evento para o botão Resetar
    resetBtn.addEventListener('click', () => {
        inicio.value = '';
        fim.value = '';
        passo.value = '';
        res.innerHTML = 'Preparando a contagem...';
    });

    // Atualização em tempo real (opcional)
    inicio.addEventListener('input', contar);
    fim.addEventListener('input', contar);
    passo.addEventListener('input', contar);
});