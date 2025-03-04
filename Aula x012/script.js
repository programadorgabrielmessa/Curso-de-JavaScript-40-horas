function carregar() {
    var msg = window.document.getElementById('msg')
    var msg = window.document.getElementById("Imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ${hora} horas'
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        // BOM DIA!
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        // BOA TARDE!
    } else {
        // BOA NOITE
       img.src = 'noite.png'
    }
}