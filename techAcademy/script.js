/* function entrar() {
   document.getElementsByClassName('list-group-item')[0].style.background = "yellow"

} */

function entrar() {
    var elementosOcultos = document.querySelectorAll('.telaOculta');

    elementosOcultos.forEach(function (elemento) {
        elemento.style.display = 'block';
    });
}

function sair() {
    var elementosOcultos = document.querySelectorAll('.telaOculta');

    elementosOcultos.forEach(function (elemento) {
        elemento.style.display = 'none';
    });
}

