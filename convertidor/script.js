// Variables y Selectores
const kmToMiles = 'kilometers to Miles';
const milesToKm = 'Miles to Kilometers';
const factorNumber = 1.60934;


// Función convertidora
function convert() {
    const chooseUnits = document.getElementById('units').value;
    const numberToConvert = parseFloat(document.querySelector('.calculator__input').value);
    const paragraphResult = document.querySelector('.calculator__p');
    let result;
   
 // Verificar si el usuario ingresó un número
    if (isNaN(numberToConvert)) { 
    alert('First, you need enter a number...');  
    // Realizar la conversión según la unidad seleccionada
    } else if (chooseUnits == kmToMiles) {
        result = numberToConvert * factorNumber;
        paragraphResult.innerHTML = `${result} miles`;
    } else if (chooseUnits == milesToKm) {
        result = numberToConvert / factorNumber;
        paragraphResult.innerHTML = `${result} km `;
    } else {
    alert('First, you need to select the type of conversion you want to perform.'); 
    }
}
