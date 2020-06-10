import validator from './validator.js';
console.log(validator);

const instrumentsPage = document.getElementById('instruments'); //pantalla 1
const paymentPage = document.getElementById('payment'); //pantalla 2
const buttonBuy = document.getElementById('btnBuy'); //Botón comprar
const buttonDisabled = document.querySelector('.btnDisabled'); //Botón agotado, solo selecciona el primer elemento de la clase
const form = document.getElementById('formCard');

//Cambio de pantallas
buttonBuy.addEventListener('click', showPayment);

function showPayment() {
  paymentPage.classList.remove('hidden');
  instrumentsPage.classList.add('hidden');
}

// Alerta de no stock para botón "Agotado"
buttonDisabled.addEventListener('click', noStock);

function noStock() {
  alert('Muy pronto lo tendremos en stock');
}

// Para crear menú desplegable en el select del mes
for (let i = 1; i <= 12; i++) {
    let optionMonths = document.createElement('option');
    console.log(optionMonths);
    optionMonths.value = i;
    optionMonths.innerText = i;
    form.selectMonth.appendChild(optionMonths);
}

// Para crear menú desplegable en el select del año
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 5; i++){
	let optionYears = document.createElement('option');
  console.log(yearActual);
	optionYears.value = i;
	optionYears.innerText = i;
	form.selectYear.appendChild(optionYears);
}
