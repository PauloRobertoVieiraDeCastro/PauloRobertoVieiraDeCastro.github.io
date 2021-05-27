
$(document).ready(function(){
    $("select.metodo_raiz").change(function(){
        metodo = $(this).children("option:selected").val();
        var seg_ent = document.createElement('div');
		document.querySelector('#entries').appendChild(seg_ent);
		seg_ent.className ="form-group col-lg-6 col-md-12 col-sm-12";
		seg_ent.id = 'entrada';
        
        if (metodo==1 || metodo == 2 || metodo == 3) {
        		document.getElementById("entrada").remove();
        		var seg_ent = document.createElement('div');
				document.querySelector('#entries').appendChild(seg_ent);
				seg_ent.className ="form-group col-lg-6 col-md-12 col-sm-12";
				seg_ent.id = 'entrada';
				var a2 =  document.createElement('label');
				document.querySelector('#entrada').appendChild(a2);
				a2.className="col-form-label col-form-label-lg";
				a2.innerHTML = "Insira o segundo valor inicial";
				var a3 = document.createElement('input');
				document.querySelector('#entrada').appendChild(a3);
				a3.className="form-control form-control-lg";
				a3.placeholder = "Número real";
				a3.type = "number";
				a3.id = "x1";		        
        }else{
    		document.getElementById("entrada").remove();
    	}
    });
});

/*-------------------------------------Terminando a entrada dinamica-------------------------------------------------------------*/

/*--------------------------------------Cálculo de raízes------------------------------------------------------------------------*/
function calcular(){
	const parser = math.parser();
	var x0 = parseFloat(document.querySelector("#x0").value);
	var tol = parseFloat(document.querySelector("#erro").value);
	var iter = parseInt(document.querySelector("#iter").value);
	var f_get = document.querySelector("#func").value;
	f = parser.evaluate(f_get);
	//var metodologia;
	var metodologia = document.getElementById("metodo_raiz").value;

	/*METODO DE NEWTON RAPHSON*/
	function Newton_Raphson(f,x0,tol,iter){
		xs = [];
		ys = [];
		error = [];
		for (var i = 0; i < iter; i++) {
			df = math.derivative(f_get,'x').evaluate({x:x0});
			x = x0 - f(x0)/df;
			erro = Math.abs((x - x0)/x0);
			error.push(erro);
			if(erro<=tol){
				break;
			}
			x0 = x;
			xs.push(x0);
			ys.push(f(x0));
		}
		return [x0,xs,ys,error];
	}

	/*MÉTODO DA BISSECÇÃO*/
	function Bisseccao(f,x0,x1,tol,iter){
		xs = [];
		ys = [];
		error = [];
	    if((f(x0)>0 && f(x1)>0) || (f(x0)<0 && f(x1)<0)){
	        return alert("Chutes incorretos");
	    }
	    else{
	        for(var i=0; i<=iter; i++){
	            b = ((x0 + x1)/2.0)
	            xs.push(b);
				ys.push(f(b));
	            if((f(b)>0 && f(x0)>0) || (f(b)<0 && f(x0)<0)){
	                erro = Math.abs((b - x0)/x0);
	                error.push(erro);
	                x0 = b;
	            }
	            else{
	                erro = Math.abs((b - x1)/x1);
	                error.push(erro);
	                x1 = b;
	            }
	            if(erro<tol){
	                break;
	            }
	        }
	        return [b,xs,ys,error];
	    }
	}

	/*MÉTODO DA SECANTE*/
	function Secante(f,x0,x1,tol,iter){
		res = []
    	er = []
    	yexp = []
    	for(var i = 0; i < iter; i++){
	        m = (f(x1) - f(x0))/(x1 - x0)
	        x2 = x1 - f(x1)/m
	        res.push(x2);
	        erro = Math.abs((x2 - x1)/x1);
	        er.push(erro);
	        yexp.push(f(x2));
	        x0 = x1;
	        x1 = x2;
	        if(erro<=tol){
	            break;
	        }
	   }
    	return [x1,res,yexp,er];
	}

	/*METODO DA REGULA FALSI*/
	function RegulaFalsi(f,x0,x1,tol,iter){
		res = [];
		ys = [];
		error = []
	    if((f(x0)>0 && f(x1)>0) || (f(x0)<0 && f(x1)<0)){
	        return alert("Chutes incorretos");
	    }
	    else{
	        for(var i=0; i<=iter; i++){
	            b = (x0*f(x1) - x1*f(x0))/(f(x1) - f(x0));
	            res.push(b);

	            if((f(b)>0 && f(x0)>0) || (f(b)<0 && f(x0)<0)){
	                erro = Math.abs((b - x0)/x0);
	                x0 = b;
	            }
	            else{
	                erro = Math.abs((b - x1)/x1);
	                x1 = b;
	            }
	            ys.push(f(b));
	            error.push(erro);
	            if(erro<tol){
	                break;
	            }
	        }
	        return [b,res,ys,error];
	    }
	}

	function Schroder(f,x0,tol,iter){
		function df(f,x0,tol){
			y = (f(x0+0.01*tol) - f(x0))/(0.01*tol);	
			return y
		}
        
        function df2(f,x0,tol){
        	y2 = (f(x0+0.01*tol) - 2*f(x0) + f(x0-0.01*tol))/(Math.pow((0.01*tol),2));	
        	return y2;
        }
        xs = [];
        ys = [];
    	error = [];
	    for(var i=0;i<=iter;i++){
	        x = x0 - (f(x0)*df(f,x0,tol))/(Math.pow(df(f,x0,tol),2) - f(x0)*df2(f,x0,tol));
	        erro = Math.abs((x - x0)/x0);
	        error.push(erro);
	        x0 = x;
	        xs.push(x0);
	        ys.push(f(x0));
	        if(erro<tol){
	            break;
	        }
	    }
	    return [x0,xs,ys,error];
	}

	function Halley(f,x0,tol,iter){
		function df(f,x0,tol){
			y = (f(x0+0.01*tol) - f(x0))/(0.01*tol);	
			return y
		}
        
        function df2(f,x0,tol){
        	y2 = (f(x0+0.01*tol) - 2*f(x0) + f(x0-0.01*tol))/(Math.pow((0.01*tol),2));	
        	return y2;
        }
        xs = [];
        ys = [];
        error = [];
        for(var i=0;i<=iter;i++){
	        x = x0 - 2*f(x0)*df(f,x0,tol)/(2*(Math.pow(df(f,x0,tol),2)) - f(x0)*df2(f,x0,tol));
	        erro = Math.abs((x - x0)/x0);
	        error.push(erro);
	        x0 = x;
	        xs.push(x0);
	        ys.push(f(x0));
	        if(erro<tol){
	            break;
	        }
	    }
	    return [x0,xs,ys,error];	
	}

	function TSM(f,x0,tol,iter){
		function df(f,x0,tol){
			y = (f(x0+0.01*tol) - f(x0))/(0.01*tol);	
			return y
		}
		xs = [];
        ys = [];
        error = [];
        for(var i=0;i<=iter;i++){
	        yn = x0 - f(x0)/df(f,x0,tol);
	        x = yn - f(yn)/(df(f,yn,tol));
	        erro = Math.abs((x - x0)/x0);
	        error.push(erro);
	        x0 = x;
	        xs.push(x0);
	        ys.push(f(x0));
	        if(erro<tol){
	            break
	        }
		}
	    return [x,xs,ys,error];	
	}

	/*------------------------------------*/
	function FLM(f,x0,tol,iter){
		function df(f,x0,tol){
			y = (f(x0+0.01*tol) - f(x0))/(0.01*tol);	
			return y
		}
		xs = [];
        ys = [];
        error = [];
        for(var i=0;i<=iter;i++){
        	yn = x0 - f(x0)/df(f,x0,tol)
	        x = yn - ((5*Math.pow(df(f,x0,tol),2) + 3*df(f,yn,tol))/(Math.pow(df(f,x0,tol),2) + 7*Math.pow(df(f,yn,tol),2))*(f(yn)/df(f,x0,tol)));
	        erro = Math.abs((x - x0)/x0);
	        x0 = x;
	        error.push(erro);
	        xs.push(x0);
	        ys.push(f(x0));
	        if(erro<tol){
	            break;
	        }
		}
	    return [x,xs,ys,error];		
	}
	
	if(metodologia == 0){
		[x,xs,ys,error]	= Newton_Raphson(f,x0,tol,iter);	
	}
	if(metodologia == 1){
		var x1 = parseFloat(document.querySelector("#x1").value);
		[x,xs,ys,error] = Secante(f,x0,x1,tol,iter);
	}
	if(metodologia == 2){
		var x1 = parseFloat(document.querySelector("#x1").value);
		[x,xs,ys,error] = Bisseccao(f,x0,x1,tol,iter);
	}
	if(metodologia == 3){
		var x1 = parseFloat(document.querySelector("#x1").value);
		[x,xs,ys,error]	= RegulaFalsi(f,x0,x1,tol,iter);
	}
	if(metodologia == 4){
		[x,xs,ys,error]	= Schroder(f,x0,tol,iter);
	}
	if(metodologia == 5){
		[x,xs,ys,error]	= Halley(f,x0,tol,iter);
	}
	if(metodologia == 6){
		[x,xs,ys,error]	= TSM(f,x0,tol,iter);
	}
	if(metodologia == 7){
		[x,xs,ys,error] = FLM(f,x0,tol,iter);
	}

	document.querySelector("#resultado").innerHTML = "A raiz da função determinada é: " + x.toFixed(3);
	/*--------------------CRIANDO TABELA---------------------------------------------------------------------------------------*/
	var corpo = document.createElement('tbody');
	document.querySelector('#tabelaedo').appendChild(corpo);
	corpo.id = "corpo";
	document.getElementById("corpo").remove();
	var corpo = document.createElement('tbody');
	document.querySelector('#tabelaedo').appendChild(corpo);
	corpo.id = "corpo";
    for(var i=0;i<xs.length;i++){
    	var criando = document.createElement('tr');
    	document.querySelector('#corpo').appendChild(criando);
	    criando.id = 'x'+i;
		var crit = document.createElement('th');
		document.querySelector('#x'+i).appendChild(crit);
		crit.style = "font-size=14px;";
	    crit.id = i+'k';
	    crit.innerHTML = i;	   
	    var cr = document.createElement('th');
		document.querySelector('#x'+i).appendChild(cr);
		cr.style = "font-size=14px;";
	    cr.id = i+'y';
	    cr.innerHTML = xs[i].toFixed(4);
	    var cr2 = document.createElement('th');
		document.querySelector('#x'+i).appendChild(cr2);
		cr2.style = "font-size=14px;";
		cr2.id = i+'z';
	    cr2.innerHTML = ys[i].toFixed(4);
	    var cr3 = document.createElement('th');
		document.querySelector('#x'+i).appendChild(cr3);
		cr3.style = "font-size=14px;";
		cr3.id = i+'zz';
	    cr3.innerHTML = error[i].toFixed(4);
    }


	/*--------------------Gráfico com chart.js---------------------------------------------------------------------------------*/
	var ctx = document.getElementById('myChart').getContext('2d');
    var li = [];
    var li2 = [];
    var xf1 = parseFloat(x) + 5.0;//6
    var xf2 = parseFloat(x) - 5.0;//-4
    var tamanho = parseInt(100*(xf1 - xf2));
    var intervalo = 10/(tamanho + 1);
    for (let i = 0; i < tamanho; i++) {
        var obj = {};
        var obj2 = {};
        obj['x'] = xf2;
        obj['y'] = f(xf2);
        li.push(obj)
        xf2 += intervalo;
    }

    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Pontos',
                    data: li,
                    backgroundColor: '#3366ff',
                    pointRadius: 2,
                },
                
            ]
        },
        options: {
            /*tooltips: {
              mode: 'index',
              intersect: false,
            },*/
            scales: {
                xAxes: [{
                    type: 'linear',
                    scaleLabel: {
                        display: true,
                        labelString: "x"
                    }, 
                }],

                yAxes: [{
                    type: 'linear',
                    scaleLabel: {
                        display: true,
                        labelString: "f(x)"
                    },
                }],
            }
        }
    });
}


/*---------------------------------------------INTEGRAIS------------------------------------------------------------------------*/
function calcular_integral(){
	const parser = math.parser();
	var x00 = parseFloat(document.querySelector("#x00").value);
	var x01 = parseFloat(document.querySelector("#x01").value);
	var f_getint = document.querySelector("#func_int").value;
	f_int = parser.evaluate(f_getint);
	//var metodologia;
	var metodologia = document.getElementById("metodo_integ").value;
	
	/*METODO DOS TRAPEZIOS*/
	function Trapezio(f,x00,x01){
		n = 500;
		h = (x01 - x00)/n;
	    y00 = f_int(x00);
	    soma_int = 0
	    for(var i=0; i<n-1;i++){
	        x00 += h;
	        
	        soma_int += f_int(x00);
	    }
	    I = h*(y00 + 2*soma_int + f_int(x01))/2.0;
	    return I
	}

	/*MÉTODO DA SIMPSON 1/3*/
	function Simpson(f,x00,x01){
		n = 500;
		h = (x01 - x00)/n
	    y0 = f_int(x00);
	    yf = f_int(x01);
	    S1 = 0;
	    S2 = 0;
	    x = [];
	    for(var i=0;i<=n;i++){
	    	x00 += h;
	    	x.push(x00);
	    }
	    for (var i = 1; i < n; i+=2) {
	    	S1 += f_int(x[i]);
	    }
	    for(var i = 2; i < n-1; i+=2){
	    	S2 += f_int(x[i]);
	    }
	    I = h*(y0 + yf + 4*S1 + 2*S2)/3
	    return I
	}
	/*MÉTODO DE SIMPSON 3/8*/
	function Simpson38(f,x00,x01){
		n = 500;
		h = (x01 - x00)/n
	    S1 = 0;
	    x = [];
	    for(var i=0;i<=n;i++){
	    	x00 += h;
	    	x.push(x00);
	    }
	    for (var i = 0; i <= n; i++) {
	    	if (i==0) {
	    		S1 += f_int(x00);
	    	}
	    	else if(i==n){
	    		S1 += f_int(x01);
	    	}
	    	else if(i%3==0){
	    		S1 += 2*f_int(x[i]);
	    	}
	    	else{
	    		S1 += 3*f_int(x[i])
	    	}
	   	}
	   	I = 3*h*S1/8;
	   	return I;
	}
	
	function Boole(f,x00,x01){
		n = 500;
		h = (x01 - x00)/n;
		x=[];
	    for(var i=0;i<=n;i++){
	    	x00 += h;
	    	x.push(x00);
	    }
	    S1 = 0;
	    for(var i=0;i<=n;i++){
	        if(i == 0 || i == n){
	            S1 += 7*f_int(x[i]);
	        }
	        else if(i%2 == 1){
	            S1 += 32*f_int(x[i]);
	        }
	        else{
	        	if(i%4 == 0){
	                S1 += 14*f_int(x[i]);
	        	}
	            else{
	                S1 += 12*f_int(x[i]);
	            }
	        }
	            
	    }
	    return 2*h*S1/45;
	}

	if(metodologia == 3){
		INTEGRAL = Boole(f_int,x00,x01);
	}
	if(metodologia == 2){
		INTEGRAL = Trapezio(f_int,x00,x01);	
	}
	if(metodologia == 1){
		INTEGRAL = Simpson(f_int,x00,x01);
	}
	if(metodologia == 0){
		INTEGRAL = Simpson38(f_int,x00,x01);
	}
	
	document.querySelector("#resultado_integral").innerHTML = "A integral da função determinada é: " + INTEGRAL.toFixed(3);
	


	/*--------------------Gráfico com chart.js---------------------------------------------------------------------------------*/
	var ctx = document.getElementById('myChart_int').getContext('2d');
    var li = [];
    var xf1 = x00;//6
    var xf2 = x01;//-4
    for (let i = 0; i < n-1; i++) {
        var obj = {};
        obj['x'] = x00;
        obj['y'] = f_int(x00);
        x00 += h;
        li.push(obj)
    }

    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [
                {	
                    label: 'Pontos',
                    data: li,
                    backgroundColor: '#3366ff',
                    pointRadius: 2,
                    fill:true,
                },
                
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    scaleLabel: {
                        display: true,
                        labelString: "x"
                    }, 
                }],

                yAxes: [{
                    type: 'linear',
                    scaleLabel: {
                        display: true,
                        labelString: "f(x)"
                    },
                }],
            }
        }
    });
};



/*----------------------------------------------------Menu lateral-----------------------------------*/
function openNav() {
  document.getElementById("mySidebar").style.width = "210px";
  document.getElementById("main").style.marginLeft = "210px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}