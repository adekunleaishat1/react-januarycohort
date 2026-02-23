import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increament , IncreaseByvalue} from './redux/countSlice'

const Counter = () => {
    const dispatch = useDispatch()
    const {value, isupdate} = useSelector((state)=>state.countslice)
    console.log(value, isupdate);
    
  return (
    <div>
        <h1>Increament and Decreament</h1>
        <p>{value}</p>
        <button onClick={()=> dispatch(Increament())}>Increament</button>
        <button onClick={()=> dispatch(IncreaseByvalue(3))}>Increament</button>
    </div>
  )
}

export default Counter