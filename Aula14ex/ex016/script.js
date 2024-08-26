let ninicial = document.getElementById("numinicio");
let nfinal = document.getElementById("numfim");
let npassos = document.getElementById("numpassos");
var res = document.getElementById("res");

function contar() {
  if (
    //tratativa de erros
    ninicial.value.length == 0 ||
    nfinal.value.length == 0 ||
    npassos.value.length == 0
  ) {
    res.innerHTML = "Impossível contar.";
    window.alert("[ERRO], insira um valor, que seja maior que 0");
  } else {
    res.innerHTML = "Contando: <br>";
    let i = Number(ninicial.value);
    let f = Number(nfinal.value); //Convertendo meus valores
    let p = Number(npassos.value);

    if (p <= 0) {
      window.alert("Passo inválido! Considenranto PASSO 1");
      p = 1;
    }
    if (i < f) {
      // contagem crescente
      for (let c = i; c <= f; c += p) {
        // += (Seu valor atual e soma com o proximo)
        res.innerHTML += ` ${c}  \u{1F449}`; //formato unicode dos emojis para o javascript
      }
    } else {
      // contagem decrescente
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
