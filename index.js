const buttons = document.querySelectorAll('.btn');
const card = document.querySelector('.card[data-descr]');
const items = document.querySelector(".items");
const panier = document.querySelector("#panier")
const staffs = document.querySelectorAll(".item")
let val = 1;

// Create the sideNave element and append it to the items container
const sideNave = document.createElement("div");
sideNave.setAttribute("class", "side-nav cache");
sideNave.innerHTML = `
                        <h2 class="title-card">Card</h2>
                        <div type="button" class="sum">0.00</div>
                        <div type="button" class="close">close</div>
                    `;
items.insertAdjacentElement("beforeend", sideNave);
const sideNavContainer = items.querySelector('.side-nav');

for (const button of buttons) {
    button.addEventListener('click', function () {
        card.setAttribute('data-descr', val++);
    });
}

for (let staff of staffs) {
    staff.addEventListener('click', function () {
        // console.log("staff==>",staff);
        // console.log(staff.childNodes[1].getAttribute('src'));
        // console.log(staff.childNodes[2].nextSibling.innerText);
        // console.log(staff.childNodes[4].nextSibling.innerText);

        let selectedItem = document.createElement("div");
        selectedItem.setAttribute("class","selectedItem")
        selectedItem.innerHTML = `
                                         <img class="selectedImg" src=${staff.childNodes[1].getAttribute('src')} >
                                         <span class="selectedName">${staff.childNodes[2].nextSibling.innerText}</span>
                                         <span class="selectedPrice">${staff.childNodes[4].nextSibling.innerText}</span>
                                 `
                sideNavContainer.insertAdjacentElement("afterbegin",selectedItem)
    });
}


// Toggle the sideNave visibility when clicking on the card icon
card.addEventListener('click', function () {
    sideNavContainer.classList.toggle('cache');
});

// Closing the sideNave when clicking on the close button
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('close')) {
        sideNavContainer.classList.add('cache');
    }
});
