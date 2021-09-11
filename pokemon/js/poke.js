function loadpk(){
	let url = "https://pokeapi.co/api/v2/pokemon/gengar";
	fetch(url)
		.then((response)=>{
			return response.json();
		})
		.then((data)=>{
			console.log(data);
			document.getElementById('nome').innerHTML = data['name']
			document.getElementById('numero').innerHTML = data['id']
			document.getElementById('pic').setAttribute('src', data['sprites']['front_default'])
			document.getElementById('tipo').innerHTML = data['types'][0]['type']['name'] + "/" + data['types'][1]['type']['name']
		});

		
	console.clear();
	
}

document.getElementById("btn1").onclick = loadpk