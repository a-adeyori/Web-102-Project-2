import React from 'react'

export default function Card(props) {
  return (
    <div className='flashcard' onClick={props.handleflip}>
        <div className={`card ${props.isFlipped? 'flipped' : ""}`}>
        {props.isFlipped ? (
          <div className="back">
            <p>{props.questions[props.currentIndex].answer}</p>
          </div>
        ) : (
          <div className="front">
            <p>{props.questions[props.currentIndex].question}</p>
          </div>
        )}
        </div>
    </div>
  )
}
