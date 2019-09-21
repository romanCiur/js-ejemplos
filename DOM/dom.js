/* manipulación del DOM */

let shape = document.querySelector("div");
let shapeHeader = document.createElement('h4');

let docFrag = document.createDocumentFragment();
let ul = document.createElement('ul');

ul.setAttribute('id', 'colors');
['DARKSALMON', 'tomato', 'MEDIUMSLATEBLUE', 'MEDIUMSEAGREEN', 'DEEPSKYBLUE', 'steelblue'].forEach(function(e) {
	let li = document.createElement('li');
	li.textContent = e;
	ul.appendChild(li);
});
docFrag.appendChild(ul);

document.getElementById('list').addEventListener('click', function(event) {
	shape.appendChild(docFrag);
	let shapeName = event.target.textContent;
	console.log(shapeName);
	shape.setAttribute('class', shapeName);

	shapeHeader.innerText = shapeName;
	shape.appendChild(shapeHeader);

document.getElementById('colors').addEventListener('click', function(event) {
	let colorName = event.target.textContent;
	console.log(colorName);
	shape.style.setProperty('background-color', colorName);
	});
});