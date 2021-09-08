function loadpk(){
	d0 =  document.getElementById("d0").value;
	df =  document.getElementById("df").value;
	k = document.getElementById('indice').value;
	var kk
	var url;

	if(k==0){
		url = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.16121/dados?formato=json&dataInicial="+d0+"&dataFinal="+df;
		kk = "IPCA";
	}else if(k==1){
		url = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados?formato=json&dataInicial="+d0+"&dataFinal="+df;
		kk = "valor do Dólar"
	}else if(k==2){
		url="https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json&dataInicial="+d0+"&dataFinal="+df;
		kk = "SELIC";
	}else if(k==3){
		url="https://api.bcb.gov.br/dados/serie/bcdata.sgs.4152/dados?formato=json&dataInicial="+d0+"&dataFinal="+df;
		kk = "dívida pública";
	}else if(k==4){
		url="https://api.bcb.gov.br/dados/serie/bcdata.sgs.4393/dados?formato=json&dataInicial="+d0+"&dataFinal="+df;
		kk = "índice de confiança do consumidor";
	}else{
		url = "None"
	}
	console.log(url)
	fetch(url)
		.then((response)=>{
			return response.json();
		})
		.then((data)=>{
			
			for(var i=0;i<data.length;i++){
				console.log(i+" "+data[i]['valor'])
			}
			document.querySelector('.grafico').remove();
			var cria_divg = document.createElement('canvas');
		    cria_divg.id = "chart_rea";
		    
		    cria_divg.classList.add("text-center");
		    cria_divg.classList.add("justify-content-center");

		    gr = document.createElement('div');
		    gr.classList.add("grafico");
		    gr.classList.add("col-lg-12");
		    gr.classList.add("form-group");
		    gr.classList.add("col-md-12");
		    gr.classList.add("col-sm-12");
		    gr.classList.add("text-center");
		    gr.classList.add("justify-content-center");
		    document.querySelector('.zap').appendChild(gr);

		    document.querySelector('.grafico').appendChild(cria_divg);
		    var ctx = document.getElementById('chart_rea').getContext('2d');
		    var li = [];
		    for(var i=0;i<data.length;i++){
		        var obj = {};
		        obj['y'] = data[i]['valor'];
		        obj['x'] = i;
		        li.push(obj)
		    }
		    var chart = new Chart(ctx, {
		        type: 'scatter',
		        data: 
		            {
		                datasets: [
		                    {
		                        label: 'Perfil do '+kk+' em função do tempo',
		                        data: li,
		                        backgroundColor: '#3366ff',
		                        pointRadius: 3.6,
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
		                                labelString: kk
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
		});

		

		
	//console.clear();
	
}

//document.getElementById("btn1").onclick = loadpk