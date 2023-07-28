const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;

 // Validação de e-mail
 const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 if (!emailPattern.test(email)) {
  alert('Escreva um e-mail válido. Ex: abc@.com');
  return false;
 }

 // Validação de senha
 const passwordPattern = /^[a-zA-Z0-9]{8,}$/;
 if (!passwordPattern.test(password)) {
  alert('A senha deve ter no mínimo 8 caracteres, entre letras e números.');
  return false;
 }

 // Submeter  o formulário
 form.submit();
});