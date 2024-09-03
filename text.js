const numbers = [
    {number : 0, inFrench: 'zero',},
    {number : 1, inFrench: 'un',},
    {number : 2, inFrench: 'deux',},
    {number : 3, inFrench: 'trois',},
    {number : 4, inFrench: 'quatre',},
    {number : 5, inFrench: 'cinq',},
    {number : 6, inFrench: 'six',},
    {number : 7, inFrench: 'sept',},
    {number : 8, inFrench: 'huit',},
    {number : 9, inFrench: 'neuf',},
    {number : 10, inFrench: 'dix',}
]

let max = numbers.length;
const markupFirst = numbers.map(el => {
    return  `<li><p>Number ${el.number}: ${el.inFrench}</p></li> `
  }).join('');
  const markup = `<ul class="modal-list"> ${markupFirst} </ul>`;
  

const numberInPage = document.querySelector(".number-text");
const btnGive = document.querySelector(".button-give");
const form = document.querySelector(".form");
const modalOpen = document.querySelector(".lil-btn");
form.elements.number.setAttribute("disabled", "true");

btnGive.addEventListener('click', clickonBtnGive);
form.addEventListener('submit', submitHandler);
modalOpen.addEventListener("click", clickOnModalOpen);

let number;

function clickonBtnGive() {
    number = Math.floor(Math.random()* (0 - max) + max);
    numberInPage.textContent = `The number is: ${number}`;
    form.elements.number.removeAttribute("disabled");
    btnGive.setAttribute("disabled", "true");
};

function submitHandler(e) {
    e.preventDefault();
    const numberToCheck = numbers.find((el) => el.number === number);
    let answer = form.elements.number.value.toLowerCase()
    if(answer === numberToCheck.inFrench) {
        alert(`you are ogurechik! The ${numberToCheck.number} is ${numberToCheck.inFrench}`);
    } else {
        alert(`you are kakashka ^-^ The ${numberToCheck.number} is ${numberToCheck.inFrench}`);
    }
    form.reset();
    numberInPage.textContent = "The number is:";
    btnGive.removeAttribute("disabled");
    form.elements.number.setAttribute("disabled", "true");
};


function clickOnModalOpen() {
    showModal()
};

function showModal() {
    const instance = basicLightbox.create(`${markup}`, 
    {
        onShow: (instance) => {
            window.addEventListener('keydown', onModalClose);
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', onModalClose);
        },
    },);
    
    instance.show();
    
    function onModalClose(e) {
        if(e.code === 'Escape') {
            instance.close()
        };
    };
};

