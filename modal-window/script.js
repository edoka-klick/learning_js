'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

///console.log(btnOpenModal);
const closeModal = function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }


for(let i = 0; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', function(){
        //console.log('Button clicked ' + i)
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// btnCloseModal.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })


document.addEventListener('keydown', function(e){
    console.log(e.key);

    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});
