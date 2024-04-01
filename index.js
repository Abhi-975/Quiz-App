const questions = [
    {
        question: " What is the implicit return type of constructor?",
        answers: [
            {text: "No return type" , correct: "false"},
            {text: "A class object in which it is define" , correct: "true"},
            {text: "Void" , correct: "false"},
            {text: "None" , correct: "false"},
        ]
    },
    {
        question: " When is the object created with a new keyword?",
        answers: [
            {text: "At runtime" , correct: "true"},
            {text: "At compile time" , correct: "false"},
            {text: "Depends on code" , correct: "false"},
            {text: "None" , correct: "false"},
        ]
    },
    {
        question: " Identify the incorrect constructor type.",
        answers: [
            {text: "Friend Constructor" , correct: "true"},
            {text: "Default Constructor" , correct: "false"},
            {text: "Parameterized Constructor" , correct: "false"},
            {text: "Copy Constructor" , correct: "false"},
        ]
    },
    {
        question: " Identify the scope resolution operator.",
        answers: [
            {text: ":" , correct: "false"},
            {text: "::" , correct: "true"},
            {text: "?:" , correct: "false"},
            {text: "None" , correct: "false"},
        ]
    },
    {
        question: " Choose the option below which is not a member of the class.",
        answers: [
            {text: "Friend function" , correct: "true"},
            {text: "Static function" , correct: "false"},
            {text: "Virtual function" , correct: "false"},
            {text: "Const function" , correct: "false"},
        ]
    },

    {
        question: " Total types of constructors in C++ are?",
        answers: [
            {text: "1" , correct: "false"},
            {text: "2" , correct: "false"},
            {text: "3" , correct: "true"},
            {text: "4" , correct: "false"},
        ]
    },
    {
        question: " What is the number of parameters that a default constructor requires?",
        answers: [
            {text: "0" , correct: "true"},
            {text: "1" , correct: "false"},
            {text: "2" , correct: "false"},
            {text: "3" , correct: "false"},
        ]
    },
    {
        question: " Data members and member functions of a class are private. default. True or False?",
        answers: [
            {text: "True" , correct: "true"},
            {text: "False" , correct: "false"},
            {text: "Depends on code" , correct: "false"},
            {text: "None" , correct: "false"},
        ]
    },
    {
        question: " Under which pillar of OOPS do base class and derived class relationships come?",
        answers: [
            {text: "Polymorphism" , correct: "false"},
            {text: "Inheritance" , correct: "true"},
            {text: "Encapsulation" , correct: "false"},
            {text: "Abstraction" , correct: "false"},
        ]
    },
    {
        question: " Which of the following functions can be inherited from the base class?",
        answers: [
            {text: "Constructor" , correct: "false"},
            {text: "Destructor" , correct: "false"},
            {text: "Static" , correct: "false"},
            {text: "None" , correct: "true"},
        ]
    },
    {
        question: " Which of the following is not a type of inheritance?",
        answers: [
            {text: "Multiple" , correct: "false"},
            {text: "Multilevel" , correct: "false"},
            {text: "Distributed" , correct: "true"},
            {text: "Heirachical" , correct: "false"},
        ]
    },
    {
        question: " What is an object in c++?",
        answers: [
            {text: "It is a function of class" , correct: "false"},
            {text: "It is an instance of class" , correct: "true"},
            {text: "It is a data type of class" , correct: "false"},
            {text: "It is part of the syntax of class" , correct: "false"},
        ]
    },
    {
        question: " Why is reusability a desirable feature?",
        answers: [
            {text: "Reduces Compilation time" , correct: "false"},
            {text: "Decreases testing time" , correct: "true"},
            {text: "Lowers maintenance cost" , correct: "false"},
            {text: "None" , correct: "false"},
        ]
    },
    {
        question: " Identify the operators which cannot be overloaded.",
        answers: [
            {text: "?:" , correct: "false"},
            {text: ".(dot operator)" , correct: "false"},
            {text: ">>" , correct: "false"},
            {text: "Both A and B " , correct: "true"},
        ]
    },
    {
        question: " Another name of overloading is?",
        answers: [
            {text: "Pseudo polymorphism" , correct: "false"},
            {text: "Transient polymorphism" , correct: "false"},
            {text: "Virtual polymorphism" , correct: "false"},
            {text: "Ad-hoc polymorphism" , correct: "true"},
        ]
    },
    {
        question: " By default, fields in a structure of a C program is?",
        answers: [
            {text: "Public" , correct: "true"},
            {text: "Private" , correct: "false"},
            {text: "Protected" , correct: "flase"},
            {text: "None" , correct: "false"},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} .`;
    nextButton.innerHTML="PLAY AGAIN";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();