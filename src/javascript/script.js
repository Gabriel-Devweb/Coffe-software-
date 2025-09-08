// scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior:'smooth' });
    }
  });
});

// formulário envia email via mailto
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  if(!nome || !email || !mensagem){
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const mailtoLink = `mailto:coffesoftwareoempresa@gmail.com?subject=Contato de ${encodeURIComponent(nome)}&body=${encodeURIComponent(mensagem + "\n\nDe: " + nome + " <" + email + ">")}`;
  window.location.href = mailtoLink;
});