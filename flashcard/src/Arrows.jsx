import React from 'react'

function Arrows(props) {
  return (
    <>
    <button onClick={props.handlePrev}>⭠</button>
    <button onClick= {props.handleNext}>⭢</button>
    </>
    
  )
}

export default Arrows