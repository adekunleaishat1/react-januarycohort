import React from 'react'

const Displuser = ({alluser}) => {
  return (
    <div>
        {
            alluser && alluser.map((user)=>(
                <>
                <h1>{user}</h1>
                </>
            ))
        }
    </div>
  )
}

export default Displuser