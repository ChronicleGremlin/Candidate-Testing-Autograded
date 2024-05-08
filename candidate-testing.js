const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
let gradeQuiz = ' ';
let askForName = ' ';
let askQuestion = ' ';
// TODO 1.1a: Define candidateName // 
let candidateName = ' ';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = ' ';


//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


if (askForName = ' ') {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name?");
}

if (askQuestion = ' ') {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer = input.question(question);


}

if (candidateAnswer == correctAnswer) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log('Correct!');

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.

  return grade;
  

} else {
  console.log('Incorrect!');
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + "! Please get ready for the quiz.");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};