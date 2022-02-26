const quizDataBase = [
    {
        question : "What does CSS stands for ?",
        a : "Cascading Seperate Sheet",
        b : "Cascading Style Sheet",
        c : "Color Silver Sheet",
        d : "None of the Above",
        correct : "b"
    }, 
    {
        question : "Who is the First Programmer in the World ?",
        a : "Martin Guptill",
        b : "Lord Bryon",
        c : "Ada Lovelace",
        d : "Charles Babbage",
        correct : "c"
    },
    {
    
        question : "Which is the easiest programming langugage among these ?",
        a : "Java",
        b : "JavaScript",
        c : "Python",
        d : "Depends on Person",
        correct : "c"
    },
    {
        question : "What does HTML stands for ?",
        a : "Hyper Text Multi Language",
        b : "Hyper Tool Machine Language",
        c : "Hyper TeleCommunication Mobile Limited",
        d : "Hyper Text Markup Language",
        correct : "d"
    }
]

const option1 = document.getElementById("op1")
const option2 = document.getElementById("op2")
const option3 = document.getElementById("op3")
const option4 = document.getElementById("op4")

const questionEl = document.getElementById("question")
const submitEl = document.getElementById("btn-answer")

const greetingEl = document.getElementById("greeting")
const detailEl = document.getElementById("detail")

const quizEl = document.getElementById("quiz")
const headerEl = document.getElementsByClassName(".quiz-header")

const answerEl = document.querySelectorAll(".btn")

let questionCounter = 0
let score = 0

function quizLauncher() {
    deSelector()
    const quizQuestion = quizDataBase[questionCounter]
    questionEl.textContent = quizQuestion.question 
    option1.textContent = quizQuestion.a
    option2.textContent = quizQuestion.b
    option3.textContent = quizQuestion.c
    option4.textContent = quizQuestion.d
}


function getSelected() {
    let answer = undefined
    answerEl.forEach((ans) =>{
        if(ans.checked) {
            answer = ans.id
        }
    })
    return answer
}

function deSelector() {
    answerEl.forEach((ans) =>{
        ans.checked = false
    })
} 

quizLauncher()

submitEl.addEventListener("click", function(){
    const answer = getSelected()
    if(answer){
        if(answer == quizDataBase[questionCounter].correct){
            score += 1
        }
        greetingEl.textContent = ""
        detailEl.textContent = ""
        questionCounter += 1
        if(questionCounter < quizDataBase.length) {
            quizLauncher()
        }
        else{
            quizEl.innerHTML = `<h2 style ="margin-top : 25%;">You answered ${score} out of ${quizDataBase.length} questions
            <button onclick="location.reload()">Reload</button>`

        }
    }
})