import React from 'react'
import { Navbar,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
       <Navbar  style={{backgroundColor:'#52a447'}} className='position-fixed top-0 w-100'>
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder d-flex w-100 align-items-center' >
          <i className="fa-solid fa-list-check"></i>
            Project Fair</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}


export default Header
