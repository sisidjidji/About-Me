
"use Strict"

var username = prompt('Please Enter Your Name');
console.log(username);
  
confirm ('Hi ' + username + ' would you like to know more about Me !!! ');

alert('Please answer with (Yes or No or y or n) to the following Question') ;


var answer1 = prompt('Do i love peperroni ?') ;
console.log(answer1);

var lowerCaseAnswerOne = answer1.toLowerCase();
  
if(lowerCaseAnswerOne  === 'yes' || lowerCaseAnswerOne  === 'y')
{
    alert('wrong ' + username +' I dont eat Pork');

} else {

    alert('Correct!');
}


var answer2 = prompt('Do i have kids ?') ;

console.log(answer2);

var lowerCaseAnswerTwo = answer2.toLowerCase();
  
if (lowerCaseAnswerTwo  === 'yes' || lowerCaseAnswerTwo  === 'y')
{
    alert('correct '  + username + ' i do have kids , tow actualy ');

} else {

    alert('wrong! I have 2 kids');
}


var answer3 = prompt('Do i have pets ?') ;

console.log(answer3);

var lowerCaseAnswerThree = answer3.toLowerCase();
  
if(lowerCaseAnswerThree  === 'yes' || lowerCaseAnswerThree  === 'y')
{
    alert('Wrong!! I think i am the only americain cetizen that dosent have pets');

} else {

    alert('Correct! I think i am the only americain cetizen that dosent have pets');
}

var answer4 = prompt( ' Do i like traveling ? ') ;

console.log(answer4);

var lowerCaseAnswerFour = answer4.toLowerCase();
  
if(lowerCaseAnswerFour  === 'yes' || lowerCaseAnswerFour  === 'y')
{
    alert('Correct!');

} else {

    alert(' Wrong! ');
}

var answer5 = prompt('Do I have any previous experiance with coding ? ') ;

console.log(answer5);

var lowerCaseAnswerFive = answer5.toLowerCase();
  
if(lowerCaseAnswerFive  === 'yes' || lowerCaseAnswerFive  === 'y')
{
    alert('Correct!');

} else {

    alert('Wrong !');
}


alert('Welcome again ' +username +' thank you for your time');





