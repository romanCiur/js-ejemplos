const caja = document.querySelector("#hoja")

function obtener() {
	fetch('https://rickandmortyapi.com/api/character/[1,22,3,5,6,8,400,300,45,276,2,175]')
		.then(res => res.json())
		.then(datos => {
			// debugger
			tarjeta(datos);
		});
};

function tarjeta(datos) {
	caja.innerHTML = ''
	for (let d of datos) {
		caja.innerHTML += `
			<article class="col-sm-6 col-md-4 col-lg-3 card-group">
				<div class="card mb-3">
				  <img src=${d.image} class="card-img-top img-fluid" alt=${d.name}>
				  <div class="card-body text-dark d-flex flex-column justify-content-between">
				    <h5 class="card-title">${d.name}</h5>
				    <p class="card-text">${d.species}</p>
				    <a href="#" class="btn btn-outline-dark">Info</a>
				  </div>
				</div>
			</article>	
		`
	}
}
obtener();