var readlineSync = require("readline-sync");

var userName = readlineSync.question("May I have your name please? ");

console.log(`Welcome ${userName} let see how well do you know Prabhat`)

var score = 0;

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("Yes your are right ");
    score++;
  }
  else{
    console.log("No your are wrong");
    score--;
  }
  console.log("Score is "+score);
  console.log("---------------------");
}

var questions = [
  questionOne={
    question: "Where is Prabhat lives? ",
    answer: "Varanasi"
  },
  questionTwo={
    question: "In which language Prabhat code mostly? ",
    answer: "Javascript"
  }
]


for(var i=0 ;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}


console.log(`Your total score is ${score}`);

