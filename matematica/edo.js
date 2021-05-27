
function calcular_edo(){
	const parser = math.parser();
	var x0 = parseFloat(document.querySelector("#x0").value);
	var y0 = parseFloat(document.querySelector("#y0").value);
	var f_getint = document.querySelector("#func_edo").value;
	var nsteps = parseInt(document.querySelector("#inter").value);
	var dt = parseFloat(document.querySelector("#step").value);
	f_int = parser.evaluate(f_getint);
	//var metodologia;
	var metodologia = document.getElementById("metodo_integ").value;

	/*--------------------------------------------------------------------------------------*/
	function eulerexplicito(f, t0, x0, dt, nsteps){
	    xs = [t0];
	    ys = [x0];
	    //t = np.linspace(t0,tf,nsteps+1)
	    for(var i=0;i<=nsteps;i++){
	    	x = x0 + dt*f(t0,x0);
	        x0 = x;
	        ys.push(x0);
	        t0 += dt;
	        xs.push(t0);
	    }
	    return [xs,ys];
	}

	function rungekutta(f, t0, x0, dt, nsteps){
		xs = [t0];
	    ys = [x0];
	    //t = np.linspace(t0,tf,nsteps+1)
	    for(var i=0;i<=nsteps;i++){
	    	k1 = dt*f(t0,x0);
        	k2 = dt*f(t0+dt/2,x0+k1/2);
        	k3 = dt*f(t0+dt/2,x0+k2/2);
        	k4 = dt*f(t0+dt,x0+k3);
        	x = x0 + (k1/6 + k2/3 + k3/3 + k4/6);
	        x0 = x;
	        ys.push(x0);
	        t0 += dt;
	        xs.push(t0);
	    }
	    return [xs,ys];
	}

	function implicitoeuler(f, t0, x0, dt, nsteps){
		function NewtonRaphson(g,x00,tol=1E-5,it=200){
			function df(g,x00,tol=1E-5){
				return (g(x00+0.01*tol) - g(x00))/(0.01*tol)
			}
			for(let i=0;i<=it;i++){
				xi = x00 - g(x00)/df(g,x00,tol)
	            erro = Math.abs((xi - x00)/x00);
	            x00 = xi;
	            if(erro<tol){
	                break;
	            }
			}
			return xi;
		}
		xs = [t0];
	    ys = [x0];
	    for(var i=0;i<=nsteps;i++){
	    	gh = (x) => { return x0 + dt*f(t0,x) - x };
        	yn_1 = NewtonRaphson(gh,t0);
        	ys.push(yn_1);
        	x0 = yn_1;
		    t0 += dt;
		    xs.push(t0);
	    }
	    return [xs,ys];	
	}

	function implicitorunge(f, t0, x0, dt, nsteps){
		function NewtonRaphson(g,t0,tol=1E-5,it=200){
			function df(g,t0,tol=1E-5){
				return (g(t0+0.01*tol) - g(t0))/(0.01*tol)
			}
			for(let i=0;i<=it;i++){
				ti = t0 - g(t0)/df(g,t0,tol)
	            erro = Math.abs((ti - t0)/t0);
	            t0 = ti;
	            if(erro<tol){
	                break;
	            }
			}
			return ti;
		}
		xs = [t0];
	    ys = [x0];
	    for(var i=0;i<=nsteps;i++){
	    	gh = (x) => { return x0 + 0.25*dt*(f(t0,x0)+3*f(t0+2*dt/3,x0 + 2*(x - x0)/3)) - x };
        	yn_1 = NewtonRaphson(gh,t0);
        	ys.push(yn_1);
        	console.log(x0);
        	x0 = yn_1;
		    t0 += dt;
		    xs.push(t0);
	    }
	    return [xs,ys];	
	}

	function adam(f, t0, x0, dt, nsteps){
		function NewtonRaphson(g,t0,tol=1E-7,it=500){
			function df(g,t0,tol=1E-7){
				return (g(t0+0.01*tol) - g(t0))/(0.01*tol)
			}
			for(let i=0;i<=it;i++){
				ti = t0 - g(t0)/df(g,t0,tol)
	            erro = Math.abs((ti - t0)/t0);
	            t0 = ti;
	            if(erro<tol){
	                break;
	            }
			}
			return ti;
		}
		xs = [t0];
	    ys = [x0];
	    for(var i=0;i<=nsteps;i++){
	    	if(i<=4){
	    		gh = (x) => { return x0 + dt*f(t0,x) - x };
	        	yn_1 = NewtonRaphson(gh,x0);
	        	ys.push(yn_1);
	        	x0 = yn_1;
			    t0 += dt;
			    xs.push(t0);
	    	}else{
	    		fy0 = xs[i-4]
	            fy1 = xs[i-3]
	            fy2 = xs[i-2]
	            fy3 = xs[i-1]
	    		gh = (x) => { return x0 + dt*(475*f(t0,x) + 1427*f(t0,x0) - 798*f(t0,fy3) + 482*f(t0,fy2) - 173*f(t0,fy1) + 27*f(t0,fy0))/1440 - x };
	        	yn_1 = NewtonRaphson(gh,x0);
	        	ys.push(yn_1);
	        	x0 = yn_1;
			    t0 += dt;
			    xs.push(t0);
	    	}
	    }
	    return [xs,ys];	
	}

	function eulerapr(f, t0, x0, dt, nsteps){
		function NewtonRaphson(g,x00,tol=1E-5,it=200){
			function df(g,x00,tol=1E-5){
				return (g(x00+0.01*tol) - g(x00))/(0.01*tol)
			}
			for(let i=0;i<=it;i++){
				xi = x00 - g(x00)/df(g,x00,tol)
	            erro = Math.abs((xi - x00)/x00);
	            x00 = xi;
	            if(erro<tol){
	                break;
	            }
			}
			return xi;
		}
		xs = [t0];
	    ys = [x0];
	    for(var i=0;i<=nsteps;i++){
	    	gh = (x) => { return x0 + 0.5*dt*(f(t0,x)+f(t0,x0)) - x };
        	yn_1 = NewtonRaphson(gh,t0);
        	ys.push(yn_1);
        	x0 = yn_1;
		    t0 += dt;
		    xs.push(t0);
	    }
	    return [xs,ys];	
	}
	/*--------------------------------------------------------------------------------------*/

	if(metodologia == 0){
		[xs,ys] = eulerexplicito(f_int,x0,y0,dt,nsteps);		
	}
	if(metodologia == 1){
		[xs,ys] = rungekutta(f_int,x0,y0,dt,nsteps);
	}
	if(metodologia == 2){
		[xs,ys] = implicitoeuler(f_int,x0,y0,dt,nsteps);
	}
	if(metodologia == 3){
		[xs,ys] = implicitorunge(f_int,x0,y0,dt,nsteps);
	}
	if(metodologia == 4){
		[xs,ys] = adam(f_int,x0,y0,dt,nsteps);
	}
	if(metodologia == 5){
		[xs,ys] = eulerapr(f_int,x0,y0,dt,nsteps);
	}

	/*--------------------CRIANDO TABELA---------------------------------------------------------------------------------------*/
	var corpo = document.createElement('tbody');
	document.querySelector('#tabelaedo').appendChild(corpo);
	corpo.id = "corpo";
	document.getElementById("corpo").remove();
	var corpo = document.createElement('tbody');
	document.querySelector('#tabelaedo').appendChild(corpo);
	corpo.id = "corpo";
    for(var i=0;i<=nsteps;i++){
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
    }

	/*--------------------Gráfico com chart.js---------------------------------------------------------------------------------*/
	var ctx = document.getElementById('myChart').getContext('2d');
    var li = [];
    for (let i = 0; i < xs.length; i++) {
        var obj = {};
        obj['x'] = xs[i];
        obj['y'] = ys[i];
        li.push(obj)
    }

    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {	
                    label: 'Pontos',
                    data: li,
                    backgroundColor: '#3366ff',
                    pointRadius: 3,
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