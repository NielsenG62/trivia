
import  {Shuffle} from '../src/js/shuffle.js'
describe('Shuffle', ()  => {



  test('it should create an array out of possible answers', ()  =>  {
    let correctAnswer = "answer1"
    let incorrectAnswers = ["answer2", "answer3", "answer4"]
    let deck = new Shuffle(correctAnswer, incorrectAnswers)
    expect(deck.answers.length).toEqual(4)
  });
  test('it should shuffle answers array', ()  =>  {
    let correctAnswer = "answer1"
    let incorrectAnswers = ["answer2", "answer3", "answer4"]
    let deck = new Shuffle(correctAnswer, incorrectAnswers)
    deck.shuffleArray()
    expect(deck.answers[0, 1, 2, 3]).toEqual(deck.answers[0, 1, 2, 3])
  });
});



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}


