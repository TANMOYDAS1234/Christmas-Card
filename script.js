const card = document.querySelector('.card');

const sound = new Audio('jingle-bells-278637.mp3');

card.addEventListener('click', function(){
    card.classList.toggle('open')
    sound.play();
})