/* Crie um cronômetro que seja executado por um botão, conte 10 segundos, e no fim imprima um texto: 'Seu tempo acabou!! Tente novamente!!'. */



function DezSegundos(){
    alert("Seu tempo acabou!! Tente novamente!!");
}
setTimeout(DezSegundos, 1000*10);



function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
  }
  
  function returnData(input) {
    return input >= 10 ? input : `0${input}`
  }