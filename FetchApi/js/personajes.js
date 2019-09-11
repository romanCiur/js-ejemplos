const caja = document.querySelector("#hoja")

const num = [172, 8, 235, 358, 167, 105, 199, 164, 78, 318, 199, 167, 404, 31, 451, 143, 102, 294, 327, 178, 48, 388, 273, 57, 261, 247, 439, 310, 327, 143, 141, 23]
const numA = [164, 326, 60, 259, 68, 219, 282, 191, 103, 393, 185, 88, 380, 446, 468, 107, 237, 329, 479, 429, 198, 446, 456, 126, 359, 321, 398, 258, 389, 177, 42, 186, 120, 91, 180, 2];
const numorigin = [1, 22, 3, 56, 67, 90, 5, 27, 6, 8, 400, 300, 45, 276, 2, 175, 49, 59];
const numB = [259, 366, 278, 87, 454, 414, 187, 388, 436, 123, 385, 101, 408, 189, 426, 271];

function obtener() {
	fetch(`https://rickandmortyapi.com/api/character/${num},${numA},${numB},${numorigin}`)
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
				<a href="#" class="btn btn-outline-success" data-toggle="modal" data-target="#info${d.id}">Info</a>
				</div>
			</div>	
		</article>

		<div class="modal fade" id="info${d.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-sm modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header bg-dark text-light">
					<h5 class="modal-title" id="exampleModalLabel">${d.name}</h5>
				</div>
				<div class="modal-body bg-light">
					<p class="card-text">Estado: ${d.status}</p>
					<p class="card-text">Tipo: ${d.type}</p>
					<p class="card-text">Especie: ${d.species}</p>
					<p class="card-text">Genero: ${d.gender}</p>
					<p class="card-text">${d.origin.name}</p>
					<p class="card-text">${d.location.name}</p>
				</div>
				<div class="modal-footer bg-white">
				<button type="button" class="btn btn-outline-danger" data-dismiss="modal">Cerrar</button>
			</div>
			</div>
			</div>
			</div>
			`
	}
}
obtener();