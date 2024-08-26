let num = document.querySelector("input#getnum");
let box = document.querySelector("select#boxnum");
let res = document.querySelector("div#res");
let vet = [];

function IsNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else if (Number(n) == 0 || Number(n) == "") {
    return false;
  } else {
    return false;
  }
}

function IsLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function addnum() {
  if (IsNumber(num.value) && !IsLista(num.value, vet)) {
    vet.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    box.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert(
      "Digite um valor entre 1 e 100! Que não esteja na lista ao lado."
    );
  }
  num.value = ""; //limpo minha caixa de texto
  num.focus(); //automaticamente se prepara para receber um novo número
}

function finalizar() {
  let tam = vet.length;
  if (vet.length == 0) {
    window.alert("Adicione valores antes de finalizar.");
  } else {
    let tam = vet.length;
    let soma = 0;
    let media = 0;
    for (let cont in vet) {
      soma += vet[cont];
    }
    media = soma / tam;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${tam} números cadastrados.</p>`;
    menornum();
    maiornum();
    res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
  }
}

function menornum() {
  vet.sort();
  return (res.innerHTML += `<p>O menor valor é ${vet[0]}.</p>`);
}

function maiornum() {
  vet.sort();
  return (res.innerHTML += `<p>O maior valor é ${vet[vet.length - 1]}.</p>`);
}
