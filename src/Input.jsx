import React, {useState} from 'react'

const Input = () => {
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const [alluser, setalluser] = useState([])
    const [gender, setgender] = useState("female")

    const handlechange = (e)=>{
      console.log(e.target.value);
       setinput1(e.target.value) 
    }

    const handlesubmit = () =>{
        const userdetail = {
            input1,
            input2
        }
        console.log(userdetail);
        setalluser([...alluser, userdetail])
        console.log(alluser);
        
    }
    // {"conditional statement" ? "true" : "false"} Ternary operator 
  return (
    <div>
        <h1>Input Component</h1>
        <p className={gender == "male" ? "text-danger" : "text-success"}>{gender}</p>
        <h2>{input1}</h2>
        <h2>{input2}</h2>
        <input onChange={handlechange} type="text" />
        <input onChange={(e)=> setinput2(e.target.value)} type="text" />
        <button onClick={handlesubmit}>Submit</button>

        {/* {alluser.map((alluser, i) => (
            // (index (key)={i}))
            <h2>{i + 1} - {alluser.input1} - {alluser.input2}</h2> 
        )}  */}

        {alluser.length < 1 ? <h2>No users available</h2> :
            alluser.map((user, i)=>(
                <div key={i}>
                    <p>{i + 1}</p>
                  <p>{user.input1}</p>
                  <p>{user.input2}</p>
                  <button>delete</button>
                </div>
            ))

        }
            
        

    </div>
  )
}

export default Input