const readline = require('readline');

const quiz = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Emily Bronte"],
        correctAnswer: "William Shakespeare"
    }
];

function displayRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * quiz.length);
    const question = quiz[randomIndex];
    console.log(question.question);
    question.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
    return question;
}

function checkAnswer(question, userAnswer) {
    return question.options[userAnswer - 1] === question.correctAnswer;
}

async function runQuizGame() {
    let correctAnswers = 0;
    let totalQuestions = quiz.length;

    console.log("Welcome to the Quiz Game!");

    for (let i = 0; i < totalQuestions; i++) {
        const randomQuestion = displayRandomQuestion();
        const userAnswer = await askQuestion("Enter your answer: ");
        
        if (checkAnswer(randomQuestion, parseInt(userAnswer))) {
            console.log("Correct!");
            correctAnswers++;
        } else {
            console.log("Incorrect!");
        }
    }

    console.log(`Quiz completed! Your final score is: ${correctAnswers}/${totalQuestions}`);
}

function askQuestion(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(question, answer => {
            rl.close();
            resolve(answer);
        });
    });
}

runQuizGame();