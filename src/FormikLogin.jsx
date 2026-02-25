import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormikLogin = () => {
    const navigate = useNavigate()
    const [pageError, setpageError] = useState("")
    const [success, setsuccess] = useState("")

    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:yup.object({
           email:yup.string().required("email cannot be empty"),
           password:yup.string().required("password cannot be empty")
        }),
        onSubmit:async(value)=>{
          console.log(value);
         const existingUser = await fetch("http://localhost:1423/user")
         const realuser = await existingUser.json()

         setpageError("")
         setsuccess("")
        const founduser = realuser.find((user)=> user.email === value.email && user.password === value.password)
        console.log(founduser);
        
        if (!founduser) {
            setpageError("User does not exist")
        } else{
           setsuccess("Login successful") 
           localStorage.setItem("cur-user", founduser.id )
           navigate("/todo")
        }}
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
         <input onBlur={formik.handleBlur} className='form-control mb-3' name='email' onChange={formik.handleChange} type="text" placeholder='Email' />
        <small className='text-danger'>{formik.touched.email && formik.errors.email}</small>
        </div>
       <div className='form-group'>
        <input onBlur={formik.handleBlur} className='form-control mb-3' name='password' onChange={formik.handleChange} type="text" placeholder='Password' />
        <small className='text-danger'>{formik.touched.password && formik.errors.password}</small>
       </div>
        <button type='submit' >Login</button>
        <div>
            <small>{pageError}</small>
        </div>
       </form>
    </div>
  )
}

export default FormikLogin