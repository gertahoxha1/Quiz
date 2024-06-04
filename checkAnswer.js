import quizData from "./quizData.js";
import { showQuestion, showResults } from "./script.js";

let currentQuestionIndex = 0;
let numCorrect = 0;

function checkAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = quizData[currentQuestionIndex].answers.find(answer => answer.text === selectedButton.textContent).correct;
    if (isCorrect) {
        numCorrect++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === quizData.length) {
        showResults();
    } else {
        showQuestion();
    }
}
export default checkAnswer;