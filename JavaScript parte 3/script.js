function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('div#res')
    if (fsex[0].checked) {
        genero = 'Homem';
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'foto-bebe-m.png');
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'foto-jovem-m.png');
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'foto-adulto-m.png');
        } else {
            // Idoso
            img.setAttribute('src', 'foto-idoso-m.png');
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher';
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'foto-bebe-f.png');
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'foto-jovem-f.png');
        } else if (idade < 50) {
            // Adulta
            img.setAttribute('src', 'foto-adulto-f.png');
        } else {
            // Idosa
            img.setAttribute('src', 'foto-idoso-f.png');
        }
    }
    
}