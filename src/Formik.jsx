import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const Formik = () => {
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
        onSubmit:(value)=>{
          console.log(value);
          axios.post("http://localhost:1423/user",value)
          .then((res)=>{
            console.log(res);
            
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
       </form>
    </div>
  )
}

export default Formik