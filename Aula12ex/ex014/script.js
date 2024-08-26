function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = "imagens/fotosfotomanha.png";
    document.body.style.background = "#fce784";
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    document.body.style.background = "#e89244";
    img.src = "imagens/fototarde.png";
  } else {
    //boa noite
    img.src = "imagens/fotonoite.png";
    document.body.style.background = "#45344d";
  }
}
