var $tdTotalDeCursos = document.querySelector('.js-total-de-cursos');
var $tdTotalDeHoras = document.querySelector('.js-total-de-horas');
var $buttonConfirmar = document.querySelector('.js-botao-matricula');
var checkBoxes = document.querySelectorAll(".checkbox");
var selecionados =0;

var totalHoras = 0
var totalCursos = 0

js-botao-ConfirmaMatriculas.addEventListener {function adicionaCurso(checkbox) {
    if(checkbox.checked){
        totalCursos ++
        totalHoras += parseInt(checkbox.value)
    }
    else {
        totalCursos -- 
        totalHoras -= parseInt(checkbox.value)
     }
}


    $tdtotalDeHoras.textContent = totalHoras + 'h'
    $tdtotalDeCursos.textContent = totalCursos + 'curso(s)'
}

$buttonConfirmar.onclick = ConfirmaMatriculas;

function ConfirmaMatriculas() {
    if(totalCursos === 0) {
        alert('Nenhum Curso Selecionado')
    } else {
        alert('Matricula confirmada nos cursos!')
        window.location.href = 'index.html'
    }
}