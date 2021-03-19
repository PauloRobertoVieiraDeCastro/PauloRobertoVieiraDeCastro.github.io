function linearRegression(y,x){
        var lr = {};
        var n = y.length;
        var sum_x = 0;
        var sum_y = 0;
        var sum_xy = 0;
        var sum_xx = 0;
        var sum_yy = 0;

        for (var i = 0; i < y.length; i++) {
            sum_x += x[i];
            sum_y += y[i];
            sum_xy += (x[i]*y[i]);
            sum_xx += (x[i]*x[i]);
            sum_yy += (y[i]*y[i]);
        } 

        lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
        lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
        lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);

        return lr;
}
console.log(3**2)

this.contagem = 0;
function insRow(){
	var entrada = document.createElement('input'); //crio um elemento do tipo input
    entrada.className = 'form-control form-row col-lg-6 col-md-6 justify-content-center tam'; //coloco uma classe do bootstrap
    entrada.style = "margin-top: 10px;margin-left: 30px; margin-right: 30px;";
    entrada.placeholder = "D. partícula (em micra)";
    entrada.type = "number";
    var entrada2 = document.createElement('input'); //crio um elemento do tipo input
    entrada2.className = 'form-control  form-row col-lg-6 col-md-6 justify-content-center tam'; //coloco uma classe do bootstrap
    entrada2.style = "margin-top: 10px; margin-left: 30px; margin-right: 30px;";
    entrada2.placeholder = "Fração mássica (%)";
    entrada2.type = "number";

    document.querySelector('#teste_ciclone').appendChild(entrada); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#teste_ciclone').appendChild(entrada2); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    this.contagem += 1; //aumento a contagem pela chamada da função
    entrada.id = this.contagem; //imponho o id dinamicamente para cada entry
    entrada2.id = this.contagem + 60; //imponho o id dinamicamente para cada entry
}

function remRow(){
    var ident = this.contagem;
    var ident2 = this.contagem + 60;
    document.getElementById(ident).remove();
    document.getElementById(ident2).remove();
    this.contagem -= 1;
}



function integrate (f, start, end, step, a1, a2, a3) {
    let total = 0
    step = step || 0.01
    for (let x = start; x < end; x += step) {
        total += f(x + step / 2, a1, a2, a3) * step
    }
    return total
}
document.getElementById("botao_rem").disabled = true;
document.getElementById("botao_add").disabled = true; 

$(document).ready(function(){
    $("select.integ").change(function(){
        var x = $(this).children("option:selected").val();
        console.log(x);
        if (x==0) {
        document.getElementById("botao_rem").disabled = false;
        document.getElementById("botao_add").disabled = false;       
        document.getElementById('d_ggs').style.display = "none"
        document.getElementById('m_ggs').style.display = "none";
        var cria_div = document.createElement('div');
        document.querySelector('#Gremio').appendChild(cria_div);
        cria_div.className ="form-row justify-content-center"
        cria_div.id = 'teste_ciclone'
        cria_div.style = "margin-top: 5%;"
    
    }
    if(x == 1){
        document.getElementById("botao_rem").disabled = true;
        document.getElementById("botao_add").disabled = true;
        if(document.getElementById('d_ggs').remove()==null){
            console.log("Nuloc")
        }else{
            document.getElementById('d_ggs').remove()
        }

        if(document.getElementById('m_ggs').remove()==null){
            console.log("Nulob")
        }else{
            document.getElementById('m_ggs').remove()
        } 

        var cria_div = document.createElement('div');
        document.querySelector('#Gremio').appendChild(cria_div);
        cria_div.className ="form-row justify-content-center"
        cria_div.id = 'teste_ciclone'
        cria_div.style = "margin-top: 5%;"
        
        document.getElementById('teste_ciclone').remove()
        
        var a1 = document.createElement('div');
        document.querySelector('#d_ggs2').appendChild(a1);
        a1.className ="form-group col-lg-6 col-sm-12"
        a1.id = 'd_ggs'
        var a2 =  document.createElement('label');
        document.querySelector('#d_ggs').appendChild(a2);
        a2.className="col-form-label col-form-label-lg"
        a2.innerHTML = "Insira o D<sub>63,2</sub>";
        var a3 = document.createElement('input');
        document.querySelector('#d_ggs').appendChild(a3);
        a3.className="form-control form-control-lg gluteo"
        a3.placeholder = "em micra"
        a3.type = "number";
        a3.id = "d63,2"

        var a1a = document.createElement('div');
        document.querySelector('#d_ggs2').appendChild(a1a);
        a1a.className ="form-group col-lg-6 col-sm-12"
        a1a.id = 'm_ggs'
        var a2a =  document.createElement('label');
        document.querySelector('#m_ggs').appendChild(a2a);
        a2a.className="col-form-label col-form-label-lg"
        a2a.innerHTML = "Insira o n";
        var a3a = document.createElement('input');
        document.querySelector('#m_ggs').appendChild(a3a);
        a3a.className="form-control form-control-lg gluteo"
        a3a.type = "number";
        a3a.id = "n"
        //document.getElementById('teste_ciclone').style.display='none';
    }
    if(x == 2){
        document.getElementById("botao_rem").disabled = true;
        document.getElementById("botao_add").disabled = true;
        if(document.getElementById('d_ggs').remove()==null){
            console.log("Nulod")
        }else{
            document.getElementById('d_ggs').remove()
        }

        if(document.getElementById('m_ggs').remove()==null){
            console.log("Nuloe")
        }else{
            document.getElementById('m_ggs').remove()
        } 


        var cria_div = document.createElement('div');
        document.querySelector('#Gremio').appendChild(cria_div);
        cria_div.className ="form-row justify-content-center"
        cria_div.id = 'teste_ciclone'
        cria_div.style = "margin-top: 5%;"
        
        document.getElementById('teste_ciclone').remove()
        
        var a1 = document.createElement('div');
        document.querySelector('#d_ggs2').appendChild(a1);
        a1.className ="form-group col-lg-6 col-sm-12"
        a1.id = 'd_ggs'
        var a2 =  document.createElement('label');
        document.querySelector('#d_ggs').appendChild(a2);
        a2.className="col-form-label col-form-label-lg"
        a2.innerHTML = "Insira o D<sub>100</sub>";
        var a3 = document.createElement('input');
        document.querySelector('#d_ggs').appendChild(a3);
        a3.className="form-control form-control-lg gluteo"
        a3.placeholder = "em micra"
        a3.type = "number";
        a3.id = "d100c"

        var a1a = document.createElement('div');
        document.querySelector('#d_ggs2').appendChild(a1a);
        a1a.className ="form-group col-lg-6 col-sm-12"
        a1a.id = 'm_ggs'
        var a2a =  document.createElement('label');
        document.querySelector('#m_ggs').appendChild(a2a);
        a2a.className="col-form-label col-form-label-lg"
        a2a.innerHTML = "Insira o m";
        var a3a = document.createElement('input');
        document.querySelector('#m_ggs').appendChild(a3a);
        a3a.className="form-control form-control-lg gluteo"
        a3a.type = "number";
        a3a.id = "m"
        //document.getElementById('teste_ciclone').style.display='none';
    }   
        
    });
});




function calcular(){
    var ni = parseFloat(document.querySelector(".EFI_C").value)*0.01;
    var P_C = parseFloat(document.querySelector(".P_AR").value);
    var T_C = parseFloat(document.querySelector(".T_AR").value);
    var v_C = parseFloat(document.querySelector(".V_C").value);
    var rho_C = parseFloat(document.querySelector(".rho_C").value);
    var Q_C = parseFloat(document.querySelector(".Q_C").value);
    
    var radios = document.getElementById("integ").value;
     //FUNÇÃO RRB PARA INTEGRAL
    
    function I_RRB(y,d50_c,d63_c,n_c){
        I = ((d63_c*((Math.log(1/(1 - y)))**(1/n_c))/d50_c)**2)/(1 + (d63_c*((Math.log(1/(1 - y)))**(1/n_c))/d50_c)**2)
        return I
    }
    //FUNÇÃO GGS
    function I_GGS(y,d50,d100,m_c){
        I = (d100*(y**m_c/d50)**2)/(1 + (d100*(y**m_c/d50)**2))
        return I
    }

    if (isNaN(ni) || isNaN(P_C) || isNaN(T_C) || isNaN(v_C) || isNaN(rho_C) || isNaN(Q_C)){
        return alert("Nem todos os campos foram preenchidos.");
    }else{
        v = [];
        d = [];
        var d_50 = 0.0000003;
        if(radios==0){
            for(var i=1;i<=this.contagem;i++){
                d.push(parseFloat(document.getElementById(i).value)/1000.0);
                v.push(parseFloat(document.getElementById(i+60).value)/100.0);
            }
            var y = [v[0]] 
            var soma_1 = v[0];
            for(var k=1;k<d.length;k++){
                soma_1 += v[k];
                y.push(soma_1) //soma cumulativa
            }
            LnD = [];
            LNLN = [];
            LnY = []
            for(var k=0;k<d.length;k++){
                LnD.push(Math.log(d[k]));
                LNLN.push(Math.log(Math.log(1/(1-y[k])))); //para o rrb
                LnY.push(Math.log(y[k])); //para o ggs
            } 

            var lrGGS = linearRegression(LnY,LnD);
            var d100 = Math.exp(-lrGGS['intercept']/lrGGS['slope']);
            var m = lrGGS['slope'];
            

            var lrRRB = linearRegression(LNLN,LnD); //y e x
            var n = lrRRB['slope'];
            var d632 = Math.exp(-lrRRB['intercept']/lrRRB['slope']);

            if(lrRRB['r2']>=lrGGS['r2']){
                var nic = integrate(I_RRB, 0, 1, 0.001, d_50, d632, n);  
            }else{
                var nic = integrate(I_GGS, 0, 1, 0.001, d_50, d100, m);
            }

            var erro = Math.abs((ni-nic)/ni);
            contador = 0        
            while(erro>=0.01 && contador<=200){
                d_50 += 0.0000001;
                if(lrRRB['r2']>=lrGGS['r2']){
                    var nic = integrate(I_RRB, 0, 1, 0.001, d_50, d632, n);  
                }else{
                    var nic = integrate(I_GGS, 0, 1, 0.001, d_50, d100, m);
                }
                erro = Math.abs((ni-nic)/ni);
            }
            console.log(d_50)
        }  
        
        //var v = [0.12,0.15,0.21,0.15,0.17,0.08];
        //var d = [0.000005,0.00001,0.000015,0.00002,0.00003,0.00004] //- variaveis de teste
        
        if(radios == 1){
            var d632 = parseFloat(document.getElementById("d63,2").value)/1000000;
            var n = parseFloat(document.getElementById("n").value);
            var nic = integrate(I_RRB, 0, 1, 0.001, d_50, d632, n); 
            var erro = Math.abs((ni-nic));  
            /*console.log('n'+n)
            console.log('nic'+nic)
            console.log('d632'+d632);*/
            contador = 0;
            while(erro>=0.001 && contador<=200){
                d_50 += 0.0000001;
                var nic = integrate(I_RRB, 0, 1, 0.001, d_50, d632, n);
                erro = Math.abs((ni-nic));
                console.log('erro '+erro)
                console.log('nic'+nic)
                contador += 1;
                console.log(contador)
            }
            console.log(d_50)
        }
        if(radios == 2){
            var d100 = parseFloat(document.getElementById("d100").value)/1000.0;
            var m = parseFloat(document.getElementById("m").value);
            var nic = integrate(I_GGS, 0, 1, 0.001, d_50, d100, m);
            var erro = Math.abs((ni-nic));   
            var contador = 0 ;
            while(erro>=0.001 && contador<=200){
                d_50 += 0.0000001;
                var nic = integrate(I_GGS, 0, 1, 0.001, d_50, d100, m);  
                erro = Math.abs((ni-nic)/ni);
                contador += 1;
                
            }
            console.log(d_50)
        }

        var stk = 0.000633;
        var visc = (1.827*Math.pow(10,-5))*((291.15 + 120)/(T_C + 273.15 + 120))*(((T_C+273.15)/291.15)**1.5)//(1.73*Math.pow(10,-5))*(Math.pow((T_C/273),1.5))*(398/(125 + T_C))
        var rho = P_C*0.0289644/(8.314*(T_C+273.15))
        console.log("rho_ar "+rho)
        console.log("Visc "+visc)
        var Dc = (2*(rho_C - rho)*v_C*0.125*(Math.pow(d_50,2))/(9*Math.PI*stk*visc))
        var Qv = 0.125*Math.pow(Dc,2)*v_C
        var N = Math.floor(Q_C/Qv)
        var Bc = 0.25*Dc
        var Hc = 0.5*Dc
        var Doo = 0.5*Dc
        var Du = 0.25*Dc
        var Ne = 5
        var Lc = 2*Dc
        var L = 4*Dc
        var Sc = 0.62*Dc
        var Zc = 2*Dc;
        var Eu = 316;
        var dP = Eu*8*rho*(Qv**2)/((Dc**4)*(Math.PI**2));
        var potencia = dP*Q_C
        //console.log(dP)
        document.querySelector(".dd_c").innerHTML = Dc.toFixed(2);
        document.querySelector(".bb_c").innerHTML = Bc.toFixed(2);
        document.querySelector(".hh_c").innerHTML = Hc.toFixed(2);
        document.querySelector(".ll_c").innerHTML = Lc.toFixed(2);
        document.querySelector(".zz_c").innerHTML = Zc.toFixed(2);
        document.querySelector(".ss_c").innerHTML = Sc.toFixed(2);
        document.querySelector(".dd_o").innerHTML = Doo.toFixed(2);
        document.querySelector(".dd_u").innerHTML = Du.toFixed(2);
        document.querySelector(".n_cic").innerHTML = N;
        document.querySelector(".pressure").innerHTML = dP.toFixed(2);
        document.querySelector(".watt").innerHTML = potencia.toFixed(2);
    }
    
    


    

       
    
    
    
    //var nic = integrate(I_RRB,0,1,0.001)
    
    
}