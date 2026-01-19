import { useState } from "react";

const App = () => {
  const [user , setuser] = useState("Olaide")
  const [oneuser , setoneser] = useState( {
    name: "Alice",
    age: 30,
    class : "React"
  })
  const [alluser , setalluser] = useState([
    {
    name: "Alice",
    age: 30,
    class : "React"
  },
  {
    name: "Bola",
    age: 30,
    class : "React"
  },
  {
    name: "Demian",
    age: 30,
    class : "Node"
  }
  ])


  // let username = "John Doe"
  // let userobj =
  const click = () =>{
    alert("The button has been clicked");
    setuser("Lolade")
    // username = "Jane Smith"
    // console.log(username);
    
  }
  return (
    <div>
       <h1>{user}</h1>
       <p>{oneuser.name}</p>
       <p>{oneuser.age}</p>
       <p>{oneuser.class}</p>
       <h1>{alluser[2].name}</h1>
       <h1>{alluser[2].class}</h1>
       <button onClick={click}>Click</button>
{/* 
        <table>
          <thead>
           <tr>
             <th>S/N</th>
            <th>Name</th>
            <th>Class</th>
            <th>Age</th>
           </tr>
          </thead>
          <tbody>
            {alluser.map((user)=>(
              <tr>
                <td>{user.name}</td>
                <td>{user.class}</td>
                <td>{user.age}</td>
              </tr>
           ))}
          </tbody>
        </table> */}

         {alluser.map((user)=>(
              <div>
                <p>{user.name}</p>
                <p>{user.class}</p>
                <p>{user.age}</p>
              </div>
           ))}

       
    </div>
  )
}

export default App