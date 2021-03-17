function densidade(SG_T,T){
	//metodologia de cálculo baseada na resolução N6-70 de 25/07/1970 do CNP
	SG_20 = SG_T;
	SG_20_n_menos_1 = 0;
	do{
		if(SG_20< 0.579){
			a1 = -2462*Math.pow(10,-6);
			a2 = 3215*Math.pow(10,-6);
			b1 = -10.14*Math.pow(10,-6);
			b2 = 17.38*Math.pow(10,-6);
		}
		if(SG_20>=0.498 && SG_20< 0.518){
			a1 = -2391*Math.pow(10,-6);
			a2 = 3074*Math.pow(10,-6);
			b1 = -8.41*Math.pow(10,-6);
			b2 = 13.98*Math.pow(10,-6);
		}
		if(SG_20>=0.518 && SG_20< 0.539){
			a1 = -2294*Math.pow(10,-6);
			a2 = 2887*Math.pow(10,-6);
			b1 = -8.39*Math.pow(10,-6);
			b2 = 13.87*Math.pow(10,-6);
		}
		if(SG_20>=0.539 && SG_20< 0.559){
			a1 = -2164*Math.pow(10,-6);
			a2 = 2615*Math.pow(10,-6);
			b1 = -5.46*Math.pow(10,-6);
			b2 = 8.55*Math.pow(10,-6);
		}
		if(SG_20>=0.559 && SG_20< 0.579){
			a1 = -1920*Math.pow(10,-6);
			a2 = 2214*Math.pow(10,-6);
			b1 = -5.51*Math.pow(10,-6);
			b2 = 8.55*Math.pow(10,-6);
		}
		if(SG_20>=0.579 && SG_20< 0.6){
			a1 = -2358*Math.pow(10,-6);
			a2 = 2962*Math.pow(10,-6);
			b1 = -12.25*Math.pow(10,-6);
			b2 = 20.15*Math.pow(10,-6);
		}
		if(SG_20>=0.6 && SG_20< 0.615){
			a1 = -1361*Math.pow(10,-6);
			a2 = 1300*Math.pow(10,-6);
			b1 = -0.49*Math.pow(10,-6);
			b2 = 0.6*Math.pow(10,-6);
		}
		if(SG_20>=0.615 && SG_20< 0.635){
			a1 = -1237*Math.pow(10,-6);
			a2 = 1100*Math.pow(10,-6);
			b1 = -0.49*Math.pow(10,-6);
			b2 = 0.6*Math.pow(10,-6);
		}
		if(SG_20>=0.635 && SG_20<0.655){
			a1 = -1077*Math.pow(10,-6);
			a2 = 850*Math.pow(10,-6);
			b1 = -0.49*Math.pow(10,-6);
			b2 = 0.6*Math.pow(10,-6);
		}
		if(SG_20>=0.655 && SG_20<0.675){
			a1 = -1011*Math.pow(10,-6);
			a2 = 750*Math.pow(10,-6);
			b1 = -0.49*Math.pow(10,-6);
			b2 = 0.6*Math.pow(10,-6);
		}
		if(SG_20>=0.675 && SG_20<0.695){
			a1 = -977*Math.pow(10,-6);
			a2 = 700*Math.pow(10,-6);
			b1 = -0.49*Math.pow(10,-6);
			b2 = 0.6*Math.pow(10,-6);
		}
		if(SG_20>=0.695 && SG_20<0.746){
			a1 = -1005*Math.pow(10,-6);
			a2 = 740*Math.pow(10,-6);
			b1 = -0.49*Math.pow(10,-6);
			b2 = 0.6*Math.pow(10,-6);
		}
		if(SG_20>=0.746 && SG_20<0.766){
			a1 = -1238*Math.pow(10,-6);
			a2 = 1050*Math.pow(10,-6);
			b1 = -0.49*Math.pow(10,-6);
			b2 = 0.6*Math.pow(10,-6);
		}
		if(SG_20>=0.766 && SG_20<0.786){
			a1 = -1084*Math.pow(10,-6);
			a2 = 850*Math.pow(10,-6);
			b1 = -0.49*Math.pow(10,-6);
			b2 = 0.6*Math.pow(10,-6);
		}
		if(SG_20>=0.786 && SG_20<0.806){
			a1 = -965*Math.pow(10,-6);
			a2 = 700*Math.pow(10,-6);
			b1 = -0.49*Math.pow(10,-6);
			b2 = 0.6*Math.pow(10,-6);
		}
		if(SG_20>=0.806 && SG_20<0.826){
			a1 = -843.5*Math.pow(10,-6);
			a2 = 550*Math.pow(10,-6);
			b1 = -0.49*Math.pow(10,-6);
			b2 = 0.6*Math.pow(10,-6);
		}
		if(SG_20>=0.826 && SG_20<0.846){
			a1 = -719*Math.pow(10,-6);
			a2 = 400*Math.pow(10,-6);
			b1 = -0.49*Math.pow(10,-6);
			b2 = 0.6*Math.pow(10,-6);
		}
		if(SG_20>=0.846 && SG_20<0.871){
			a1 = -617*Math.pow(10,-6);
			a2 = 280*Math.pow(10,-6);
			b1 = -0.49*Math.pow(10,-6);
			b2 = 0.6*Math.pow(10,-6);
		}
		if(SG_20>=0.871 && SG_20<0.896){
			a1 = -512*Math.pow(10,-6);
			a2 = 160*Math.pow(10,-6);
			b1 = -0.49*Math.pow(10,-6);
			b2 = 0.6*Math.pow(10,-6);
		}
		if(SG_20>=0.896 && SG_20<0.996){
			a1 = -394.8*Math.pow(10,-6);
			a2 = 30*Math.pow(10,-6);
			b1 = -0.49*Math.pow(10,-6);
			b2 = 0.6*Math.pow(10,-6);
		}
		if(SG_20>=0.996){
			a1 = -542.6*Math.pow(10,-6);
			a2 = 177.8*Math.pow(10,-6);
			b1 = 2.31*Math.pow(10,-6);
			b2 = -2.2*Math.pow(10,-6);
		}

		P1a = (9/5)*0.999042*(a1 + 16*b1 - (a2 + 16*b2)*(8*a1 + 64*b1)/(1 + 8*a2 + 64*b2));
		P1 = P1a.toFixed(16);
		P2a = (9/5)*(a2 + 16*b2)/(1 + 8*a2 + 64*b2);
		P2 = P2a.toFixed(16);
		P3a = (81/25)*0.999042*(b1 - b2*(8*a1 + 64*b1)/(1 + 8*a2 + 64*b2));
		P3 = P3a.toFixed(16);
		P4a = (81/25)*b2/(1 + 8*a2 + 64*b2);
		P4 = P4a.toFixed(16)

		SG_20_n_menos_2 = SG_20_n_menos_1;
		SG_20_n_menos_1 = SG_20;
		SG_20 = ( SG_T - P1*(T - 20) - P3*Math.pow((T - 20),2) )/(1 + P2*(T - 20) + P4*Math.pow((T-20),2));
		
		if(Math.abs(SG_20 - SG_20_n_menos_1) > 0.000001){
			if(Math.abs(SG_20 - SG_20_n_menos_2) > 0.000001){
				keeplooping = 1;
			}else{
				SG_20 = (SG_20 + SG_20_n_menos_1)/2.0;
				keeplooping = 0
			}

		}else{
			//SG_20 = (SG_20 + SG_20_n_menos_1)/2.0;
			keeplooping = 0
		}
		
	}while(keeplooping == 1);
	//console.log(SG_20.toFixed(4));
	SG_15 = ( SG_20 - 0.999042*(8*a1 + 64*b1))/(0.999042*(1 + 8*a2 + 64*b2))
	APIa = (141.5/SG_15) - 131.5;
	return [SG_20,APIa];
}


this.densidade_vetorP = []




this.contagem = 0;
function insRow(){
	var entrada = document.createElement('input'); //crio um elemento do tipo input
    entrada.className = 'form-control form-row col-lg-3 col-md-3 justify-content-center tam'; //coloco uma classe do bootstrap
    entrada.style = "margin-top: 10px;margin-left: 17px";
    entrada.placeholder = "Massa(g)";
    entrada.type = "number";
    var entrada2 = document.createElement('input'); //crio um elemento do tipo input
    entrada2.className = 'form-control  form-row col-lg-3 col-md-3 justify-content-center tam'; //coloco uma classe do bootstrap
    entrada2.style = "margin-top: 10px; margin-left: 17px;";
    entrada2.placeholder = "Densidade(g/cm³)";
    entrada2.type = "number";
    var entrada3 = document.createElement('input'); //crio um elemento do tipo input
    entrada3.className = 'form-control form-row col-lg-3 col-md-3 justify-content-center tam'; //coloco uma classe do bootstrap
    entrada3.style = "margin-top: 10px; margin-left: 17px;";
    entrada3.placeholder = "T medida(°C)";
    entrada3.type = "number";
    var entrada4 = document.createElement('input'); //crio um elemento do tipo input
    entrada4.className = 'form-control  form-row col-lg-3 col-md-3 justify-content-center tam'; //coloco uma classe do bootstrap
    entrada4.style = "margin-top: 10px; margin-left: 17px";
    entrada4.placeholder = "Pressão (mmHg)";
    entrada4.type = "number";
    var entrada5 = document.createElement('input'); //crio um elemento do tipo input
    entrada5.className = 'form-control  form-row col-lg-3 col-md-3 justify-content-center tam'; //coloco uma classe do bootstrap
    entrada5.style = "margin-top: 10px; margin-left: 17px";
    entrada5.placeholder = "T topo(°C)";
    entrada5.type = "number";
    //var entrada6 = document.createElement('input'); //crio um elemento do tipo input
    //entrada6.className = 'form-control  form-row col-lg-3 col-md-3 justify-content-center tam'; //coloco uma classe do bootstrap
    //entrada6.style = "margin-top: 10px; margin-left: 15px";

    document.querySelector('#teste').appendChild(entrada); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#teste').appendChild(entrada2); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#teste').appendChild(entrada3); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#teste').appendChild(entrada4); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#teste').appendChild(entrada5); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    //document.querySelector('#teste').appendChild(entrada6); //pendurei esse nó ao pai de id teste. Portanto é um nó filho

    this.contagem += 1; //aumento a contagem pela chamada da função
    entrada.id = this.contagem; //imponho o id dinamicamente para cada entry
    entrada2.id = this.contagem + 40; //imponho o id dinamicamente para cada entry
    entrada3.id = this.contagem + 80; //imponho o id dinamicamente para cada entry
    entrada4.id = this.contagem + 120; //imponho o id dinamicamente para cada entry
    entrada5.id = this.contagem + 160; //imponho o id dinamicamente para cada entry
    //entrada6.id = this.contagem + 200; //imponho o id dinamicamente para cada entry

}

function remRow(){
	var ident = this.contagem;
	var ident2 = this.contagem + 40;
	var ident3 = this.contagem + 80;
	var ident4 = this.contagem + 120;
	var ident5 = this.contagem + 160;
	//var ident6 = this.contagem + 200;

	document.getElementById(ident).remove()
	document.getElementById(ident2).remove()
	document.getElementById(ident3).remove()
	document.getElementById(ident4).remove()
	document.getElementById(ident5).remove()
	//document.getElementById(ident6).remove()
	this.contagem -= 1;
}

function calculadora_final(){
	if(this.contagem>=1){
		this.TtM = [];
		this.densidade_vetor = []
		vetor_massa = [];
		vetor_vol = [];
		vetor_topo = [];
		vetor_pressao = [];
	    var soma_massa = 0;
	    var soma_vol = 0
	    for(var i=1;i<=this.contagem;i++){
	        soma_massa += parseFloat(document.getElementById(i).value);
	        vetor_massa.push(document.getElementById(i).value); //anexando ao último elemento do vetor
	        this.TtM.push(document.getElementById(i+160).value); //anexando ao último elemento do vetor
	        vetor_pressao.push(document.getElementById(i+120).value); //anexando ao último elemento do vetor
	        density = densidade(parseFloat(document.getElementById(i+40).value),parseFloat(document.getElementById(i+80).value));
	        this.densidade_vetor.push(density[1])
	        
	        soma_vol += parseFloat(document.getElementById(i).value)/density[0]; 
	    }
	    rho_dest1 = soma_massa/soma_vol;
	    
	    var rho_oleo1 = parseFloat(document.querySelector(".rho_oleo1").value);
		var m_oleo1 = parseFloat(document.querySelector(".m_oleo1").value);
		var percmas_lev1 = parseFloat(document.querySelector(".mas_lev1").value)*0.01;
		var percvol_lev1 = parseFloat(document.querySelector(".vol_lev1").value)*0.01;
		var mas_res1 = parseFloat(document.querySelector(".mas_res1").value);
		var rho_res1 = parseFloat(document.querySelector(".rho_res1").value);
		vol_res1 = mas_res1/rho_res1;

		if (isNaN(percmas_lev1) || isNaN(percvol_lev1)) {
			percvol_lev1 = 0.0;
			percmas_lev1 = 0.0;
		}
		if (isNaN(rho_oleo1) || isNaN(m_oleo1) || isNaN(soma_massa) || isNaN(mas_res1) || isNaN(rho_res1) || isNaN(soma_vol)){
			return alert("Nem todos os campos foram preenchidos.");
		}

		vol_oleo1 = m_oleo1/rho_oleo1;
		api_amostra1 = densidade(rho_oleo1,20)[1]
		mas_lev1 = percmas_lev1*m_oleo1;
		vol_lev1 = percvol_lev1*vol_oleo1;

		if(mas_lev1 == 0 || vol_lev1 == 0){
			rho_lev1 = 0.0;
			api_lev1 = 0.0;
		}else{
			rho_lev1 = mas_lev1/vol_lev1; //densidade do leve
			api_lev1 = densidade(rho_lev1,20)[1].toFixed(1);
		}

		percm_dest1 = soma_massa/m_oleo1;
		percm_res1 = mas_res1/m_oleo1;
		mas_perda1 = m_oleo1 - soma_massa - mas_res1 - mas_lev1;
		vol_perda1 = vol_oleo1 - soma_vol  - vol_res1 - vol_lev1;

		percm_perda1 = mas_perda1/m_oleo1;
		percv_perda1 = vol_perda1/vol_oleo1;
		function lowestValueAndKey(obj) {
	  		var [lowestItems] = Object.entries(obj).sort(([ ,v1], [ ,v2]) => v1 - v2);
	  		return lowestItems
		}
		delta_res1 = densidade(rho_res1,20)[1]*(percm_perda1 + percm_res1) + densidade(rho_dest1,20)[1]*(percm_dest1) + densidade(rho_lev1,20)[1]*(percmas_lev1);
		delta_dest1 = densidade(rho_res1,20)[1]*(percm_res1) + densidade(rho_dest1,20)[1]*(percm_perda1 + percm_dest1) + densidade(rho_lev1,20)[1]*(percmas_lev1);
		if(mas_lev1 === 0.0 || vol_lev1 === 0.0){
			delta1 = {'Destilado':Math.abs(delta_dest1-api_amostra1),'Resíduo':Math.abs(delta_res1-api_amostra1)}
		}
		else{
			delta_lev1 = densidade(rho_res1,20)[1]*(percm_res1) + densidade(rho_dest1,20)[1]*(percm_dest1) + densidade(rho_lev1,20)[1]*(percm_perda1 + percmas_lev1);
			delta1 = {'Leves': Math.abs(delta_lev1-api_amostra1),'Destilado':Math.abs(delta_dest1-api_amostra1),'Resíduo':Math.abs(delta_res1-api_amostra1)}
			//delta_final = Math.min(Math.abs(delta_lev-api_amostra),Math.abs(delta_dest-api_amostra),Math.abs(delta_res-api_amostra));
			console.log(delta1)
		}
	
	    console.log(rho_dest1);

	    //ATE AQUI OK

	    document.querySelector(".onde_perda1").innerHTML = 'Perdas no '+ lowestValueAndKey(delta1)[0] + ' de ' + lowestValueAndKey(delta1)[1].toFixed(2) + ' °API';

		document.querySelector(".m_o1").innerHTML = m_oleo1.toFixed(1);
		document.querySelector(".rho_o1").innerHTML = rho_oleo1.toFixed(4);
		document.querySelector(".v_o1").innerHTML = vol_oleo1.toFixed(1);
		document.querySelector(".api_o1").innerHTML = api_amostra1.toFixed(1);
		document.querySelector(".pm_o1").innerHTML = "100.0";
		document.querySelector(".pv_o1").innerHTML = "100.0";

		//destilado
		document.querySelector(".m_d1").innerHTML = soma_massa.toFixed(1);
		document.querySelector(".rho_d1").innerHTML = rho_dest1.toFixed(4);
		document.querySelector(".v_d1").innerHTML = soma_vol.toFixed(1);
		document.querySelector(".api_d1").innerHTML = densidade(rho_dest1,20)[1].toFixed(1);
		document.querySelector(".pm_d1").innerHTML = (100.0*(soma_massa/m_oleo1)).toFixed(1);
		document.querySelector(".pv_d1").innerHTML = (100.0*(soma_vol/vol_oleo1)).toFixed(1);

		//leves
		if (mas_lev1 === 0.0  || vol_lev1 === 0.0) {
			document.querySelector(".m_l1").innerHTML = "-";
			document.querySelector(".rho_l1").innerHTML = "-";
			document.querySelector(".v_l1").innerHTML = "-";
			document.querySelector(".api_l1").innerHTML = "-";
			document.querySelector(".pm_l1").innerHTML = "-";
			document.querySelector(".pv_l1").innerHTML = "-";
		}else{
			document.querySelector(".m_l1").innerHTML = mas_lev1.toFixed(1);
			document.querySelector(".rho_l1").innerHTML = rho_lev1.toFixed(4);
			document.querySelector(".v_l1").innerHTML = vol_lev1.toFixed(1);
			document.querySelector(".api_l1").innerHTML = densidade(rho_lev1,20)[1].toFixed(1);
			document.querySelector(".pm_l1").innerHTML = (100.0*(mas_lev1/m_oleo1)).toFixed(1);
			document.querySelector(".pv_l1").innerHTML = (100.0*(vol_lev1/vol_oleo1)).toFixed(1);
		}
		
		//resíduo
		document.querySelector(".m_r1").innerHTML = mas_res1.toFixed(1);
		document.querySelector(".rho_r1").innerHTML = rho_res1.toFixed(4);
		document.querySelector(".v_r1").innerHTML = vol_res1.toFixed(1);
		document.querySelector(".api_r1").innerHTML = densidade(rho_res1,20)[1].toFixed(1);
		document.querySelector(".pm_r1").innerHTML = (100.0*(mas_res1/m_oleo1)).toFixed(1);
		document.querySelector(".pv_r1").innerHTML = (100.0*(vol_res1/vol_oleo1)).toFixed(1);

		//perdas
		document.querySelector(".m_p1").innerHTML = mas_perda1.toFixed(1);
		document.querySelector(".rho_p1").innerHTML = "-"
		document.querySelector(".v_p1").innerHTML = vol_perda1.toFixed(1);
		document.querySelector(".api_p1").innerHTML = "-"
		document.querySelector(".pm_p1").innerHTML = (100.0*percm_perda1).toFixed(1);
		document.querySelector(".pv_p1").innerHTML = (100.0*percv_perda1).toFixed(1);
	}else{
		alert("Você precisa de pelo menos uma entrada");
	}
	
    
}



this.contagemP = 1000;
function insRowP(){
	var entradaP = document.createElement('input'); //crio um elemento do tipo input
    entradaP.className = 'form-control form-row col-lg-3 col-md-3 justify-content-center tam'; //coloco uma classe do bootstrap
    entradaP.style = "margin-top: 10px;margin-left: 17px";
    entradaP.placeholder = "Massa(g)";
    entradaP.type = "number";
    var entrada2P = document.createElement('input'); //crio um elemento do tipo input
    entrada2P.className = 'form-control  form-row col-lg-3 col-md-3 justify-content-center tam'; //coloco uma classe do bootstrap
    entrada2P.style = "margin-top: 10px; margin-left: 17px;";
    entrada2P.placeholder = "Densidade(g/cm³)";
    entrada2P.type = "number";
    var entrada3P = document.createElement('input'); //crio um elemento do tipo input
    entrada3P.className = 'form-control form-row col-lg-3 col-md-3 justify-content-center tam'; //coloco uma classe do bootstrap
    entrada3P.style = "margin-top: 10px; margin-left: 17px;";
    entrada3P.placeholder = "T medida(°C)"
    entrada3P.type = "number";
    var entrada4P = document.createElement('input'); //crio um elemento do tipo input
    entrada4P.className = 'form-control  form-row col-lg-3 col-md-3 justify-content-center tam'; //coloco uma classe do bootstrap
    entrada4P.style = "margin-top: 10px; margin-left: 17px";
    entrada4P.placeholder = "Pressão (mmHg)";
    entrada4P.type = "number";
    var entrada5P = document.createElement('input'); //crio um elemento do tipo input
    entrada5P.className = 'form-control  form-row col-lg-3 col-md-3 justify-content-center tam'; //coloco uma classe do bootstrap
    entrada5P.style = "margin-top: 10px; margin-left: 17px";
    entrada5P.placeholder = "T topo(°C)";
    entrada5P.type = "number";
    //var entrada6 = document.createElement('input'); //crio um elemento do tipo input
    //entrada6.className = 'form-control  form-row col-lg-3 col-md-3 justify-content-center tam'; //coloco uma classe do bootstrap
    //entrada6.style = "margin-top: 10px; margin-left: 15px";

    document.querySelector('#testeP').appendChild(entradaP); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#testeP').appendChild(entrada2P); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#testeP').appendChild(entrada3P); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#testeP').appendChild(entrada4P); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#testeP').appendChild(entrada5P); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    //document.querySelector('#teste').appendChild(entrada6); //pendurei esse nó ao pai de id teste. Portanto é um nó filho

    this.contagemP += 1; //aumento a contagem pela chamada da função
    entradaP.id = this.contagemP; //imponho o id dinamicamente para cada entry
    entrada2P.id = this.contagemP + 40; //imponho o id dinamicamente para cada entry
    entrada3P.id = this.contagemP + 80; //imponho o id dinamicamente para cada entry
    entrada4P.id = this.contagemP + 120; //imponho o id dinamicamente para cada entry
    entrada5P.id = this.contagemP + 160; //imponho o id dinamicamente para cada entry
    //entrada6.id = this.contagem + 200; //imponho o id dinamicamente para cada entry

}

function remRowP(){
	var identP = this.contagemP;
	var ident2P = this.contagemP + 40;
	var ident3P = this.contagemP + 80;
	var ident4P = this.contagemP + 120;
	var ident5P = this.contagemP + 160;
	//var ident6 = this.contagem + 200;

	document.getElementById(identP).remove()
	document.getElementById(ident2P).remove()
	document.getElementById(ident3P).remove()
	document.getElementById(ident4P).remove()
	document.getElementById(ident5P).remove()
	//document.getElementById(ident6).remove()
	this.contagemP -= 1;
}



function calculadora_final_POT(){
	if(this.contagemP>=1001){
		vetor_massaP = [];
		this.TtP = [];
		this.densidade_vetorP = []
		vetor_volP = [];
		vetor_topoP = [];
		vetor_pressaoP = [];
	    var soma_massaP = 0;
	    var soma_volP = 0
	    for(var j=1001;j<=this.contagemP;j++){
	        soma_massaP += parseFloat(document.getElementById(j).value);
	        vetor_massaP.push(document.getElementById(j).value); //anexando ao último elemento do vetor
	        this.TtP.push(document.getElementById(j+160).value); //anexando ao último elemento do vetor
	        vetor_pressaoP.push(document.getElementById(j+120).value); //anexando ao último elemento do vetor
	        densityP = densidade(parseFloat(document.getElementById(j+40).value),parseFloat(document.getElementById(j+80).value));
	        this.densidade_vetorP.push(densityP[1]);
	        soma_volP += parseFloat(document.getElementById(j).value)/densityP[0]; 
	        console.log(document.getElementById(j).value)
	    }
	    rho_dest1P = soma_massaP/soma_volP;
	    
	    var rho_oleo1P = parseFloat(document.querySelector(".rho_oleo1P").value);
		var m_oleo1P = parseFloat(document.querySelector(".m_oleo1P").value);
		var mas_res1P = parseFloat(document.querySelector(".mas_res1P").value);
		var rho_res1P = parseFloat(document.querySelector(".rho_res1P").value);
		vol_res1P = mas_res1P/rho_res1P;

		
		if (isNaN(rho_oleo1P) || isNaN(m_oleo1P) || isNaN(soma_massaP) || isNaN(mas_res1P) || isNaN(rho_res1P) || isNaN(soma_volP)){
			return alert("Nem todos os campos foram preenchidos.");
		}

		vol_oleo1P = m_oleo1P/rho_oleo1P;
		api_amostra1P = densidade(rho_oleo1P,20)[1]

		percm_dest1P = soma_massaP/m_oleo1P;
		percm_res1P = mas_res1P/m_oleo1P;
		mas_perda1P = m_oleo1P - soma_massaP - mas_res1P;
		vol_perda1P = vol_oleo1P - soma_volP  - vol_res1P;

		percm_perda1P = mas_perda1P/m_oleo1P;
		percv_perda1P = vol_perda1P/vol_oleo1P;
		function lowestValueAndKey(obj) {
	  		var [lowestItems] = Object.entries(obj).sort(([ ,v1], [ ,v2]) => v1 - v2);
	  		return lowestItems
		}
		delta_res1P = densidade(rho_res1P,20)[1]*(percm_perda1P + percm_res1P) + densidade(rho_dest1P,20)[1]*(percm_dest1P);
		delta_dest1P = densidade(rho_res1P,20)[1]*(percm_res1P) + densidade(rho_dest1P,20)[1]*(percm_perda1P + percm_dest1P);
		
		delta1P = {'Destilado':Math.abs(delta_dest1P-api_amostra1P),'Resíduo':Math.abs(delta_res1P-api_amostra1P)}
		
	
	    //ATE AQUI OK

	    document.querySelector(".onde_perda1P").innerHTML = 'Perdas no '+ lowestValueAndKey(delta1P)[0] + ' de ' + lowestValueAndKey(delta1P)[1].toFixed(2) + ' °API';

		document.querySelector(".m_o1P").innerHTML = m_oleo1P.toFixed(1);
		document.querySelector(".rho_o1P").innerHTML = rho_oleo1P.toFixed(4);
		document.querySelector(".v_o1P").innerHTML = vol_oleo1P.toFixed(1);
		document.querySelector(".api_o1P").innerHTML = api_amostra1P.toFixed(1);
		document.querySelector(".pm_o1P").innerHTML = "100.0";
		document.querySelector(".pv_o1P").innerHTML = "100.0";

		//destilado
		document.querySelector(".m_d1P").innerHTML = soma_massaP.toFixed(1);
		document.querySelector(".rho_d1P").innerHTML = rho_dest1P.toFixed(4);
		document.querySelector(".v_d1P").innerHTML = soma_volP.toFixed(1);
		document.querySelector(".api_d1P").innerHTML = densidade(rho_dest1P,20)[1].toFixed(1);
		document.querySelector(".pm_d1P").innerHTML = (100.0*(soma_massaP/m_oleo1P)).toFixed(1);
		document.querySelector(".pv_d1P").innerHTML = (100.0*(soma_volP/vol_oleo1P)).toFixed(1);

		

		
		//resíduo
		document.querySelector(".m_r1P").innerHTML = mas_res1P.toFixed(1);
		document.querySelector(".rho_r1P").innerHTML = rho_res1P.toFixed(4);
		document.querySelector(".v_r1P").innerHTML = vol_res1P.toFixed(1);
		document.querySelector(".api_r1P").innerHTML = densidade(rho_res1P,20)[1].toFixed(1);
		document.querySelector(".pm_r1P").innerHTML = (100.0*(mas_res1P/m_oleo1P)).toFixed(1);
		document.querySelector(".pv_r1P").innerHTML = (100.0*(vol_res1P/vol_oleo1P)).toFixed(1);

		//perdas
		document.querySelector(".m_p1P").innerHTML = mas_perda1P.toFixed(1);
		document.querySelector(".rho_p1P").innerHTML = "-"
		document.querySelector(".v_p1P").innerHTML = vol_perda1P.toFixed(1);
		document.querySelector(".api_p1P").innerHTML = "-"
		document.querySelector(".pm_p1P").innerHTML = (100.0*percm_perda1P).toFixed(1);
		document.querySelector(".pv_p1P").innerHTML = (100.0*percv_perda1P).toFixed(1);


		

	}else{
		alert("Você precisa de pelo menos uma entrada");
	}
	    
}

function PEV(){
	var ctx = document.getElementById('myChart').getContext('2d');
	var t_finala = this.TtM.concat(this.TtP);
	var dens_final = this.densidade_vetor.concat(this.densidade_vetorP);
	console.log(dens_final);
	var li = []
    for (let i = 0; i < t_finala.length; i++) {
        var obj = {};
        obj['x'] = dens_final[i];
        obj['y'] = t_finala[i];
        li.push(obj)
    }

    var chart = new Chart(ctx, {
            // The type of chart we want to create
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Curva API x Temperatura',
                data: li,
                backgroundColor: 'rgb(255, 99, 132)',
                pointRadius: 4,
            }]
        },

            // Configuration options go here
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    scaleLabel: {
                        display: true,
                        labelString: "Densidade (°API)"
                    }, 
                }],

                yAxes: [{
                    type: 'linear',
                    scaleLabel: {
                        display: true,
                        labelString: "Temperatura (°C)"
                    },
                }],
            }
        }
    });
}



