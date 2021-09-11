
//reagente
var ent_rea_bat = document.querySelector("#addreabat");
cont = 0;
//console.log(cont)
ent_rea_bat.addEventListener("click", function(event) {
    event.preventDefault();//evita que faça o padrão, q é apagar ao recarregar a página em form

    //var modelo = document.getElementById("modelo").value;
    if(cont<=2){
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
	ordem_bat.style = "margin-top:20px; text-align:center;"	
	ordem_bat.placeholder = "Ordem";
	ordem_bat.id = "a"+cont+"a";

	var elemento_rea_bat = document.createElement("input");
	elemento_rea_bat.classList.add("form-control");
	elemento_rea_bat.classList.add("mx-2");
	elemento_rea_bat.classList.add("tamanho_e");
	elemento_rea_bat.classList.add("justify-content-center");
	elemento_rea_bat.style = "margin-top:20px;text-align:center;"
	elemento_rea_bat.placeholder = "Substância";
	elemento_rea_bat.id = "a"+(cont + 50)+"a";	


	var conc_rea_bat= document.createElement("input");
	conc_rea_bat.classList.add("form-control");
	conc_rea_bat.classList.add("mx-2");
	conc_rea_bat.classList.add("tamanho_e");
	conc_rea_bat.classList.add("justify-content-center");
	conc_rea_bat.style = "margin-top:20px; text-align:center;"
	conc_rea_bat.placeholder = "Fração molar";
	conc_rea_bat.id = "a"+(cont + 100)+"a";	

	var esteq_rea_bat = document.createElement("input");
	esteq_rea_bat.classList.add("form-control");
	esteq_rea_bat.classList.add("mx-2");
	esteq_rea_bat.classList.add("tamanho_e");
	esteq_rea_bat.classList.add("justify-content-center");

	esteq_rea_bat.style = "margin-top:20px; text-align:center;";
	esteq_rea_bat.placeholder = "Estequiometria";
	esteq_rea_bat.id = "a"+(cont + 150)+"a";	

	var pc_bat = document.createElement("input");
	pc_bat.classList.add("form-control");
	pc_bat.classList.add("mx-2")
	pc_bat.classList.add("tamanho_e");
	pc_bat.classList.add("justify-content-center")
	pc_bat.style = "margin-top:20px; text-align:center;";
	pc_bat.placeholder = "P crítica";
	pc_bat.id = "a"+(cont + 200)+"a";

	var tc_bat = document.createElement("input");
	tc_bat.classList.add("form-control");
	tc_bat.classList.add("mx-2")
	tc_bat.classList.add("tamanho_e");
	tc_bat.classList.add("justify-content-center")
	tc_bat.style = "margin-top:20px; text-align:center;";
	tc_bat.placeholder = "T crítica";
	tc_bat.id = "a"+(cont + 250)+"a";

	var wc_bat = document.createElement("input");
	wc_bat.classList.add("form-control");
	wc_bat.classList.add("mx-2")
	wc_bat.classList.add("tamanho_e");
	wc_bat.classList.add("justify-content-center")
	wc_bat.style = "margin-top:20px; text-align:center;";
	wc_bat.placeholder = "F acêntrico";
	wc_bat.id = "a"+(cont + 300)+"a";
	
	cont += 1
	diverg.classList.add("r"+cont+"r");
	var mae = document.querySelector(".entradas_rea_bat");
	diverg.appendChild(ordem_bat);
	diverg.appendChild(elemento_rea_bat)
	diverg.appendChild(conc_rea_bat);
	diverg.appendChild(esteq_rea_bat)
	diverg.appendChild(pc_bat);
	diverg.appendChild(tc_bat);
	diverg.appendChild(wc_bat);
	
	var linha = document.createElement("hr");
	linha.style = "border: 1px solid red;"
	linha.classList.add("my-2");
	linha.classList.add("row");
	//diverg.appendChild(linha)
	mae.appendChild(diverg);
    }
    
	

	
});	

//produto

var ent_prod_bat = document.querySelector("#addprodbat");
cont_prod = 0;
//console.log(cont)
ent_prod_bat.addEventListener("click", function(event) {
    event.preventDefault();//evita que faça o padrão, q é apagar ao recarregar a página em form
    
    if(cont_prod<=2){
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
	elemento_prod_bat.style = "margin-top:20px; text-align:center;";
	elemento_prod_bat.placeholder = "Substância";
	elemento_prod_bat.id = "a"+(cont_prod + 350)+"a";

	var conc_prod_bat= document.createElement("input");
	conc_prod_bat.classList.add("form-control");
	conc_prod_bat.classList.add("mx-2");
	conc_prod_bat.classList.add("tamanho_f")
	conc_prod_bat.style = "margin-top:20px; text-align:center;";
	conc_prod_bat.placeholder = "Fração molar";
	conc_prod_bat.id = "a"+(cont_prod + 400)+"a";

	var esteq_prod_bat = document.createElement("input");
	esteq_prod_bat.classList.add("form-control");
	esteq_prod_bat.classList.add("mx-2");
	esteq_prod_bat.classList.add("tamanho_f");
	esteq_prod_bat.style = "margin-top:20px; text-align:center;";
	esteq_prod_bat.placeholder = "Estequiometria";
	esteq_prod_bat.id = "a"+(cont_prod + 450)+"a";

	var pc_batp = document.createElement("input");
	pc_batp.classList.add("form-control");
	pc_batp.classList.add("mx-2")
	pc_batp.classList.add("tamanho_e");
	pc_batp.classList.add("justify-content-center")
	pc_batp.style = "margin-top:20px; text-align:center;";
	pc_batp.placeholder = "P crítica";
	pc_batp.id = "a"+(cont_prod + 500)+"a";

	var tc_batp = document.createElement("input");
	tc_batp.classList.add("form-control");
	tc_batp.classList.add("mx-2")
	tc_batp.classList.add("tamanho_e");
	tc_batp.classList.add("justify-content-center")
	tc_batp.style = "margin-top:20px; text-align:center;";
	tc_batp.placeholder = "T crítica";
	tc_batp.id = "a"+(cont_prod + 550)+"a";

	var wc_batp = document.createElement("input");
	wc_batp.classList.add("form-control");
	wc_batp.classList.add("mx-2")
	wc_batp.classList.add("tamanho_e");
	wc_batp.classList.add("justify-content-center")
	wc_batp.style = "margin-top:20px; text-align:center;";
	wc_batp.placeholder = "F acêntrico";
	wc_batp.id = "a"+(cont_prod + 600)+"a";

	cont_prod += 1
	divergp.classList.add("p"+cont_prod+"p");
	var pai = document.querySelector(".entradas_prod_bat");
	divergp.appendChild(elemento_prod_bat)
	divergp.appendChild(conc_prod_bat);
	divergp.appendChild(esteq_prod_bat)
	divergp.appendChild(pc_batp);
	divergp.appendChild(tc_batp);
	divergp.appendChild(wc_batp);
	pai.appendChild(divergp);
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

var botaoRemoverBatProd = document.querySelector("#remprodbat");
botaoRemoverBatProd.addEventListener("click", function(event) {
    event.preventDefault();//evita que faça o padrão, q é apagar ao recarregar a página em form
    if(cont_prod>=1){
    	document.querySelector(".p"+cont_prod+"p").remove()
    	//document.querySelectorAll(".2r")[document.querySelectorAll(".2r").length-1].remove() //removo o último elemento
    	cont_prod -= 1;
    }
});	

/*-----------------------------------------CHECANDO EQUILÍBRIO REACIONAL-------------------------------------------*/
/*$(document).ready(function(){
	$("select.tipo_reacao").change(function(){
        var x = $(this).children("option:selected").val();
		var equilibrio = document.getElementById("tipo_reacao").value;
		if(equilibrio == 0){
			var eq = document.querySelector("#equil");
			var entry_eq = document.createElement("input");
			entry_eq.classList.add("form-control");
			entry_eq.classList.add("form-control-lg");
			entry_eq.id = "gibbs";
			entry_eq.placeholder = "Em J.mol/K";

			var lab = document.createElement("label");
			lab.classList.add("col-form-label");
			lab.classList.add("col-form-label-lg");
			lab.innerHTML = "Insira a energia livre de Gibbs reacional";
			lab.id = "label_gibbs";
			eq.appendChild(lab);
			eq.appendChild(entry_eq);
		}
		if(equilibrio == 1){
			document.getElementById('gibbs').remove();
			document.getElementById('label_gibbs').remove();
		}
	})
})*/
/*-----------------------------------------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------------------------------------*/
/*-------------------------efetuação de cálculos------------------------------------------------------------------*/
function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
        if (a[i] < a[lowest]) lowest = i;
    }
    return lowest;
}

function integratePFR (f, start, end, step, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    let total = 0
    step = step || 0.001
    for (let x = start; x < end; x += step) {
        total += f(x + step / 2, a1, a2, a3, a4, a5, a6, a7, a8, a9) * step
    }
    return total
}

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

function VanDerWaals(Z,P,T,Tc,Pc,w){
	    R = 8.314
	    a = 27*((R*Tc)**2)/64*Pc
	    b = R*Tc/8*Pc
	    A = a*P/((R*T)**2)
	    B = b*P/(R*T)
	    y = Z**3 + (B - 1)*Z**2 + (A - 3*(B**2) - 2*B)*Z  - A*B + B**3 + B**2
	    return y
}

function calculoPFR(){
	var P = parseFloat(document.getElementById("pressao").value);
	var T = parseFloat(document.getElementById("temperatura").value);
	var modelo = document.getElementById("modelo").value;
	var X = parseFloat(document.getElementById("conversao").value*0.01);
    var k = parseFloat(document.getElementById("k_rea").value);
    var Q = parseFloat(document.getElementById("vazao").value);
    var tipo_r = 1//document.getElementById("tipo_reacao").value;

    var FreagB = [];
    var FprodB = [];
    var yreagB = [];
    var creagB = []
    var limitanteB = [];
    var esteqB = [];
    var esteqprodB =[];
    var ordem_reaB = [];
    var subst_reaB = [];
    var subst_prodB = [];
    var p_cr;
    var t_cr;
    var w_cr;
    if (isNaN(X) || isNaN(k)){
       return alert("Nem todos os campos foram preenchidos.");
    }else{
    	R = 8.314;
    	
        for(var i=0;i<cont;i++){
            esteqB.push(parseInt(document.querySelector("#a"+(i+150)+"a").value));//estequiometria reagentes
            yreagB.push(parseFloat(document.querySelector("#a"+(i+100)+"a").value));
            //console.log(document.querySelector("#a"+(i+100)+"a").value)
            ordem_reaB.push(parseFloat(document.querySelector("#a"+(i)+"a").value));
            subst_reaB.push(document.querySelector("#a"+(i+50)+"a").value);
            
            if(modelo == 1 || modelo == 2){
            	p_cr = parseFloat(document.querySelector("#a"+(i+200)+"a").value);
            	t_cr = parseFloat(document.querySelector("#a"+(i+250)+"a").value);
            	w_cr = parseFloat(document.querySelector("#a"+(i+300)+"a").value);
            	
            	if(modelo == 1){
					z = Newton_Raphson(PengRobinson,1,P,T,t_cr,p_cr,w_cr);
				}
				if(modelo == 2){
					z = Newton_Raphson(Redlich_Kwong,1,P,T,t_cr,p_cr,w_cr);
				}
            }else if(modelo == 3){
            	p_cr = parseFloat(document.querySelector("#a"+(i+200)+"a").value);
            	t_cr = parseFloat(document.querySelector("#a"+(i+250)+"a").value);
            	z = Newton_Raphson(VanDerWaals(1,P,T,t_cr,p_cr,1));
            }else{
            	z = 1;
            }
            creagB.push(yreagB[i]*(100000*P/(z*R*T)));
            for(var i=0;i<creagB.length;i++){
	            FreagB.push(Q*creagB[i]);
	            limitanteB.push(FreagB[i]/esteqB[i]);
	        }
        }
        var j = indexOfSmallest(limitanteB);//indice do limitante

        //PRODUTOS--------------------------------------------------------------------------------------------------
        var cprodP = [];
        var yprodP = [];
        for(var i = 0; i<cont_prod;i++){
            esteqprodB.push(-1*parseInt(document.querySelector("#a"+(i+450)+"a").value));//estequiometria produtos
            yprodP.push(parseFloat(document.querySelector("#a"+(i+400)+"a").value));
            subst_prodB.push(document.querySelector("#a"+(i+350)+"a").value);
            if(modelo == 1 || modelo == 2){
            	p_cp = parseFloat(document.querySelector("#a"+(i+500)+"a").value);
            	t_cp = parseFloat(document.querySelector("#a"+(i+550)+"a").value);
            	w_cp = parseFloat(document.querySelector("#a"+(i+600)+"a").value);
            	
            	if(modelo == 1){
					z = Newton_Raphson(PengRobinson,1,P,T,t_cp,p_cp,w_cp);
				}
				if(modelo == 2){
					z = Newton_Raphson(Redlich_Kwong,1,P,T,t_cp,p_cp,w_cp);
				}
            }else if(modelo == 3){
            	p_cp = parseFloat(document.querySelector("#a"+(i+500)+"a").value);
            	t_cp = parseFloat(document.querySelector("#a"+(i+550)+"a").value);
            	z = Newton_Raphson(VanDerWaals(1,P,T,t_cp,p_cp,1));
            }else{
            	z = 1;
            }
            cprodP.push(yprodP[i]*(100000*P/(z*R*T)));
        }
            
        for(var i=0;i<cprodP.length;i++){
            FprodB.push(Q*cprodP[i]);
        }

        rsoma = 0;
        C = [];
        CC = 0;
        MK = esteqB.length + esteqprodB.length

            
        for(var i = 0; i<MK;i++){
            if(i<esteqB.length){
                rsoma -= esteqB[i];
                C.push(creagB[i])
                CC += creagB[i]; 
            }else{     
                rsoma -= esteqprodB[i-esteqB.length];
                C.push(cprodP[i-esteqB.length]);
                CC += cprodP[i-esteqB.length];
            }
        }
        yj0 = yreagB[j];
        gama = rsoma/esteqB[j];
        eta = yj0*gama;
        
        
        //PARTE2
        
        
        //------------------------TERMO DE VELOCIDADE REACIONAL-------------------------------------------
        if(tipo_r == 0){
        	dG = parseFloat(document.getElementById("gibbs").value);
        	keq = Math.exp(-dG/(R*T));
        	var CreagfP = [];
	        for(var i = 0; i<esteqB.length; i++){
	            CreagfP.push(creagB[j]*((creagB[i]/creagB[j]) - (esteqB[i]/esteqB[j])*X)/(1 + eta*X));
	        }
	        var CprodfP = [];
	        for(var i = 0; i<esteqprodB.length; i++){
	            CprodfP.push(creagB[j]*((cprodP[i]/creagB[j]) - (esteqprodB[i]/esteqB[j])*X)/(1 + eta*X));
	        }	
        	
        }else{
        	var CreagfP = [];
	        for(var i = 0; i<esteqB.length; i++){
	            CreagfP.push(creagB[j]*((creagB[i]/creagB[j]) - (esteqB[i]/esteqB[j])*X)/(1 + eta*X));
	        }
	        var CprodfP = [];
	        for(var i = 0; i<esteqprodB.length; i++){
	            CprodfP.push(creagB[j]*((cprodP[i]/creagB[j]) - (esteqprodB[i]/esteqB[j])*X)/(1 + eta*X));
	        }
        }
       
        
        Fj0 = C[j]*Q;
        /*--------------------------------------------------------------------------------------------*/
        
        function funcaoPFR(X,eta,j,creag,esteq,con_rea,kc,tipo_r,cprodP,esteqprodB){
            
            if(tipo_r == 1){
            	r = 1;
	            for(var i=0;i<esteq;i++){
	                r*=Math.pow((((creag[i]/creag[j]) - (esteq[i]/esteq[j])*X)/((1 + eta*X))),con_rea[i]);
	            }
	            //console.log('r '+r)
	            V = 1/(creag[j]*kc*r);
        	}else{
        		r1 = 1;
        		r2 = 1;
        		
        		//console.log(keq);
        		for(var i=0;i<esteq;i++){
	                r1*=Math.pow((((creag[i]/creag[j]) - (esteq[i]/esteq[j])*X)/((1 + eta*X))),con_rea[i]);
	            }
	            for(var i=0;i<esteqprodB;i++){
	            	r2*=Math.pow((((cprodP[i]/creag[j]) - (esteqprodB[i]/esteq[j])*X)/((1 + eta*X))),esteqprodB[i]);	
	            	 
	            }
	            V = 1/(creag[j]*kc*(r1-r2/keq));
        	}
            
            return V
        }

        I = integratePFR(funcaoPFR,0,X,0.00001,eta,j,creagB,esteqB,ordem_reaB,k,tipo_r,cprodP,esteqprodB);//integratePFR(funcaoPFR,0,X,0.00001,eta,j,CreagfP,ordem_reaB,CprodfP,esteqprodB,k,tipo_r);
        V = I*Fj0;
        Vfinal = 1000*V;
        document.querySelector("#V_PFR").innerHTML = Vfinal.toFixed(3); 
        //--------------------------------------------CONCENTRAÇÃO FINAL-------------------------------------------------------------
        if(document.getElementById('conc_bata')===null){
            /*chequei se era nulo e crio a saída*/
            for(var i=0;i<creagB.length;i++){
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
	        	document.querySelector("#rea"+i+"bat").innerHTML = subst_reaB[i] + " : " + (CreagfP[i]).toFixed(3) + " mol/m³" 
        	}
        }else{
            document.getElementById('conc_bata').remove();
            /**/
            for(var i=0;i<creagB.length;i++){
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
	        	document.querySelector("#rea"+i+"bat").innerHTML = subst_reaB[i] + " : " + (CreagfP[i]).toFixed(3) + " mol/m³" 
	        }
        } 
        
        	/*---------------produtos--------------------------------------------------------*/
        if(document.getElementById('conc_bata_fim')===null){
            /*chequei se era nulo e crio a saída*/
            for(var i=0;i<CprodfP.length;i++){
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
	        	document.querySelector("#prod"+i+"bat").innerHTML = subst_prodB[i] + " : " + (CprodfP[i]).toFixed(3) + " mol/m³"
	        } 
        }else{
            document.getElementById('conc_bata_fim').remove();
            /**/
            for(var i=0;i<CprodfP.length;i++){
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
	        	document.querySelector("#prod"+i+"bat").innerHTML = subst_prodB[i] + " : " + (CprodfP[i]).toFixed(3) + " mol/m³"
	        } 
        } 
        
        //obtendo perfilagem de conversão--------------------------------------------------------------------------------------------
        CONV = [];
        contador = 1;
        volume_pfr = [];
        while(contador<=96){
        	xx = contador/100.0;
            CONV.push(contador);
            var CreagfPx = [];
	        for(var i = 0; i<esteqB.length; i++){
	            CreagfPx.push(creagB[j]*((creagB[i]/creagB[j]) - (esteqB[i]/esteqB[j])*xx)/(1+eta*xx));
	        }
	        
	        Fj0x = C[j]*Q;
	        Ix = integratePFR(funcaoPFR,0,xx,0.00001,eta,j,creagB,esteqB,ordem_reaB,k,tipo_r,cprodP,esteqprodB);
	        Vx = Ix*Fj0x;
	        Vfinalx = 1000*Vx;
            volume_pfr.push(Vfinalx);
            contador += 1;
        }
        
        var cria_divg = document.createElement('canvas');
        cria_divg.id = "chart_rea";
        document.querySelector('#grafico_bat').appendChild(cria_divg);
        var ctx = document.getElementById('chart_rea').getContext('2d');
        var li = [];
        for (let i = 0; i < CONV.length; i++) {
            var obj = {};
            obj['y'] = volume_pfr[i];
            obj['x'] = CONV[i];
            li.push(obj)
        }
        var chart = new Chart(ctx, {
            type: 'scatter',
            data: 
                {
                    datasets: [
                        {
                            label: 'Pontos de conversão por volume',
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
                            yAxes: [{
                                type: 'linear',
                                scaleLabel: {
                                    display: true,
                                    labelString: "Volume (L)"
                                }, 
                            }],

                            xAxes: [{
                                type: 'linear',
                                scaleLabel: {
                                    display: true,
                                    labelString: "Conversão (%)"
                                },
                            }],
                        }
                    }
                });    
    }
        //var j = indexOfSmallest(limitanteB);//indice do limitante*/
}