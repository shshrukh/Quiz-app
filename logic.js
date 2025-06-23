
import quizQuestions from "./question.js";
//els object will contain all required elements
const els = {};

// making object will contain state of our app

const state = {
    userName: '',
    userAge: 0,
    currentQuestionIndex: 0,
    questions: null,
    correctAnswer: 0,
};

// dom content is loaded then init function is invoked;
function init() {
    cacheDOM();
    bindEvents();
}

// cashe the value of dome 

function cacheDOM() {
    Object.assign(els, {
        userInfoScreen: document.querySelector('.userInfoScreen'),
        userInfo: document.getElementById('userForm'),
        inputUserName: document.getElementById('userName'),
        inputUserAge: document.getElementById('age'),
        gameGuide: document.querySelector('.quizGameGuide'),
        nameMessage: document.querySelector('.userNameTarget'),
        startQuizBtn: document.querySelector('.startQuiz'),
        quizContainer: document.querySelector('.quizQuestions'),
        questionContainer: document.querySelector('.questionContainer'),
        submitAnswer: document.querySelector('.submitAnswer')
    })
}

// now make an event function 
function bindEvents() {
    els.userInfo.addEventListener('submit', handleSubmit);
    els.startQuizBtn.addEventListener('click', handleStartQuiz)
    els.submitAnswer.addEventListener('click', handleNext)
}

// this function is call when click on submit button 

function handleSubmit(e) {
    e.preventDefault();
    const age = parseInt(els.inputUserAge.value);
    const name = els.inputUserName.value.trim();

    if (Number.isNaN(age) || age < 10 || 80 < age) {
        alert('Only users aged between 10 and 80 are allowed to use this app.');
        return undefined;
    }

    if (!name) {
        alert('Please enter your Name');
        return undefined;
    }

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        alert('Name should only contain letters and spaces.');
        return undefined;
    }

    state.userName = name;
    state.userAge = age;
    els.nameMessage.innerText = `Hello ${name}, welcome to test your knowledge!`;
    els.userInfoScreen.classList.add('hidden');
    els.gameGuide.classList.remove('hidden')
}

// on clicking start quiz handleStartQuiz start
function handleStartQuiz() {
    const randomTenQuestions = [...quizQuestions].sort(() => (Math.random() - 0.5)).slice(0, 10);
    state.questions = randomTenQuestions;
    // console.log(state);
    els.gameGuide.classList.add('hidden');
    renderQuestion();
}

function renderQuestion() {

    const displayQuestion = els.questionContainer;
    displayQuestion.innerHTML = '';

    // add question 
    const questionE1 = document.createElement('h3');
    const { questions } = state;
    // console.log('our questions are', questions)
    const getQuestion = questions[state.currentQuestionIndex]
    questionE1.innerText = `${state.currentQuestionIndex + 1}/10. Question. ${getQuestion.question}`;
    displayQuestion.appendChild(questionE1);
    const queationOptions = getQuestion.options;
    state.selectedOption = null;
    // let isOptionSelected = false;
    // console.log('the options are ', queationOptions);
    queationOptions.forEach((opt, index) => {
        // console.log(opt);

        const createBtn = document.createElement('button');
        createBtn.classList.add('btn')
        createBtn.innerText = `${opt.text}`;
        displayQuestion.appendChild(createBtn);
        createBtn.addEventListener('click', (e) => {
            console.log('the button is target form ', e.target.innerText);
            const allBtns = document.querySelectorAll('.btn');
            allBtns.forEach(btn => btn.classList.remove('selected'));
            createBtn.classList.add('selected');
            state.selectedOption = opt;
        })
    })
    console.log('this is state object', state);


    els.quizContainer.classList.remove('hidden');

}
function handleNext() {
    const getQuestion = state.questions[state.currentQuestionIndex];

    
    if (!state.selectedOption) {
        alert('Please select an answer before proceeding.');
        return;
    }
    if (state.selectedOption.isCorrect) {
        state.correctAnswer++;
    }
    if (state.currentQuestionIndex < 9) {
        state.currentQuestionIndex++;
        renderQuestion();
    } else {
        alert(`Quiz complete! You got ${state.correctAnswer} out of 10 correct.`);

        state.currentQuestionIndex = 0;
        state.questions = null;
        state.correctAnswer = 0;
        state.selectedOption = null;
        handleStartQuiz();
    }
}





// once the documented is loaded we will invoke a function 

document.addEventListener('DOMContentLoaded', init);

