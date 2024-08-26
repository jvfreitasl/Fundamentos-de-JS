let vagas = [3, 5, 2, 8, 1, 7, 4];
vagas.push(9); //adiciono um elemento no final do vetor
vagas.sort(); //organizo o vetor em ordem crescente de valores
let tam = vagas.length; //recebo o tamanho do meu vetor
console.log(vagas);
console.log(`Meu vetor possui ${tam} elementos e o meu primeiro é ${vagas[0]}`);

let pos = vagas.indexOf(8); //mostra em qual posição o elemento está no vetor

if (pos == -1) {
  //se o indexOf retornar  -1 , significa que o elemento não pertence ao vetor
  console.log("Este elemento não pertence ao vetor.");
} else {
  console.log(`O valor 8 está na posição ${pos}`);
}
