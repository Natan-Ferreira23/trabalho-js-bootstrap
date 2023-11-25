function mudaCor() {
    var radioMasculino = document.getElementById('masculino');
    var radioFeminino = document.getElementById('feminino');
    var radioOutro = document.getElementById('outro');
    var img = document.getElementById('img');
    var resp = document.getElementById('resposta');
    var body = document.body;
    if (radioMasculino.checked) {
        body.style.backgroundColor = '#2174d4';
        img.src = 'img/homem.png';
    } else if (radioFeminino.checked) {
        body.style.backgroundColor = 'pink';
        img.src = 'img/mulher.png';
    }
    else if (radioOutro.checked) {
        body.style.backgroundColor = 'white';
        img.src = 'img/sinal-de-interrogacao.png';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('formulario');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        var nome = document.getElementById('nome');
        var sobrenome = document.getElementById('sobrenome');
        var resp = document.getElementById('resposta');
        var nasc = parseInt(document.getElementById('nascimento').value);
        var data = new Date();
        var ano = data.getFullYear();
        var idade = ano - nasc;
        var salario = parseInt(document.getElementById('salario').value);
        var cor = document.getElementById('form');
        resp.innerHTML = `Seu nome é ${nome.value} ${sobrenome.value} e sua idade é ${idade}`;
        if (salario > 1500) {
            cor.style.backgroundColor = '#009b94';
        }
        else {
            cor.style.backgroundColor = '#ff9ea2';
        }
    })
})
function mostrar(idDaImagem) {
    var checkbox = document.getElementById(idDaImagem);
    if (checkbox) {
        checkbox.classList.toggle('d-none', !checkbox.classList.contains('d-none'));
    }
}