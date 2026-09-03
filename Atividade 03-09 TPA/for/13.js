let opcao;

for (;;) {
  opcao = parseInt(prompt("1 - Olá\n2 - Tchau\n3 - Sair\nEscolha uma opção:"));

  if (opcao === 1) {
    console.log("Olá!");
  } else if (opcao === 2) {
    console.log("Tchau!");
  } else if (opcao === 3) {
    break;
  }
}