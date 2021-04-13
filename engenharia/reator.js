this.contagemr = 2000;
function insRowr(){
    var entradar = document.createElement('input'); //crio um elemento do tipo input
    entradar.className = 'form-control form-row col-lg-3 col-md-3 justify-content-center tama'; //coloco uma classe do bootstrap
    entradar.style = "margin-top: 10px;margin-left: 35px;";
    entradar.placeholder = "Ordem";
    entradar.type = "number";
    var entrada2r = document.createElement('input'); //crio um elemento do tipo input
    entrada2r.className = 'form-control form-row col-lg-3 col-md-3 justify-content-center tama'; //coloco uma classe do bootstrap
    entrada2r.style = "margin-top: 10px; margin-left:35px;";
    entrada2r.placeholder = "Reagente";
    entrada2r.type = "text";
    var entrada3r = document.createElement('input'); //crio um elemento do tipo input
    entrada3r.className = 'form-control form-row col-lg-3 col-md-3 justify-content-center tama'; //coloco uma classe do bootstrap
    entrada3r.style = "margin-top: 10px; margin-left:35px;";
    entrada3r.placeholder = "Concentração (Mol/L)";
    entrada3r.type = "number";
    var entrada4r = document.createElement('input'); //crio um elemento do tipo input
    entrada4r.className = 'form-control form-row col-lg-3 col-md-3 justify-content-center tama'; //coloco uma classe do bootstrap
    entrada4r.style = "margin-top: 10px; margin-left:35px;";
    entrada4r.placeholder = "Estequiometria";
    entrada4r.type = "number";

    document.querySelector('#teste_reator').appendChild(entradar); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#teste_reator').appendChild(entrada2r); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#teste_reator').appendChild(entrada3r); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#teste_reator').appendChild(entrada4r); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    this.contagemr += 1; //aumento a contagem pela chamada da função
    entradar.id = this.contagemr; //imponho o id dinamicamente para cada entry
    entrada2r.id = this.contagemr + 60; //imponho o id dinamicamente para cada entry
    entrada3r.id = this.contagemr + 120;
    entrada4r.id = this.contagemr + 180;
}

function remRowr(){
    var identr = this.contagemr;
    var ident2r = this.contagemr + 60;
    var ident3r = this.contagemr + 120;
    var ident4r = this.contagemr + 180;
    document.getElementById(identr).remove();
    document.getElementById(ident2r).remove();
    document.getElementById(ident3r).remove();
    document.getElementById(ident4r).remove();
    this.contagemr -= 1;
}


this.contagemrp = 2500;
function insRowrp(){
    //var entradarp = document.createElement('input'); //crio um elemento do tipo input
    //entradarp.className = 'form-control form-row col-lg-3 col-md-3 justify-content-center tama'; //coloco uma classe do bootstrap
    //entradarp.style = "margin-top: 10px;margin-left: 35px;";
    //entradarp.placeholder = "Ordem";
    //entradarp.type = "number";
    var entrada2rp = document.createElement('input'); //crio um elemento do tipo input
    entrada2rp.className = 'form-control form-row col-lg-3 col-md-3 justify-content-center tama'; //coloco uma classe do bootstrap
    entrada2rp.style = "margin-top: 10px; margin-left:85px;";
    entrada2rp.placeholder = "Produto";
    entrada2rp.type = "text";
    var entrada3rp = document.createElement('input'); //crio um elemento do tipo input
    entrada3rp.className = 'form-control form-row col-lg-3 col-md-3 justify-content-center tama'; //coloco uma classe do bootstrap
    entrada3rp.style = "margin-top: 10px; margin-left:85px;";
    entrada3rp.placeholder = "Concentração (Mol/L)";
    entrada3rp.type = "number";
    var entrada4rp = document.createElement('input'); //crio um elemento do tipo input
    entrada4rp.className = 'form-control form-row col-lg-3 col-md-3 justify-content-center tama'; //coloco uma classe do bootstrap
    entrada4rp.style = "margin-top: 10px; margin-left:85px;";
    entrada4rp.placeholder = "Estequiometria";
    entrada4rp.type = "number";

    //document.querySelector('#teste_reatorp').appendChild(entradarp); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#teste_reatorp').appendChild(entrada2rp); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#teste_reatorp').appendChild(entrada3rp); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#teste_reatorp').appendChild(entrada4rp); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    this.contagemrp += 1; //aumento a contagem pela chamada da função
    //entradarp.id = this.contagemrp; //imponho o id dinamicamente para cada entry
    entrada2rp.id = this.contagemrp + 60; //imponho o id dinamicamente para cada entry
    entrada3rp.id = this.contagemrp + 120;
    entrada4rp.id = this.contagemrp + 180;
}

function remRowrp(){
    var ident2rp = this.contagemrp + 60;
    var ident3rp = this.contagemrp + 120;
    var ident4rp = this.contagemrp + 180;
    document.getElementById(ident2rp).remove();
    document.getElementById(ident3rp).remove();
    document.getElementById(ident4rp).remove();
    this.contagemrp -= 1;
}

$(document).ready(function(){
    $("select.integr").change(function(){
        var x = $(this).children("option:selected").val();
        if (x == 0) {
            if(document.getElementById('vazao_cstr').remove()==null){
                console.log(" ")
            }else{
                document.getElementById('vazao_cstr').remove()
            }

            if(document.getElementById('pressao')==null){
                console.log(" ")
            }else{
                document.getElementById('pressao').remove();
            }

        }
        if (x==1) {
            if(document.getElementById('pressao')==null){
                console.log(" ")
            }else{
                document.getElementById('pressao').remove();
            }

            if(document.getElementById('vazao_cstr')==null){
                console.log(" ")
            }else{
                document.getElementById('vazao_cstr').remove()
            }

                //document.getElementById('pressao').remov
                var cria_div = document.createElement('div');
                document.querySelector('#internacional').appendChild(cria_div);
                cria_div.className ="form-row"
                cria_div.id = 'vazao_cstr'
                cria_div.style = "margin-top: 0%;";

                var a1 = document.createElement('div');
                document.querySelector('#vazao_cstr').appendChild(a1);
                a1.className ="form-group col-lg-6 col-sm-12"
                a1.id = 'v_cstr'
                var a2 =  document.createElement('label');
                document.querySelector('#v_cstr').appendChild(a2);
                a2.className="col-form-label col-form-label-lg"
                a2.innerHTML = "Insira a vazão";
                var a3 = document.createElement('input');
                document.querySelector('#v_cstr').appendChild(a3);
                a3.className="form-control form-control-lg gluteo"
                a3.placeholder = "em L/h"
                a3.type = "number";
                a3.id = "vazao_cstr2"
            
        }
        if(x==2){
            if(document.getElementById('vazao_cstr')==null){
                console.log("")
            }else{
                document.getElementById('vazao_cstr').remove();
            }
                var cria_div = document.createElement('div');
                document.querySelector('#internacional').appendChild(cria_div);
                cria_div.className ="form-row"
                cria_div.id = 'vazao_cstr'
                cria_div.style = "margin-top: 0%;";
                var a1 = document.createElement('div');
                document.querySelector('#vazao_cstr').appendChild(a1);
                a1.className ="form-group col-lg-6 col-sm-12"
                a1.id = 'v_cstr'
                var a2 =  document.createElement('label');
                document.querySelector('#v_cstr').appendChild(a2);
                a2.className="col-form-label col-form-label-lg"
                a2.innerHTML = "Insira a vazão";
                var a3 = document.createElement('input');
                document.querySelector('#v_cstr').appendChild(a3);
                a3.className="form-control form-control-lg gluteo"
                a3.placeholder = "em L/h"
                a3.type = "number";
                a3.id = "vazao_cstr2";

                var cria_divp = document.createElement('div');
                document.querySelector('#palmeiras').appendChild(cria_divp);
                cria_divp.className ="form-row"
                cria_divp.id = 'pressao'
                cria_divp.style = "margin-top: 0%;";
                var a1p = document.createElement('div');
                document.querySelector('#pressao').appendChild(a1p);
                a1p.className ="form-group col-lg-6 col-sm-12"
                a1p.id = 'pressao2'
                var a2p =  document.createElement('label');
                document.querySelector('#pressao2').appendChild(a2p);
                a2p.className="col-form-label col-form-label-lg"
                a2p.innerHTML = "Insira a pressão";
                var a3p = document.createElement('input');
                document.querySelector('#pressao2').appendChild(a3p);
                a3p.className="form-control form-control-lg gluteo"
                a3p.placeholder = "em Pa"
                a3p.type = "number";
                a3p.id = "pressao3"

                var a1t = document.createElement('div');
                document.querySelector('#pressao').appendChild(a1t);
                a1t.className ="form-group col-lg-6 col-sm-12"
                a1t.id = 'temp2'
                var a2t =  document.createElement('label');
                document.querySelector('#temp2').appendChild(a2t);
                a2t.className="col-form-label col-form-label-lg"
                a2t.innerHTML = "Insira a temperatura";
                var a3t = document.createElement('input');
                document.querySelector('#temp2').appendChild(a3t);
                a3t.className="form-control form-control-lg gluteo"
                a3t.placeholder = "em °C"
                a3t.type = "number";
                a3t.id = "temp3"

            
            
        }
    })
})

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

function integratePFR (f, start, end, step, a1, a2, a3, a4, a5, a6) {
    let total = 0
    step = step || 0.001
    for (let x = start; x < end; x += step) {
        total += f(x + step / 2, a1, a2, a3, a4, a5, a6) * step
    }
    return total
}

function calculoR(){
    var radios = document.getElementById("integr").value;
    if(radios==0){
        //batelada
        var X = parseFloat(document.getElementById("conversao").value*0.01);
        var k = parseFloat(document.getElementById("k_rea").value);
        var FreagB = [];
        var FprodB = [];
        var creagB = [];
        var limitanteB = [];
        var esteqB = [];
        var esteqprodB =[];
        var ordem_reaB = [];
        if (isNaN(X) || isNaN(k)){
            return alert("Nem todos os campos foram preenchidos.");
        }else{
            for(var i =2001;i<=this.contagemr;i++){
                esteqB.push(parseInt(document.getElementById(i+180).value));//estequiometria reagentes
                creagB.push(parseFloat(document.getElementById(i+120).value));
                ordem_reaB.push(parseFloat(document.getElementById(i).value));
            }
            for(var i=0;i<creagB.length;i++){
                FreagB.push(creagB[i]);
                limitanteB.push(FreagB[i]/esteqB[i]);
            }
            var jB = indexOfSmallest(limitanteB);//indice do limitante
            cprodB = [];
            for(var i = 2501; i<=this.contagemrp;i++){
                esteqprodB.push(-1*parseInt(document.getElementById(i+180).value));//estequiometria produtos
                cprodB.push(parseFloat(document.getElementById(i+120).value));
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
            I = integrate(integralfunc,0,X,0.00001,jB,FreagB,esteqB,ordem_reaB,k);
            
            CONV = [];
            cont = 1;
            tempo = [];
            if(document.getElementById('VOLREATOR')==null){
                console.log("Nulob")
            }else{
                document.getElementById('VOLREATOR').remove();
                document.getElementById('dankoler').remove();
                document.getElementById('tau').remove();
            } 

            if(document.getElementById('time')==null){
                console.log("Nulob")
            }else{
                document.getElementById('time').remove()
                document.getElementById('chart_rea').remove()
            } 
            
            var cria_divB = document.createElement('div');
            cria_divB.id = "time"
            document.querySelector('#abv').appendChild(cria_divB);
            var a2B =  document.createElement('div');
            document.querySelector('#time').appendChild(a2B);
            a2B.innerHTML = "Tempo reacional (min)";
            var a3B = document.createElement('div');
            document.querySelector('#time').appendChild(a3B);
            a3B.innerHTML = I.toFixed(2)
            while(cont<=99){
                CONV.push(cont);
                tempo.push(integrate(integralfunc,0,cont/100,0.00001,jB,FreagB,esteqB,ordem_reaB,k));
                cont += 1;
            }

            var cria_divg = document.createElement('canvas');
            cria_divg.id = "chart_rea";
            document.querySelector('#grafico').appendChild(cria_divg);
            

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
        }
        
    //CSTR
    }else if(radios == 1){
        //CSTR
        var Q = parseFloat(document.getElementById("vazao_cstr2").value*0.001/3600); 
        var X = parseFloat(document.getElementById("conversao").value*0.01);
        var k = parseFloat(document.getElementById("k_rea").value);
        var Freag = [];
        var Fprod = [];
        var creag = [];
        var limitante = [];
        var esteq = [];
        var esteqprod =[];
        var ordem_rea = [];
        if (isNaN(X) || isNaN(k) || isNaN(Q)){
            return alert("Nem todos os campos foram preenchidos.");
        }else{
            for(var i =2001;i<=this.contagemr;i++){
                esteq.push(parseInt(document.getElementById(i+180).value));//estequiometria reagentes
                creag.push(parseFloat(document.getElementById(i+120).value));
                ordem_rea.push(parseFloat(document.getElementById(i).value));
            }
            for(var i=0;i<creag.length;i++){
                Freag.push(Q*creag[i]);
                limitante.push(Freag[i]/esteq[i]);
            }
            var j = indexOfSmallest(limitante);//indice do limitante
            cprod = [];
            for(var i = 2501; i<=this.contagemrp;i++){
                esteqprod.push(-1*parseInt(document.getElementById(i+180).value));//estequiometria produtos
                cprod.push(parseFloat(document.getElementById(i+120).value));
            }
            for(var i=0;i<cprod.length;i++){
                Fprod.push(Q*cprod[i]);
            }
            var Creagf = [];
            for(var i = 0; i<Freag.length; i++){
                Creagf.push(creag[j]*((Freag[i]/Freag[j]) - esteq[i]/esteq[j]*X));
            }
            
            var Cprodf = [];
            for(var i = 0; i<Fprod.length; i++){
                Cprodf.push(creag[j]*((Fprod[i]/Freag[j]) - esteqprod[i]/esteq[j]*X));
            }
            
            var produto = 1;
            for(var i=0;i<ordem_rea.length;i++){
                produto *= Math.pow(Creagf[i],ordem_rea[i]) 
            }

            vv_r = k*produto;
            V = Freag[j]*X/vv_r;
            Da = vv_r*V/Freag[j];
            tau = 60*V/Q;
            VVV = 1000*V;


           

            //document.querySelector(".reaction").innerHTML = vv_r.toFixed(2);
            if(document.getElementById('time')==null){
                console.log("Nulob")
            }else{
                document.getElementById('time').remove();
                document.getElementById('chart_rea').remove();
            } 

            if(document.getElementById('VOLREATOR')==null){
                console.log("Nulob")
            }else{
                document.getElementById('VOLREATOR').remove();
                document.getElementById('dankoler').remove();
                document.getElementById('tau').remove();
            } 

            var cria_divV = document.createElement('div');
            cria_divV.id = "VOLREATOR"
            document.querySelector('#abv').appendChild(cria_divV);
            var a2V =  document.createElement('div');
            document.querySelector('#VOLREATOR').appendChild(a2V);
            a2V.innerHTML = "Volume (L)";
            var a3V = document.createElement('div');
            document.querySelector('#VOLREATOR').appendChild(a3V);
            a3V.innerHTML = VVV.toFixed(2)

            var cria_divtau = document.createElement('div');
            cria_divtau.id = "tau"
            document.querySelector('#abm').appendChild(cria_divtau);
            var a2e =  document.createElement('div');
            document.querySelector('#tau').appendChild(a2e);
            a2e.innerHTML = "Tempo de residência (min)";
            var a3e = document.createElement('div');
            document.querySelector('#tau').appendChild(a3e);
            a3e.innerHTML = tau.toFixed(2);
            //document.querySelector(".dank").innerHTML = Da.toFixed(2);
            
            var cria_divdank = document.createElement('div');
            cria_divdank.id = "dankoler"
            document.querySelector('#abn').appendChild(cria_divdank);
            var a2d =  document.createElement('div');
            document.querySelector('#dankoler').appendChild(a2d);
            a2d.innerHTML = "Número de Dankholer";
            var a3d = document.createElement('div');
            document.querySelector('#dankoler').appendChild(a3d);
            a3d.innerHTML = Da.toFixed(2);
        }
        //document.querySelector(".dank").innerHTML = Da.toFixed(2);
        //document.querySelector(".TEMPORES").innerHTML = tau.toFixed(2);
    }else{
        //PFR
        var Q = parseFloat(document.getElementById("vazao_cstr2").value*0.001/3600); 
        var X = parseFloat(document.getElementById("conversao").value*0.01);
        var k = parseFloat(document.getElementById("k_rea").value);
        var P = parseFloat(document.getElementById("pressao3").value*0.01);
        var T = parseFloat(document.getElementById("temp3").value) + 273.15;
        if (isNaN(X) || isNaN(k) || isNaN(Q) || isNaN(P) || isNaN(T)){
            return alert("Nem todos os campos foram preenchidos.");
        }else{
            var FreagP = [];
            var FprodP = [];
            var creagP = [];
            var limitanteP = [];
            var esteqP = [];
            var esteqprodP =[];
            var ordem_reaP = [];
            var yreagP = []
            R = 8.314;
            for(var i =2001;i<=this.contagemr;i++){
                esteqP.push(parseInt(document.getElementById(i+180).value));//estequiometria reagentes
                yreagP.push(parseFloat(document.getElementById(i+120).value));
                creagP.push(yreagP[i-2001]*(P/(R*T)));
                ordem_reaP.push(parseFloat(document.getElementById(i).value));
            }
            for(var i=0;i<creagP.length;i++){
                FreagP.push(Q*creagP[i]);
                limitanteP.push(FreagP[i]/esteqP[i]);
            }
            var j = indexOfSmallest(limitanteP);//indice do limitante
            cprodP = [];
            var yprodP = [];
            for(var i = 2501; i<=this.contagemrp;i++){
                esteqprodP.push(-1*parseInt(document.getElementById(i+180).value));//estequiometria produtos
                yprodP.push(parseFloat(document.getElementById(i+120).value));
                cprodP.push(yprodP[i-2501]*(P/(R*T)));
            }
            for(var i=0;i<cprodP.length;i++){
                FprodP.push(Q*cprodP[i]);
            }
            
            rsoma = 0;
            C = [];
            CC = 0;
            MK = esteqP.length + esteqprodP.length

            
            for(var i = 0; i<MK;i++){
                if(i<esteqP.length){
                    rsoma -= esteqP[i];
                    C.push(creagP[i])
                    CC += creagP[i]; 
                }else{
                     
                    rsoma -= esteqprodP[i-esteqP.length];
                    C.push(cprodP[i-esteqP.length]);
                    CC += cprodP[i-esteqP.length];
                }
            }
            yj0 = yreagP[j];
            gama = rsoma/esteqP[j];
            eta = yj0*gama;
            var CreagfP = [];
            for(var i = 0; i<esteqP.length; i++){
                CreagfP.push(creagP[j]*((creagP[i]/creagP[j]) - (esteqP[i]/esteqP[j])*X)/(1+eta*X));
            }
            
            var CprodfP = [];
            for(var i = 0; i<esteqprodP.length; i++){
                CprodfP.push(creagP[j]*((cprodP[i]/creagP[j]) - (esteqprodP[i]/esteqP[j])*X)/(1+eta*X));
            }

            var produtoP = 1;
            for(var i=0;i<ordem_reaP.length;i++){
                produtoP *= Math.pow(CreagfP[i],ordem_reaP[i]); 
            }
            vv_rP = k*produtoP;
            Fj0 = C[j]*Q;
            function funcaoPFR(X,eta,j,creag,esteq,con_rea,kc){
                r = 1;
                for(var i=0;i<esteq;i++){
                    r*=Math.pow((((creag[i]/creag[j]) - (esteq[i]/esteq[j])*X)/((1 + eta*X))),con_rea[i]);
                }
                V = 1/(creag[j]*kc*r);
                return V
            }

            I = integratePFR(funcaoPFR,0,X,0.00001,eta,j,creagP,esteqP,ordem_reaP,k);
            V = I*Fj0;
            Dap = vv_rP*V/FreagP[j];
            taup = 60*V/Q;
            VVVp = 1000*V;

            if(document.getElementById('time')==null){
                console.log("Nulob")
            }else{
                document.getElementById('time').remove();
                document.getElementById('chart_rea').remove();
            } 

            if(document.getElementById('VOLREATOR')==null){
                console.log("Nulob")
            }else{
                document.getElementById('VOLREATOR').remove();
                document.getElementById('dankoler').remove();
                document.getElementById('tau').remove();
            } 

            var cria_divPFR = document.createElement('div');
            cria_divPFR.id = "VOLREATOR"
            document.querySelector('#abv').appendChild(cria_divPFR);
            var a2VP =  document.createElement('div');
            document.querySelector('#VOLREATOR').appendChild(a2VP);
            a2VP.innerHTML = "Volume (L)";
            var a3VP = document.createElement('div');
            document.querySelector('#VOLREATOR').appendChild(a3VP);
            a3VP.innerHTML = VVVp.toFixed(2)

            var cria_divtaup = document.createElement('div');
            cria_divtaup.id = "tau"
            document.querySelector('#abm').appendChild(cria_divtaup);
            var a2ep =  document.createElement('div');
            document.querySelector('#tau').appendChild(a2ep);
            a2ep.innerHTML = "Tempo de residência (min)";
            var a3ep = document.createElement('div');
            document.querySelector('#tau').appendChild(a3ep);
            a3ep.innerHTML = taup.toFixed(2);
            //document.querySelector(".dank").innerHTML = Da.toFixed(2);
            
            var cria_divdankp = document.createElement('div');
            cria_divdankp.id = "dankoler"
            document.querySelector('#abn').appendChild(cria_divdankp);
            var a2dp =  document.createElement('div');
            document.querySelector('#dankoler').appendChild(a2dp);
            a2dp.innerHTML = "Número de Dankholer";
            var a3dp = document.createElement('div');
            document.querySelector('#dankoler').appendChild(a3dp);
            a3dp.innerHTML = Dap.toFixed(2);
        }

    }
}







