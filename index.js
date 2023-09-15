const buttons = document.querySelectorAll('.btn');
const card = document.querySelector('.card[data-descr]');
const items = document.querySelector(".items");
const panier = document.querySelector("#panier")
const checkout = document.querySelector(".side-nav")
let val = 1 ;


card.addEventListener('click',function() {
    // console.log(event.target)
    checkout.classList.remove("title-card","close","sum")
    checkout.classList.toggle("side-nav")
    // checkout.classList.toggle("title-card")
    // checkout.classList.toggle("close")
    // checkout.classList.toggle("sum")
})


for (const button of buttons) {
    button.addEventListener('click',function(){
        // console.dir(card.getAttribute('data-descr'))
        card.setAttribute('data-descr',val++)

    })
}
























// SIDE NAV BAR CODE IN JS

// const sidNav = document.createElement('div')
// const markup  =
//  `<div class="side-nav">
//         <div class="exits">
//             <div type="button" class="sum"></div>
//             <div type="button" class="close">close</div>
//         </div>
//  </div>`;
// sidNav.innerHTML = markup


// items.insertAdjacentHTML('beforeend',markup)