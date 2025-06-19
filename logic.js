

//els object will contain all required elements
const els ={};

// making object will contain state of our app

const state = {
    userName : '',
    userAge : 0,
};

// dom content is loaded then init function is invoked;
function init(){
    casheDOM();
    bindsEvents();
}

// cashe the value of dome 

function casheDOM(){
    Object.assign(els,{
        userInfoScreen : document.querySelector('.userInfoScreen'),
        userInfo :       document.getElementById('userForm'),
        inputUserNmae :       document.getElementById('userName'),
        inputUserAge :        document.getElementById('age'),
        gameGuide :      document.querySelector('.quizGameGuide'),
    })
}

// now make an event function 
function bindsEvents(){
    els.userInfo.addEventListener('submit', handleSubmit);
}

// this function is call when click on submit button 

function handleSubmit(e){
    e.preventDefault();
    const age = parseInt(els.inputUserAge.value);
    const name = els.inputUserNmae.value.trim();

    if(Number.isNaN(age) || age < 10 || 80 < age ){
        alert('age 10 to 80 are allow to use this app');
        return undefined;
    }
    
    if(!name) {
        alert('Please enter your Name');
        return undefined;
    }

    const nameRegex = /^[A-Z-a-z\s]+$/;
    if(!nameRegex.test(name)){
        alert('name should be contain letters and spaces');
        return undefined;
    }
    
    state.userName = name;
    state.userAge = age;

    els.userInfoScreen.classList.add('hidden');
    els.gameGuide.classList.remove('hidden')
}





// once the documented is loaded we will invoke a function 

document.addEventListener( 'DOMContentLoaded' , init );

