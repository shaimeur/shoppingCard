const buttons = document.querySelectorAll('.btn');
const card = document.querySelector('.card[data-descr]');
const items = document.querySelector(".items");
const panier = document.querySelector("#panier")
const checkout = document.querySelector(".side-nav")
const sideNave = document.createElement("div")

const closeSideNave = document.querySelector(".close")

let val = 1 ;


for (const button of buttons) {
    button.addEventListener('click',function(){
        // console.dir(card.getAttribute('data-descr'))
        card.setAttribute('data-descr',val++)

    })
}


// adding the sideNave when we click on the card icon

card.addEventListener('click',function() {
     sideNave.innerHTML = `<div class="side-nav">
                                <h2 class="title-card">Card</h2>

                                <div type="button" class="sum">0.00</div>

                                <div type="button" class="close">close</div>
                          </div>`;
        items.insertAdjacentHTML("beforeend",sideNave.innerHTML);
})


// closing the sideNave when clicking on the close button
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('close')) {
        console.log("Close button clicked");
        // Add your close sideNave logic here
    }
});





















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