let addBtn = document.querySelector('.addBtn');
let containerModal = document.querySelector('.container-modal');
let closeIcon = document.getElementById('close');
let liElem = document.getElementById('addTask');
let modal = document.querySelector('.modal');
let inputElem = document.querySelector('.input-task');



console.log(modal)

function addTodo(){
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

addBtn.addEventListener('click', addTodo);
liElem.addEventListener('click', addTodo);
closeIcon.addEventListener('click', closeModal);
containerModal.addEventListener('click', closeModal);
modal.addEventListener('click', notCloseModal);
