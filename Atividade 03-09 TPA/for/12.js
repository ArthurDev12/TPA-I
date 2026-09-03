let soma = 0;

for (; soma <= 100; ) {
  let num = parseInt(prompt("Digite um número:"));
  soma += num;
}

console.log("Soma final: " + soma);