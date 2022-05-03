// criando um novo objeto, contendo o tipo, os dados
// e as opções que o gráfico terá.
// O objeto data possui os valores dispostos no gráfico

var data = {
    // Legendas das Barras
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
        // Legenda geral
        label: 'Horas em operação',
        // Dados a serem inseridos nas barras
        data: [480, 520, 650, 680, 620],
        // Define as cores de preenchimento das barras
        // de acordo com sua posição no vetor
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        // Define as cores de preenchimento das bordas das barras
        // de acordo com sua posição no vetor
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
         ],
         // Define a espessura da borda dos retângulos
         borderWidth: 1
    }]
}


// Customização que define onde irá começar a ser erguida a barra
// começando pelo ZERO, no eixo X.
options = {
	legend: {display: false},
    title: {
      display: true,
      text: "Horas operacionais por mês"
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
   
}

let ctx = document.getElementById('myChart');
let myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});







