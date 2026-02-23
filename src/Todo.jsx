
import React,{useState} from 'react'
import axios from 'axios';

const Todo = () => {
    const cur_user = localStorage.getItem("cur-user")
    console.log(cur_user);
    
    const [todoinfo, setTodoinfo] = useState({
        title:"",
        description:""
    })
    const handleInputchange = (e) =>{
      console.log(e.target.name);
      console.log(e.target.value);
      const name = e.target.name
      setTodoinfo({...todoinfo, [name]:e.target.value})
    }
    const Addtodo = () =>{
       let newtodo = {
        ...todoinfo,
        user:cur_user
       }
       console.log(newtodo);
        axios.post("http://localhost:1423/todo",newtodo)
          .then((res)=>{
            console.log(res);
          
          }).catch((err)=>{
            console.log(err);
            
          })

    }
  return (
    <div>
        <input name='title' onChange={handleInputchange} type="text" />
        <input name='description' onChange={handleInputchange} type="text" />
        <button onClick={Addtodo}>Addtodo</button>
    </div>
  )
}

export default Todo