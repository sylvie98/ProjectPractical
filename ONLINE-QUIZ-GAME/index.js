const online = require('readline');

const Quiz = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question:'what is variable?',
        options:['hello','sylvie','storage location in computer memory where you can store and retrive data'],
        answer:3
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Emily Bronte"],
        correctAnswer: "William Shakespeare"
    }
];

function displayRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * Quiz.length);
    const question = Quiz[randomIndex];
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
    let totalQuestions = Quiz.length;

    console.log("WELCAME IN THE ONLINE Quiz Game!");

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
    const final = online.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        final.question(question, answer => {
            final.close();
            resolve(answer);
        });
    });
}

runQuizGame();