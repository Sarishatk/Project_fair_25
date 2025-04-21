import React, { useState } from 'react'
import {  Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
function Auth({register}) {
const [userData,setUserData] =  useState({
username:"",password:"",email:""
})
const onHandleRegister = (e)=>{
  e.preventDefault()
  
} 


    const isRegisterForm = register?true:false
  return (
    
    
        <div style={{width:'100%',height:'100vh'}} className='d-flex align-items-center justify-content-center'>
          <div className='w-75 container'>
              <Link to={'/'} style={{textDecoraton:'none',color:'blue'}}><i className="fa-solid fa-arrow-left me-1"></i>Back to Home</Link>
              <div className="card shadow p-5 bg-success">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img style={{width:'100%'}} src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?semt=ais_hybrid" alt="" />
                    </div>
                    <div className="col-lg-6">
                       <div  className='d-flex align-items-center flex-column '>
                       <h1 style={{fontSize:'20px'}} className='fw-bolder d-flex align-items-center text-light' ><i className="fa-solid fa-list-check overflow-hidden"></i>Project Fair</h1>
                        <div className='fw-bolder mt-1 pb-2 text-light'>
                       {
                                 isRegisterForm ? 'sign up Your Account':'sign in Your Account'
                          }
                          <Form className='text-light w-100'>

                          {
                          isRegisterForm &&
                          <Form.Group className='mb-3 rounded-pill ' controlId="formBasicName">
                                 <Form.Control type='text' placeholder='Username' value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})
                                 } />
                          </Form.Group>


                           }
                                <Form.Group className='mb-3 rounded-pill' controlId="formBasicEmail">
                                    <Form.Control type='email' placeholder='Email ID'  
                                    value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})
                                  } 
                                     />
                                     </Form.Group>

                          <Form.Group className='mb-3 rounded-pill' controlId="formBasicpswd">
                            <Form.Control type='text' placeholder='Pasword' 
                            value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})
                          } ></Form.Control>
                          </Form.Group>
{
              isRegisterForm ?
              <div>
                <button onClick={onHandleRegister} className='btn btn-primary  rounded-pill'>register</button>
                <p>Already have Account? Click here to <Link to={'/login'}>Login</Link></p>
              </div>:<div>
              <button className='btn btn-primary rounded-pill'>Login</button>
              <p>New User? Click here to <Link to={'/register'}>Register</Link></p>
              </div>
}
                          </Form>
                        </div>
                        </div>
                        </div> 
                    </div>
                </div>
              </div>
          </div>
  
  
  )
}

export default Auth


