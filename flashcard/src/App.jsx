import './App.css'
import Card from './Card'
import Arrows from './Arrows'
import { useState } from 'react'

function App() {
  const [slide , setSlide] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const handleleft = ()=>{
    if (slide!==0){
      setSlide(prevslide=> prevslide-=1)
    }
      
  }

  const handleright = ()=>{
    setSlide(prevslide=>prevslide+=1)
  }

  const handleflip  = () =>{
    setFlipped(isflipped =>!isflipped)
  }


  return (
    <>
      <h1>The Ultimate Chess Master</h1>
      <h2>How good of a chess player are you? Test all of your chess knowledge here!</h2>
      <h3>Number of cards: 10</h3>
      <Card handleflip={handleflip} isFlipped={flipped}/>
      <Arrows handleleft = {handleleft} handleright={handleright}/>
    </>
    
  )
}

export default App
