console.log("Program Begin");

var ac_name = prompt('What is my name?');
var pr_name = prompt('What is my prefered name?');
var place = prompt('Local favourite place?');
var fav_number = prompt('What is my favourite number?');
var age = prompt('What is my age?');
var score = 0;

if (ac_name.toUpperCase() === 'PHILIP') {
	score += + 1;
}

if (pr_name.toUpperCase() === 'DEF') {
	score += + 1;
}

if (place.toUpperCase() === 'TEMPLE OF TIME') {
	score += + 1;
}
if (fav_number === '23') {
	score += + 1;
}
if (age === '28') {
	score += + 1;
}

if (score === 5) {
	alert('You know me very well! You got them all right!');
} else if (score === 4) {
	alert('You know me pretty well. You got all but one right.');
} else if (score === 3) {
	alert('You don\'t seem to know me very well. You got 3 right.');
} else if ( score === 2) {
	alert('Do you even know me? You got 2 out of 5 right.')
} else if (score === 1) {
	alert('Do I even know you? You got 1 out of 5 right! Come on!');
} else {
	alert('... you suck.');
}


console.log("Program Complete");