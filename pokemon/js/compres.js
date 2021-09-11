/*METODO DE NEWTON RAPHSON*/
	function Newton_Raphson(f,Z,P,T,Tc,Pc,w){
		Z0 = 1;
		for (var i = 0; i < 200; i++) {
			df = (f(Z0+0.0001,P,T,Tc,Pc,w) - f(Z0-0.0001,P,T,Tc,Pc,w))/0.0002;
			Z = Z0 - f(Z0,P,T,Tc,Pc,w)/df;
			erro = Math.abs((Z - Z0)/Z0);
			if(erro<=0.0001){
				break;
			}
			Z0 = Z;
		}
		return Z;
	}

	function Gases(tipo){
		c = [
			{comp:'Metano', Tc:190.6, Pc:45.99, w:0.012},
			{comp:'Etano', Tc:305.3, Pc:48.72, w:0.1},
			{comp:'Propano', Tc:369.8, Pc:42.28, w:0.152},
			{comp:'n-Butano', Tc:425.1, Pc:37.96, w:0.2},
			{comp:'Isobutano', Tc:408.1, Pc:36.48, w:0.181},
			{comp:'Oxigênio', Tc:154.6, Pc:50.43, w:0.022},
			{comp:'Ar', Tc:132.2, Pc:37.45, w:0.035},
			{comp:'Gás Sulfídrico', Tc:373.5, Pc:89.63, w:0.094}
		]
		return c[tipo];
	}

	function Antoine(tipo){
		ant = [
			{comp:'Metano', A:15.2243, B:597.84, C:-7.16},
			{comp:'Etano', A:15.6637, B:1511.44, C:-17.96},
			{comp:'Propano', A:15.7260, B:1872.46, C:-25.16},
			{comp:'n-Butano', A:15.6782, B:2154.9, C:-34.42},
			{comp:'Isobutano', A:15.5381, B:2032.73, C:-33.15},
			{comp:'Oxigênio', A:15.4075, B:734.55, C:-6.43},
			{comp:'Ar', A:15.01, B:610.45, C:-6.56},
			{comp:'Gás Sulfídrico', A:16.104, B:1768.69, C:-26.06}
		]
		return ant[tipo];
	}

	function VanDerWaals(Z,P,T,Tc,Pc,w){
	    R = 8.314
	    a = 27*((R*Tc)**2)/64*Pc
	    b = R*Tc/8*Pc
	    A = a*P/((R*T)**2)
	    B = b*P/(R*T)
	    y = Z**3 + (B - 1)*Z**2 + (A - 3*(B**2) - 2*B)*Z  - A*B + B**3 + B**2
	    return y
	}

	function Redlich_Kwong(Z,P,T,Tc,Pc,w){
		R = 8.314;
	    a = 0.4278*((R*Tc)**2)/Pc;
	    Tr = T/Tc;
	    alfa = (1 + (0.48 + 1.574*w - 0.176*(w**2))*(1 - Tr**0.5))**2; 
	    b = 0.0867*R*Tc/Pc;
	    A = a*P/((R*T)**2);
	    B = b*P/(R*T);
	    y = Z**3 - Z**2 + (A - (B**2) - B)*Z  - A*B;
	    return y
	}

	function PengRobinson(Z,P,T,Tc,Pc,w){
	    R = 8.314;
	    a = 0.45724*((R*Tc)**2)/Pc;
	    b = 0.0778*R*Tc/Pc;
	    Tr = T/Tc;
	    alfa = (1 + (0.37464 + 1.54226*w - 0.26992*(w**2))*(1 - Tr**0.5))**2;
	    A = a*alfa*P/((R*T)**2);
	    B = b*P/(R*T);
	    y = Z**3 - (1 - B)*Z**2 + (A - 3*(B**2) - 2*B)*Z  - A*B + B**3 + B**2;
	    return y
	}

	function calculoCompressibilidade(){
		var p = parseFloat(document.getElementById("pressao").value);
		var t = parseFloat(document.getElementById("temperatura").value);
		var modelo = document.getElementById("modelo").value;
		var subst = parseInt(document.getElementById("tipo").value);
		tc = Gases(subst).Tc;
		pc = Gases(subst).Pc;
		w = Gases(subst).w;
		A = Antoine(subst).A;
		B = Antoine(subst).B;
		C = Antoine(subst).C;
		P_sat = 0.00133322*Math.exp(A - B/(t + C));
		
		if(modelo == 0){
			z = Newton_Raphson(VanDerWaals,1,p,t,tc,pc,w);
		}
		if(modelo == 1){
			z = Newton_Raphson(PengRobinson,1,p,t,tc,pc,w);
		}
		if(modelo == 2){
			z = Newton_Raphson(Redlich_Kwong,1,p,t,tc,pc,w);
		}
		R = 8.314;
		C = 1000*p/(z*R*t);
		
		document.querySelector("#compressibildiade").innerHTML = z.toFixed(3);
		document.querySelector("#concentracao").innerHTML = C.toFixed(3) + " mmol/m³";

		if(P_sat>p){
			document.querySelector("#estado").innerHTML = " vapor";
		}else{
			document.querySelector("#estado").innerHTML = " líquido";
		}
	}