import quizQuestions from "./question.js";
console.log(quizQuestions);

const els = {};
const state = {
    userName: '',
    userAge: 0,
    question: [],
    currentQuestionIndex: 0,
    submitAnswers: []
};

function init() {
    cacheDom();
    bindEvents();
    console.log('els object', els);
}

function cacheDom() {
    els.userScreenInfo = document.querySelector('.userInfoScreen')
    els.name = document.getElementById('userName');
    els.age = document.getElementById('age');
    els.form = document.getElementById('userForm');
    els.input = document.querySelectorAll('input');
    els.quizGameGuide = document.querySelector('.quizGameGuide');
    els.userNameTarget = document.querySelector('.userNameTarget');
    els.startQuiz = document.querySelector('.startQuiz');
    els.quizSection = document.querySelector('.quizQuestions');
    els.questionContainer = document.querySelector('.questionContainer');
    els.nextBtn = document.querySelector('.submitAnswer');

}

function bindEvents() {
    els.form.addEventListener('submit', handleSubmit);
    els.startQuiz.addEventListener('click', handleStartQuiz);
    els.nextBtn.addEventListener('click', handleNextQuestion)

}

function handleSubmit(e) {
    e.preventDefault();
    state.userName = els.name.value.trim();
    state.userAge = parseInt(els.age.value, 10)
    if (state.userName === '' || isNaN(state.userAge)) {
        alert('please enter the correct Name or age')
        return undefined;
    }
    els.userScreenInfo.classList.add('hidden');
    els.userNameTarget.innerText = `Hello ${state.userName.toUpperCase()} test your Knowledge with our fun quiz`
    els.quizGameGuide.classList.remove('hidden');
    console.log('state is updated', state.userName, state.userAge);

}
function handleStartQuiz() {
    els.quizGameGuide.classList.add('hidden');
    els.quizSection.classList.remove('hidden');
    state.question =getRandomQuestions(quizQuestions);
    console.log('this is random question form quia questions', state.question);
    renderQuestion();

}
function getRandomQuestions(data, count = 10) {
  return [...data].sort(() => Math.random() - 0.5).slice(0, count);
}

function renderQuestion() {
    const i = state.currentQuestionIndex;
    const currentQuestion = state.question;

    if (!state.question.length || i >= state.question.length) {
        alert("Quiz completed!");
        els.nextBtn.disabled = true;
        return;
    }
    const q = currentQuestion[i];
    els.questionContainer.innerHTML = `
    <h3 class="question">
         Question ${i + 1} of ${state.question.length}: ${q.question}
    </h3>

    <div class="options">
      <button class="btn optionA">A. ${q.options[0].text}</button>
      <button class="btn optionB">B. ${q.options[1].text}</button>
      <button class="btn optionC">C. ${q.options[2].text}</button>
      <button class="btn optionD">D. ${q.options[3].text}</button>
    </div>`;
}


function handleNextQuestion() {
    state.currentQuestionIndex++;
    renderQuestion();
}

document.addEventListener('DOMContentLoaded', init)