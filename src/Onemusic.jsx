import React, {useRef} from 'react'
import { useParams } from 'react-router-dom'
import Card from './Props/Card';

const Onemusic = ({allmusic}) => {
   const audioref =  useRef(new Audio())
    const {id} = useParams()
  const onemusic =  allmusic.find((el)=> el.id == id)
  console.log(onemusic);
 
  const playsong = () =>{
   const audio = audioref.current
   audio.src = onemusic.songUrl
   audio.play()
  }
  
  return (
    <div>
        <h1>one music</h1>
       <div>
        <Card playbutton="play" onclick={playsong} songTitle={onemusic.songTitle} Songimg={onemusic.songImage}/>
         
       </div>
    </div>
  )
}

export default Onemusic