let secreto = 7;
let palpite;

for (; palpite !== secreto; ) {
  palpite = parseInt(prompt("Adivinhe o número (entre 1 e 10):"));
}

console.log("Você acertou!");