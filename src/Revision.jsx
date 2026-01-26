import React, { useState } from 'react'

const Revision = () => {
    const [name,SetName] = useState("")
    const [surname, SetSurname] = useState("")
    const [users, SetUsers] = useState([])

    function submitUser() {
        const Allusers ={
            name:name,
            surname: surname
        }
        SetUsers([...users,Allusers])
    }
  return (
   <>
   <div className="mx-auto shadow w-50 p-2">
    <h2>Add Users</h2>
    <label htmlFor="name">Name:</label>
    <input type="text" value={name} onChange={(e)=>SetName(e.target.value)}/>
    <label htmlFor="surname">Surname:</label>
    <input type="text" value={surname} onChange={(e)=>SetSurname(e.target.value)} />

    <div className="button text-center mt-3">
        <button className='btn btn-primary text-white w-50' onClick={submitUser}>Add</button>
    </div>

   
   </div>
   <div className="output text-center mt-3">
    {users.map(
        (newUser,i)=>(
            <p>{i+1} {newUser.name} {newUser.surname}</p>
        )

    )}
   </div>
   </>
  )
}

export default Revision