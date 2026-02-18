import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Formik = () => {
  const [pageError, setpageError] = useState("")
  const [success, setsuccess] = useState("")
  const navigate = useNavigate()
    const  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])(?!.*\s).{8,}$/
    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:yup.object({
           username:yup.string().min(3,"Username is too short").required("username cannot be empty") ,
           email:yup.string().email("Invalid email address").required("email cannot be empty"),
           password:yup.string().matches(passwordRegex, "password must have atleast one uppercase letter, one lowercase, special character,one digit").required("password cannot be empty")
        }),

        
        onSubmit:async(value)=>{
          const findalreadyinuser = await fetch("http://localhost:1423/user")
          const userfound = await findalreadyinuser.json()
           console.log(userfound);
           
          const foundsignedinUsers = userfound.some((user)=> user.email === value.email)
          console.log(foundsignedinUsers);
          
          if (foundsignedinUsers) {
           return setpageError("User already exist")
          }


          console.log(value);
          setpageError("")
          setsuccess("")
          axios.post("http://localhost:1423/user",value)
          .then((res)=>{
            console.log(res);
            setsuccess("user registered successfully")
            navigate("/formiklogin")
          }).catch((err)=>{
            console.log(err);
            
          })

          

        //   fetch("http://localhost:1423/user",{
        //     method:"POST",
        //     body:JSON.stringify(value)
        //   }).then((res)=> res.json()).then((data)=>{
        //      console.log(data) 
        //   }).catch((err)=>{
        //     console.log(err);
            
        //   })          
        }
    })
    console.log(formik.errors);
    console.log(formik.touched);
       
  return (
    <div>
       <form className='w-50 mx-auto px-3 py-3 ' onSubmit={formik.handleSubmit} >
        <div>
          <small>{success}</small>
        </div>
        <div className='form-group'>
        <input onBlur={formik.handleBlur} className='form-control mb-3' name='username' onChange={formik.handleChange} type="text" placeholder='Username'/>
        <small className='text-danger'>{formik.touched.username && formik.errors.username }</small>
        </div>
        <div className='form-group'>
         <input onBlur={formik.handleBlur} className='form-control mb-3' name='email' onChange={formik.handleChange} type="text" placeholder='Email' />
        <small className='text-danger'>{formik.touched.email && formik.errors.email}</small>
        </div>
       <div className='form-group'>
        <input onBlur={formik.handleBlur} className='form-control mb-3' name='password' onChange={formik.handleChange} type="text" placeholder='Password' />
        <small className='text-danger'>{formik.touched.password && formik.errors.password}</small>
       </div>
        <button type='submit' >Submit</button>
        <div>
          <small>{pageError}</small>
        </div>
       </form>
    </div>
  )
}

export default Formik