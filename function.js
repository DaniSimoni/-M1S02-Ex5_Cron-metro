/* Crie um cronômetro que seja executado por um botão, conte 10 segundos, e no fim imprima um texto: 'Seu tempo acabou!! Tente novamente!!'. */

const button = document.getElementById('myBtn');
const form = document.getElementById('form');

 function DezSegundos() {

        alert("Seu tempo acabou!! Tente novamente!!");
    }
 


button.addEventListener('click', function(event) {
    event.preventDefault();
    setTimeout(DezSegundos, 1000*10);
});



