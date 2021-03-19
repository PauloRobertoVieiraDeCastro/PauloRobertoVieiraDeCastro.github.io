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

function exponencialRegression(td,z0){
    s1 = 0
    s4a = 0
    s3 = 0
    s2a = 0
    s7 = 0
    for(var i=0;i<z0.length;i++){
        s1 += td[i]*Math.log(z0[i]);
        s4a += td[i];
        s3 += td[i]*td[i];
        s2a += Math.log(z0[i]);
        s7 += Math.log(z0[i])*Math.log(z0[i])
    }
    s4 = (s4a**2)/td.length;
    s2 = s2a*s4a/td.length;
    s5 = s2/td.length;
    s6 = s4a/td.length;
    
    A = (s1 - s2)/(s3 - s4);
    B = Math.exp(s5 - A*s6);

    r1 = s1*td.length;
    r2 = (s4a)*(s1);
    r3 = s3*td.length - s4a**2;
    r4 = s7*td.length - s2a**2;
    R2 = ((r1 - r2)**2)/(r3*r4);

    var er = {};
    er['A'] = A
    er['B'] = B
    er['R2'] = R2
    return er
}


this.contagemS = 500;
function insRowS(){
    var entradaS = document.createElement('input'); //crio um elemento do tipo input
    entradaS.className = 'form-control form-row col-lg-6 col-md-6 justify-content-center tam'; //coloco uma classe do bootstrap
    entradaS.style = "margin-top: 10px;margin-left: 30px; margin-right: 30px;";
    entradaS.placeholder = "Tempo (s)";
    entradaS.type = "number";
    var entrada2S = document.createElement('input'); //crio um elemento do tipo input
    entrada2S.className = 'form-control  form-row col-lg-6 col-md-6 justify-content-center tam'; //coloco uma classe do bootstrap
    entrada2S.style = "margin-top: 10px; margin-left: 30px; margin-right: 30px;";
    entrada2S.placeholder = "Altura (cm)";
    entrada2S.type = "number";

    document.querySelector('#teste_sedimentador').appendChild(entradaS); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#teste_sedimentador').appendChild(entrada2S); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    this.contagemS += 1; //aumento a contagem pela chamada da função
    entradaS.id = this.contagemS; //imponho o id dinamicamente para cada entry
    entrada2S.id = this.contagemS + 60; //imponho o id dinamicamente para cada entry
}

function remRowS(){
    var identS = this.contagemS;
    var ident2S = this.contagemS + 60;
    document.getElementById(identS).remove();
    document.getElementById(ident2S).remove();
    this.contagemS -= 1;
}

console.log(this.contagemS)

function calcularSedimentador(){
    var rhoS = parseFloat(document.querySelector(".rho_S").value);
    var Q_S = parseFloat(document.querySelector(".Q_S").value);
    var csa_S = parseFloat(document.querySelector(".csa_S").value);
    var csl_S = parseFloat(document.querySelector(".csl_S").value);
    if (isNaN(rhoS) || isNaN(Q_S) || isNaN(csa_S) || isNaN(csl_S) ){
        return alert("Nem todos os campos foram preenchidos.");
    }else{
        t = [];
        z = [];
        for(var i=501;i<=this.contagemS;i++){
            console.log(this.contagemS)
            t.push(parseFloat(document.getElementById(i).value));
            z.push(parseFloat(document.getElementById(i+60).value));
        }
        
        var g = exponencialRegression(t,z);
        var a = g['A'];
        var b = g['B'];
        var R2 = g['R2'];
        var lr = linearRegression(z,t);
        var R2_LR = lr['r2'];
        var A_LR = lr['slope']
        var B_LR = lr['intercept']
        var Z0 = z[0];
        var Zmin = csa_S*Z0/csl_S;

        var y =[]
        var dy =[]
        if(R2>(R2_LR)){
            for(var ii=0;ii<t.length;ii++){
                y.push(b*Math.exp(a*t[ii]));
                dy.push(a*b*Math.exp(a*t[ii]));
            }
            tmin = (Math.log(Zmin/b))/a;
        }
        else{
            for(var ik=0;ik<t.length;ik++){
                y.push(a*t[ik] + b);
            }
            tmin = (Zmin - b)/a
        }
            

        zz = []
        tt = []
        d = []
        tr = t[t.length-1]
        for(var i=0;i<t.length;i++){
            if(i>=1){
                d.push((z[i] - z[i-1])/(t[i] - t[i-1]))
                if(Math.abs(d[i-1])<0.25){
                    console.log(i)
                    tr = (t[i-1] + t[i])/2
                    console.log(tr)
                    break
                }   
            }
        }
        console.log(d)

        for(var i=0;i<t.length;i++){
            zz.push(z[i]);
            tt.push(t[i]);
            if(i>=2){
                r2_value = linearRegression(zz,tt)['r2']
                //slope, intercept, r_value, p_value, std_err = stats.linregress(tt,zz)
                gg = exponencialRegression(tt,zz)
                if(gg['R2']>r2_value){
                    tcritico = tt[i]
                    break
                }
                    
            }
        }
        console.log(tcritico)
        Amin = Q_S*tmin/(0.01*Z0);
        console.log(Amin)
        Dmin = Math.sqrt(4*Amin/Math.PI);
        if(Dmin>30){
            Aproj = 1.2*Amin*1.1
        }
        else if(Dmin<30 || Dmin>4.5){
            Aproj = 1.2*1.2*Amin
        }
        else{
            Aproj = 1.2*1.5*Amin
        }
        Dproj = Math.sqrt(4*Aproj/Math.PI)
        H3 = 0.073*Dmin
        H1 = 0.6
        tsh = tr - tcritico
        H2 = 4*Q_S*csa_S*(rhoS - 1000.0)*tr/(3*Amin*csl_S*rhoS)
        Ht = H1 + H2 + H3
        //console.log(Ht);
        document.querySelector(".amin_s").innerHTML = Amin.toFixed(2);
        document.querySelector(".dmin_s").innerHTML = Dmin.toFixed(2);
        document.querySelector(".dproj_s").innerHTML = Dproj.toFixed(2);
        document.querySelector(".aproj_s").innerHTML = Aproj.toFixed(2);
        document.querySelector(".hproj_s").innerHTML = 1.1*Ht.toFixed(2);

        var ctx = document.getElementById('myChart').getContext('2d');
        var li = [];
        var li2 = [];
        for (let i = 0; i < t.length; i++) {
            var obj = {};
            var obj2 = {};
            obj['x'] = t[i];
            obj['y'] = z[i];
            li.push(obj)
            obj2['x'] = t[i];
            if(i == 0 || i == t.length){
                obj2['y'] = z[i];
            }else{
                obj2['y'] = b*Math.exp(a*t[i-1])/(10**24);
            }
            
            li2.push(obj2);
        }

        var chart = new Chart(ctx, {
            // The type of chart we want to create
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Pontos do teste',
                    data: li,
                    backgroundColor: '#3366ff',
                    pointRadius: 4,
                },
                {
                    label: 'Curva',
                    data: li2,
                    showLine: true,
                    fill: false,
                    borderColor: 'rgba(200, 0, 0)'
                }
            ]
        },

            // Configuration options go here
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
                        labelString: "Tempo (min)"
                    }, 
                }],

                yAxes: [{
                    type: 'linear',
                    scaleLabel: {
                        display: true,
                        labelString: "Altura (cm)"
                    },
                }],
            }
        }
    });
    }
}
