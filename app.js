


function binaryToInt() {
var input = document.querySelector(".userInp").value;
var button = document.querySelector(".inpButton");
var answer = document.querySelector(".answer");

if (input != NaN) {
	answer.innerHTML = "The number is: <b>" + parseInt(input, 2)+"</b>"
} else {
	answer.innerHTML = "Please enter a binary number and try again";
}

}


