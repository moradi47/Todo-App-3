let addBtn = document.querySelector('.addBtn');
let containerModal = document.querySelector('.container-modal');
let closeIcon = document.getElementById('close');
let liElem = document.getElementById('addTask');
let modal = document.querySelector('.modal');
let inputElem = document.querySelector('.input-task');
let addTaskBtn = document.querySelector('.addTaskBtn');
let divContent = document.querySelector('.content');

console.log(addTaskBtn);

function openTodo(){
    console.log('add')
    containerModal.style.display = 'flex';

}

function closeModal(){
    console.log('close');
    containerModal.style.display = 'none';
}

function notCloseModal(event){
    event.stopPropagation();
}

function addTodo(){
    if(inputElem.value !== ''){
        let pElem = document.createElement('p');
        let checkboxElem = document.createElement('input');
        let divElem1 = document.createElement('div');
        let divElem2 = document.createElement('div');
        let checkBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
        let checkIcon = document.createElement('i');
        let deleteIcon = document.createElement('i');
        let divContainer = document.createElement('div');

        pElem.innerHTML = inputElem.value;
        checkboxElem.setAttribute('type', 'checkbox');
        checkIcon.setAttribute('class', 'fa fa-check');
        deleteIcon.setAttribute('class', 'fa fa-trash');
        checkBtn.setAttribute('class', 'checkBtn gray');
        deleteBtn.setAttribute('class', 'deleteBtn red');
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
    inputElem.value = '';
    closeModal();
}

addBtn.addEventListener('click', openTodo);
liElem.addEventListener('click', openTodo);
closeIcon.addEventListener('click', closeModal);
containerModal.addEventListener('click', closeModal);
modal.addEventListener('click', notCloseModal);
addTaskBtn.addEventListener('click', addTodo);
