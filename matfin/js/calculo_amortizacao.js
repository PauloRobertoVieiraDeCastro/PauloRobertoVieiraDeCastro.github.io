function juros_a(){
	var finan = parseFloat(document.getElementById("finan").value);
	//var prestacao = parseFloat(document.getElementById("prestacao").value);
	var t = parseFloat(document.getElementById("tempo").value);
	var juros = parseFloat(document.getElementById("taxa").value);
    var saldo;
    k = document.getElementById('periodo').value;
    k1 = document.getElementById('juros').value;
	soma = 0;
	if(Number.isNaN(t)==false){
        if(k == k1){
            amort = finan/t;
            saldo =finan;
            document.querySelector(".linha").remove()
            var tbody = document.createElement("tbody");
            tbody.classList.add("linha");
            document.querySelector(".table").appendChild(tbody);
            for(var i=1;i<=t;i++){
                val_mes = saldo*juros*0.01;
                prestacao = val_mes + amort;
                soma += prestacao;
                saldo -= amort;
                var line = document.createElement('tr');
                line.classList.add("tet"+i);
                var linha2a = document.createElement('td');
                linha2a.classList.add("time" + i);
                var linha2b = document.createElement('td');
                linha2b.classList.add("juros" + i);
                var linha2c = document.createElement('td');
                linha2c.classList.add("prestacao" + i);
                var linha2d = document.createElement('td');
                linha2d.classList.add("saldo"+i);


                var line3 = document.querySelector(".linha").appendChild(line);

                line3.appendChild(linha2a)
                line3.appendChild(linha2b)
                line3.appendChild(linha2c)
                line3.appendChild(linha2d)
                document.querySelector(".time" + i).innerHTML = i;
                document.querySelector(".juros" + i).innerHTML = 'R$ '+val_mes.toFixed(2);
                document.querySelector(".prestacao" + i).innerHTML = 'R$ '+prestacao.toFixed(2);
                document.querySelector(".saldo" + i).innerHTML = 'R$ '+saldo.toFixed(2);
                
            }
        }

        if(k == 1 && k1 == 0){
            t1 = 12*t;
            amort = finan/t1;
            saldo = finan;
            document.querySelector(".linha").remove()
            var tbody = document.createElement("tbody");
            tbody.classList.add("linha");
            document.querySelector(".table").appendChild(tbody);
            for(var i=1;i<=t1;i++){
                val_mes = saldo*juros*0.01;
                prestacao = val_mes + amort;
                saldo -= amort;
                soma += prestacao
                var line = document.createElement('tr');
                line.classList.add("tet"+i);
                var linha2a = document.createElement('td');
                linha2a.classList.add("time" + i);
                var linha2b = document.createElement('td');
                linha2b.classList.add("juros" + i);
                var linha2c = document.createElement('td');
                linha2c.classList.add("prestacao" + i);
                var linha2d = document.createElement('td');
                linha2d.classList.add("saldo"+i);


                var line3 = document.querySelector(".linha").appendChild(line);

                line3.appendChild(linha2a)
                line3.appendChild(linha2b)
                line3.appendChild(linha2c)
                line3.appendChild(linha2d)
                document.querySelector(".time" + i).innerHTML = i;
                document.querySelector(".juros" + i).innerHTML = 'R$ '+val_mes.toFixed(2);
                document.querySelector(".prestacao" + i).innerHTML = 'R$ '+prestacao.toFixed(2);
                document.querySelector(".saldo" + i).innerHTML = 'R$ '+saldo.toFixed(2);
                
            }
        }

        if(k == 0 && k1 == 1){
            juros2 = (1+0.01*juros)**(1/12) - 1
            amort = finan/t;
            saldo =finan;
            document.querySelector(".linha").remove()
            var tbody = document.createElement("tbody");
            tbody.classList.add("linha");
            document.querySelector(".table").appendChild(tbody);
            for(var i=1;i<=t;i++){
                val_mes = saldo*juros2;
                prestacao = val_mes + amort;
                soma += prestacao;
                saldo -= amort;
                var line = document.createElement('tr');
                line.classList.add("tet"+i);
                var linha2a = document.createElement('td');
                linha2a.classList.add("time" + i);
                var linha2b = document.createElement('td');
                linha2b.classList.add("juros" + i);
                var linha2c = document.createElement('td');
                linha2c.classList.add("prestacao" + i);
                var linha2d = document.createElement('td');
                linha2d.classList.add("saldo"+i);


                var line3 = document.querySelector(".linha").appendChild(line);

                line3.appendChild(linha2a)
                line3.appendChild(linha2b)
                line3.appendChild(linha2c)
                line3.appendChild(linha2d)
                document.querySelector(".time" + i).innerHTML = i;
                document.querySelector(".juros" + i).innerHTML = 'R$ '+val_mes.toFixed(2);
                document.querySelector(".prestacao" + i).innerHTML = 'R$ '+prestacao.toFixed(2);
                document.querySelector(".saldo" + i).innerHTML = 'R$ '+saldo.toFixed(2);
                
            }
        }
        
		document.querySelector(".ack2").innerHTML = "Total pago no financiamento: R$ " + soma.toFixed(2) 
	}
	

}
	