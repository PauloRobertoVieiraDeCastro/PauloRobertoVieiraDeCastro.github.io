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

this.contagemf = 1500;
function insRowf(){
    var entradaf = document.createElement('input'); //crio um elemento do tipo input
    entradaf.className = 'form-control form-row col-lg-6 col-md-6 justify-content-center tam'; //coloco uma classe do bootstrap
    entradaf.style = "margin-top: 10px;margin-left: 30px; margin-right: 30px;";
    entradaf.placeholder = "Tempo (em s)";
    entradaf.type = "number";
    var entrada2f = document.createElement('input'); //crio um elemento do tipo input
    entrada2f.className = 'form-control  form-row col-lg-6 col-md-6 justify-content-center tam'; //coloco uma classe do bootstrap
    entrada2f.style = "margin-top: 10px; margin-left: 30px; margin-right: 30px;";
    entrada2f.placeholder = "Volume (em L)";
    entrada2f.type = "number";

    document.querySelector('#teste_filtro').appendChild(entradaf); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#teste_filtro').appendChild(entrada2f); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    this.contagemf += 1; //aumento a contagem pela chamada da função
    entradaf.id = this.contagemf; //imponho o id dinamicamente para cada entry
    entrada2f.id = this.contagemf + 60; //imponho o id dinamicamente para cada entry
}

function remRowf(){
    var identf = this.contagemf;
    var ident2f = this.contagemf + 60;
    document.getElementById(identf).remove();
    document.getElementById(ident2f).remove();
    this.contagemf -= 1;
}

function calcularf(){
    var visc_fil = parseFloat(document.querySelector(".visc_fil").value); //0.001
    var p_fil = parseFloat(document.querySelector(".p_fil").value); //49033
    var c_fil = parseFloat(document.querySelector(".c_fil").value); //6.35
    var rho_fil = parseFloat(document.querySelector(".rho_fil").value);//1
    var alt_fil = parseFloat(document.querySelector(".alt_fil").value);//25.3
    var esp_fil = parseFloat(document.querySelector(".esp_fil").value);//2
    var larg_fil = parseFloat(document.querySelector(".larg_fil").value);//10
    var n_fil = parseInt(document.querySelector(".n_fil").value);//1
    var vaz_fil = parseFloat(document.querySelector(".vaz_fil").value);//19.4
    var t_fil = parseFloat(document.querySelector(".t_fil").value);//0

    if (isNaN(visc_fil) || isNaN(p_fil) || isNaN(c_fil) || isNaN(rho_fil) || isNaN(alt_fil) || isNaN(esp_fil) || isNaN(larg_fil) || isNaN(n_fil) || isNaN(vaz_fil) || isNaN(t_fil)){
        return alert("Nem todos os campos foram preenchidos.");
    }else{
        t = []//[30,48,55,62.4,72.8,84,96,108.8,119,129.6,148.2,168,189,209,230]//#[108,160,321,467,550,638,833,943,1084]//#[18,40.7,108,160,321,467,550,638,833,943,1084,1215]#,1425,1702,2344] #
        v = []//[1.5,2,2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.9,4.2,4.5,4.75,5]
        r = []
        for(var i = 1501; i<=this.contagemf;i++){
            t.push(parseFloat(document.getElementById(i).value));
            v.push(parseFloat(document.getElementById(i+60).value/1000));
        }
        console.log(t);
        console.log(this.contagemf)
        if(t.length != v.length){
            return alert("Os campos tempo e volume coletados não foram preenchidos igualmente.");
        }
        else{
            for(var i = 0; i<t.length;i++){
                r.push(t[i]/v[i]);
            }

            var lrFIL = linearRegression(r,v);
            a = lrFIL['slope'];
            b = lrFIL['intercept'];
            r2 = lrFIL['r2'];
            A = 2*larg_fil*alt_fil*n_fil*0.0001;
            RT = 2*a*p_fil*Math.pow(A,2)/(visc_fil*1000*rho_fil*0.01*c_fil);
            RF = b*A*p_fil/visc_fil;
            tiF = t[t.length-1];
            e_ind = 2.54; //cm
            tmm = t_fil*60; //conversao para segundos
            tind = tiF*(e_ind**2)/Math.pow(esp_fil,2);
            vt_piloto = A*(0.01*esp_fil)/2.0;
            V_ind = vaz_fil*(tind + tmm)/3600;
            V_piloto = v[t.length-1];
            vt_ind = V_ind*vt_piloto/V_piloto;
            Aind = vt_ind/(0.01*e_ind);
            A_pe = 10.7639*Aind;
            if(A_pe<35){
                k = 1.7;
            }else if(A_pe<100){
                k = 3.9;
            }else if(A_pe<250){
                k = 7.0;    
            }else if(A_pe<450){
                k = 10.5;
            }
            else if(A_pe<700){
                k = 15.6;
            }
            else if(A_pe<1000){
                k = 22.2;
            }else{
                k = (48+28.8)/2;   
            }
            nq = Math.ceil(A_pe/k);
            R_MEIO = RF*(1E-8);
            R_TORTA = RT*(1E-8);
            document.querySelector(".restv_meio").innerHTML = R_MEIO.toFixed(2);
            document.querySelector(".restv_torta").innerHTML = R_TORTA.toFixed(2);
            document.querySelector(".tempo_fil").innerHTML = tind.toFixed(2);
            document.querySelector(".a_fil_ind").innerHTML = Aind.toFixed(2);
            document.querySelector(".n_fil_ind").innerHTML = nq;

            var ctx = document.getElementById('myChart_fil').getContext('2d');
            var li = [];
            var li2 = [];
            for (let i = 0; i < t.length; i++) {
                var obj = {};
                var obj2 = {};
                obj['x'] = v[i];
                obj2['x'] = v[i];
                obj['y'] = r[i];
                li.push(obj)
                obj2['y'] = b + a*v[i];
                li2.push(obj2);
            }
            var chart = new Chart(ctx, {
                type: 'scatter',
                data: 
                {
                    datasets: [
                        {
                            label: 'Pontos',
                            data: li,
                            backgroundColor: '#3366ff',
                            pointRadius: 4,
                        },
                        {
                            label: 'Curva por regressão',
                            data: li2,
                            showLine: true,
                            fill: false,
                            borderColor: 'rgba(200, 0, 0)'
                        }
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
                                labelString: "Volume (L)"
                            }, 
                        }],

                        yAxes: [{
                            type: 'linear',
                            scaleLabel: {
                                display: true,
                                labelString: "t/V (s/L)"
                            },
                        }],
                    }
                }
            });
        }
    }
}