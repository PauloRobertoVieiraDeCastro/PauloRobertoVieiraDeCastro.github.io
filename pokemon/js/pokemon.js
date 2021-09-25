var n = 898;
var lista = [];
var lista_tipo = []
$(document).ready(function (){
	var pokemon
	const promises = [];
	document.querySelector("#modelo").value = "Selecione um tipo";
	document.querySelector("#pokemongo").value = " ";
	 //numero de pokemons a visualizar
	for(var i=1;i<=n;i++){
		var url = "https://pokeapi.co/api/v2/pokemon/"+i;
		promises.push(fetch(url).then((res) => res.json()));
	}
	Promise.all(promises).then((results) => {
		//console.log(results[0].abilities)
		//console.log(results[0].abilities.map((type) => type.ability.name).join('/'))
		
        	var pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join('-'),
            id: result.id,
            stats0: result.stats[0]['base_stat'],
            stats1: result.stats[1]['base_stat'],
            stats2: result.stats[2]['base_stat'],
            stats3: result.stats[3]['base_stat'],
            stats4: result.stats[4]['base_stat'],
            stats5: result.stats[5]['base_stat'],
			ability: result.abilities.map((type) => type.ability.name).join('-')
        }));
        j = 0;
	var cria_div;
	
	
	for(var ii=0;ii<n;ii++){

		if(ii%3 == 0 || ii==0){
			j+=1;
			cria_div = document.createElement('div');
			cria_div.classList.add("row");
			//cria_div.classList.add("my-3");
			cria_div.classList.add("linha"+j+"a");
			cria_div.id = "linha"+j+"a";
			document.querySelector(".container").appendChild(cria_div);
			
		}
		var cria_div_p = document.createElement('div'); //div da coluna
		cria_div_p.classList.add("col-md-4");
		cria_div_p.classList.add("col-sm-6");
		cria_div_p.classList.add("my-2");
		cria_div_p.classList.add("coluna"+ii+"-"+j+"a");
		cria_div_p.classList.add("a"+pokemon[ii]['name']);
		cria_div_p.classList.add("a"+pokemon[ii]['type']+"a");
		lista.push(pokemon[ii]['name'])
		lista_tipo.push(pokemon[ii]['type'])
		document.getElementById("linha"+j+"a").appendChild(cria_div_p);

		var cria_div_card = document.createElement('div');
		cria_div_card.classList.add("card");
		cria_div_card.classList.add("mb-12");
		cria_div_card.classList.add("card"+ii+"-"+j+"a"); //div do card
		//cria_div_card.classList.add("modal");
		//cria_div_card.classList.add("fade");
		//cria_div_card.aria-labelledby="exampleModalLabel" 
		//cria_div_card.aria-hidden="true"
		cria_div_card.style = "background: #F8F8F8; border-radius: 15px; padding-top:10px";
		//cria_img.id = "pic"+ii;
		document.querySelector(".coluna"+ii+"-"+j+"a").appendChild(cria_div_card);
		var cria_img = document.createElement('img'); //div da imagem
		cria_img.classList.add("card-img-top");
		cria_img.id = "pic"+ii+"aa";

		var pp = document.createElement('p');
		pp.classList.add("px-1");
		pp.style = " font-size: 1.1rem; font-weight: bold"
		pp.innerHTML = "Type: "+ pokemon[ii]['type'];
		var cor;

		if(pokemon[ii]['type'].includes("grass")){
			cor="green";
			back = "white"
		}else if(pokemon[ii]['type'].includes("fire")){
			cor="#EE8130"
			back = "white"
		}else if(pokemon[ii]['type'].includes("water")){
			cor="blue"
			back = "white"
		}
		else if(pokemon[ii]['type'].includes("electric")){
			cor="#F7D02C"
			back = "black"
		}
		else if(pokemon[ii]['type'].includes("normal")){
			cor="#A8A77A"
			back = "black"
		}
		else if(pokemon[ii]['type'].includes("ice")){
			cor="#96D9D6"
			back = "black"
		}
		else if(pokemon[ii]['type'].includes("fighting")){
			cor="#C22E28"
			back = "white"
		}
		else if(pokemon[ii]['type'].includes("poison")){
			cor="rebeccapurple"
			back = "white"
		}
		else if(pokemon[ii]['type'].includes("ground")){
			cor="#E2BF65"
			back = "black"
		}
		else if(pokemon[ii]['type'].includes("bug")){
			cor="#98FB98"
			back = "black"
		}
		else if(pokemon[ii]['type'].includes("dragon")){
			cor="#6F35FC"
			back = "white"
		}
		else if(pokemon[ii]['type'].includes("flying")){
			cor="#A98FF3"
			back = "black"
		}
		else if(pokemon[ii]['type'].includes("rock")){
			cor="#B87333"
			back = "white"
		}
		else if(pokemon[ii]['type'].includes("psychic")){
			cor="#F95587"
			back = "white"
		}
		else if(pokemon[ii]['type'].includes("ghost")){
			cor="#735797"
			back = "white"
		}
		else if(pokemon[ii]['type'].includes("dark")){
			cor="#705746"
			back = "white"
		}
		else if(pokemon[ii]['type'].includes("steel")){
			cor="#B7B7CE"
			back = "white"
		}else{
			cor="#D685AD"
			back = "white"
		}

		var pp2 = document.createElement('p');
		pp2.classList.add("px-1");
		pp2.style = "font-size: 0.9rem; font-weight: bold"
		pp2.innerHTML = "Ability: "+ pokemon[ii]['ability'];


		document.querySelector(".card"+ii+"-"+j+"a").appendChild(pp);
		document.querySelector(".card"+ii+"-"+j+"a").appendChild(pp2);
		document.querySelector(".card"+ii+"-"+j+"a").appendChild(cria_img);
		document.getElementById('pic'+ii+"aa").setAttribute('src', pokemon[ii]['image'])//pokemon['sprites']['front_default']);

		//corpo do cartao
		var cria_div_card_title = document.createElement('div');
		cria_div_card_title.classList.add("card-body");
		cria_div_card_title.classList.add("carda"+ii+"-"+j+"a");
		cria_div_card_title.style = "background:"+cor+";border-radius:0 0 15px 15px; margin-top:-5px; color:"+back;		
		document.querySelector(".card"+ii+"-"+j+"a").appendChild(cria_div_card_title);

		//texto no corpo
		var cria_h5 = document.createElement('h5');
		cria_h5.classList.add("card-title");
		cria_h5.classList.add("text-center");
		cria_h5.style = "text-transform: capitalize; font-size: 1.8rem; color: "+back
		cria_h5.innerHTML =  ii+1 +". " + pokemon[ii]['name'];
		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_h5);

		var cria_paragrafo = document.createElement('p');
		cria_paragrafo.classList.add("text-center");
		cria_paragrafo.style = "text-transform: capitalize; color: "+back

		var cria_paragrafo2 = document.createElement('p');
		cria_paragrafo2.classList.add("text-center");
		cria_paragrafo2.style = "color: "+back

		var cria_paragrafo3 = document.createElement('p');
		cria_paragrafo3.classList.add("text-center");
		cria_paragrafo3.style = "color: "+back

		var cria_paragrafo4 = document.createElement('p');
		cria_paragrafo4.classList.add("text-center");
		cria_paragrafo4.style = "color: "+back

		var cria_paragrafo5 = document.createElement('p');
		cria_paragrafo5.classList.add("text-center");
		cria_paragrafo5.style = "color: "+back

		var cria_paragrafo6 = document.createElement('p');
		cria_paragrafo6.classList.add("text-center");
		cria_paragrafo6.style = "color: "+back

		var cria_paragrafo7 = document.createElement('p');
		cria_paragrafo7.classList.add("text-center");
		cria_paragrafo7.style = "color: "+back

		var cria_paragrafo8 = document.createElement('p');
		cria_paragrafo8.classList.add("text-center");
		cria_paragrafo8.style = "color: "+back
		var somatotal = pokemon[ii]['stats0'] + pokemon[ii]['stats1'] + pokemon[ii]['stats2'] + pokemon[ii]['stats3'] + pokemon[ii]['stats4'] + pokemon[ii]['stats5']
		//cria_paragrafo.innerHTML =  "Type: "+ pokemon[ii]['type'];
		cria_paragrafo2.innerHTML =  "HP: "+ pokemon[ii]['stats0'];
		cria_paragrafo3.innerHTML =  "Attack: "+ pokemon[ii]['stats1'];
		cria_paragrafo4.innerHTML =  "Defense: "+ pokemon[ii]['stats2'];
		cria_paragrafo5.innerHTML =  "Special Attack: "+ pokemon[ii]['stats3'];
		cria_paragrafo6.innerHTML =  "Special Defense: "+ pokemon[ii]['stats4'];
		cria_paragrafo7.innerHTML =  "Speed: "+ pokemon[ii]['stats5'];
		cria_paragrafo8.innerHTML =  "Total: "+ somatotal;

		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_paragrafo2);
		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_paragrafo3);
		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_paragrafo4);
		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_paragrafo5);
		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_paragrafo6);
		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_paragrafo7);
		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_paragrafo8);
		//cria_div_card_title.classList.add("mb-12");
		//cria_div_p.classList.add("card"+ii+"-"+j+"a"); //div do card
				
	};
        //displayPokemon(pokemon);
    }).then(function(){
		document.getElementById("loading").style.display = "none"
		document.getElementById("conteudo").style.display = "block";
	});
	
});

function filtro(){
	var tipo = document.getElementById("modelo").value;
	if(tipo != "Selecione um tipo"){
		document.getElementById("pokemongo").disabled = true;
		document.getElementById("pokemongo").value = " ";
		for(let i=0;i<n;i++){
			//if(lista_tipo[i].toLowerCase().includes(tipo.toLowerCase())){
			if((document.querySelector(".a"+lista[i].toLowerCase()).innerText.includes(tipo.toLowerCase()))){
				document.querySelector(".a"+lista[i].toLowerCase()).style.display="block";
			}else{
				document.querySelector(".a"+lista[i].toLowerCase()).style.display="none";
			}
		}
	}else{
		document.getElementById("pokemongo").value = " ";
		document.getElementById("pokemongo").disabled = false;
		for(var i=0;i<n;i++){
			document.querySelector(".a"+lista[i].toLowerCase()).style.display="block";
		}
	}
}

function autocompletado(){
	var pok = document.getElementById("pokemongo").value;
	var tam = pok.length;
	var tela = document.querySelector(".a"+pok.toLowerCase());
	if(tela != null){
		for(let i=0;i<n;i++){
			if(lista[i].toLowerCase() == pok.toLowerCase()){
				document.querySelector(".a"+lista[i].toLowerCase()).style.display="block"
			}else{
				//console.log("rr "+lista[i])
				document.querySelector(".a"+lista[i].toLowerCase()).style.display="none"
			}
			//var j = document.querySelector(".a"+lista[i].toLowerCase());
			//console.log(j)
		}
		/*var divm = document.createElement('div')
		divm.classList.add("modal")
		divm.classList.add("fade")
		divm.id = "myModal"
		document.querySelector(".mod").appendChild(divm)

		var divm2 = document.createElement('div');
		divm2.classList.add("modal-dialog");
		document.querySelector("#myModal").appendChild(divm2)

		var divm3 = document.createElement('div');
		divm3.classList.add("modal-content");
		document.querySelector("#myModal").appendChild(divm3);

		var divm4 = document.createElement('div');
		divm4.classList.add('modal-body');
		divm4.innerHTML="cloroquina"
		document.querySelector(".modal-content").appendChild(divm4);*/
	}else{
		for(var i=0;i<n;i++){
			document.querySelector(".a"+lista[i].toLowerCase()).style.display="block";
		}
	}
	
}







