const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
event.preventDefault();

const formElements = event.currentTarget.elements;
const email = formElements.email.value;
const password = formElements.password.value;

if (email === '' || password === '') {
alert('Все поля должны быть заполнены!');
return;
}

const userData = {
email,
password
};

console.log(userData);
formRef.reset();
}
