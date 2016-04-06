var counter = 0;
var correct_ans = 0;
var question;
var answer;
var response;
var html;
var correct_list = [];
var wrong_list = [];
var wrong;

var questions = [
['What is my favourite number?', 23],
['Number one event I want to attend?', 'burning man'],
['What is my favourite food?','sushi'],
['What is my favourtite language?', 'math'],
['Coke or Pepsi?', 'neither']
];

function red_black_1() {
	if ( document.getElementById("first").style.color == "red" ) {
		document.getElementById("first").style.color = "#000";
	} else {
		document.getElementById("first").style.color = "red";
		if (counter < 4) {
		counter += 1;
		} else {
			questions_func();
			html = 'You got ' + correct_ans + ' out of ' + questions.length + ' question(s) right';
			html += '<h2> You got these questions right:';
			html += build_list( correct_list );
			html += '<h4>You got these questions wrong:</h4>';
			html += build_list( wrong_list );
			document.write(html);
		}
	}
}

function questions_func() {
	for (var i = 0; i < questions.length; i += 1) {
		question = questions [i][0];
		answer = questions [i][1];
		response = prompt(question);
		if (response.toLowerCase() === answer || parseInt(response) === answer){
			correct_ans += 1;
			correct_list.push(question);
		} else {
			wrong_list.push(question);
		}
	}
}

function build_list (arr) {
	var list_html = '<ol>';
	for (a = 0; a < arr.length; a+=1) {
		list_html += '<li>' + arr[a] + '</li>';
	}
	list_html += '</ol>';
	return list_html;
}

















