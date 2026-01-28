import React ,{useState, useEffect}from 'react'
import Input from './Props/Input'
import Button from './Props/Button'
import Displuser from './Displuser'

const Addinfo = () => {
    const [firstname, setfirstname] = useState("")
    const [user, setuser] = useState([])
    const [count , setcount] = useState(0) 
    const [calculation , setcalculations] = useState(1) 
    const Handleregister = () =>{
        setcount(count +1)
        setuser([...user, firstname])
        console.log(user);
        setfirstname("")
    }
    useEffect(()=>{
        fetch("https://dummyjson.com/posts")
        .then((data)=> data.json())
        .then((res)=> console.log(res))
    })

    useEffect(()=>{
        // setcalculations(count * 2)
    //    alert(`welcome ${count}`)
    const timer = setInterval(()=>{
       console.log("timer working.....");
       
    },3000)
      return() =>{
        clearInterval(timer)
      }
    },[count])

  
    

  return (
    <div>
        <h1>{calculation}</h1>
        <h1>{count}</h1>
        <Input value={firstname} className="form-control mt-3" onChange={(e)=> setfirstname(e.target.value)} type="text" placeholder="Firstname"/>
        <Button onclick={Handleregister}  text="Register"/>
        <Displuser alluser={user}/>
    </div>
  )
}

export default Addinfo