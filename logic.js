
import quizQuestions from "./question.js";
//els object will contain all required elements
const els ={};

// making object will contain state of our app

const state = {
    userName : '',
    userAge : 0,
    currentQuestionIndex : 0,
    questions : null,
};

// dom content is loaded then init function is invoked;
function init(){
    cacheDOM();
    bindEvents();
}

// cashe the value of dome 

function cacheDOM(){
    Object.assign(els,{
        userInfoScreen : document.querySelector('.userInfoScreen'),
        userInfo :       document.getElementById('userForm'),
        inputUserName :  document.getElementById('userName'),
        inputUserAge :   document.getElementById('age'),
        gameGuide :      document.querySelector('.quizGameGuide'),
        nameMessage :    document.querySelector('.userNameTarget'),
        startQuizBtn:    document.querySelector('.startQuiz'),
        quizContainer :   document.querySelector('.quizQuestions'),
        questionContainer:document.querySelector('.questionContainer'),
    })
}

// now make an event function 
function bindEvents(){
    els.userInfo.addEventListener('submit', handleSubmit);
    els.startQuizBtn.addEventListener('click', handleStartQuiz)
}

// this function is call when click on submit button 

function handleSubmit(e){
    e.preventDefault();
    const age = parseInt(els.inputUserAge.value);
    const name = els.inputUserName.value.trim();

    if(Number.isNaN(age) || age < 10 || 80 < age ){
        alert('Only users aged between 10 and 80 are allowed to use this app.');
        return undefined;
    }
    
    if(!name) {
        alert('Please enter your Name');
        return undefined;
    }

    const nameRegex = /^[A-Za-z\s]+$/;
    if(!nameRegex.test(name)){
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
function handleStartQuiz(){
    const randomTenQuestions = [...quizQuestions].sort(()=>(Math.random() - 0.5 )).slice(0,10);
    state.questions = randomTenQuestions;
    console.log(state);
    els.gameGuide.classList.add('hidden');
    renderQuestion();
}

function renderQuestion() {

    const displayQuestion = els.questionContainer;
    displayQuestion.innerHTML = '';

    // add question 
    const questionE1 = document.createElement('h2');
    const {questions} = state;
    console.log('our questions are', questions)
    questions.forEach(element => {
        console.log(element);
        
    });


    els.quizContainer.classList.remove('hidden');
    const containQuestion = els.questionContainer;
    console.log(containQuestion);
    
//   container.innerHTML = ''; // clear old content

//   // Add question text
//   const questionEl = document.createElement('h2');
//   questionEl.innerText = questionObj.question;
//   container.appendChild(questionEl);

//   // Add options
//   questionObj.options.forEach((option, index) => {
//     const btn = document.createElement('button');
//     btn.innerText = option.text;
//     btn.classList.add('optionBtn');
//     btn.dataset.isCorrect = option.isCorrect; // for tracking
//     btn.addEventListener('click', handleAnswer);
//     container.appendChild(btn);
//   });
}




// once the documented is loaded we will invoke a function 

document.addEventListener( 'DOMContentLoaded' , init );

