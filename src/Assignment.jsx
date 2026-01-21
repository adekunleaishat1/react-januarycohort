import React, { useState } from 'react'

const Assignment = () => {
    const [input1, setinput1]=useState('');
    const[input2, setinput2]=useState('');
    const [alluser, setalluser] = useState([])
 const [username, setUsername] = useState("shola")

   const [product, setproduct] = useState([
    {"name":"rice", "price":2000},
    {"name":"bean", "price":2000},
    {"name":"sugar", "price":2000}
   ])
    
    const submitUser = () => {
        const userdetail={
            input1,
            input2
        }
        console.log(userdetail);
        setalluser([...alluser,userdetail])
        console.log(alluser);
        
        
        console.log(input1);
        console.log(input2);  
        console.log(alluser);
        
        
        
        
    }


  return (
    <div>Assignment
        <div>
            <input onChange={(e) => setinput1(e.target.value)} type="text"  id=''/>
            <input onChange={(e) => setinput2(e.target.value)} type="text"name='age' />
            <button onClick={() => submitUser()}> submit</button>
            <h1>{username}</h1>
        </div>
        {
            product.map((item,index)=>{
                return <div>
                    <h1>{item.name}</h1>
                    <h1>{item.price}</h1>
                </div>
            })

        }
    </div>
  )
}

export default Assignment