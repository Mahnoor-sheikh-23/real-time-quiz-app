const questions = [
    {
        question : "What is TypeScript?",
        answers:[
            {text:"A type of database",correct:false},
            {text:"A superset of JavaScript",correct:true},
            {text:"A styling language",correct:false},
            {text:"A version of Python",correct:false}
        ]
    },{
        question : "Which command compiles a TypeScript file",
        answers:[
            {text:"ts",correct:false},
            {text:"tsc",correct:true},
            {text:"compile-ts",correct:false},
            {text:"type-compile",correct:false}
        ]
    },{
        question : "What keyword is used to define an interface in TypeScript?",
        answers:[
            {text:"class",correct:false},
            {text:"Type",correct:false},
            {text:"interface",correct:true},
            {text:"struct",correct:false}
        ]
    },{
        question : "What is the purpose of type aliases in TypeScript?",
        answers:[
            {text:"To create complex types",correct:false},
            {text:" To convert types",correct:false},
            {text:"To define new classe",correct:false},
            {text:"To rename existing types",correct:true}
        ]

    },{
        question : "What access modifier makes a class property private in TypeScript?",
        answers:[
            {text:"private",correct:true},
            {text:" public",correct:false},
            {text:"protected",correct:false},
            {text:"readonly",correct:false}
        ]
    }
]
const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-buttons")
const nwxtButton = document.getElementById("next-btn")
let currentQuestionIndex = 0
let score = 0
function startquiz(){
    currentQuestionIndex = 0
    score = 0
    nwxtButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex]
    let questionN0 = currentQuestionIndex + 1;
    questionElement.innerHTML = questionN0 +  ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer);
    })

}
function resetstate(){
    nwxtButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect){
        selectedButton.classList.add("correct")
        score++;

    }else{
        selectedButton.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    });
    nwxtButton.style.display = "block";
}
function showscore(){
    resetstate();
    questionElement.innerHTML = `you Scored ${score} out of ${questions.length} ! `
    nwxtButton.innerHTML = "Play Again"
    nwxtButton.style.display = "block"
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showscore()
    }
}
nwxtButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startquiz()
    }
})
startquiz();


