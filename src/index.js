let request = new XMLHttpRequest();
const url = `https://the-trivia-api.com/questions?limit=5&region=US`;
request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const response = JSON.parse(this.responseText);
    getElements(response);
  }
};
request.open("GET", url, true);
request.send();


function output(questNum, shuffle, responseNum, response) {
  let questDiv = $(`.question${questNum}`);
  questDiv.html(`<h5>Question ${questNum}: ${response[responseNum].question}</h5>
  <br> <label for="q${questNum}">${shuffle.answers[0]}</label> <input type="radio" name="q${questNum}" value="${shuffle.answers[0]}">
  <br> <label for="q${questNum}">${shuffle.answers[1]}</label> <input type="radio" name="q${questNum}" value="${shuffle.answers[1]}">
  <br> <label for="q${questNum}">${shuffle.answers[2]}</label> <input type="radio" name="q${questNum}" value="${shuffle.answers[2]}">
  <br> <label for="q${questNum}">${shuffle.answers[3]}</label> <input type="radio" name="q${questNum}" value="${shuffle.answers[3]}">`);
}

function getElements(response) {
  let deck1 = new Shuffle(response[0].correctAnswer, [response[0].incorrectAnswers[0], response[0].incorrectAnswers[1], response[0].incorrectAnswers[2] ]);
  output(1, deck1, 0, response);
  let deck2 = new Shuffle(response[1].correctAnswer, [response[1].incorrectAnswers[0], response[1].incorrectAnswers[1], response[1].incorrectAnswers[2] ]);
  output(2, deck2, 1, response);
  let deck3 = new Shuffle(response[2].correctAnswer, [response[2].incorrectAnswers[0], response[2].incorrectAnswers[1], response[2].incorrectAnswers[2] ]);
  output(3, deck3, 2, response);
  let deck4 = new Shuffle(response[3].correctAnswer, [response[3].incorrectAnswers[0], response[3].incorrectAnswers[1], response[3].incorrectAnswers[2] ]);
  output(4, deck4, 3, response);
  let deck5 = new Shuffle(response[4].correctAnswer, [response[4].incorrectAnswers[0], response[4].incorrectAnswers[1], response[4].incorrectAnswers[2] ]);
  output(5, deck5, 4, response);
  
  $('form#quiz').submit(function(e) {
    e.preventDefault();
    let score = 0;
    let answer1 = $('input[name=q1]:checked').val();
    let answer2 = $('input:radio[name=q2]:checked').val();
    let answer3 = $('input:radio[name=q3]:checked').val();
    let answer4 = $('input:radio[name=q4]:checked').val();
    let answer5 = $('input:radio[name=q5]:checked').val();
    if (answer1 === response[0].correctAnswer)  {
      score++;
    } if (answer2 === response[1].correctAnswer)  {
      score++;
    } if (answer3 === response[2].correctAnswer)  {
      score++;
    } if  (answer4 === response[3].correctAnswer) {
      score++;
    } if  (answer5 === response[4].correctAnswer) {
      score++;
    }
    $('#score').text(`Score: ${score}/5`);
  });
}
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Shuffle } from './js/shuffle';
