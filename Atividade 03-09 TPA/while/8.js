let i = 0;
let soma = 0;

while (i < 10) {
  let num = parseInt(prompt("Digite um número:"));
  soma += num;
  i++;
}

console.log("Soma: " + soma);