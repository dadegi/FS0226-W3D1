const traditionalCode = document.querySelector('#traditionalCode');
const traditionalResult = document.querySelector('#traditionalResult');
const arrowCode = document.querySelector('#arrowCode');
const arrowResult = document.querySelector('#arrowResult');

// Expression function tradizionale
const traditionalSum = function (a, b) {
	return a + b;
};

const arrowSum = (a, b) => (arrowResult.textContent = a + b); // return implicito, senza graffe, quando il corpo della funzione è una sola operazione, DA SCRIVERE OBBLIGATORIAMENTE SU UNA SOLA RIGA

traditionalCode.innerHTML =
	'<code>const traditionalSum = function (a, b) {return a + b;}</code>';

traditionalResult.textContent = traditionalSum(8, 5);

arrowCode.innerHTML =
	'<code>const arrowSum = (a, b) => (arrowResult.textContent = a + b);</code>';

arrowSum(8, 5);

// this contestuale: è l'oggetto window nelle funzioni classiche/expression function
const utente = {
	nome: 'Pippo',
	saluta: function () {
		console.log(`Ciao, ${this.nome}`);
	},
};

utente.saluta();

const developer = function (developer) {
	console.log(`Sono ${this.name}, sviluppatore ${this.language}`);
};

const newDeveloper = {
	name: 'Mario',
	language: 'JavaScript',
};

developer.call(newDeveloper);

this.name = 'Pippo';
this.language = 'PHP';

developer(this.name, this.language);

// this lessicale: arrow function, eredita il valore dal punto in cui è chiamata e da come è chiamata la funzione

const myCar = {
	brand: 'Fiat',
	model: '500',
	obtainDescription: function () {
		const describeCar = () => {
			return `Auto: ${this.brand} ${this.model}`;
		};
		return describeCar();
	},
};

console.log(myCar.obtainDescription());

function container() {
	const myArrow = () => {
		console.log(`Eredito il this dall'invocazione della funzione: ${this}`);
	};
	myArrow();
}

container.call('Antonio');
container.call('Giovanna');

const counter = {
	seconds: 10,
	start: function () {
		const myCounter = setInterval(() => {
			console.log(this.seconds);
			this.seconds--;
			if (this.seconds === 8) {
				setTimeout(() => {
					console.log('STOP!');
					clearInterval(myCounter);
				}, 1000);
			}
		}, 1000);
	},
};

counter.start();

// destructuring
const notObject = document.querySelector('#notObject');
const yesArray = document.querySelector('#yesArray');
const yesObject = document.querySelector('#yesObject');
const modernObject = document.querySelector('#modernObject');
const anotherObject = document.querySelector('#anotherObject');

const namesArray = ['Pippo', 'Pluto', 'Paperino'];
const student = {
	studentName: 'Mario',
	surname: 'Rossi',
	age: 25,
};

const record = {
	title: 'The dark side of the moon',
	author: 'Pink Floyd',
	year: 1973,
};

notObject.textContent = student;
yesArray.textContent = namesArray;
yesObject.textContent = `${student.studentName}, ${student.surname}, ${student.age}`;

const { studentName, surname, age } = student; // se l'oggetto si modifica, i valori delle variabili non cambiano, in quanto con questa destrutturazione sono fotografie dell'oggetto i un dato punto del codice
modernObject.textContent = `${studentName}, ${surname}, ${age}`;

let { title, author, year } = record; // destrutturo con let quando devo manipolare i valori dell'oggetto senza intaccare l'oggetto stesso
((title = 'A saucerful of secrets'), (author = 'Pink Floyd'), (year = 1968)); // Modifica il valore delle variabili senza intaccare l'oggetto originario
console.log(record);
anotherObject.textContent = `${title}, ${author}, ${year}`;

if (author === 'Pink Floyd') {
	record.title = title;
	record.author = author;
	record.year = year;
} else {
	console.error('Autore non corrispondente');
}

console.log(record);
