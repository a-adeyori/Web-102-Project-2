import './App.css'
import Card from './Card'
import Arrows from './Arrows'
import { useState } from 'react'

function App() {
  const questions = [
    { question: "What is the only piece that can jump over others in chess?", answer: "Knight" },
    { question: "How many squares are on a standard chessboard?", answer: "64" },
    { question: "What is the term for a game that ends in a tie?", answer: "Draw" },
    { question: "Which piece can move diagonally but never straight?", answer: "Bishop" },
    { question: "What is it called when a king is under direct attack?", answer: "Check" },
    { question: "How many pawns does each player start with?", answer: "8" },
    { question: "What special move allows a pawn to capture another pawn in a unique way?", answer: "En passant" },
    { question: "What is the fastest way to checkmate an opponent called?", answer: "Fool's Mate" },
    { question: "Which world champion is considered one of the greatest chess players of all time?", answer: "Magnus Carlsen" },
    { question: "What move allows a king and a rook to switch places under certain conditions?", answer: "Castling" }
  ];
  const [guess, setGuess] = useState('')
  const [slide , setSlide] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const handleNext = () => {
    setGuess('')
    setSlide((prevIndex) => (prevIndex + 1) % questions.length);
    setFlipped(false); 
  };

  const handlePrev = () => {
    setGuess('')
    setSlide((prevIndex) =>
      prevIndex === 0 ? questions.length - 1 : prevIndex - 1
    );
    setFlipped(false); 
  }
  const handleflip  = () =>{
    setFlipped(!flipped)
  }

  const checkAnswer = ()=>{
    if (!guess.trim()) {
      return ""; // No styling if input is empty
    }
    return guess.trim().toLowerCase() === questions[slide].answer.toLowerCase()
      ? "correct"
      : "wrong";
  };

  const shuffleQuestion=()=>{
    const randomIndex = Math.floor(Math.random()*questions.length)
    setSlide(randomIndex)
    setFlipped(false)
    setGuess('')
  }


  return (
    <>
      <h1>The Ultimate Chess Master</h1>
      <h2>How good of a chess player are you? Test all of your chess knowledge here!</h2>
      <h3>Number of cards: 10</h3>
      <Card handleflip={handleflip} isFlipped={flipped} questions={questions} 
      currentIndex={slide} />
      <div className='guess'>
      <h2>Guess the answer here: </h2>
      <input type ='text'placeholder='Enter your guess' value ={guess} onChange={e => setGuess(e.target.value)} className={`input-field ${checkAnswer()}`} />
      <button onClick={() => checkAnswer()} className="submit-button">Submit Guess</button>
      </div>
      <Arrows handlePrev = {handlePrev} handleNext={handleNext}/><button onClick={shuffleQuestion} className="shuffle-button">Shuffle Cards</button>
    </>
    
  )
}

export default App
