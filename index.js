const buttons = document.querySelectorAll('.btn');
const card = document.querySelector('.card[data-descr]');
const items = document.querySelector(".items")
// const sidNav = document.createElement('div')
let val = 1 ;




for (const button of buttons) {
    button.addEventListener('click',function(){
        // console.dir(card.getAttribute('data-descr'))
         card.setAttribute('data-descr',val++)

    })
}
// const markup  =
//  `<div class="side-nav">
//         <div class="exits">
//             <div type="button" class="sum"></div>
//             <div type="button" class="close">close</div>
//         </div>
//  </div>`;
// sidNav.innerHTML = markup


// items.insertAdjacentHTML('beforeend',markup)