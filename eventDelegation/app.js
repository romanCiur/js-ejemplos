const Botones = document.querySelector("#boton");
const color = document.querySelector("#botones");
const fondo = document.querySelector("#fondo");

//funcion IIFE para generar los botones y obtener su valor de su clase
(() => {
    Botones.addEventListener("click", agregarBotones);
    color.addEventListener("click", delegacion);
})();

//obtener el color desde el localstorage

(() => {
    const BG = localStorage.getItem('colorFondo');
    if (color === null) {
        fondo.className = 'inicio';
    } else {
        fondo.className = BG;
    }
})();

function agregarBotones(e) {
    e.preventDefault();
    console.log('diste clic en el boton negro');
    botones.innerHTML = `
 <button class="botonA">ColorA</button>
 <button class="botonB">ColorB</button>
 <button class="botonC">ColorC</button>
 <button class="botonD">ColorD</button>
 <button class="botonE">ColorE</button>`
};

function delegacion(e) {
    e.preventDefault();
    console.log(e.target.classList[0]);
    const btnColor = e.target.classList[0];

    switch (btnColor) {
        case ('botonA'):
            fondo.className = 'CA';
            localStorage.setItem('colorFondo', 'CA')
            break;
        case ('botonB'):
            fondo.className = 'CB';
            localStorage.setItem('colorFondo', 'CB')
            break;
        case ('botonC'):
            fondo.className = 'CC';
            localStorage.setItem('colorFondo', 'CC')
            break;
        case ('botonD'):
            fondo.className = 'CD';
            localStorage.setItem('colorFondo', 'CD')
            break;
        case ('botonE'):
            fondo.className = 'CE';
            localStorage.setItem('colorFondo', 'CE')
            break;
    }
}