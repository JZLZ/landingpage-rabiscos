// Modal do formulário
const modal = document.getElementById("modal");

function abrirModal() {
  modal.style.display = "flex";
}

function fecharModal() {
  modal.style.display = "none";
}

// Fechar ao clicar fora do conteúdo
window.onclick = function(event) {
  if(event.target == modal) {
    fecharModal();
  }
}
