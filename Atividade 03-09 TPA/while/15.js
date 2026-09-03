let num = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;
let i = num;

while (i > 1) {
  fatorial *= i;
  i--;
}

console.log("Fatorial: " + fatorial);