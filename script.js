const mainProduct = document.querySelector('.main-type');
const dopTwoYear = document.querySelector('.dop20_i');
const dopThreeYear = document.querySelector('.dop30_i');
const dopFourthYear = document.querySelector('.dop40_i');
const extraZamena = document.querySelector('.extraZ_i');
const moyoZashchita = document.querySelector('.moyoZ_i');
const screenS = document.querySelector('.screen_i');

dopTwoYear.value = 20;
dopThreeYear.value = 30;
dopFourthYear.value = 40;
extraZamena.value = 20;
moyoZashchita.value = 30;
screenS.value = 20;

if(localStorage.getItem('mainPrice')){
    mainProduct.value = localStorage.getItem('mainPrice');
}
if(localStorage.getItem('dop20_i')){
    dopTwoYear.value = localStorage.getItem('dop20_i');
}
if(localStorage.getItem('dop30_i')){
    dopThreeYear.value = localStorage.getItem('dop30_i');
}
if(localStorage.getItem('dop40_i')){
    dopFourthYear.value = localStorage.getItem('dop40_i');
}
if(localStorage.getItem('screen_i')){
    screenS.value = localStorage.getItem('screen_i');
}
if(localStorage.getItem('extraZ_i')){
    extraZamena.value = localStorage.getItem('extraZ_i');
}
if(localStorage.getItem('moyoZ_i')){
    moyoZashchita.value = localStorage.getItem('moyoZ_i');
}

function generate(){
    if(mainProduct.value <= 0 ){
        mainProduct.value = '';
        document.querySelector('.dop20').innerHTML = '';
        localStorage.removeItem('mainPrice');
    } else {
        localStorage.setItem('mainPrice', mainProduct.value);
        document.querySelector('.dop20').innerHTML = Math.round(mainProduct.value*dopTwoYear.value/100);
        document.querySelector('.dop30').innerHTML = Math.round(mainProduct.value*dopThreeYear.value/100);
        document.querySelector('.dop40').innerHTML = Math.round(mainProduct.value*dopFourthYear.value/100);
        document.querySelector('.extraZ').innerHTML = Math.round(mainProduct.value*extraZamena.value/100);
        document.querySelector('.moyoZ').innerHTML = Math.round(mainProduct.value*moyoZashchita.value/100);
        document.querySelector('.screen').innerHTML = Math.round(mainProduct.value*screenS.value/100);
        document.querySelector('.sum_dop20').innerHTML = parseInt(mainProduct.value)+parseInt(document.querySelector('.dop20').innerHTML);
        document.querySelector('.sum_dop30').innerHTML = parseInt(mainProduct.value)+parseInt(document.querySelector('.dop30').innerHTML);
        document.querySelector('.sum_dop40').innerHTML = parseInt(mainProduct.value)+parseInt(document.querySelector('.dop40').innerHTML);
        document.querySelector('.sum_extraZ').innerHTML = parseInt(mainProduct.value)+parseInt(document.querySelector('.extraZ').innerHTML);
        document.querySelector('.sum_moyoZ').innerHTML = parseInt(mainProduct.value)+parseInt(document.querySelector('.moyoZ').innerHTML);
        document.querySelector('.sum_screen').innerHTML = parseInt(mainProduct.value)+parseInt(document.querySelector('.screen').innerHTML);
    }
}

function changePer(e, p) {
    if(e.value <= 0 || e.value === ''){
        e.value = '';
        p.innerHTML = ''
        localStorage.removeItem(e.className);
    } else if(e.value >= 100) {
        e.value = 100;
        localStorage.setItem(e.className, e.value);
        p.innerHTML = Math.round(mainProduct.value*e.value/100);
    } else {
        localStorage.setItem(e.className, e.value);
        p.innerHTML = Math.round(mainProduct.value*e.value/100);
    }
    console.log(e.className)
}

generate();

mainProduct.oninput = () => generate();

dopTwoYear.oninput = () => changePer(dopTwoYear, document.querySelector('.dop20'));
dopThreeYear.oninput = () => changePer(dopThreeYear, document.querySelector('.dop30'));
dopFourthYear.oninput = () => changePer(dopFourthYear, document.querySelector('.dop40'));
extraZamena.oninput = () => changePer(extraZamena, document.querySelector('.extraZ'));
moyoZashchita.oninput = () => changePer(moyoZashchita, document.querySelector('.moyoZ'));
screenS.oninput = () => changePer(screenS, document.querySelector('.screen'));
