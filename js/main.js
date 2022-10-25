let button = document.getElementById('btn');
let menuCont = document.getElementById('menuContainer');
let menuLi = document.getElementsByClassName('menuItem');
let horarios = document.getElementsByClassName('sectionHorarios');
let btnHorarios = document.getElementsByClassName('divCurso');
let face = document.getElementById('face');

button.onclick = function a(){
    menuCont.classList.toggle('ver');
}

face.onclick = function face() {
    location.href = 'https://m.facebook.com/profile.php?id=100063573459433'
}


function expa(){
    horarios[0].classList.toggle('expand');
}

menuLi[0].onclick = function b(){
    location.href = 'staff.html'
}

menuLi[1].onclick = function c(){
    location.href = 'materias.html'
    
}

menuLi[2].onclick = function d(){
    location.href = 'ubicacion.html';
}

menuLi[3].onclick = function e(){
    location.href = 'index.html';
}

