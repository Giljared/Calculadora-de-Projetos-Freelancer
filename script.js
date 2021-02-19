var spanHora = document.querySelector(
  ".secao-hora .secao__rodape__valor span"
);

var inputGanhoPorMes = document.querySelector("#ganho-mes");
inputGanhoPorMes.addEventListener("keyup", function retornarGanhoMes() {
  calculaValorHora();
});

var inputHorasPorDia = document.querySelector("#horas-dia");
inputHorasPorDia.addEventListener("keyup", function retornarHorasDia() {
  calculaValorHora();
});

function calculaValorHora() {
  var qtdTotalDeHoras = parseFloat(inputHorasPorDia.value) * 22;

  var valorDeHora = parseFloat(
    inputGanhoPorMes.value / qtdTotalDeHoras
  ).toFixed(2);

  spanHora.textContent = "R$ " + valorDeHora;
}
