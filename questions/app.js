//Preguntas, puntuación y respuestas
const questions = ["What's the capital of France?", 
                   "Who painted the Mona Lisa?"];

const choiceQuestions = [
    ["Paris", "London", "Berlin", "Madrid"], 
    ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"]
];

const correctAnswers = ["Paris", "Da Vinci"];

let currentQuestionIndex = 0;
let score = 0;
let btn;


//Selectores HTML
let question = document.querySelector('.trivia__question');
let optionContainer = document.querySelector('.option__container');
let options = document.querySelectorAll('.option__item');

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        question.textContent = questions[currentQuestionIndex];
        for(let i = 0; i < 4; i++) {
            options[i].textContent =  choiceQuestions[currentQuestionIndex][i];    
        } 
    } else {
        optionContainer.classList.add('hiden');
        question.textContent = `You scored ${score} out of ${questions.length}!`;
    }
}

function validador(e){
    if (e.target.matches('.option__item')){
        btn = e.target.innerText;
        return checkAnswer(btn);
    }
}
function checkAnswer(btn) {
    if (btn === correctAnswers[currentQuestionIndex]){
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

//Controlador
optionContainer.addEventListener('click', validador);



displayQuestion();