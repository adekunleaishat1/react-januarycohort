import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    const Gohome = () =>{
       navigate("/")
    }
  return (
    <div>
        <h1>404 NOT FOUND </h1>
        <p>This is not the Page  you are looking for .</p>
        <button onClick={Gohome}>Go Home</button>
    </div>
  )
}

export default Notfound