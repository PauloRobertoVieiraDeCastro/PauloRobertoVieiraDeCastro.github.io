
	function shuffleArray(array) {

	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array
	}

	
	//titulo = document.querySelector("#perg");
	// Buscar elemento pai
	
	
	valor = 1000;
	p = 1;
	i = 1 + Math.floor(Math.random() * 10)
	j = Math.floor(Math.random() * 11)

	a = i*j - 4;
	b = i*j;
	c = i*(j+3);
	d = (i+1)*(j+1) + 2;
	array = shuffleArray([a,b,c,d]);
	console.log(array);
	
	audio3 = document.getElementById('audio_s1');		
	

	document.querySelector(".quemsoueu").innerHTML = 'Pergunta ' + p + '  - Show da Tabuada';
	document.querySelector(".perg").innerHTML = 'Quanto é '+i+' x '+j+' ? - Valendo R$ '+valor+',00'; 
	document.querySelector(".a").innerHTML = array[0];
	document.querySelector(".b").innerHTML = array[1];
	document.querySelector(".c").innerHTML = array[2];
	document.querySelector(".d").innerHTML = array[3];
	document.getElementById('audio_s1').play();
	//audio3.play();
	function show_input(x){
		var radios = document.getElementsByName("gender");	
	}


	function calculo(){
		
		console.log(array);
		xm = document.querySelector('input[name="gender"]:checked').value;
		if(array[xm] == i*j){
			
			audio = document.getElementById('audio_a');
			
			audio.play();
			
			alert("Parabéns, você acertou. Já garantiu R$ "+valor+',00');
			if(valor<5000){
				audio3 = document.getElementById('audio_s1');
				audio3.play();
				valor += 1000;
			}else if(valor<10000){
				audio3.pause();
				audio4 = document.getElementById('audio_s3');
				audio4.play();
				valor += 5000;
			}else if(valor<50000){
				valor += 10000;
			}else if(valor<100000){
				audio4.pause()
				audio5 = document.getElementById('audio_s2');
				audio5.play();
				valor += 50000;
			}else if(valor<500000){
				valor += 100000;
			}else if(valor<1000000){
				valor += 500000;
			}else{
				alert("Parabéns, você ganhou 1 milhão");
				document.location.reload(true);
			}
			
			p+=1;
			
			console.log(p)
			i = 1 + Math.floor(Math.random() * 10)
			j = Math.floor(Math.random() * 11)

			a = i*j - 4;
			b = i*j;
			c = i*(j+3)+4;
			d = (i+1)*(j+1) + 5;
			array = shuffleArray([a,b,c,d]);
			document.querySelector(".quemsoueu").innerHTML = 'Pergunta ' + p + '  - Show da Tabuada';
			document.querySelector(".perg").innerHTML = 'Quanto é '+i+' x '+j+' ? - Valendo R$ '+valor+',00';
			document.querySelector(".a").innerHTML = array[0];
			document.querySelector(".b").innerHTML = array[1];
			document.querySelector(".c").innerHTML = array[2];
			document.querySelector(".d").innerHTML = array[3]; 
		}
		else{
			//document.getElementById('imagem').src = 'silvio_p.jpg';
			audio2 = document.getElementById('audio_e');
			audio2.play();
			
			//confirm("Que pena, você errou.")
			alert("Que pena, você errou. Perdeu tudo");
			document.location.reload(true);
		}
		
	}
	
	
	function parar(){
		alert("Tudo bem! Você ganhou só R$ "+valor+",00");
		document.location.reload(true);
	}	
	


