function calculo(){
	var GC;
	var altura = parseFloat(document.querySelector(".altura").value);
	var pescoco = parseFloat(document.querySelector(".pescoco").value);
	var abdome = parseFloat(document.querySelector(".abdome").value);
	var radios = document.getElementsByName("gender");
	var peso = parseFloat(document.querySelector(".peso").value);
	console.log(altura);

	if(radios[0].checked){
		GC = 85.2096*Math.log(abdome/2.54-pescoco/2.54)/Math.LN10 - 69.73016*Math.log(altura/2.54)/Math.LN10 + 37.26673;
	}
	if(radios[1].checked){
		var gluteo = parseFloat(document.querySelector(".gluteo").value);
		GC = 161.27327*Math.log(abdome/2.54 + gluteo/2.54 - pescoco/2.54)/Math.LN10 - 100.81032*Math.log(altura/2.54)/Math.LN10 - 69.55016;
	}

	var fat = GC*peso/100.0;
	var thin = (1 - GC/100.0)*peso;
	var TMB = 370.0 + (21.6*thin);
	document.querySelector(".gord").innerHTML = "Percentual de gordura: "+parseFloat(GC.toFixed(2))+" %";
	document.querySelector(".gord1").innerHTML = "Massa de gordura: "+parseFloat(fat.toFixed(2))+" kgs";
	document.querySelector(".gord2").innerHTML = "Massa magra: "+parseFloat(thin.toFixed(2))+" kgs";
	document.querySelector(".gord3").innerHTML = "Taxa metabólica basal: "+parseFloat(TMB.toFixed(2))+" kcal";
}



function show_input(x){
	var radios = document.getElementsByName("gender");
	if (x==1) {
		document.getElementById('mulher').style.display='block';
	}
	else{
		document.getElementById('mulher').style.display='none';
	}
	
}