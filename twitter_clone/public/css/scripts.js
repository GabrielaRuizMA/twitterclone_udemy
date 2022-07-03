function changeMode() {
    changeClasses();
    changeText();
    }

function changeClasses() {
    button.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    menuInicial.classList.toggle(darkModeClass);
    menuPerfil.classList.toggle(darkModeClass);
    menuQuemSeguir.classList.toggle(darkModeClass);
    paginacao.classList.toggle(darkModeClass);
    menuTweet.classList.toggle(darkModeClass);

}

function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(button.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        return;
    }

    button.innerHTML = darkMode;
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName("body")[0];
const menuInicial = document.getElementById('menuInicial');
const menuTweet = document.getElementById('menuTweet');
const menuPerfil = document.getElementById('menuPerfil');
const paginacao = document.getElementsByTagName('li')[0];
const menuQuemSeguir = document.getElementById('menuQuemSeguir');

button.addEventListener('click', changeMode);