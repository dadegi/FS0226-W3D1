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

// spread e rest
const myNamesArray = ['Pippo', 'Pluto', 'Paperino'];
// const copyNames = myNamesArray; // La copia con l'assegnazione crea due cloni, per cui se cambia il secondo cambia anche il primo
const copyNames = [...myNamesArray];

console.log(myNamesArray, copyNames);

copyNames[1] = 'Paperone';
console.log(myNamesArray, copyNames);

const firstNumberArray = [1, 2, 3, 4];
const secondNumberArray = [5, 6, 7, 8];

const concatArray = [...firstNumberArray, ...secondNumberArray];
console.log(concatArray);

const firstPerson = {
	personName: 'Mario',
	address: {
		via: 'Roma',
		citta: 'Napoli',
	},
};

const otherAddress = { ...firstPerson.address };

const otherPerson = { ...firstPerson };

otherPerson.address = { ...otherAddress };

otherPerson.address.citta = 'Milano';

console.log(firstPerson);
console.log(otherPerson);

const mySum = (...values) => {
	let myTotal = 0;
	for (let i = 0; i < values.length; i++) {
		myTotal += values[i];
	}
	return myTotal;
};

console.log(`Somma con tre parametri: ${mySum(3, 4, 5)}`);
console.log(`Somma con due parametri: ${mySum(8, 9)}`);
console.log(`Somma con quattro parametri: ${mySum(12, 23, 45, 10)}`);

const forEach = document.querySelector('#forEach');

// Metodi array ES6+
namesArray.forEach((name) => {
	// equivale a for o al for classico
	forEach.innerHTML += `${name} studente frequentante <br />`;
});
console.log(namesArray);

const multiply = firstNumberArray.map((number) => {
	return number * 2;
});

console.log(firstNumberArray);
console.log(multiply);

const genericNumbers = [2, 5, 16, 23, 75, 98, 67];

const pairs = genericNumbers.filter((number) => number % 2 === 0);
console.log(pairs);

const genericNames = [
	'Antonio',
	'Nicola',
	'Anna',
	'Giovanni',
	'Anselmo',
	'Mario',
];
const namesWithA = genericNames.filter((name) => name.startsWith('A'));

console.log(namesWithA);

const users = [
	{
		userName: 'Mario',
		age: 25,
	},
	{
		userName: 'Anna',
		age: 22,
	},
	{
		userName: 'Stefano',
		age: 28,
	},
];

console.log(users.includes('Mario'));
const finded = users.find((user) => user.userName === 'Mario');
console.log(finded);

const total = genericNumbers.reduce((acc, number) => acc + number, 0);
console.log(total);

console.log(genericNumbers[3]);
console.log(genericNumbers.sort()); // Se non usato per generare un array ordinato, modifica l'ordine dell'array originario
console.log(genericNumbers);
console.log(genericNumbers[3]);

console.log(genericNumbers.reverse());
const correctedSort = genericNumbers.sort((a, b) => a - b);
console.log(correctedSort);

const majorAge = [
	{
		userName: 'Mario',
		age: 21,
	},
	{
		userName: 'Anna',
		age: 24,
	},
	{
		userName: 'Nicola',
		age: 17,
	},
	{
		userName: 'Maria',
		age: 16,
	},
	{
		userName: 'Giovanni',
		age: 28,
	},
	{
		userName: 'Antonio',
		age: 22,
	},
	{
		userName: 'Stefania',
		age: 16,
	},
];

const maggiorenni = majorAge
	.filter((user) => user.age >= 18)
	.map((user) => user.userName)
	.sort();

console.log(maggiorenni);
