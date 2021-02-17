function calcular(){
	var gi = parseFloat(document.querySelector(".gi").value);
	var thata = parseFloat(document.querySelector(".thata").value);
	var neusa = parseFloat(document.querySelector(".neusa").value);
	var get_festas = (gi + thata + neusa)/2;
	var v_gi = gi/3 + thata/12 + neusa/12;
	var v_tha = thata/3 + gi/12 + neusa/12;
	var v_neusa = neusa/3 + gi/12 + thata/12;
	document.querySelector(".venda_get").innerHTML = 'Valor para a GET Festas: R$' + parseFloat(get_festas.toFixed(2));
	document.querySelector(".giselle").innerHTML = 'Valor para Giselle: R$' + parseFloat(v_gi.toFixed(2));
	document.querySelector(".thais").innerHTML = 'Valor para Thais: R$' + parseFloat(v_tha.toFixed(2));
	document.querySelector(".edineusa").innerHTML = 'Valor para Neusa: R$' + parseFloat(v_neusa.toFixed(2));
	if (confirm("Você deseja enviar esses valores via WhatsApp?")) {
		let number = '5521974971784'
		// o texto ou algo vindo de um <textarea> ou <input> por exemplo
		let msg = 'Olá a todas. O valor para a GET é de: R$'+parseFloat(get_festas.toFixed(2))+', para Gi é: R$'+parseFloat(v_gi.toFixed(2))+', Neusa é: R$'+ parseFloat(v_neusa.toFixed(2))+' e Thata é: R$' + parseFloat(v_tha.toFixed(2))
		window.open("https://api.whatsapp.com/send?phone=5521974971784&text=sua%20"+msg);
		//window.open("https://api.whatsapp.com/send?phone=5521974971784&text=sua%20"+msg);	
	} 
}
