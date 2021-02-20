function densidade(SG_T,T){
	//metodologia de cálculo baseada na resolução N6-70 de 25/07/1970 do CNP
	SG_20 = SG_T;
	SG_20_n_menos_1 = 0;
	do{
		if(SG_20< 0.498){
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


function calcular(){
	var rho_input = parseFloat(document.querySelector(".rho").value);
	var temperatura_input = parseFloat(document.querySelector(".temp").value);

	d = densidade(rho_input,temperatura_input);
	document.querySelector(".densidade_final").innerHTML = 'Densidade a 20°C (g/cm³): '+d[0].toFixed(4);
	document.querySelector(".API_final").innerHTML = 'Grau API: '+d[1].toFixed(2);
}

