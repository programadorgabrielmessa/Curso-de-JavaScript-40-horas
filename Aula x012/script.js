function carregar() {
    // Pega os elementos do HTML pelos seus IDs
    var msg = window.document.getElementById('msg');         // Div ou parágrafo para a mensagem
    var img = window.document.getElementById('imagem');     // Tag <img> para a foto (assumindo id="imagem")
    
    // Pega a hora atual
    var data = new Date();
    var hora = data.getHours();
    // var hora = 19; // Descomente esta linha para testar horários específicos

    // Exibe a hora na mensagem inicial
    msg.innerHTML = `Agora são ${hora} horas.`;

    // Verifica o período do dia para definir imagem, saudação e cor de fundo
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'Manhã.jpg'; // Define a imagem da manhã
        msg.innerHTML += '<br>Bom dia!'; // Adiciona a saudação
        document.body.style.background = '#e2cd9f'; // Cor de fundo para manhã (exemplo)
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.jpg'; // Define a imagem da tarde
        msg.innerHTML += '<br>Boa tarde!'; // Adiciona a saudação
        document.body.style.background = '#b9846f'; // Cor de fundo para tarde (exemplo)
    } else {
        // BOA NOITE!
        img.src = 'Noite.jpg'; // Define a imagem da noite
        msg.innerHTML += '<br>Boa noite!'; // Adiciona a saudação
        document.body.style.background = '#515154'; // Cor de fundo para noite (exemplo)
    }
}