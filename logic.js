import quizQuestions from "./question.js";
console.log(quizQuestions);

const els = {};
const state = {
    userName :'',
    userAge : 0,
    submitAnswers : [],
};

function init(){
    cacheDom();
    bindEvents();
    console.log('els object', els );    
}

function cacheDom(){
    els.userScreenInfo = document.querySelector('.userInfoScreen')
    els.name = document.getElementById('userName');
    els.age = document.getElementById('age');
    els.form = document.getElementById('userForm');
    els.input = document.querySelectorAll('input');
    els.quizGameGuide = document.querySelector('.quizGameGuide');
    els.userNameTarget = document.querySelector('.userNameTarget');
    els.startQuiz = document.querySelector('.startQuiz');
    els.quizSection = document.querySelector('.quizQuestions');

}

function bindEvents(){
    els.form.addEventListener('submit', handleSubmit)
    els.startQuiz.addEventListener('click', handleStartQuiz)
    
}

function handleSubmit(e){
    e.preventDefault();
    state.userName = els.name.value.trim();
    state.userAge = parseInt(els.age.value,10)
    if(state.userName === '' || isNaN(state.userAge)){
        alert('please enter the correct Name or age')
        return undefined;
    }   
    els.userScreenInfo.classList.add('hidden');
    els.userNameTarget.innerText = `Hello ${state.userName.toUpperCase()} test your Knowledge with our fun quiz`
    els.quizGameGuide.classList.remove('hidden');
    console.log('state is updated',state.userName, state.userAge);
     
}
function handleStartQuiz(){
    els.quizGameGuide.classList.add('hidden');
    els.quizSection.classList.remove('hidden')
}



document.addEventListener('DOMContentLoaded', init)
