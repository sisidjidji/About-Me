"use Strict"

var username = prompt('Please Enter Your Name');
console.log(username);

confirm('Hi ' + username + ' would you like to know more about Me !!! ');

alert('Please answer with (Yes or No or y or n) to the following Question');

AskQuestionOne();


function AskQuestionOne() {
    var answer1 = prompt('Do i love peperroni ?');
    console.log(answer1);

    var lowerCaseAnswerOne = answer1.toLowerCase();

    if (lowerCaseAnswerOne === 'yes' || lowerCaseAnswerOne === 'y') {
        alert('wrong ' + username + ' I dont eat Pork');

    } else if (lowerCaseAnswerOne === 'no' || lowerCaseAnswerOne === 'n') {

        alert('Correct!');

    }
}


function AskQuestionTwo() {
    var answer2 = prompt('Do i have kids ?');

    console.log(answer2);

    var lowerCaseAnswerTwo = answer2.toLowerCase();

    if (lowerCaseAnswerTwo === 'yes' || lowerCaseAnswerTwo === 'y') {
        alert('correct ' + username + ' i do have kids , tow actualy ');

    } else if (lowerCaseAnswerTwo === 'no' || lowerCaseAnswerTwo === 'n') {

        alert('wrong! I have 2 kids');
    }
}


function AskQuestionThree() {
    var answer3 = prompt('Do i have pets ?');

    console.log(answer3);

    var lowerCaseAnswerThree = answer3.toLowerCase();

    if (lowerCaseAnswerThree === 'yes' || lowerCaseAnswerThree === 'y') {
        alert('Wrong!! I think i am the only americain cetizen that dosent have pets');

    } else if (lowerCaseAnswerThree === 'no' || lowerCaseAnswerThree === 'n') {

        alert('Correct! I think i am the only americain cetizen that dosent have pets');
    }
}


function AskQuestionFour() {
    var answer4 = prompt(' Do i like traveling ? ');

    console.log(answer4);

    var lowerCaseAnswerFour = answer4.toLowerCase();

    if (lowerCaseAnswerFour === 'yes' || lowerCaseAnswerFour === 'y') {
        alert('Correct!');

    } else if (lowerCaseAnswerFour === 'no' || lowerCaseAnswerFour === 'n') {

        alert(' Wrong! ');
    }
}

function AskQuestionFive() {
    var answer5 = prompt('Do I have any previous experiance with coding ? ');

    console.log(answer5);

    var lowerCaseAnswerFive = answer5.toLowerCase();

    if (lowerCaseAnswerFive === 'yes' || lowerCaseAnswerFive === 'y') {
        alert('Correct!');

    } else if (lowerCaseAnswerFive === 'no' || lowerCaseAnswerFive === 'n') {

        alert('Wrong !');
    }
}

function AskQuestionSix() {
    var answer6 = prompt('Now we are going to play a different game i will ask you to guess a number between 0-10  ? ');

    console.log(answer6);

    var numb = 7;

    for (var i = 4; i > 0; i--) {

        if (answer6 == numb) {

            alert('Correct you are the best  ');

            break;

        } else if (answer6 > numb) {
            alert('it is too high ');

        } else if (answer6 < numb) {

            alert('it is too low  ');
        }



        answer6 = prompt('please try again');

    }
}


var answer7 = prompt('Can you guess the brand of my household cars ? ');

console.log(answer7);

var array_answer7 = ['kia', 'Mazda', 'Volvo'];

var len = array_answer7.length;

for (var i = 5; i > 0; i--) {
    var iscorrect = false;

    for (var x = 0; x < len; x++) {

        if (array_answer7[x] == answer7) {

            alert('Good job !!');
            iscorrect = true;
            break;
        }

    }
    if (iscorrect) {
        break;
    }
    answer7 = prompt('Please try again');

}

alert('The correct answers are ' + array_answer7[0] + '  ' + array_answer7[1] + '  ' + array_answer7[2]);



alert('Welcome again ' + username + ' thank you for your time');