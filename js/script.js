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

// Opcional: contador de cliques local e validação do link
(function(){
  const links = [
    {id:'ig-link', name:'Instagram'},
    {id:'wa-link', name:'WhatsApp'}
  ];

  function ensureScheme(url){
    if(!url) return url;
    if(/^(https?:\/\/|\/\/|mailto:)/i.test(url)) return url;
    return 'https://' + url;
  }

  function incrementClickCounter(name){
    try{
      const key = 'click_'+name;
      const raw = localStorage.getItem(key);
      const value = raw ? parseInt(raw,10):0;
      const updated = value+1;
      localStorage.setItem(key,String(updated));
      console.log(name+' link clicked. Total:', updated);
      return updated;
    }catch(e){
      return null;
    }
  }

  links.forEach(linkInfo=>{
    const el = document.getElementById(linkInfo.id);
    if(el){
      // normaliza href
      const url = el.getAttribute('href');
      el.setAttribute('href', ensureScheme(url));

      el.addEventListener('click',()=>{
        incrementClickCounter(linkInfo.name);
      });
    }
  });
})();
