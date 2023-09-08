const buttons = document.querySelectorAll('.btn');
const card = document.querySelector('.card[data-descr]')
let val = 1 ;




for (const button of buttons) {
    button.addEventListener('click',function(){
        console.dir(card.getAttribute('data-descr'))
         card.setAttribute('data-descr',val++)

    })
}