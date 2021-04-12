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

this.contagemh = 0;
function insRowh(){
    var entradah = document.createElement('input'); //crio um elemento do tipo input
    entradah.className = 'form-control form-row col-lg-6 col-md-6 justify-content-center tam'; //coloco uma classe do bootstrap
    entradah.style = "margin-top: 10px;margin-left: 30px; margin-right: 30px;";
    entradah.placeholder = "D. da partícula (micra)";
    entradah.type = "number";
    var entrada2h = document.createElement('input'); //crio um elemento do tipo input
    entrada2h.className = 'form-control  form-row col-lg-6 col-md-6 justify-content-center tam'; //coloco uma classe do bootstrap
    entrada2h.style = "margin-top: 10px; margin-left: 30px; margin-right: 30px;";
    entrada2h.placeholder = "Fração mássica parcial (%)";
    entrada2h.type = "number";

    document.querySelector('#teste_hidrociclone').appendChild(entradah); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    document.querySelector('#teste_hidrociclone').appendChild(entrada2h); //pendurei esse nó ao pai de id teste. Portanto é um nó filho
    this.contagemh += 1; //aumento a contagem pela chamada da função
    entradah.id = this.contagemh; //imponho o id dinamicamente para cada entry
    entrada2h.id = this.contagemh + 60; //imponho o id dinamicamente para cada entry
}

function remRowh(){
    var identh = this.contagemh;
    var ident2h = this.contagemh + 60;
    document.getElementById(identh).remove();
    document.getElementById(ident2h).remove();
    this.contagemh -= 1;
}





function integrate (f, start, end, step, a1, a2, a3) {
    let total = 0
    step = step || 0.01
    for (let x = start; x < end; x += step) {
        total += f(x + step / 2, a1, a2, a3) * step
    }
    return total
}



function calcularH(){
    //console.log(x,0,1,0.001)
    var niH = parseFloat(document.querySelector(".EFI_CH").value)*0.01; //0.3
    var P_CH = parseFloat(document.querySelector(".P_AR").value); //206300//
    var CV_CH = parseFloat(document.querySelector(".C_CH").value); //9
    var rhof_CH = parseFloat(document.querySelector(".RHOF_CH").value);
    var rho_CH = parseFloat(document.querySelector(".rho_CH").value);
    var Q_CH = parseFloat(document.querySelector(".Q_CH").value);
    var RL = parseFloat(document.querySelector(".RL").value);
    var viscoh = parseFloat(document.querySelector(".viscoh").value);
    var cargah = parseFloat(document.querySelector(".cargah").value);
    var radios = 0//document.getElementById("integh").value;
     //FUNÇÃO RRB PARA INTEGRAL
    
    function I_RRBh(y,d50_hc,d63_hc,n_hc){
        I = 1 - Math.exp( -(0.693/(Math.pow(d50_hc,3)))*Math.pow(d63_hc*Math.pow((Math.log(1/(1-y))),(1/n_hc)),3) )
        //console.log("I "+I)
        return I
    }
    //FUNÇÃO GGS
    function I_GGSh(y,d50_hc,d100_hc,m_hc){
        I = (Math.exp((5*d100*(Math.pow(y,(1/m_hc)/d50_hc)))) - 1)/(146 + Math.exp((5*d100*(Math.pow(y,(1/m_hc))/d50_hc))))
        return I
    }

    function hidro_calc(Q,visc,rho,DP,rhop,cov,dp,RL){
        D = (4*Math.pow(Q,0.51)*Math.pow(rho,0.27)*Math.exp(-0.52*cov/100))/(Math.pow(DP,0.24)*Math.pow(visc,0.028))
        gg = Math.pow(DP/(rho*(Q*Q)),0.3);
        Du = 0.227*Math.pow(RL*Math.pow(D,5.95)*gg,0.211)
        d50_hc = Math.sqrt(36*visc*rho*Q*0.0474*Math.exp(9*cov/100)*Math.pow((Math.log(1/RL)),0.74)/((rhop - rho)*DP*D*Math.PI))
        NP1 = [];
        for(var jj=0;jj<dp.length;jj++){
            NP1.push((Math.exp(3.5*dp[jj]/d50_hc) - 1)/(Math.exp(3.5*dp[jj]/d50_hc) + Math.exp(3.5) - 2.0))
        }
        L = 5*D
        b = 0.28*D
        e = 0.34*D
        theta = Math.PI/12
        Li = L - ((D - Du)/(2*Math.tan(theta/2)));
        //console.log(Li)
        I = 0.4*D;
        lista = [D,NP1,d50_hc,Du,L,b,e,Li,I]
        return lista;
    }

    if (isNaN(niH) || isNaN(cargah) || isNaN(CV_CH) || isNaN(rhof_CH) || isNaN(rho_CH) || isNaN(Q_CH) || isNaN(RL)){
        return alert("Nem todos os campos foram preenchidos.");
    else if()
    }else{
        if(radios==0){
            for(var i=1;i<=this.contagemh;i++){
                d.push(parseFloat(document.getElementById(i).value)/1000000.0);
                v.push(parseFloat(document.getElementById(i+60).value)/100.0);
            }
            //v = [0.355,0.235,0.13,0.085,0.055,0.06,0.04]
            //d = [2E-6,4E-6,6E-6,8E-6,10E-6,14E-6,20E-6]
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
                var qq = 0;
                DH = hidro_calc(Q_CH,viscoh,rhof_CH,cargah,rho_CH,CV_CH,d,RL);
                var modelo = "RRB";
                var r2hc = lrRRB['r2'];
                do{
                    qq += 1;
                    var a = Q_CH/qq;
                    //console.log(qq)
                    IEF = integrate(I_RRBh,0,1,0.001,DH[2],d632,n) ;
                    nicalc_hc = RL + (1-RL)*IEF;
                    console.log(qq);
                    console.log(nicalc_hc)
                }while(nicalc_hc<=niH && qq<=400)
                var cvu = nicalc_hc*CV_CH*0.01/(RL - RL*CV_CH*0.01 + nicalc_hc*CV_CH*0.01)

                //nic = integrate(I_RRBh, 0, 1, 0.001, d_50, d632, n); 
                //console.log('IEF '+IEF)
                //console.log('NI '+nicalc_hc); 
            }else{
                nic = integrate(I_GGSh, 0, 1, 0.001, d_50, d100, m);
                var modelo = "GGS"
                var qq = 1;
                var r2hc = lrGGS['r2'];
                DH = hidro_calc(Q_CH,viscoh,rhof_CH,cargah,rho_CH,CV_CH,d,RL);
                do{
                    var a = Q_CH/qq;
                    //console.log(qq)
                    IEF = integrate(I_GGSh,0,1,0.001,DH[2],d100,m) ;
                    nicalc_hc = RL + (1-RL)*IEF;
                    qq += 1;
                    
                }while(nicalc_hc<=niH || qq<=400)
                var cvu = nicalc_hc*CV_CH*0.01/(RL - RL*CV_CH*0.01 + nicalc_hc*CV_CH*0.01);
            }
            var D_HC = 100*DH[0]
            var vazao = 3600*a
            var uHC = 100*DH[3]
            var LHC = 100*DH[4]
            var bHC = 100*DH[5]
            var ehc = 100*DH[6]
            var Li = 100*DH[7]
            var cvf = 100*cvu;
            var Lii = 100*DH[8];
            var potencias = Q_CH*cargah;    
            console.log(potencias) 
        }  
        
        
        
        document.querySelector(".dd_hc").innerHTML = D_HC.toFixed(2);
        document.querySelector(".bb_hc").innerHTML = Li.toFixed(2);
        document.querySelector(".u_hc").innerHTML = uHC.toFixed(2);
        document.querySelector(".lc_hc").innerHTML = LHC.toFixed(2);
        document.querySelector(".L1_hc").innerHTML = Lii.toFixed(2);
        document.querySelector(".e_hc").innerHTML = ehc.toFixed(2);
        document.querySelector(".ss_hc").innerHTML = modelo;
        document.querySelector(".r2_hc").innerHTML = r2hc.toFixed(3);
        document.querySelector(".c_hu").innerHTML = cvf.toFixed(2);
        document.querySelector(".n_hcic").innerHTML = qq;
        document.querySelector(".di_hu").innerHTML = bHC.toFixed(2);
        document.querySelector(".VAZAOHC").innerHTML = vazao.toFixed(2);
        document.querySelector(".wattp").innerHTML = potencias.toFixed(2);
    }
    
    
    
}