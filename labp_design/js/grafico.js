var data = {
    // Legendas das Barras
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], //meses
    datasets: [{
        // Legenda geral
        label: 'Horas em operação',
        // Dados a serem inseridos nas barras - No caso, as horas de consumo
        data: [480, 520, 650, 680, 620],
        // Define as cores de preenchimento das barras
        // de acordo com sua posição no vetor
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
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

options = {
	legend: {display: false},
    title: {
	      display: true,
	      text: "Horas operacionais por mês",
	      position: 'top',
	      fontSize: 16,
	      fontColor: '#111',
	      padding: 20
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    tooltips: {
         enabled: true
    },
    hover: {
        animationDuration: 2
    },
    animation: {
        duration: 1,
        onComplete: function () {
            var chartInstance = this.chart,
                ctx = chartInstance.ctx;
                ctx.textAlign = 'center';
                ctx.fillStyle = "rgba(0, 0, 0, 1)";
                ctx.textBaseline = 'bottom';
                    // Loop through each data in the datasets
                this.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function (bar, index) {
                        var data = dataset.data[index];
                        ctx.fillText(data, bar._model.x, bar._model.y - 5);
                    });
            	});
        }
    }
   
}

//GRAFICO DE PIZZA 1

var data2 = {
    datasets: [{
        // Dados a serem inseridos nas barras - No caso, as horas de consumo
        data: [480, 520, 650],
        // Define as cores de preenchimento das barras
        // de acordo com sua posição no vetor
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)']
       
    }],
    labels: ['EV-00001','EV-00002','EV-00003']
};


// Customização que define onde irá começar a ser erguida a barra
// começando pelo ZERO, no eixo X.
options2 = {
    title: {
      display: true,
      text: "Proporção de EV´s atendidas pela unidade",
      position: 'top',
      fontSize: 16,
      fontColor: '#111',
      padding: 20
    },
    legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
    cutoutPercentage: 40,
    tooltips: {
         enabled: true
    },
    hover: {
        animationDuration: 2
    },
    animation: {
        duration: 1
    }
   
}


//GRAFICO DE PIZZA - PROPORÇÃO DE TEMPO OPERACIONAL, DISPONIVEL E EM MANUTENÇÃO


var ctx0 = document.getElementById('chartJSContainer0').getContext('2d');
new Chart(ctx0, {
    type: 'bar',
    data: data,
    options: options}
);

var ctx1 = document.getElementById('chartJSContainer1').getContext('2d');

new Chart(ctx1, {
    type: 'doughnut',
    data: data2,
    options: options2
	}
);

var ctx2 = document.getElementById('chartJSContainer2').getContext('2d');
var myChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Diponível', 'Operacional', 'Em manutenção'],
        datasets: [{
            data: [92, 780, 44],
            backgroundColor: ['#e91e6e', 'rgb(54, 162, 235)', '#ff5722'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Operacionalidade das unidades',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: true
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function(value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                }
            }
        }
    }
});    
