import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button onClick={props.onclick}  className={props.sty}>{props.text}</button>
    </div>
  )
}

export default Button