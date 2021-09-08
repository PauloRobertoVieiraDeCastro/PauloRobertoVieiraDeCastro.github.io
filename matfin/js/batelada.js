

//reagente
var ent_rea_bat = document.querySelector("#addreabat");
cont = 0;
//console.log(cont)
ent_rea_bat.addEventListener("click", function(event) {
    event.preventDefault();//evita que faça o padrão, q é apagar ao recarregar a página em form

    var diverg = document.createElement("div");
    diverg.classList.add("row");
    diverg.classList.add("text-center");
 
	var ordem_bat = document.createElement("input");
	ordem_bat.classList.add("form-control");
	ordem_bat.classList.add("mx-2");
	ordem_bat.classList.add("tamanho_e");
	ordem_bat.style = "margin-top:20px; text-align:center;"	
	ordem_bat.placeholder = "Ordem";
	ordem_bat.id = "a"+cont+"a";

	var elemento_rea_bat = document.createElement("input");
	elemento_rea_bat.classList.add("form-control");
	elemento_rea_bat.classList.add("mx-2");
	elemento_rea_bat.classList.add("tamanho_e");
	elemento_rea_bat.style = "margin-top:20px; text-align:center;"
	elemento_rea_bat.placeholder = "Substância";
	elemento_rea_bat.id = "a"+(cont + 50)+"a";	


	var conc_rea_bat= document.createElement("input");
	conc_rea_bat.classList.add("form-control");
	conc_rea_bat.classList.add("mx-2");
	conc_rea_bat.classList.add("tamanho_e");
	conc_rea_bat.style = "margin-top:20px; text-align:center;"
	conc_rea_bat.placeholder = "C(mol/L)";
	conc_rea_bat.id = "a"+(cont + 100)+"a";	

	var esteq_rea_bat = document.createElement("input");
	esteq_rea_bat.classList.add("form-control");
	esteq_rea_bat.classList.add("mx-2");
	esteq_rea_bat.classList.add("tamanho_e");
	esteq_rea_bat.style = "margin-top:20px; text-align:center;";
	esteq_rea_bat.placeholder = "Estequiometria";
	esteq_rea_bat.id = "a"+(cont + 150)+"a";	
	
	cont += 1
	diverg.classList.add("r"+cont+"r");
	var mae = document.querySelector(".entradas_rea_bat");
	diverg.appendChild(ordem_bat);
	diverg.appendChild(elemento_rea_bat)
	diverg.appendChild(conc_rea_bat);
	diverg.appendChild(esteq_rea_bat)
	mae.appendChild(diverg)
	
});	

//produto

var ent_prod_bat = document.querySelector("#addprodbat");
cont_prod = 0;
//console.log(cont)
ent_prod_bat.addEventListener("click", function(event) {
    event.preventDefault();//evita que faça o padrão, q é apagar ao recarregar a página em form
    
    var divergp = document.createElement("div");
    divergp.classList.add("row");
    divergp.classList.add("text-center");

	var elemento_prod_bat = document.createElement("input");
	elemento_prod_bat.classList.add("form-control");
	elemento_prod_bat.classList.add("mx-2");
	elemento_prod_bat.classList.add("tamanho_f");
	elemento_prod_bat.style = "margin-top:20px; text-align:center;";
	elemento_prod_bat.placeholder = "Substância";
	elemento_prod_bat.id = "a"+(cont_prod + 200)+"a";

	var conc_prod_bat= document.createElement("input");
	conc_prod_bat.classList.add("form-control");
	conc_prod_bat.classList.add("mx-2");
	conc_prod_bat.classList.add("tamanho_f")
	conc_prod_bat.style = "margin-top:20px; text-align:center;";
	conc_prod_bat.placeholder = "C(mol/L)";
	conc_prod_bat.id = "a"+(cont_prod + 250)+"a";

	var esteq_prod_bat = document.createElement("input");
	esteq_prod_bat.classList.add("form-control");
	esteq_prod_bat.classList.add("mx-2");
	esteq_prod_bat.classList.add("tamanho_f");
	esteq_prod_bat.style = "margin-top:20px; text-align:center;";
	esteq_prod_bat.placeholder = "Estequiometria";
	esteq_prod_bat.id = "a"+(cont_prod + 300)+"a";

	cont_prod += 1
	divergp.classList.add("p"+cont_prod+"p");
	var pai = document.querySelector(".entradas_prod_bat");
	divergp.appendChild(elemento_prod_bat)
	divergp.appendChild(conc_prod_bat);
	divergp.appendChild(esteq_prod_bat)
	pai.appendChild(divergp)
	
});	

var botaoRemoverBatRea = document.querySelector("#remreabat");
botaoRemoverBatRea.addEventListener("click", function(event) {
    event.preventDefault();//evita que faça o padrão, q é apagar ao recarregar a página em form
    if(cont>=1){
    	document.querySelector(".r"+cont+"r").remove()
    	cont -= 1;
    }
});	

var botaoRemoverBatProd = document.querySelector("#remprodbat");
botaoRemoverBatProd.addEventListener("click", function(event) {
    event.preventDefault();//evita que faça o padrão, q é apagar ao recarregar a página em form
    if(cont_prod>=1){
    	document.querySelector(".p"+cont_prod+"p").remove()
    	//document.querySelectorAll(".2r")[document.querySelectorAll(".2r").length-1].remove() //removo o último elemento
    	cont_prod -= 1;
    }
});	


/*-----------------------------------------------------------------------------------------------------------------*/
/*-------------------------efetuação de cálculos------------------------------------------------------------------*/
function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
        if (a[i] < a[lowest]) lowest = i;
    }
    return lowest;
}

function integrate (f, start, end, step, a1, a2, a3, a4, a5) {
    let total = 0
    step = step || 0.001
    for (let x = start; x < end; x += step) {
        total += f(x + step / 2, a1, a2, a3, a4, a5) * step
    }
    return total
}


function calculoBatelada(){
    var X = parseFloat(document.getElementById("conversao").value*0.01);
    var k = parseFloat(document.getElementById("k_rea").value);
    var FreagB = [];
    var FprodB = [];
    var creagB = [];
    var limitanteB = [];
    var esteqB = [];
    var esteqprodB =[];
    var ordem_reaB = [];
    var subst_reaB = [];
    var subst_prodB = [];
    if (isNaN(X) || isNaN(k)){
       return alert("Nem todos os campos foram preenchidos.");
    }else{
        for(var i=0;i<cont;i++){
            esteqB.push(parseInt(document.querySelector("#a"+(i+150)+"a").value));//estequiometria reagentes
            creagB.push(parseFloat(document.querySelector("#a"+(i+100)+"a").value));
            ordem_reaB.push(parseFloat(document.querySelector("#a"+(i)+"a").value));
            subst_reaB.push(document.querySelector("#a"+(i+50)+"a").value);
        }
        for(var i=0;i<creagB.length;i++){
            FreagB.push(creagB[i]);
            limitanteB.push(FreagB[i]/esteqB[i]);
        }
        var j = indexOfSmallest(limitanteB);//indice do limitante
        cprodB = [];
        /*------------------------------produtos-----------------------------------------------------------*/
        /*-------------------------------------------------------------------------------------------------*/
        for(var i = 0; i<cont_prod;i++){
            esteqprodB.push(-1*parseInt(document.querySelector("#a"+(i+300)+"a").value));//estequiometria produtos
            cprodB.push(parseFloat(document.querySelector("#a"+(i+250)+"a").value));
            subst_prodB.push(document.querySelector("#a"+(i+200)+"a").value);
        }
        for(var i=0;i<cprodB.length;i++){
            FprodB.push(cprodB[i]);
        }
        var CreagfB = [];
        for(var i = 0; i<FreagB.length; i++){
            CreagfB.push(creagB[j]*((FreagB[i]/FreagB[j]) - esteqB[i]/esteqB[j]*X));
        }
            
        var CprodfB = [];
        for(var i = 0; i<FprodB.length; i++){
            CprodfB.push(creagB[j]*((FprodB[i]/FreagB[j]) - esteqprodB[i]/esteqB[j]*X));
        }
        var produtoB = 1;
        for(var i=0;i<ordem_reaB.length;i++){
            produtoB *= Math.pow(CreagfB[i],ordem_reaB[i]); 
        }
        
        vv_rB = k*produtoB;

        function integralfunc(x,j,creag,esteq,con_rea,k){
            proc = 1
            for(var i=0; i<esteq.length;i++){
                proc *=  Math.pow(((creag[i]/creag[j]) - (esteq[i]/esteq[j])*x),con_rea[i]);
            }
            t = (1/k)*creag[j]/proc;
            return t
        }
        I = integrate(integralfunc,0,X,0.00001,j,FreagB,esteqB,ordem_reaB,k);
        document.querySelector("#time_bat").innerHTML = I.toFixed(3); 

        /*--------------------------PERFIL DA CONVERSÃO TEMPORAL----------------------------------------------------*/
        CONV = [];
        contador = 1;
        tempo = [];
        while(contador<=99){
            CONV.push(contador);
            tempo.push(integrate(integralfunc,0,contador/100,0.00001,j,FreagB,esteqB,ordem_reaB,k));
            contador += 1;
        }
        var cria_divg = document.createElement('canvas');
        cria_divg.id = "chart_rea";
        document.querySelector('#grafico_bat').appendChild(cria_divg);
        var ctx = document.getElementById('chart_rea').getContext('2d');
        var li = [];
        for (let i = 0; i < CONV.length; i++) {
            var obj = {};
            obj['x'] = tempo[i];
            obj['y'] = CONV[i];
            li.push(obj)
        }
                var chart = new Chart(ctx, {
                    type: 'scatter',
                    data: 
                    {
                        datasets: [
                            {
                                label: 'Pontos de conversão por tempo',
                                data: li,
                                backgroundColor: '#3366ff',
                                pointRadius: 4,
                            },
                        ]
                    },

                    options: {
                        tooltips: {
                          mode: 'index',
                          intersect: false,
                        },
                        scales: {
                            xAxes: [{
                                type: 'linear',
                                scaleLabel: {
                                    display: true,
                                    labelString: "Tempo (SI)"
                                }, 
                            }],

                            yAxes: [{
                                type: 'linear',
                                scaleLabel: {
                                    display: true,
                                    labelString: "Conversão (%)"
                                },
                            }],
                        }
                    }
                });

        /*--------------------------------CONCENTRAÇÃO DE SAÍDA-----------------------------------------*/
        if(document.getElementById('conc_bata')===null){
            /*chequei se era nulo e crio a saída*/
            for(var i=0;i<CreagfB.length;i++){
	        	var conc_bat_final = document.createElement('h5');
	        	conc_bat_final.id = "conc_bata";
	        	document.querySelector('#conc_bat').appendChild(conc_bat_final);
	        	var cria_div_rea = document.createElement('h5');
	            cria_div_rea.classList.add("form-group");
	            cria_div_rea.classList.add("row"); 
	            cria_div_rea.classList.add("text-center"); 
	            cria_div_rea.classList.add("justify-content-center");
	            cria_div_rea.classList.add("my-1");
	            cria_div_rea.id = "rea"+i+"bat"
	            document.querySelector('#conc_bata').appendChild(cria_div_rea);
	        	document.querySelector("#rea"+i+"bat").innerHTML = subst_reaB[i] + " : " + CreagfB[i].toFixed(3) + " mol/L" 
        	}
        }else{
            document.getElementById('conc_bata').remove();
            /**/
            for(var i=0;i<CreagfB.length;i++){
	        	var conc_bat_final = document.createElement('h5');
	        	conc_bat_final.id = "conc_bata";

	        	document.querySelector('#conc_bat').appendChild(conc_bat_final);
	        	var cria_div_rea = document.createElement('h5');
	            cria_div_rea.classList.add("form-group");
	            cria_div_rea.classList.add("row"); 
	            cria_div_rea.classList.add("text-center"); 
	            cria_div_rea.classList.add("justify-content-center");
	            cria_div_rea.classList.add("my-1");
	            cria_div_rea.id = "rea"+i+"bat"
	            document.querySelector('#conc_bata').appendChild(cria_div_rea);
	        	document.querySelector("#rea"+i+"bat").innerHTML = subst_reaB[i] + " : " + CreagfB[i].toFixed(3) + " mol/L" 
	        }
        } 
        
        	/*---------------produtos--------------------------------------------------------*/
        if(document.getElementById('conc_bata_fim')===null){
            /*chequei se era nulo e crio a saída*/
            for(var i=0;i<CprodfB.length;i++){
            	var conc_bat_finalp = document.createElement('h5');
	        	conc_bat_finalp.id = "conc_bata_fim";

	        	document.querySelector('#conc_bat_prod').appendChild(conc_bat_finalp);
	        	var cria_div_p = document.createElement('h5');
	            cria_div_p.classList.add("form-group");
	            cria_div_p.classList.add("row"); 
	            cria_div_p.classList.add("text-center"); 
	            cria_div_p.classList.add("justify-content-center");
	            cria_div_p.classList.add("my-1");
	            cria_div_p.id = "prod"+i+"bat"
	            document.querySelector('#conc_bata_fim').appendChild(cria_div_p);
	        	document.querySelector("#prod"+i+"bat").innerHTML = subst_prodB[i] + " : " + CprodfB[i].toFixed(3) + " mol/L"
	        } 
        }else{
            document.getElementById('conc_bata_fim').remove();
            /**/
            for(var i=0;i<CprodfB.length;i++){
            	var conc_bat_finalp = document.createElement('h5');
	        	conc_bat_finalp.id = "conc_bata_fim";

	        	document.querySelector('#conc_bat_prod').appendChild(conc_bat_finalp);
	        	var cria_div_p = document.createElement('h5');
	            cria_div_p.classList.add("form-group");
	            cria_div_p.classList.add("row"); 
	            cria_div_p.classList.add("text-center"); 
	            cria_div_p.classList.add("justify-content-center");
	            cria_div_p.classList.add("my-1");
	            cria_div_p.id = "prod"+i+"bat"
	            document.querySelector('#conc_bata_fim').appendChild(cria_div_p);
	        	document.querySelector("#prod"+i+"bat").innerHTML = subst_prodB[i] + " : " + CprodfB[i].toFixed(3) + " mol/L"
	        } 
        } 
      
    }
}
