import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
function Header({ insideDashboard }) {
const Navigate = useNavigate()
// navigate to landing page
const handleLogout = ()=>{
  // remove all existing user details from browser storage
sessionStorage.removeItem("existingUser")
sessionStorage.removeItem("token")
Navigate('/')
}

  return (
    <>
      <Navbar style={{ backgroundColor: '#52a447' }} className='top-0 w-100'>
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} className='fw-bolder d-flex w-100 align-items-center' >
              <i className="fa-solid fa-list-check"></i>
             Projexpo</Link>
          </Navbar.Brand>
        
{  insideDashboard &&         
 <button  onClick={handleLogout} className='btn btn-linkms-auto text-info fw-bolder fs-5 d-flex align-items-center text-danger '>Logout<i className="fa-solid fa-right-from-bracket"></i></button>
}
            </Container>
      </Navbar>
    </>
  )
}


export default Header
