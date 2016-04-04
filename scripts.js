console.log("Program Begin");

var guess;
var min = parseInt(prompt('Give me a minimum number.'));
var max = parseInt(prompt('Give me a maximum number.'));
var ran_number = ran_number_fun(max,min);
var attempt = 0;

function ran_number_fun(max,min) {
	return Math.floor(Math.random() * (1 + max - min)) + min;
}

while (guess !== ran_number) {
	guess = ran_number_fun(max,min);
	attempt += 1;
}

document.write('<p>The randome number from ' + min + '-' + max + ' was ' + ran_number + '.</p>');
document.write('<p>It took the computer ' + attempt + ' attemps to get it right.</p>');


console.log("Program Complete");