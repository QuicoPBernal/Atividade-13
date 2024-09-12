
const cadastroForm = document.getElementById('cadastroForm');
cadastroForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  try {

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = parseInt(document.getElementById('idade').value);
    if (nome.trim() === "") {
      throw "O campo Nome é obrigatório.";
    }
    if (email.trim() === "") {
      throw "O campo Email é obrigatório.";
    }
    if (isNaN(idade) || idade <= 0) {
      throw "A idade deve ser um número positivo.";
    }

    console.log("Dados válidos:", nome, email, idade); 
  } catch (error) {
    alert(error);
  }
});

function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
