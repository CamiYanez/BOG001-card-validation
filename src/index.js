import validator from './validator.js';
console.log(validator);

const instrumentsPage = document.getElementById('instruments'); //pantalla 1
const paymentPage = document.getElementById('payment'); //pantalla 2
const buttonBuy = document.getElementById('btnBuy'); //Botón comprar
const buttonDisabled = document.querySelector('.btnDisabled'); //Botón agotado, solo selecciona el primer elemento de la clase

const form = document.getElementById('formCard'); //Formulario
const creditCard = document.getElementById('creditCard'); //Tarjeta crédito
const numberCreditCard = document.getElementById('dataNumber');
const inputNumberTC = document.getElementById('inputNumberCard');
const nameCreditCard = document.getElementById('dataName');
const inputNameTC = document.getElementById('inputName');
const monthCreditCard = document.getElementById('month');
const inputMonthTC = document.getElementById('selectMonth');
const yearCreditCard = document.getElementById('year');
const inputYearTC = document.getElementById('selectYear');

//Cambio de pantallas
buttonBuy.addEventListener('click', showPayment);

function showPayment() {
  paymentPage.classList.remove('hidden');
  instrumentsPage.classList.add('hidden');
}

//Alerta de no stock para botón "Agotado"
buttonDisabled.addEventListener('click', noStock);

function noStock() {
  alert('Muy pronto lo tendremos en stock');
}

//Menú desplegable en el select mes
for (let i = 1; i <= 12; i++) {
    let optionMonths = document.createElement('option');
    optionMonths.value = i;
    optionMonths.textContent = i;
    form.selectMonth.appendChild(optionMonths);
}

// Menú desplegable en el select año
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 4; i++){
	let optionYears = document.createElement('option');
	optionYears.value = i;
	optionYears.textContent = i;
	form.selectYear.appendChild(optionYears);
}

//Reflejar Nombre en TC (OPCIÓN 1 PARA LLAMAR AL ID SIN TENER QUE GENERAR CONST)
form.inputName.addEventListener('keyup', reflectName);

function reflectName(){
nameCreditCard.textContent = form.inputName.value;
}

form.inputName.addEventListener('blur', returnReflectName);

function returnReflectName(){
  if (form.inputName.value == ''){
  nameCreditCard.textContent = 'Nombre titular';
  }
};

/*/ Reflejar Número en TC (OPCIÓN 2 PARA LLAMAR ID DESDE CONST)
inputNumberTC.addEventListener('keyup', reflectNumber);

function reflectNumber(){
numberCreditCard.textContent = inputNumberTC.value;
}

inputNumberTC.addEventListener('blur', returnReflectNumber);

function returnReflectNumber(){
  if (inputNumberTC.value == ''){
  numberCreditCard.textContent = '#### #### #### ####';
  }
};*/

//Reflejar Número en TC (Una sola función + switch para los eventos ¿If adentro?)
inputNumberTC.addEventListener('keyup', reflectNumber);
inputNumberTC.addEventListener('blur', reflectNumber);

function reflectNumber(e){
  switch (e.type) {
    case 'keyup':
      numberCreditCard.textContent = inputNumberTC.value;
      break;
    case 'blur':
      if (inputNumberTC.value == ''){
          numberCreditCard.textContent = "#### #### #### ####";}
      break;}}

//Reflejar Mes en TC
inputMonthTC.addEventListener('change', (e) => {
  monthCreditCard.textContent = e.target.value;});

//Reflejar año en TC
inputYearTC.addEventListener('change', (e) => {
  yearCreditCard.textContent = e.target.value.slice(2);});
