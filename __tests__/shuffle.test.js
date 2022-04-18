
import  {Shuffle} from '../src/js/shuffle.js'
describe('Shuffle', ()  => {



  test('it should create an array out of possible answers', ()  =>  {
    let correctAnswer = "answer1"
    let incorrectAnswers = ["answer2", "answer3", "answer4"]
    let deck = new Shuffle(correctAnswer, incorrectAnswers)
    expect(deck.answers.length).toEqual(4)
  });
});



