const numberInput = document.querySelector('#square-input');
const numberRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');
const totalPriceElement = document.querySelector('#total-price');

//Задаємо радіокнопки
const radioTypes = document.querySelectorAll('input[name="type"]');
const radioBuildings = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');
const checkboxCeiling = document.querySelectorAll('input[name="ceiling"]');
const checkboxWalls = document.querySelectorAll('input[name="walls"]');
const checkboxFloor = document.querySelectorAll('input[name="floor"]');

//Задаємо базову ціну (дефолтну)
const defaultPrice = 12000;

numberRange.addEventListener('input', function(){
  numberInput.value = numberRange.value
});

numberInput.addEventListener('input', function(){
  numberRange.value = numberInput.value
});

//Функція розрахунку вартості та відображення її на екрані
function calculate(){
  let totalPrice = defaultPrice * parseInt(numberInput.value);

  for (const radio of radioTypes) {
    if(radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value)
    }
  }

  for (const radio of radioBuildings) {
    if(radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value)
    }
  }

  for (const radio of radioRooms) {
    if(radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value)
    }
  }

  for (const checkbox of checkboxCeiling) { 
    if (checkbox.checked) {
      totalPrice = totalPrice + parseInt(checkbox.value) * parseInt(numberInput.value)
    }
  }

  for (const checkbox of checkboxWalls) { 
    if (checkbox.checked) {
      totalPrice = totalPrice * parseFloat(checkbox.value)
    }
  }

  for (const checkbox of checkboxFloor) { 
    if (checkbox.checked) {
      totalPrice = totalPrice * parseFloat(checkbox.value)
    }
  }

  const formatter = new Intl.NumberFormat('ua');
  totalPriceElement.innerText = formatter.format(totalPrice);
};

//Запускаємо функцію по старту для розрахунку базової вартості
calculate();

//Запуск функції розрахунку при кожному спрауюванні input
for (const input of inputs) {
  input.addEventListener('input', function(){
    calculate();
  });
};

