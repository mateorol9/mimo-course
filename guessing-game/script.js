    // Definimos el número inicial de intentos y el valor aleatorio que indica el final del juego
    let tries = 6;
    let finish = "finish"
    // Creamos un event listener para que el cta se envie con la tecla 'enter'
    let sendButton = document.getElementById('input-send');
    sendButton.addEventListener('keydown', function(e) {
        // Verifica si la tecla presionada es Enter
        if (e.key === 'Enter') {
            // Llama a la función de envío cuando se presiona Enter
            game();
        }
    });
    // Generamos un número aleatorio entre 1 y 100
    const randomNumber = Math.floor(Math.random()*100)+1;
   // Comienza la función que se inicializa a través de un onclick
function game() {
    // Capturamos el valor ingresado por el usuario y el elemento donde se mostrará el feedback
    const feedback = document.querySelector('.game__result');
    let inputNumber = document.querySelector('.game__input').value;
    // Validamos que la entrada sea un número entre 1 a 100 y no esté vacía
    if (isNaN(inputNumber) || inputNumber.trim() === "" || inputNumber < 1 || inputNumber > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }
    // Comienza el bucle de juego mientras haya intentos restantes
    while (tries > 0) {
        // Verificamos si el número ingresado es igual al número aleatorio
        if ( inputNumber == randomNumber) {
            tries = finish;
            feedback.classList.add('good');
            return feedback.innerHTML = "Congratulations! 🎉🎉";
        } else if (inputNumber > randomNumber){
            // Reducimos los intentos, mostramos el mensaje de demasiado alto y salimos del bucle
            tries--;
            feedback.innerHTML = `Too high! Try again. ${tries} attempts remaining.`;
            break
        } else if (inputNumber < randomNumber){
            // Reducimos los intentos, mostramos el mensaje de demasiado bajo y salimos del bucle
            tries--;
            feedback.innerHTML = `Too low! Try again. ${tries} attempts remaining.`;
            break
        }
    }
    // Verificamos si se agotaron los intentos sin adivinar el número
    if (tries === 0 ) {
        feedback.innerHTML = `Sorry, you're out of attempts! The correct number was ${randomNumber}.`;
    } else if (tries === finish) {
        // Si el juego terminó, mostramos el mensaje de despedida y agradecimiento
        feedback.innerHTML = `You finished the game! See you later, and thanks for playing.`;
    }
}