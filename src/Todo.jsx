
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchalltodo } from './redux/todoSlice';

const Todo = () => {
    const cur_user = localStorage.getItem("cur-user")
    console.log(cur_user);
    const {Todo, loading} = useSelector((state)=> state.todoslice)
    console.log(Todo);
    const dispatch = useDispatch()

   useEffect(() => {
     dispatch(fetchalltodo())
   }, [])
   

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