function jogar() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let pontos = 1000;
  
    alert("Bem-vindo ao jogo de adivinhação!");
    alert("Tente adivinhar o número secreto entre 1 e 100.");
  
    while (true) {
      const chute = parseInt(prompt("Digite seu chute:"));
      tentativas++;
  
      if (chute < numeroSecreto) {
        alert("O seu chute foi menor do que o número secreto.");
      } else if (chute > numeroSecreto) {
        alert("O seu chute foi maior do que o número secreto.");
      } else {
        alert(`Parabéns! Você acertou em ${tentativas} tentativas!`);
        alert(`Sua pontuação foi: ${pontos - (tentativas * 20)}`);
        break;
      }
  
      pontos -= 20;
    }
  }
  
  jogar();