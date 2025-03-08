import React from 'react'

export default function Card(props) {
  return (
    <div className='flashcard' onClick={props.handleflip}>
        <div className={`card ${props.isflipped? 'flipped' : ""}`}>
            <div className="front">
                <p>{props.isFlipped ? 'Answer' :
            <div className="back">
                <p>{props.isFlipped ? 'Answer' : 'Question'}</p>
            </div>
            }</p>
            </div>
        </div>
    </div>
  )
}
