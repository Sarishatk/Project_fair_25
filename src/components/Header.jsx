import React from 'react'
import { Navbar,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
       <Navbar  style={{backgroundColor:'#52a447'}} className='top-0 w-100'>
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder d-flex w-100 align-items-center' >
          <i className="fa-solid fa-list-check"></i>
            Project Fair</Link>
          </Navbar.Brand>
          <div className='btn btn-linkms-auto text-danger fw-bolder fs-5 d-flex align-items-center '>Logout<i className="fa-solid fa-right-from-bracket"></i></div>
        </Container>
      </Navbar>
    </>
  )
}


export default Header
