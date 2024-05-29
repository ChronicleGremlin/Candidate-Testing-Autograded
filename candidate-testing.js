const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
let candidateName = ' ';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";

//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  candidateName = input.question("What is your name? ");
}

function askQuestions() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let index = 0; index < 5; index++) {
    candidateAnswers.push(input.question(questions[index]));
  }

}

function gradeQuiz(answer) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let correctCandidateAnswers = 0;

  for (let index = 0; index < 5; index++) {
    if (answer[index].toLowerCase() !== correctAnswers[index].toLowerCase()){
      console.log("Incorrect!");}
    if (answer[index].toLowerCase() == correctAnswers[index].toLowerCase()){
      console.log("Correct!");
      correctCandidateAnswers = correctCandidateAnswers + 1;
    }
  }

  let grade = ((correctCandidateAnswers / 5) * 100);
  if (grade >= 80){
    console.log(`You have passed the test with ${grade}%!`);
  } else {
    console.log(`You have failed the test with ${grade}%`);
  }
  return grade;
}

function runProgram() {
  askForName();
  console.log("Hello, " + candidateName + "! Please get ready for the quiz.");
  askQuestions();
  console.log(`Correct answers are: ${correctAnswers}\nCandidate answers are: ${candidateAnswers}`);
  gradeQuiz(candidateAnswers);
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