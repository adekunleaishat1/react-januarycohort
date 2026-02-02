import React from 'react'

const Http = ({allpost, loading}) => {
  return (
    <div>
       {loading ? <p>Loading...</p> :
       allpost.map((post)=>{
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