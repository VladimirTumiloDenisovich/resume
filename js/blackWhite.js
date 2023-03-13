


const body = document.querySelector('body');
const hamburger = document.querySelector('.dropbtn');
const hamburgerMenu = document.querySelector('.dropdown-content');
const themeBTN = document.querySelector('.btn-theme');
const languageBTN = document.querySelector('.btn-language');
const content = document.querySelector('.content');
const photo = document.querySelector('#photo');
const themeIcon = document.querySelectorAll('.icon');
const icon1 = themeIcon[0];
const icon2 = themeIcon[1];
const icon3 = themeIcon[2];


let isBlack = false;
//Темная тема
function blackTheme () {
    isBlack = true;
        body.classList.add('black');
        hamburger.classList.add('black');
        hamburgerMenu.classList.add('black');
        themeBTN.classList.add('black');
        languageBTN.classList.add('black');
        content.classList.add('black');
        photo.classList.add('black');
        icon1.classList.add('black');
        icon2.classList.add('black');
        icon3.classList.add('black');

        body.classList.remove('white');
        hamburger.classList.remove('white');
        hamburgerMenu.classList.remove('white');
        themeBTN.classList.remove('white');
        languageBTN.classList.remove('white');
        content.classList.remove('white');
        photo.classList.remove('white');
        icon1.classList.remove('white');
        icon2.classList.remove('white');
        icon3.classList.remove('white');

        themeBTN.textContent = 'Светлая тема';
};

//Светлая тема
function whiteTheme () {
        isBlack = false;
        body.classList.remove('black');
        hamburger.classList.remove('black');
        hamburgerMenu.classList.remove('black');
        themeBTN.classList.remove('black');
        languageBTN.classList.remove('black');
        content.classList.remove('black');
        photo.classList.remove('black');
        icon1.classList.remove('black');
        icon2.classList.remove('black');
        icon3.classList.remove('black');

        body.classList.add('white');
        hamburger.classList.add('white');
        hamburgerMenu.classList.add('white');
        themeBTN.classList.add('white');
        languageBTN.classList.add('white');
        content.classList.add('white');
        photo.classList.add('white');
        icon1.classList.add('white');
        icon2.classList.add('white');
        icon3.classList.add('white');

        themeBTN.textContent = 'Тёмная тема';
};

let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();

themeBTN.addEventListener('click', event => {
    if (isBlack === false) {
        blackTheme()
        document.cookie = "theme=black", expires=" + date";
    } else {
        whiteTheme()
        document.cookie = "theme=white", expires=" + date";
    };
});

function getCookieTheme() {   
    if (getCookie('theme') === 'white') {
            isBlack = false;
            whiteTheme();
        } else if (getCookie('theme') === 'black') {
            isBlack = true;
            blackTheme();
        } else if (getCookie('theme') === undefined) {
            isBlack = false;
            whiteTheme();
        }
    };

getCookieTheme()