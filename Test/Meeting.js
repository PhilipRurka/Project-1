
var student;
var message = '';

for (i = 0; i < students.length; i += 1) {
	student = students[i];
	message += '<h2>Student: ' + student.name + '</h2>';
	message += '<p>Track: ' + student.track + '</p>';
	message += '<p>Achievements: ' + student.achievements + '</p>';
	message += '<p>Points: ' + student.points + '</p>';
}

function print(message) {
	var output_div = document.getElementById('output');
	output_div.innerHTML = message;
}

print(message);