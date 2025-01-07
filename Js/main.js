let addBtn = document.querySelector('.addBtn');
let containerModal = document.querySelector('.container-modal');
let closeIcon = document.getElementById('close');
let liElem = document.getElementById('addTask');
let modal = document.querySelector('.modal');
let inputElem = document.querySelector('.input-task');
let addTaskBtn = document.querySelector('.addTaskBtn');
let divContent = document.querySelector('.content');
let deleteBtn = document.querySelector('.deleteBtn');
let taskArray=[];

function createCard(name){
    let pElem = document.createElement('p');
        let checkboxElem = document.createElement('input');
        let divElem1 = document.createElement('div');
        let divElem2 = document.createElement('div');
        let checkBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
        let checkIcon = document.createElement('i');
        let deleteIcon = document.createElement('i');
        let divContainer = document.createElement('div');

        pElem.innerHTML = name;
        checkboxElem.setAttribute('type', 'checkbox');
        checkboxElem.addEventListener('click', doneTask);
        checkIcon.setAttribute('class', 'fa fa-check');
        deleteIcon.setAttribute('class', 'fa fa-trash');
        checkBtn.setAttribute('class', 'checkBtn gray');
        deleteBtn.setAttribute('class', 'deleteBtn red');
        deleteBtn.addEventListener('click', deleteTask);
        divElem1.setAttribute('class', 'task');
        divElem2.setAttribute('class', 'option');
        divContainer.setAttribute('class', 'card');

        divElem1.append(checkboxElem, pElem);
        checkBtn.append(checkIcon);
        deleteBtn.append(deleteIcon);
        divElem2.append(checkBtn, deleteBtn);
        divContainer.append(divElem1,divElem2);
        divContent.append(divContainer);
}


function loadHandler(){
    
    let tasks = JSON.parse(localStorage.getItem('task'));
    if(tasks !== null){
        
        tasks.forEach((item) => {
            createCard(item);
        });
    }
    
}

function openTodo(){
    containerModal.style.display = 'flex';

}

function closeModal(){
    containerModal.style.display = 'none';
}

function notCloseModal(event){
    event.stopPropagation();
}

function deleteTask(event){
    event.target.parentElement.parentElement.parentElement.remove();
}

function doneTask(event){

    let iconCheck = event.target.parentElement.parentElement.children[1].firstChild;
    let nameTask = event.target.parentElement.lastChild;

    if(event.target.checked){
        iconCheck.classList.remove('gray');
        iconCheck.classList.add('green');
        nameTask.classList.add('done');
    }else{
        iconCheck.classList.remove('green');
        iconCheck.classList.add('gray');
        nameTask.classList.remove('done');
    }
}



function addTodo(){
    if(inputElem.value !== ''){
        createCard(inputElem.value);
        taskArray.push(inputElem.value);
        localStorage.setItem('task', JSON.stringify(taskArray));
    }
    inputElem.value = '';
    closeModal();
}

addBtn.addEventListener('click', openTodo);
liElem.addEventListener('click', openTodo);
closeIcon.addEventListener('click', closeModal);
containerModal.addEventListener('click', closeModal);
modal.addEventListener('click', notCloseModal);
addTaskBtn.addEventListener('click', addTodo);
