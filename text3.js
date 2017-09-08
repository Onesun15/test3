//Loop hello counter up to and including number

function countHello(counter){
	for (let i =0; i <= counter; i++){
		console.log('Hello');
	}
}
console.log(countHello(99));

console.log('hello world');

//name
//age
//function say hello + this.name

const person = {
	name: "Sunny",
	age: 25,
	hello: function() {
		console.log('Hello ' + this.name);
	}
}

//const vehicles make model

const vehicles = [
	{
		make: 'Ford',
		model: 'T'
	},
	{
		make: 'Porsche',
		model: '911'
	},
	{
		make: 'Chevy',
		model: 'Tahoe'
	},
	{
		make: 'Jeep',
		model: 'Wrangler'
	},
];


function iterate(arr) {
	arr.forEach(car => {
		return car;
	});
}


iterate(vehicles);
person.hello();
