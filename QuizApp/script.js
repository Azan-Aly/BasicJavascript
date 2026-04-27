document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById('start-btn')
    const restartBtn = document.getElementById('restart-btn')
    const nextBtn = document.getElementById('next-btn')
    const questionContainer = document.getElementById('question-container')
    const questionText = document.getElementById('question-text')
    const choiceList = document.getElementById('choice-list')
    const resultContainer = document.getElementById('result-container')
    const finalScore = document.getElementById('score')

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "which planet is known as Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Who wrote 'Hemlet'?",
            choices: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
            answer: "William Shakespeare",
        },
        {
            question: "What is the capital of Pakistan?",
            choices: ["Mian Channu", "Islamabad", "Berlin", "Tokyo"],
            answer: "Islamabad",
        },
        {
            question: "What is the National drink of Summer in Pakistan?",
            choices: ["Mango Juice", "Orange Juice", "Sattu", "Ganay ka Juice Bara Glass"],
            answer: "Ganay ka Juice Bara Glass",
        },

    ];

    let score = 0
    let currentQuestionIndex = 0


    startBtn.addEventListener('click', startQuiz)

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion()
        } else {
            showResult()
        }
    })

    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add('hidden')
        startQuiz()
    })

    function startQuiz() {
        startBtn.classList.add('hidden')
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestion()
    }

    function showQuestion() {
        nextBtn.classList.add('hidden')
        questionText.textContent = questions[currentQuestionIndex].question;
        choiceList.innerHTML = "" //clear previous choices
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li')
            li.textContent = choice
            li.addEventListener('click', () => selectAnswer(choice))
            li.addEventListener('click', () => {
                li.style.backgroundColor = "Blue"
                
            })
            choiceList.appendChild(li)
        })
    }

    function selectAnswer(choice) {
        const correctAnswer = questions[currentQuestionIndex].answer;

        if (choice === correctAnswer) {
            score++
        }

        nextBtn.classList.remove('hidden')
    }

    function showResult() {
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        finalScore.textContent = `${score} out of ${questions.length}`

    }


})
