function Newton_Raphson(f,x0,M,C,k){
	for (var i = 0; i < 200; i++) {
		df = (f(x0+0.000001,M,C,k) - f(x0-0.000001,M,C,k))/0.000002;
		x = x0 - f(x0,M,C,k)/df;
		erro = Math.abs((x - x0)/x0);
		if(erro<=0.0001){
			break;
		}
		x0 = x;
	}
	return x0;
}

function fun(x0,M,C,k){
	y = M/C -k**x0;
	return y
}

function juros(){
	var cap = parseFloat(document.getElementById("capital").value);
	var mon = parseFloat(document.getElementById("mont").value);
	var t = parseFloat(document.getElementById("tempo").value);
	var juros = parseFloat(document.getElementById("taxa").value);
	var k;
	var kk;
	/*if(Number.isNaN(mon) & Number.isNaN(cap) & Number.isNaN(t) & Number.isNaN(juros)){
		alert("Comi 3")
	}else if((Number.isNaN(mon) && Number.isNaN(cap) && Number.isNaN(t)) || 
		(Number.isNaN(mon) && Number.isNaN(cap) && Number.isNaN(juros)) || 
		(Number.isNaN(mon) && Number.isNaN(t) && Number.isNaN(juros)) ||
		(Number.isNaN(t) && Number.isNaN(cap) && Number.isNaN(juros))){
		alert("Comi")
	}else{*/
	if(Number.isNaN(mon) && Number.isNaN(cap)==false){
		mon = cap*(1 + juros*0.01)**t;
		document.querySelector(".ack").innerHTML = "Montante gerado: " + mon.toFixed(2) 
	}
	else if(Number.isNaN(cap)){
		cap = mon/(1 + juros*0.01)**t;
		document.querySelector(".ack").innerHTML = "Capital inicial necessário: " + cap.toFixed(2) 
	}
	else if(Number.isNaN(t)){
		t = Math.log(mon/cap)/Math.log(1 + juros*0.01); 
		document.querySelector(".ack").innerHTML = "Tempo necessário de investimento: " + t.toFixed(1); 
	}
	else if(Number.isNaN(juros)){
		k = (mon/cap)**(1/t) - 1
		juros = 100*k
		document.querySelector(".ack").innerHTML = "Taxa de juros: " + juros.toFixed(2) + "%"; 
	}
	else{
		mon = cap*(1 + juros*0.01)**t;
		document.querySelector(".ack").innerHTML = "Montante gerado: " + mon.toFixed(2); 
	}

	var cria_divg = document.createElement('canvas');
    cria_divg.id = "chart_rea";
    
    cria_divg.classList.add("text-center");
    cria_divg.classList.add("justify-content-center");
    document.querySelector('.grafico').appendChild(cria_divg);
    var ctx = document.getElementById('chart_rea').getContext('2d');
    var li = [];
    contador = 0
    while (contador<t) {
        var obj = {};
        obj['y'] = cap*(1 + juros*0.01)**contador;
        obj['x'] = contador;
        contador += 0.1;
        li.push(obj)
    }
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: 
            {
                datasets: [
                    {
                        label: 'Montante em função do tempo',
                        data: li,
                        backgroundColor: '#3366ff',
                        pointRadius: 3,
                    },
                ]
            },

                options: {
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    scales: {
                        yAxes: [{
                            type: 'linear',
                            scaleLabel: {
                                display: true,
                                labelString: "Montante"
                            }, 
                        }],

                        xAxes: [{
                            type: 'linear',
                            scaleLabel: {
                                display: true,
                                labelString: "Tempo"
                            },
                        }],
                    }
                }
            });    

}
	

	

