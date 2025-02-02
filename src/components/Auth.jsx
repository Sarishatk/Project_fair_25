import React from 'react'
import {  Link } from 'react-router-dom'
import Form from 'react-bootstrap';
function Auth({register}) {
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
                       <div className='d-flex align-items-center flex-column'></div> 
                       <h1 style={{fontSize:'20px'}} className='fw-bolder d-flex align-items-center text-light' ><i className="fa-solid fa-list-check overflow-hidden"></i>Project Fair</h1>
                        <h5 className='fw-bolder mt-4 pb-3 text-light'>
                       {
                                 isRegisterForm ? 'sign up Your Account':'sign in Your Account'
                          }
                          <Form className='text-light w-100'>

                          {
                          isRegisterForm &&
                          <Form.Group className='mb-3' controlId="formBasicName">
                            <Form.Group type='text' placeholder='username'></Form.Group>
                          </Form.Group>

                           }
                           <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Group type='text' placeholder='EmailId'></Form.Group>
                          </Form.Group>
                          <Form.Group className='mb-3' controlId="formBasicpswd">
                            <Form.Group type='text' placeholder='Pasword'></Form.Group>
                          </Form.Group>


                          </Form>
                        </h5>
                        </div>
                    </div>
                </div>
              </div>
          </div>
  
  
  )
}

export default Auth


