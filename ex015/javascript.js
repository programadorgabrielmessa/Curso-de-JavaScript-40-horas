document.addEventListener('DOMContentLoaded', () => {
    // Seleção dos elementos do DOM
    const inicioInput = document.getElementById('txti'); // Renomeado para clareza
    const fimInput = document.getElementById('txtf');     // Renomeado para clareza
    const passoInput = document.getElementById('txtp');   // Renomeado para clareza
    const resDiv = document.getElementById('res');        // Renomeado para clareza
    const contarBtn = document.getElementById('contarBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Função principal para contar
    const contar = () => {
        // Validação de campos vazios antes de converter para número
        if (!inicioInput.value || !fimInput.value || !passoInput.value) {
            resDiv.style.color = 'red'; // Indica erro visualmente
            resDiv.innerHTML = '⚠️ Impossível contar! Preencha todos os campos.';
            return;
        }

        const i = Number(inicioInput.value);
        const f = Number(fimInput.value);
        const p = Number(passoInput.value);

        // Validação do passo
        if (p <= 0) {
            resDiv.style.color = 'red'; // Indica erro visualmente
            resDiv.innerHTML = '⚠️ Impossível contar! O passo deve ser maior que zero.';
             // Sugestão: Alertar o usuário sobre a correção automática
            // alert('Passo inválido! Considerando Passo = 1');
            // p = 1; // Ou corrigir automaticamente (opcional)
            return; // Mantendo o bloqueio se o passo for inválido
        }
         if (i === f) {
            resDiv.style.color = 'orange'; // Indica informação
            resDiv.innerHTML = '🏁 Contagem não necessária (Início igual ao Fim). Valor: ' + i;
            return;
        }

        // Resetar cor e preparar para contagem
        resDiv.style.color = 'inherit'; // Volta à cor padrão do texto
        resDiv.innerHTML = 'Contando: <br>';
        let sequence = '';

        // Contagem crescente ou regressiva
        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                 // Usando <span> para possível estilo futuro e melhor semântica
                sequence += `<span>${c} 👉</span> `;
            }
        } else {
            // Contagem Regressiva
            for (let c = i; c >= f; c -= p) {
                sequence += `<span>${c} 👉</span> `;
            }
        }
        // Adiciona o final da contagem
        resDiv.innerHTML += sequence + '<span>🏁</span>';
    };

    // Evento para o botão Contar
    contarBtn.addEventListener('click', contar);

    // Evento para o botão Resetar
    resetBtn.addEventListener('click', () => {
        inicioInput.value = '';
        fimInput.value = '';
        passoInput.value = '';
        resDiv.style.color = 'inherit'; // Reseta a cor
        resDiv.innerHTML = 'Preparando a contagem...';
        inicioInput.focus(); // Coloca o foco no primeiro campo após resetar
    });

     // Opcional: Permitir contar pressionando Enter em qualquer input
    [inicioInput, fimInput, passoInput].forEach(input => {
        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Previne envio de formulário se houver
                contar(); // Chama a função de contagem
            }
        });
    });

});