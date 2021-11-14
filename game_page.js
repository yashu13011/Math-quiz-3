player1name = localStorage.getItem("player 1");
player2name = localStorage.getItem("player 2");
console.log(player1name);
console.log(player2name);
player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1name + " : ";
document.getElementById("player2_name").innerHTML = player2name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn - " + player1name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2name;
function send(){
number1 = document.getElementById("number_1").value;
number2 = document.getElementById("number_2").value;

answer = number1 * number2;
question = "<h4>Q. " + number1 + " X " + number2 + "</h4>";
input_box = "<br><br>Answer: <input type='text' id='given_answer'>";
check_button = "<br><br><button onclick='check()' class='btn btn-info'>Check</button>";
row = question + input_box + check_button;
document.getElementById("output").innerHTML = row;

}
