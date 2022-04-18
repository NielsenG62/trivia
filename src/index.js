let request = new XMLHttpRequest();
const url = `https://the-trivia-api.com/questions?limit=5&region=US&difficulty=medium`;

request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const response = JSON.parse(this.responseText);
    getElements(response);
  }
};
request.open("GET", url, true);
request.send();
function getElements(response) {
  $("#question1").text(`Question: ${response[0].question}`);
  $("#1").text(`${response[0].correctAnswer}`);
  $("#2").text(`${response[0].incorrectAnswers[0]}`);
  $("#3").text(`${response[0].incorrectAnswers[1]}`);
  $("#4").text(`${response[0].incorrectAnswers[2]}`);
}

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';