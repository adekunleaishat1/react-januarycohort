import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({SongTitle, Songimg, Artistname,playbutton, musicsource,onclick, link}) => {
  return (
    <div style={{width:"200px", height:"300px", paddingInline:"10px" , paddingBlock:"20px", backgroundColor:"black", borderRadius:"10px"}}>
      <Link to={link}>
            <audio src={musicsource}></audio>
       <div style={{width:"100%", height:"150px", backgroundColor:"red"}}>
         <img style={{width:"100%", height:"100%" }} src={Songimg} alt="" />
       </div>
      <div style={{width:"100%", marginTop:"10px", height:"100px"}}>
        <h2 style={{marginTop:"10px",color:"white"}}>{SongTitle}</h2>
       <p style={{marginTop:"5px",color:"white"}}>{Artistname}</p>
       <button onClick={onclick} style={{border:"none", }}>{playbutton}</button>
      </div>
      </Link>
    </div>
  )
}

export default Card