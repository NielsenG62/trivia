export class Shuffle  {
  constructor(correctAnswer, incorrectAnswers)  {
    this.answers = [correctAnswer, incorrectAnswers[0], incorrectAnswers[1], incorrectAnswers[2]]
  }
  shuffleArray() {
    return this.answers.sort( ()=>Math.random()-0.5 );
  }
}


// function shuffle(array) {
//   let currentIndex = array.length,  randomIndex;

//   // While there remain elements to shuffle.
//   while (currentIndex != 0) {

//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = 
//     [array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }


// function shuffleArray(array) {

//   return array.sort( ()=>Math.random()-0.5 );

// }