$(document).ready(function (){
	var pokemon
	const promises = [];
	var n = 898; //numero de pokemons a visualizar
	for(var i=1;i<=n;i++){
		var url = "https://pokeapi.co/api/v2/pokemon/"+i;
		promises.push(fetch(url).then((res) => res.json()));
	}
	Promise.all(promises).then((results) => {
        	var pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join('/'),
            id: result.id,
            stats0: result.stats[0]['base_stat'],
            stats1: result.stats[1]['base_stat'],
            stats2: result.stats[2]['base_stat'],
            stats3: result.stats[3]['base_stat'],
            stats4: result.stats[4]['base_stat'],
            stats5: result.stats[5]['base_stat'],
        }));
        j = 0;
	var cria_div;
	
	for(var ii=0;ii<n;ii++){

		if(ii%3 == 0 || ii==0){
			j+=1;
			cria_div = document.createElement('div');
			cria_div.classList.add("row");
			cria_div.classList.add("my-3");
			cria_div.classList.add("linha"+j+"a");
			cria_div.id = "linha"+j+"a";
			document.querySelector(".container").appendChild(cria_div);
			
		}
		var cria_div_p = document.createElement('div'); //div da coluna
		cria_div_p.classList.add("col-md-4");
		cria_div_p.classList.add("col-sm-6");
		cria_div_p.classList.add("my-2");
		cria_div_p.classList.add("coluna"+ii+"-"+j+"a");
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
		pp.style = "text-transform: capitalize; font-size: 1.1rem; font-weight: bold"
		pp.innerHTML = "Type: "+ pokemon[ii]['type'];
		document.querySelector(".card"+ii+"-"+j+"a").appendChild(pp);
		document.querySelector(".card"+ii+"-"+j+"a").appendChild(cria_img);
		document.getElementById('pic'+ii+"aa").setAttribute('src', pokemon[ii]['image'])//pokemon['sprites']['front_default']);

		//corpo do cartao
		var cria_div_card_title = document.createElement('div');
		cria_div_card_title.classList.add("card-body");
		cria_div_card_title.classList.add("carda"+ii+"-"+j+"a");
		cria_div_card_title.style = "background: blue;border-radius:0 0 15px 15px; margin-top:-5px"		
		document.querySelector(".card"+ii+"-"+j+"a").appendChild(cria_div_card_title);

		//texto no corpo
		var cria_h5 = document.createElement('h5');
		cria_h5.classList.add("card-title");
		cria_h5.classList.add("text-center");
		cria_h5.style = "text-transform: capitalize; font-size: 1.8rem; color: white"
		cria_h5.innerHTML =  ii+1 +". " + pokemon[ii]['name'];
		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_h5);

		var cria_paragrafo = document.createElement('p');
		cria_paragrafo.classList.add("text-center");
		cria_paragrafo.style = "text-transform: capitalize; color: white;"

		var cria_paragrafo2 = document.createElement('p');
		cria_paragrafo2.classList.add("text-center");
		cria_paragrafo2.style = "color: white;"

		var cria_paragrafo3 = document.createElement('p');
		cria_paragrafo3.classList.add("text-center");
		cria_paragrafo3.style = "color: white;"

		var cria_paragrafo4 = document.createElement('p');
		cria_paragrafo4.classList.add("text-center");
		cria_paragrafo4.style = "color: white;"

		var cria_paragrafo5 = document.createElement('p');
		cria_paragrafo5.classList.add("text-center");
		cria_paragrafo5.style = "color: white;"

		var cria_paragrafo6 = document.createElement('p');
		cria_paragrafo6.classList.add("text-center");
		cria_paragrafo6.style = "color: white;"

		var cria_paragrafo7 = document.createElement('p');
		cria_paragrafo7.classList.add("text-center");
		cria_paragrafo7.style = "color: white;"

		//cria_paragrafo.innerHTML =  "Type: "+ pokemon[ii]['type'];
		cria_paragrafo2.innerHTML =  "HP: "+ pokemon[ii]['stats0'];
		cria_paragrafo3.innerHTML =  "Attack: "+ pokemon[ii]['stats1'];
		cria_paragrafo4.innerHTML =  "Defense: "+ pokemon[ii]['stats2'];
		cria_paragrafo5.innerHTML =  "Special Attack: "+ pokemon[ii]['stats3'];
		cria_paragrafo6.innerHTML =  "Special Defense: "+ pokemon[ii]['stats4'];
		cria_paragrafo7.innerHTML =  "Speed: "+ pokemon[ii]['stats5'];
		//document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_paragrafo);
		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_paragrafo2);
		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_paragrafo3);
		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_paragrafo4);
		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_paragrafo5);
		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_paragrafo6);
		document.querySelector(".carda"+ii+"-"+j+"a").appendChild(cria_paragrafo7);
		//cria_div_card_title.classList.add("mb-12");
		//cria_div_p.classList.add("card"+ii+"-"+j+"a"); //div do card
				
	};
        //displayPokemon(pokemon);
    });
	
	
	
})

