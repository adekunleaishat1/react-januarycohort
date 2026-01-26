import React, { useState } from 'react'
import Button from './Button/Button';

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
  const deleteItem = (i) => {
    // console.log(i);
    const oneuser = alluser.filter((user,index)=> index !== i)
    console.log(oneuser, "index from filter");
    
    setalluser(oneuser)
  }
   const signup = () =>{
    alert("signup....")
    
   }
  return (
    <div>Assignment
        <div>
            <input onChange={(e) => setinput1(e.target.value)} type="text"  id=''/>
            <input onChange={(e) => setinput2(e.target.value)} type="text"name='age' />
            <button onClick={() => submitUser()}> submit</button>
            <Button onclick={signup} sty="btn btn-dark" text="Signup"/>
            <Button sty="btn btn-success" text="Login"/>
            <Button sty="mybutton" text="Forget password"/>
            <h1>{username}</h1>
        </div>
        {
            alluser.map((item,index)=>{
                return <div key={index}>
                    <h1>{item.input1}</h1>
                    <h1>{item.input2}</h1>
                    <button onClick={() => deleteItem(index)}>Delete</button>
                </div>
            })

        }
    </div>
  )
}

export default Assignment