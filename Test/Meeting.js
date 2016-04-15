
var student;
var message = '';
var input;

function student_info (student) {
	var info = '<h2>Student: ' + student.name + '</h2>';
	info += '<p>Track: ' + student.track + '</p>';
	info += '<p>Achievements: ' + student.achievements + '</p>';
	info += '<p>Points: ' + student.points + '</p>';
	return info;
}

function print(message) {
	var output_div = document.getElementById('output');
	output_div.innerHTML = message;
	console.log('Complete!');
}

console.log('Start!');

while (true) {
	input = prompt('Please enter the name you want to look up. You can type [List] to view who\'s name is on file. If you wish to quite this loop, simply type in [quite].');
	if (input === null || input.toLowerCase() === 'quite') {
		console.log('Finish!')
		break;
	} else if (input.toLowerCase() === 'list') {
		input = prompt('Please enter the name you want to look up. The names found on this file are [Dave], [Jody], [Jordan], [John] and [Trish]. If you wish to quite this loop, simply type in [quite].');
	}
		for (i = 0; i < students.length; i += 1) {
			student = students[i];
			if(input.toLowerCase() === student.name.toLowerCase()) {
				message = student_info(student);
				print(message);
			}
	}
}