//your JS code here. If required.
let Output = document.getElementById('output');
let Input = document.getElementById('ip');

const Submit = document.getElementById('btn');

Submit.addEventListener("click", function () {
	// consuming promises
  ValidateInput()
    .then(MultiplyWith2)
    .then(Subtract3)
    .then(DivideBy2)
    .then(Add10)
    .catch((err) => console.log(err.message));
});

// Create Promises
function ValidateInput(){
	return new Promise((resolve, reject) => {
		let InputValue = parseInt(Input.value.trim());
		setTimeout(function(){
			if(isNaN(InputValue)){
				const err = new Error("Invalid Input!");
				reject(err);
			}else{
				Output.innerText = `Result: ${InputValue}`;
				resolve(InputValue);
			}
		}, 2000)
	})
}

function MultiplyWith2(num){
	return new Promise((resolve) => {
		let product = num * 2;
		setTimeout(function(){
			Output.innerText = `Result: ${product}`
			resolve(product)
		}, 1000)
	})
}

function Subtract3(num){
	return new Promise((resolve) => {
		let difference = num - 3;
		setTimeout(function(){
			Output.innerText = `Result: ${difference}`
			resolve(difference)
		}, 1000)
	})
}

function DivideBy2(num){
	return new Promise((resolve) => {
		let divident = num/2;
		setTimeout(function(){
			Output.innerText = `Result: ${divident}`
			resolve(divident)
		}, 1000)
	})
}

function Add10(num){
	return new Promise((resolve) => {
		let add = num + 10;
		setTimeout(function(){
			Output.innerText = `Final Result: ${add}`
			resolve(add)
		}, 1000)
	})
}



