import React from 'react'

const Http = ({allpost}) => {
  return (
    <div>
       {allpost.map((post)=>{
            return(
              <>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              </>
            )
          })

       }
    </div>
  )
}

export default Http