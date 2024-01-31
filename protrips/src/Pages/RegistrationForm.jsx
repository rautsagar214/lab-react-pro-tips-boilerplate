import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../component/nav';

const Form = () => {

  const initState = {
    firstName : "",
    lastName : "",
    email : "",
    phNo : ""
  }

  const initAlert = {
    firstName : "",
    lastName : "",
    email : "",
    phNo : ""
  }

  const focusState = {
    firstName : false,
    lastName : false,
    email : false,
    phNo : false
  }

  const [alert , setAlerts] = useState(initAlert)
  const [registration , setRegistration] = useState(false)
  const [data , setData] = useState(initState)
  const [focus , setfocus] = useState(focusState)

  let handleChange = (e) => {
    const {name , value} = e.target;
    setData((prev) => ({...prev , [name]:value}))
  }

  let handleFocus = (name) =>{
    let obj = {
      firstName:false,
      lastName:false,
      email:false,
      phno:false
    }

    obj[name] = true

    setfocus(obj)
  }

  let handleSubmit = (e) =>{
    e.preventDefault();

    let msgBox = {}

    if (data.firstName == ""){
      msgBox.firstName = "Please Enter First Name !"
    }else{
      msgBox.firstName = ""
    }

    if (data.lastName == ""){
      msgBox.lastName = "Please Enter Last Name !"
    }else{
      msgBox.lastName = ""
    }

    if (data.email == ""){
      msgBox.email = "Please Enter Email !"
    }else{
      msgBox.email = ""
    }

    if (data.phNo == ""){
      msgBox.phNo = "Please Enter Phone Number !"
    }else if (data.phNo.length != 10){
      msgBox.phNo = "Please enter 10 digit phone number !"
    }else{
      msgBox.phNo = ""
    }

    console.log(data , alert)
    setAlerts(msgBox)

    if (msgBox.firstName == "" && msgBox.lastName == "" && msgBox.email == "" && msgBox.phNo == ""){
      setRegistration(true)
      showToast()
    }
  }

  const showToast = () => {
    toast.success('Registration Successfully', {
      position: "top-center",
      autoClose:2000
    });
  };

  return (

    <>
      <Navbar />
      <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"40vw"}}>
      <div className='form'>
      <h1>Registration Form</h1>

    
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input id="FirstName" type="text" name="firstName" defaultValue={data.firstName} onChange={handleChange} placeholder='Enter your First Name' onFocus={()=>handleFocus("firstName")} style={{borderColor : focus.firstName ? "black" : "#ccc"}}/>
          <h3 className='alert'>{alert.firstName}</h3>
        </label>

        <label htmlFor="">
          <input id="LastName" type="text" name="lastName" defaultValue={data.lastName} onChange={handleChange} placeholder='Enter your Last Name'  onFocus={()=>handleFocus("lastName")} style={{borderColor : focus.lastName ? "black" : "#ccc"}}/>
          <h3 className='alert'>{alert.lastName}</h3>
        </label>

        <label htmlFor="">
          <input id="email" type="email" name="email" defaultValue={data.email} onChange={handleChange} placeholder='Enter your Email'  onFocus={()=>handleFocus("email")} style={{borderColor : focus.email ? "black" : "#ccc"}}/>
          <h3 className='alert'>{alert.email}</h3>
        </label>
        
        <label htmlFor="">
          <input id="phno" type="number" name="phNo" defaultValue={data.phNo} onChange={handleChange} placeholder='Enter your Phone Number'  onFocus={()=>handleFocus("phNo")} style={{borderColor : focus.phNo ? "black" : "#ccc"}}/>
          <h3 className='alert'>{alert.phNo}</h3>
        </label>

        <input type="submit" value={"Register"} style={{backgroundColor: "blue" , color:"white" ,  border:"none" , fontSize:"18px" , borderRadius:"2px" , padding:"10px", height:"auto" , cursor:"pointer"}}/>  

      </form>

      
      <ToastContainer />


      </div>
      </div>
    </>
  )
}

export default Form