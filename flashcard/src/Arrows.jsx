import React from 'react'

function Arrows(props) {
  return (
    <>
    <button onClick={props.handleleft}>⭠</button>
    <button onClick= {props.handleright}>⭢</button>
    </>
    
  )
}

export default Arrows