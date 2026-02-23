import { useState,useEffect } from "react";
import axios from "axios";
import Http from "./Http";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Assignment from "./Assignment";
import Notfound from "./Notfound";
import Navbar from "./Navbar";
import Parentroute from "./Parentroute";
import Profile from "./Profile";
import Revision from "./Revision";
import Music from "./Music";
import Onemusic from "./Onemusic";
import Formik from "./Formik";
import FormikLogin from "./FormikLogin";
import Counter from "./Counter";
import Todo from "./Todo";

const App = () => {
  const [isloading, setisloading] = useState(false)
   const [allpost , setallpost] = useState([])
   const [allmusic , setallmusic] = useState([])

    const Fetchallpost = async() =>{
    try {
      setisloading(true)
      const allpost = await axios.get("https://dummyjson.com/posts")
      console.log(allpost);
      setisloading(false)
      setallpost(allpost.data.posts)
    } catch (error) {
      setisloading(false)
      console.log(error);
      
    }

  }
  
  const Fetchallmusic =  () =>{
     axios.get("https://robo-music-api.onrender.com/music/my-api")
     .then((res)=>{
      console.log(res);
      setallmusic(res.data)
      
     }).catch((err)=>{
      console.log(err);
      
     })
  }
  useEffect(() => {
    Fetchallpost()
    Fetchallmusic()
  }, [])
  



 

  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Notfound/>} />
        <Route path="/http" element={<Http loading={isloading} allpost={allpost}/>}/>
        <Route path="/home" element={<Assignment/>}/>
        <Route path="/formik" element={<Formik/>}/>
        <Route path="/formiklogin" element={<FormikLogin/>}/>
        <Route path="/music" element={<Music allmusic={allmusic}/>}/>
        <Route path="/count" element={<Counter/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/one/:id" element={<Onemusic allmusic={allmusic}/>}/>
        <Route path="/parent" element={<Parentroute/>} >
          <Route path="/parent/profile" element={<Profile/>}/>
          <Route path="/parent/resources" element={<Revision/>}/>
        </Route>
      </Routes>
      {/* <Http loading={isloading} allpost={allpost}/> */}
     
    </div>
  )
}

export default App