import React from 'react'

const Input = ({value,className, onChange, placeholder,type}) => {
    // console.log(props);
    
  return (
    <div>
        <input value={value} className={className} onChange={onChange} placeholder={placeholder}  type={type}/>
    </div>
  )
}

export default Input