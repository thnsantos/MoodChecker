const loginForm = document.getElementById('login-form');
const registerInput = document.getElementById('register');
const passwordInput = document.getElementById('password');
const checkinForm = document.getElementById('checkin-form');


if (loginForm && registerInput && passwordInput) {
  registerInput.addEventListener('input', () => {
    registerInput.value = registerInput.value.replace(/\D/g, '');
  });

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const registerValue = registerInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!registerValue) {
      alert('Preencha o campo de matrícula.');
      registerInput.focus();
      return;
    }

    if (!passwordValue) {
      alert('Preencha o campo de senha.');
      passwordInput.focus();
      return;
    }

    loginForm.classList.add('hidden');
    checkinForm.classList.remove('hidden');
    console.log('Matrícula:', registerValue);
    console.log('Senha:', passwordValue);
  });
}

if (checkinForm) {
  checkinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Check-in enviado!');
    console.log('Check-in enviado');
  });
}

