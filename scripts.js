console.log("Program Begin");

alert('Please respond yes if you see your number.')

var first_block = prompt('2  3  6  7  10  11  14  15  18  19  22  23  26  27  30  31  34  35  38  39  42  43  46  47  50  51  54  55  58  59  62  63');
var second_block = prompt('16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63');
var third_block = prompt('8  9  10  11  12  13  14  15  24  25  26  27  28  29  30  31  40  41  42  43  44  45  46  47  56  57  58  59  60  61  62  63');
var fourth_block = prompt('1  3  5  7  9  11  13  15  17  19  21  23  25  27  29  31  33  35  37  39  41  43  45  47  49  51  53  55  57  59  61  63');
var fifth_block = prompt('4  5  6  7  12  13  14  15  20  21  22  23  28  29  30  31  36  37  38  39  44  45  46  47  52  53  54  55  60  61  62  63');
var sixth_block = prompt('32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63');
var answer = 0;

if (first_block.toUpperCase() === 'YES') {
	answer = 2;
} 

if (second_block.toUpperCase() === 'YES') {
	answer += 16;
}

if (third_block.toUpperCase() === 'YES') {
	answer += 8;
}

if (fourth_block.toUpperCase() === 'YES') {
	answer += 1
}

if (fifth_block.toUpperCase() === 'YES') {
	answer += 4;
}

if (sixth_block.toUpperCase() === 'YES') {
	answer += 32;
}

document.write('<p>The number you picked was ' + answer + '.</p>');

console.log("Program Complete");