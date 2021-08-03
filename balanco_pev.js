//reagente
var ent_rea_bat = document.querySelector("#addreabat");
cont = 0;
//console.log(cont)
ent_rea_bat.addEventListener("click", function(event) {
    event.preventDefault();//evita que faça o padrão, q é apagar ao recarregar a página em form

    //var modelo = document.getElementById("modelo").value;
    if(cont<=40){
    	var diverg = document.createElement("div");
    diverg.classList.add("row");
    diverg.classList.add("text-center");
    diverg.classList.add("col-lg-12"); 
    diverg.classList.add("col-md-12"); 
    diverg.classList.add("col-sm-12");
    diverg.classList.add("justify-content-center");
    diverg.classList.add("espaco_entry")
    //diverg.classList.add("my-3")
    //diverg.style = "margin-top: 20px"
 
	var ordem_bat = document.createElement("input");
	ordem_bat.classList.add("form-control");
	ordem_bat.classList.add("mx-2");
	ordem_bat.classList.add("tamanho_e");
	ordem_bat.classList.add("justify-content-center")
	ordem_bat.style = "margin-top:20px;text-align:center;color:green;border: 2px solid green;"
	ordem_bat.placeholder = "Massa do corte (g)";
	ordem_bat.id = "a"+cont+"a";

	var elemento_rea_bat = document.createElement("input");
	elemento_rea_bat.classList.add("form-control");
	elemento_rea_bat.classList.add("mx-2");
	elemento_rea_bat.classList.add("tamanho_e");
	elemento_rea_bat.classList.add("justify-content-center");
	elemento_rea_bat.style = "margin-top:20px;text-align:center;color:green;border: 2px solid green;"
	elemento_rea_bat.placeholder = "Densidade do corte (g/cc)";
	elemento_rea_bat.id = "a"+(cont + 50)+"a";	


	var conc_rea_bat= document.createElement("input");
	conc_rea_bat.classList.add("form-control");
	conc_rea_bat.classList.add("mx-2");
	conc_rea_bat.classList.add("tamanho_e");
	conc_rea_bat.classList.add("justify-content-center");
	conc_rea_bat.style = "margin-top:20px;text-align:center;color:green;border: 2px solid green;"
	conc_rea_bat.placeholder = "Temperatura densímetro";
	conc_rea_bat.id = "a"+(cont + 100)+"a";	

	var esteq_rea_bat = document.createElement("input");
	esteq_rea_bat.classList.add("form-control");
	esteq_rea_bat.classList.add("mx-2");
	esteq_rea_bat.classList.add("tamanho_e");
	esteq_rea_bat.classList.add("justify-content-center");

	esteq_rea_bat.style = "margin-top:20px;text-align:center;color:green;border: 2px solid green;"
	esteq_rea_bat.placeholder = "Temperatura de topo";
	esteq_rea_bat.id = "a"+(cont + 150)+"a";	

	var pc_bat = document.createElement("input");
	pc_bat.classList.add("form-control");
	pc_bat.classList.add("mx-2")
	pc_bat.classList.add("tamanho_e");
	pc_bat.classList.add("justify-content-center")
	pc_bat.style = "margin-top:20px;text-align:center;color:green;border: 2px solid green;"
	pc_bat.placeholder = "Pressão (mmHg)";
	pc_bat.id = "a"+(cont + 200)+"a";
	
	cont += 1
	diverg.classList.add("r"+cont+"r");
	var mae = document.querySelector(".entradas_rea_bat");
	diverg.appendChild(ordem_bat);
	diverg.appendChild(elemento_rea_bat)
	diverg.appendChild(conc_rea_bat);
	diverg.appendChild(esteq_rea_bat)
	diverg.appendChild(pc_bat);
	
	
	var linha = document.createElement("hr");
	linha.style = "border: 1px solid red;"
	linha.classList.add("my-2");
	linha.classList.add("row");
	//diverg.appendChild(linha)
	mae.appendChild(diverg);
    }
    	
});	

var botaoRemoverBatRea = document.querySelector("#remreabat");
botaoRemoverBatRea.addEventListener("click", function(event) {
    event.preventDefault();//evita que faça o padrão, q é apagar ao recarregar a página em form
    if(cont>=1){
    	document.querySelector(".r"+cont+"r").remove()
    	cont -= 1;
    }
});


//------------------------POTSTIL------------------------------------------------------------------------------------------
//produto

var ent_prod_bat = document.querySelector("#addprodbat");
cont_prod = 0;
//console.log(cont)
ent_prod_bat.addEventListener("click", function(event) {
    event.preventDefault();//evita que faça o padrão, q é apagar ao recarregar a página em form
    
    if(cont_prod<=80){
    	var divergp = document.createElement("div");
    divergp.classList.add("row");
    divergp.classList.add("text-center");
    divergp.classList.add("text-center");
    divergp.classList.add("col-lg-12"); 
    divergp.classList.add("col-md-12"); 
    divergp.classList.add("col-sm-12");
    divergp.classList.add("justify-content-center");
    divergp.classList.add("espaco_prod")

	var elemento_prod_bat = document.createElement("input");
	elemento_prod_bat.classList.add("form-control");
	elemento_prod_bat.classList.add("mx-2");
	elemento_prod_bat.classList.add("tamanho_f");
	elemento_prod_bat.style = "margin-top:20px;text-align:center;color:green;border: 2px solid green;"
	elemento_prod_bat.placeholder = "Massa do corte (g)";
	elemento_prod_bat.id = "a"+(cont_prod + 350)+"a";

	var conc_prod_bat= document.createElement("input");
	conc_prod_bat.classList.add("form-control");
	conc_prod_bat.classList.add("mx-2");
	conc_prod_bat.classList.add("tamanho_f")
	conc_prod_bat.style = "margin-top:20px;text-align:center;color:green;border: 2px solid green;"
	conc_prod_bat.placeholder = "Densidade do corte (g/cc)";
	conc_prod_bat.id = "a"+(cont_prod + 400)+"a";

	var esteq_prod_bat = document.createElement("input");
	esteq_prod_bat.classList.add("form-control");
	esteq_prod_bat.classList.add("mx-2");
	esteq_prod_bat.classList.add("tamanho_f");
	esteq_prod_bat.style = "margin-top:20px;text-align:center;color:green;border: 2px solid green;"
	esteq_prod_bat.placeholder = "Temperatura no densímetro";
	esteq_prod_bat.id = "a"+(cont_prod + 450)+"a";

	var pc_batp = document.createElement("input");
	pc_batp.classList.add("form-control");
	pc_batp.classList.add("mx-2")
	pc_batp.classList.add("tamanho_e");
	pc_batp.classList.add("justify-content-center")
	pc_batp.style = "margin-top:20px;text-align:center;color:green;border: 2px solid green;"
	pc_batp.placeholder = "Temperatura de topo";
	pc_batp.id = "a"+(cont_prod + 500)+"a";

	var tc_batp = document.createElement("input");
	tc_batp.classList.add("form-control");
	tc_batp.classList.add("mx-2")
	tc_batp.classList.add("tamanho_e");
	tc_batp.classList.add("justify-content-center")
	tc_batp.style = "margin-top:20px;text-align:center;color:green;border: 2px solid green;"
	tc_batp.placeholder = "Pressão (mmHg)";
	tc_batp.id = "a"+(cont_prod + 550)+"a";

	cont_prod += 1
	divergp.classList.add("p"+cont_prod+"p");
	var pai = document.querySelector(".entradas_prod_bat");
	divergp.appendChild(elemento_prod_bat)
	divergp.appendChild(conc_prod_bat);
	divergp.appendChild(esteq_prod_bat)
	divergp.appendChild(pc_batp);
	divergp.appendChild(tc_batp);
	pai.appendChild(divergp);
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

function densidade(SG_T,T){
	//metodologia de cálculo baseada na resolução N6-70 de 25/07/1970 do CNP
	SG_20 = SG_T;
	SG_20_n_menos_1 = 0;
	do{
		if(SG_20< 0.479){
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
			keeplooping = 0
		}
		
	}while(keeplooping == 1);
	//console.log(SG_20.toFixed(4));
	SG_15 = ( SG_20 - 0.999042*(8*a1 + 64*b1))/(0.999042*(1 + 8*a2 + 64*b2))
	APIa = (141.5/SG_15) - 131.5;
	return [SG_20,APIa];
}

this.api_total = [];
this.T_topo_total = [];
this.soma_vol_total = [];
this.soma_voldest_mvd = 0;
function calcularMVD(){
	this.api_total = [];
	this.T_topo_total = [];
	this.soma_vol_total = [];
	this.soma_voldest_mvd = 0;
	rho_oleo_exp = parseFloat(document.querySelector("#rho_oleo").value);//0.8785
	T_o_exp = parseFloat(document.querySelector("#temp_oleo").value);//20
	m_oleo = parseFloat(document.querySelector("#m_oleo").value);;//3000
	percmas_lev = 0.01*parseFloat(document.querySelector("#perc_mas").value);//0.2*0.01;
	percvol_lev = 0.01*parseFloat(document.querySelector("#perc_vol").value);;
	//mas_dest = //1100;
	//vol_dest = 1400;
	mas_res = parseFloat(document.querySelector("#mas_res").value);//1800;
	rho_res_exp = parseFloat(document.querySelector("#rho_res_exp").value);//0.945;
	T_res_exp = parseFloat(document.querySelector("#temp_res").value);//20;
	dens_residuo = densidade(rho_res_exp,T_res_exp);
	temp_topo = [];
	api_dest = [];
	massa_dest = [];
	dens_dest = [];
	rho_oleo = densidade(rho_oleo_exp,T_o_exp)[0];
	vol_oleo = m_oleo/rho_oleo;
	soma_masdest_mvd = 0;
	//soma_voldest_mvd = 0;
	for(var i=0;i<cont;i++){
        
        temp_topo.push(parseInt(document.querySelector("#a"+(i+150)+"a").value));
        //temp_dens.push(parseFloat(document.querySelector("#a"+(i+100)+"a").value));//T densimetro
        massa_dest.push(parseFloat(document.querySelector("#a"+(i)+"a").value));//massa
        soma_masdest_mvd += parseFloat(document.querySelector("#a"+(i)+"a").value); //soma da massa do destilado
        dens_dest.push(densidade(parseFloat(document.querySelector("#a"+(i+50)+"a").value),
        parseFloat(document.querySelector("#a"+(i+100)+"a").value))[0]);//densidade
        this.soma_voldest_mvd += massa_dest[i]/dens_dest[i]
        api_dest.push(densidade(parseFloat(document.querySelector("#a"+(i+50)+"a").value),
        parseFloat(document.querySelector("#a"+(i+100)+"a").value))[1]);//densidade
        this.soma_vol_total.push(soma_voldest_mvd/vol_oleo);
        this.api_total.push(densidade(parseFloat(document.querySelector("#a"+(i+50)+"a").value),
        parseFloat(document.querySelector("#a"+(i+100)+"a").value))[1]);//densidade
        this.T_topo_total.push(parseInt(document.querySelector("#a"+(i+150)+"a").value));//T topo
    }
    
	rho_res = densidade(rho_res_exp, T_res_exp)[0];
	vol_res = mas_res/rho_res;
	if (isNaN(percmas_lev) || isNaN(percvol_lev)) {
		percvol_lev = 0.0;
		percmas_lev = 0.0;
	}
	if (isNaN(rho_oleo) || isNaN(m_oleo) || isNaN(soma_masdest_mvd) || isNaN(mas_res) || isNaN(rho_res_exp)){
		return alert("Nem todos os campos foram preenchidos.");
	}
	
	
	api_amostra = densidade(rho_oleo_exp,T_o_exp)[1];
	mas_lev = percmas_lev*m_oleo;
	vol_lev = percvol_lev*vol_oleo;

	if(mas_lev == 0 || vol_lev == 0){
		rho_lev = 0.0;
		api_lev = 0.0;
	}else{
		rho_lev = 0.6; //densidade do leve
		api_lev = 100//densidade(rho_lev,20)[1].toFixed(1);
	}

	rho_dest = soma_masdest_mvd/this.soma_voldest_mvd;
	percm_dest = soma_masdest_mvd/m_oleo;
	percm_res = mas_res/m_oleo;
	mas_perda = m_oleo - soma_masdest_mvd - mas_res - mas_lev;
	vol_perda = vol_oleo - this.soma_voldest_mvd  - vol_res - vol_lev;
	percm_perda = mas_perda/m_oleo;
	percv_perda = vol_perda/vol_oleo;
	function lowestValueAndKey(obj) {
  		var [lowestItems] = Object.entries(obj).sort(([ ,v1], [ ,v2]) => v1 - v2);
  		return lowestItems
	}
	delta_res = densidade(rho_res_exp,T_res_exp)[1]*(percm_perda + percm_res) + densidade(rho_dest,20)[1]*(percm_dest) + 100*(percmas_lev);
	delta_dest = densidade(rho_res_exp,T_res_exp)[1]*(percm_res) + densidade(rho_dest,20)[1]*(percm_perda + percm_dest) + 100*(percmas_lev);
	if(mas_lev === 0.0 || vol_lev === 0.0){
		delta = {'Destilado':Math.abs(delta_dest-api_amostra),'Resíduo':Math.abs(delta_res-api_amostra)}
	}
	else{
		delta_lev = densidade(rho_res_exp,T_res_exp)[1]*(percm_res) + densidade(rho_dest,20)[1]*(percm_dest) + 100*(percm_perda + percmas_lev);
		delta = {'Leves': Math.abs(delta_lev-api_amostra),'Destilado':Math.abs(delta_dest-api_amostra),'Resíduo':Math.abs(delta_res-api_amostra)}
		//delta_final = Math.min(Math.abs(delta_lev-api_amostra),Math.abs(delta_dest-api_amostra),Math.abs(delta_res-api_amostra));	
	}
	document.querySelector(".onde_perda").innerHTML = 'Perdas no '+ lowestValueAndKey(delta)[0] + ' de ' + lowestValueAndKey(delta)[1].toFixed(2) + ' °API';
	document.querySelector(".m_o").innerHTML = m_oleo.toFixed(1);
	//document.querySelector(".rho_o").innerHTML = rho_oleo.toFixed(4);
	document.querySelector(".v_o").innerHTML = vol_oleo.toFixed(1);
	document.querySelector(".api_o").innerHTML = api_amostra.toFixed(1);
	document.querySelector(".pm_o").innerHTML = "100.0";
	document.querySelector(".pv_o").innerHTML = "100.0";

	//destilado
	document.querySelector(".m_d").innerHTML = soma_masdest_mvd.toFixed(1);
	//document.querySelector(".rho_d").innerHTML = rho_dest.toFixed(4);
	document.querySelector(".v_d").innerHTML = this.soma_voldest_mvd.toFixed(1);
	document.querySelector(".api_d").innerHTML = densidade(rho_dest,20)[1].toFixed(1);
	document.querySelector(".pm_d").innerHTML = (100.0*(soma_masdest_mvd/m_oleo)).toFixed(1);
	document.querySelector(".pv_d").innerHTML = (100.0*(this.soma_voldest_mvd/vol_oleo)).toFixed(1);

	//leves
	if (mas_lev === 0.0  || vol_lev === 0) {
		document.querySelector(".m_l").innerHTML = "-";
		//document.querySelector(".rho_l").innerHTML = "-";
		document.querySelector(".v_l").innerHTML = "-";
		document.querySelector(".api_l").innerHTML = "-";
		document.querySelector(".pm_l").innerHTML = "-";
		document.querySelector(".pv_l").innerHTML = "-";
	}else{
		document.querySelector(".m_l").innerHTML = mas_lev.toFixed(1);
		//document.querySelector(".rho_l").innerHTML = rho_lev.toFixed(4);
		document.querySelector(".v_l").innerHTML = vol_lev.toFixed(1);
		document.querySelector(".api_l").innerHTML = densidade(rho_lev,20)[1].toFixed(1);
		document.querySelector(".pm_l").innerHTML = (100.0*(mas_lev/m_oleo)).toFixed(1);
		document.querySelector(".pv_l").innerHTML = (100.0*(vol_lev/vol_oleo)).toFixed(1);
	}
	
	//resíduo
	document.querySelector(".m_r").innerHTML = mas_res.toFixed(1);
	//document.querySelector(".rho_r").innerHTML = rho_res.toFixed(4);
	document.querySelector(".v_r").innerHTML = vol_res.toFixed(1);
	document.querySelector(".api_r").innerHTML = densidade(rho_res_exp,T_res_exp)[1].toFixed(1);
	document.querySelector(".pm_r").innerHTML = (100.0*(mas_res/m_oleo)).toFixed(1);
	document.querySelector(".pv_r").innerHTML = (100.0*(vol_res/vol_oleo)).toFixed(1);

	//perdas
	document.querySelector(".m_p").innerHTML = mas_perda.toFixed(1);
	//document.querySelector(".rho_p").innerHTML = "-"
	document.querySelector(".v_p").innerHTML = vol_perda.toFixed(1);
	document.querySelector(".api_p").innerHTML = "-"
	document.querySelector(".pm_p").innerHTML = (100.0*percm_perda).toFixed(1);
	document.querySelector(".pv_p").innerHTML = (100.0*percv_perda).toFixed(1);

}

//--------------------------------------CALCULAR POTSTILL----------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------
this.api_totalp = [];
this.T_topo_totalp = [];
this.soma_vol_totalp = [];
function calcularPotstill(){
	temp_topo_p = [];
	api_dest_p = [];
	massa_dest_p = [];
	dens_dest_p = [];
	soma_masdest_pot = 0;
	soma_voldest_pot = 0;
	this.api_totalp = [];
	this.T_topo_totalp = [];
	this.soma_vol_totalp = [];
	rho_oleo_exp = parseFloat(document.querySelector("#rho_oleo").value);//0.8785 - densidade do oleo mvd
	T_o_exp = parseFloat(document.querySelector("#temp_oleo").value);//20 temp oleo mvd
	m_oleo = parseFloat(document.querySelector("#m_oleo").value);;//3000 massa de entrada na potstill
	rho_oleo = densidade(rho_oleo_exp,T_o_exp)[0]; //densidade a 20
	vol_oleo = m_oleo/rho_oleo; //volume de oleo original
	dens_residuo = densidade(parseFloat(document.querySelector("#rho_res_exp").value),parseFloat(document.querySelector("#temp_res").value))
	for(var i=0;i<cont_prod;i++){
        temp_topo_p.push(parseInt(document.querySelector("#a"+(i+500)+"a").value));//T topo
        //temp_dens.push(parseFloat(document.querySelector("#a"+(i+100)+"a").value));//T densimetro
        massa_dest_p.push(parseFloat(document.querySelector("#a"+(i+350)+"a").value));//massa
        soma_masdest_pot += parseFloat(document.querySelector("#a"+(i+350)+"a").value); //soma da massa do destilado
        dens_dest_p.push(densidade(parseFloat(document.querySelector("#a"+(i+400)+"a").value),
        parseFloat(document.querySelector("#a"+(i+450)+"a").value))[0]);//densidade + temp dens
        soma_voldest_pot += massa_dest_p[i]/dens_dest_p[i]
        api_dest_p.push(densidade(parseFloat(document.querySelector("#a"+(i+400)+"a").value),
        parseFloat(document.querySelector("#a"+(i+450)+"a").value))[1]);//densidade
        this.soma_vol_totalp.push((soma_voldest_pot + this.soma_voldest_mvd)/vol_oleo);
        this.api_totalp.push(densidade(parseFloat(document.querySelector("#a"+(i+400)+"a").value),
        parseFloat(document.querySelector("#a"+(i+450)+"a").value))[1]);//densidade
        this.T_topo_totalp.push(parseInt(document.querySelector("#a"+(i+500)+"a").value));//T topo
    }
    //console.log(dens_dest);
    //console.log(api_dest)
    //rho_res_exp = densidade(rho_res_exp, T_res_exp)[0];
    rho_res_exp_p = parseFloat(document.querySelector('#rho_res_exp_pot').value);// 0.9465;
    T_res_exp_p = parseFloat(document.querySelector("#temp_res_pot").value);//140;
    m_oleo_p = parseFloat(document.querySelector("#m_oleo_pot").value);//1800;
    mas_res_p = parseFloat(document.querySelector("#mas_res_pot").value);//900;
    rho_res_exp = dens_residuo[0];
    api_amostra_p = dens_residuo[1]

    rho_oleo_p = densidade(rho_res_exp,T_res_exp)[0];
	rho_res_p = densidade(rho_res_exp_p, T_res_exp_p)[0];
	vol_res_p = mas_res_p/rho_res_p;
	vol_oleo_p = m_oleo_p/rho_res_exp;
	//api_amostra_p = densidade(rho_res_exp,T_res_exp)[1];
	rho_dest_p = soma_masdest_pot/soma_voldest_pot;
	percm_dest_p = soma_masdest_pot/m_oleo_p;
	percm_res_p = mas_res_p/m_oleo_p;
	mas_perda_p = m_oleo_p - soma_masdest_pot - mas_res_p;
	vol_perda_p = vol_oleo_p - soma_voldest_pot  - vol_res_p;
	percm_perda_p = mas_perda_p/m_oleo_p;
	percv_perda_p = vol_perda_p/vol_oleo_p;
	function lowestValueAndKey(obj) {
  		var [lowestItems] = Object.entries(obj).sort(([ ,v1], [ ,v2]) => v1 - v2);
  		return lowestItems
	}
	delta_res_p = densidade(rho_res_exp_p,T_res_exp_p)[1]*(percm_perda_p + percm_res_p) + densidade(rho_dest_p,20)[1]*(percm_dest_p);
	delta_dest_p = densidade(rho_res_exp_p,T_res_exp_p)[1]*(percm_res_p) + densidade(rho_dest_p,20)[1]*(percm_perda_p + percm_dest_p);
	
	delta = {'Destilado':Math.abs(delta_dest_p-api_amostra_p),'Resíduo':Math.abs(delta_res_p-api_amostra_p)}
	
	document.querySelector(".onde_perda_pot").innerHTML = 'Perdas no '+ lowestValueAndKey(delta)[0] + ' de ' + lowestValueAndKey(delta)[1].toFixed(2) + ' °API';
	document.querySelector(".m_op").innerHTML = m_oleo_p.toFixed(1);
	document.querySelector(".v_op").innerHTML = vol_oleo_p.toFixed(1);
	document.querySelector(".api_op").innerHTML = api_amostra_p.toFixed(1);
	document.querySelector(".pm_op").innerHTML = "100.0";
	document.querySelector(".pv_op").innerHTML = "100.0";

	//destilado
	document.querySelector(".m_dp").innerHTML = soma_masdest_pot.toFixed(1);
	//document.querySelector(".rho_d").innerHTML = rho_dest.toFixed(4);
	document.querySelector(".v_dp").innerHTML = soma_voldest_pot.toFixed(1);
	document.querySelector(".api_dp").innerHTML = densidade(rho_dest_p,20)[1].toFixed(1);
	document.querySelector(".pm_dp").innerHTML = (100.0*(soma_masdest_pot/m_oleo_p)).toFixed(1);
	document.querySelector(".pv_dp").innerHTML = (100.0*(soma_voldest_pot/vol_oleo_p)).toFixed(1);
	//resíduo
	document.querySelector(".m_rp").innerHTML = mas_res_p.toFixed(1);
	//document.querySelector(".rho_r").innerHTML = rho_res.toFixed(4);
	document.querySelector(".v_rp").innerHTML = vol_res_p.toFixed(1);
	document.querySelector(".api_rp").innerHTML = densidade(rho_res_exp_p,T_res_exp_p)[1].toFixed(1);
	document.querySelector(".pm_rp").innerHTML = (100.0*(mas_res_p/m_oleo_p)).toFixed(1);
	document.querySelector(".pv_rp").innerHTML = (100.0*(vol_res_p/vol_oleo_p)).toFixed(1);

	//perdas
	document.querySelector(".m_pp").innerHTML = mas_perda_p.toFixed(1);
	//document.querySelector(".rho_p").innerHTML = "-"
	document.querySelector(".v_pp").innerHTML = vol_perda_p.toFixed(1);
	document.querySelector(".api_pp").innerHTML = "-"
	document.querySelector(".pm_pp").innerHTML = (100.0*percm_perda_p).toFixed(1);
	document.querySelector(".pv_pp").innerHTML = (100.0*percv_perda_p).toFixed(1);
	
}

function PEV(){
	
	curva_api = this.api_total.concat(this.api_totalp);
	curva_topo = this.T_topo_total.concat(this.T_topo_totalp);
	curva_vol = this.soma_vol_total.concat(this.soma_vol_totalp);
	var curva_vol2 = []
    for (let i = 0; i < curva_vol.length; i++) {
        curva_vol2.push(100*curva_vol[i])
    }
    console.log(curva_topo)

    var trace1 = {
	  x: curva_vol2,
	  y: curva_topo,
	  mode: 'markers',
	  type: 'scatter',
	  name: "Temperatura",
	  marker: { size: 9 }
	};

	var trace2 = {
	  x: curva_vol2,
	  y: curva_api,
	  mode: 'markers',
	  type: 'scatter',
	  name: "ºAPI",
	  yaxis: 'y2',
	  marker: { size: 9 }
	};

	var layout = {
	  title: 'Curva PEV',
	  xaxis: {
	  	title: 'Percentual volumétrico',
	  	range: [0, 100]
	  },
	  yaxis: {
	  	title: 'Temperatura (ºC)',
	  	range: [0, 600]
	  },
	  yaxis2: {
	    title: 'ºAPI',
	    range:[0, 100],
	    anchor: 'x',
	    overlaying: 'y',
	    side: 'right'
	  },
	  legend: {
	  	y: 0.15,
	  	x: 1.1,
	    yref: 'paper',
	    font: {
	      family: 'Arial, sans-serif',
	  	}
	  }
	};

	var data = [trace1,trace2];
	var config = {responsive: true}
	Plotly.newPlot('myChart', data, layout, config);
    /*var chart = new Chart(ctx, {
            // The type of chart we want to create
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Curva PEV',
                data: li,
                backgroundColor: 'rgb(0, 128, 0)',
                pointRadius: 5,
                borderWidth: 3,
                fontSize : 18
            }]
        },

            // Configuration options go here
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    scaleLabel: {
                        display: true,
                        labelString: "Percentual volumétrico"
                    }, 
                    ticks:{
                		suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                		fontSize : 14
            		},
            		
                }],

                yAxes: [{
                    type: 'linear',
                    scaleLabel: {
                        display: true,
                        labelString: "Temperatura (°C)"
                    },
                    ticks:{
                		suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                		fontSize : 14
            		},

                }],         
            },
            chartArea: {
        		backgroundColor: 'rgb(211, 211, 211)'
    		}
        }
    });*/
}