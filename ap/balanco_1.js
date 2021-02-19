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


function balanco_mvd_simples(){
	var rho_oleo = parseFloat(document.querySelector(".rho_oleo").value);
	var m_oleo = parseFloat(document.querySelector(".m_oleo").value);
	var percmas_lev = parseFloat(document.querySelector(".mas_lev").value)*0.01;
	var percvol_lev = parseFloat(document.querySelector(".vol_lev").value)*0.01;
	var mas_dest = parseFloat(document.querySelector(".mas_dest").value);
	var vol_dest = parseFloat(document.querySelector(".vol_dest").value);
	var mas_res = parseFloat(document.querySelector(".mas_res").value);
	var rho_res = parseFloat(document.querySelector(".rho_res").value);

	vol_res = mas_res/rho_res;
	if (isNaN(percmas_lev) || isNaN(percvol_lev)) {
		percvol_lev = 0.0;
		percmas_lev = 0.0;
	}
	if (isNaN(rho_oleo) || isNaN(m_oleo) || isNaN(mas_dest) || isNaN(mas_res) || isNaN(rho_res) || isNaN(vol_dest)){
		return alert("Nem todos os campos foram preenchidos.");
	}
	/*rho_oleo = 0.8085;
	m_oleo = 49791.5;
	percmas_lev = 0.2*0.01;
	percvol_lev = 0.3*0.01;
	mas_dest = 35136.6;
	vol_dest = 45046.78;
	mas_res = 14400;
	rho_res = 0.89;*/

	
	vol_oleo = m_oleo/rho_oleo;
	api_amostra = densidade(rho_oleo,20)[1]

	mas_lev = 0.01*percmas_lev*m_oleo;
	vol_lev = 0.01*percvol_lev*vol_oleo;

	if(mas_lev == 0 || vol_lev == 0){
		rho_lev = 0.0;
		api_lev = 0.0;
	}else{
		rho_lev = mas_lev/vol_lev; //densidade do leve
		api_lev = densidade(rho_lev,20)[1].toFixed(1);
	}

	rho_dest = mas_dest/vol_dest;

	percm_dest = mas_dest/m_oleo;
	percm_res = mas_res/m_oleo;
	mas_perda = m_oleo - mas_dest - mas_res - mas_lev;
	vol_perda = vol_oleo - vol_dest  - vol_res - vol_lev;

	percm_perda = mas_perda/m_oleo;
	percv_perda = vol_perda/vol_oleo;
	function lowestValueAndKey(obj) {
  		var [lowestItems] = Object.entries(obj).sort(([ ,v1], [ ,v2]) => v1 - v2);
  		return lowestItems
	}
	
	delta_res = densidade(rho_res,20)[1]*(percm_perda + percm_res) + densidade(rho_dest,20)[1]*(percm_dest) + densidade(rho_lev,20)[1]*(percmas_lev);
	delta_dest = densidade(rho_res,20)[1]*(percm_res) + densidade(rho_dest,20)[1]*(percm_perda + percm_dest) + densidade(rho_lev,20)[1]*(percmas_lev);
	if(mas_lev === 0.0 || vol_lev === 0.0){
		delta = {'Destilado':Math.abs(delta_dest-api_amostra),'Resíduo':Math.abs(delta_res-api_amostra)}
	}
	else{
		delta_lev = densidade(rho_res,20)[1]*(percm_res) + densidade(rho_dest,20)[1]*(percm_dest) + densidade(rho_lev,20)[1]*(percm_perda + percmas_lev);
		delta = {'Leves': Math.abs(delta_lev-api_amostra),'Destilado':Math.abs(delta_dest-api_amostra),'Resíduo':Math.abs(delta_res-api_amostra)}
		//delta_final = Math.min(Math.abs(delta_lev-api_amostra),Math.abs(delta_dest-api_amostra),Math.abs(delta_res-api_amostra));
	
	}
	

	
	document.querySelector(".onde_perda").innerHTML = 'Perdas no '+ lowestValueAndKey(delta)[0] + ' de ' + lowestValueAndKey(delta)[1].toFixed(2) + ' °API';

	document.querySelector(".m_o").innerHTML = m_oleo.toFixed(1);
	document.querySelector(".rho_o").innerHTML = rho_oleo.toFixed(4);
	document.querySelector(".v_o").innerHTML = vol_oleo.toFixed(1);
	document.querySelector(".api_o").innerHTML = api_amostra.toFixed(1);
	document.querySelector(".pm_o").innerHTML = "100.0";
	document.querySelector(".pv_o").innerHTML = "100.0";

	//destilado
	document.querySelector(".m_d").innerHTML = mas_dest.toFixed(1);
	document.querySelector(".rho_d").innerHTML = rho_dest.toFixed(4);
	document.querySelector(".v_d").innerHTML = vol_dest.toFixed(1);
	document.querySelector(".api_d").innerHTML = densidade(rho_dest,20)[1].toFixed(1);
	document.querySelector(".pm_d").innerHTML = (100.0*(mas_dest/m_oleo)).toFixed(1);
	document.querySelector(".pv_d").innerHTML = (100.0*(vol_dest/vol_oleo)).toFixed(1);

	//leves
	if (mas_lev === 0.0  || vol_lev === 0) {
		document.querySelector(".m_l").innerHTML = "-";
		document.querySelector(".rho_l").innerHTML = "-";
		document.querySelector(".v_l").innerHTML = "-";
		document.querySelector(".api_l").innerHTML = "-";
		document.querySelector(".pm_l").innerHTML = "-";
		document.querySelector(".pv_l").innerHTML = "-";
	}else{
		document.querySelector(".m_l").innerHTML = mas_lev.toFixed(1);
		document.querySelector(".rho_l").innerHTML = rho_lev.toFixed(4);
		document.querySelector(".v_l").innerHTML = vol_lev.toFixed(1);
		document.querySelector(".api_l").innerHTML = densidade(rho_lev,20)[1].toFixed(1);
		document.querySelector(".pm_l").innerHTML = (100.0*(mas_lev/m_oleo)).toFixed(1);
		document.querySelector(".pv_l").innerHTML = (100.0*(vol_lev/vol_oleo)).toFixed(1);
	}
	
	//resíduo
	document.querySelector(".m_r").innerHTML = mas_res.toFixed(1);
	document.querySelector(".rho_r").innerHTML = rho_res.toFixed(4);
	document.querySelector(".v_r").innerHTML = vol_res.toFixed(1);
	document.querySelector(".api_r").innerHTML = densidade(rho_res,20)[1].toFixed(1);
	document.querySelector(".pm_r").innerHTML = (100.0*(mas_res/m_oleo)).toFixed(1);
	document.querySelector(".pv_r").innerHTML = (100.0*(vol_res/vol_oleo)).toFixed(1);

	//perdas
	document.querySelector(".m_p").innerHTML = mas_perda.toFixed(1);
	document.querySelector(".rho_p").innerHTML = "-"
	document.querySelector(".v_p").innerHTML = vol_perda.toFixed(1);
	document.querySelector(".api_p").innerHTML = "-"
	document.querySelector(".pm_p").innerHTML = (100.0*percm_perda).toFixed(1);
	document.querySelector(".pv_p").innerHTML = (100.0*percv_perda).toFixed(1);
}


