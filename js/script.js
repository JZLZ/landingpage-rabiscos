// Força o som depois de qualquer interação do usuário
function habilitarSom() {
  const video = document.getElementById("meuVideo");

  if (video) {
    video.muted = false;
    video.play().catch((err) => {
      console.log("Navegador bloqueou autoplay com som:", err);
    });
    // Remove o listener depois da primeira ativação
    document.removeEventListener("click", habilitarSom);
  }
}

// Listener só uma vez → na primeira interação
document.addEventListener("click", habilitarSom);
