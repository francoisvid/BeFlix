var listeDeFilms = [
	{
		"titre" : "Jurassic world",
		"jaquette" : "./image/jurassicl.jpg",
		"description" : "grgdcdsvvdcdncekzngrekezkczkvekgenrek"
	},
	{
		"titre" : "le titre du film 2 ",
		"jaquette" : "./chemin/de/l/image.jpg",
		"description" : "la description du film"
	},
	{
		"titre" : "le titre du film 3",
		"jaquette" : "./chemin/de/l/image.jpg",
		"description" : "la description du film"
	},
	{
		"titre" : "le titre du film 4",
		"jaquette" : "./chemin/de/l/image.jpg",
		"description" : "la description du film"
	}
]


for(var i in listeDeFilms){
	console.log(listeDeFilms[i].titre)
	var div = document.createElement("div")
	var texte = document.createTextNode(listeDeFilms[i].titre)
	div.appendChild(texte);
	document.body.appendChild(div)
	
}