
const els = {};
const state = {
    userName :'',
    userAge : 0
};

function init(){
    cacheDom();
    bindEvents();
    console.log('els object', els );    
}

function cacheDom(){
    els.name = document.getElementById('userName');
    els.age = document.getElementById('age');
    els.form = document.getElementById('userForm');
    els.input = document.querySelectorAll('input');
}

function bindEvents(){
    els.form.addEventListener('submit', handleSubmit)
    
}

function handleSubmit(e){
    e.preventDefault();
    state.userName = els.name.value.trim();
    state.userAge = parseInt(els.age.value,10)
    if(state.userName === '' || isNaN(state.userAge)){
        alert('please enter the correct Name or age')
        return undefined;
    }
    console.log('state is updated',state.userName, state.userAge);
    
    
}


document.addEventListener('DOMContentLoaded', init)
