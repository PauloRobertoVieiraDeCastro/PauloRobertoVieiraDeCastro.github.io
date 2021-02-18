function calcular(){
	var gi = parseFloat(document.querySelector(".gi").value);
	var thata = parseFloat(document.querySelector(".thata").value);
	var neusa = parseFloat(document.querySelector(".neusa").value);
	
	if (isNaN(gi)){
		gi = 0;
	}

	if (isNaN(thata)){
		thata = 0;
	}

	if (isNaN(neusa)){
		neusa = 0;
	}
	
	var get_festas = 0.6*(gi + thata + neusa);
	var v_gi = 0.3*gi + 0.05*thata + 0.05*neusa;
	var v_tha = 0.3*thata + 0.05*gi + 0.05*neusa;
	var v_neusa = 0.3*neusa + 0.05*gi + 0.05*thata;
	
	document.querySelector(".venda_get").innerHTML = 'Valor para a GET Festas: R$ ' + parseFloat(get_festas.toFixed(2));
	document.querySelector(".giselle").innerHTML = 'Valor para Giselle: R$ ' + parseFloat(v_gi.toFixed(2));
	document.querySelector(".thais").innerHTML = 'Valor para Thais: R$ ' + parseFloat(v_tha.toFixed(2));
	document.querySelector(".edineusa").innerHTML = 'Valor para Neusa: R$ ' + parseFloat(v_neusa.toFixed(2));
	if (confirm("Você deseja enviar esses valores via WhatsApp?")) {
		let number = '5521974971784'
		// o texto ou algo vindo de um <textarea> ou <input> por exemplo
		let msg = 'Olá a todas. O valor para a GET é de: R$ '+parseFloat(get_festas.toFixed(2))+', para Gi é: R$ '+parseFloat(v_gi.toFixed(2))+', Neusa é: R$ '+ parseFloat(v_neusa.toFixed(2))+' e Thata é: R$' + parseFloat(v_tha.toFixed(2))
		window.open("https://api.whatsapp.com/send?phone=5521974971784&text=%20"+msg);
		//window.open("https://api.whatsapp.com/send?phone=5521974971784&text=sua%20"+msg);	
	} 
}
