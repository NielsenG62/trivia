export class Shuffle  {
  constructor(correctAnswer, incorrectAnswers)  {
    this.answers = [correctAnswer, incorrectAnswers[0], incorrectAnswers[1], incorrectAnswers[2]];
    this.shuffleArray();
  }
  shuffleArray() {
    return this.answers.sort( ()=>Math.random()-0.5 );
  }
}