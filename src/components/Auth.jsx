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
                        
                        </div>
                    </div>
                </div>
              </div>
          </div>
  
  
  )
}

export default Auth


