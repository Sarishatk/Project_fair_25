import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column flex-wrap W-100' style={{ width: '100%', height: '300px' ,backgroundColor:'#52a447' }}>
    <div className="footer-content d-flex  justify-content-evenly   w-100">
        <div className="website "style={{ width: '400px' }}>
            <h4 style={{color:'black',overflow:'hidden'}}><i className="fa-solid fa-list-check"></i>{" "}Project Fair</h4>
            <h6 style={{color:'black',overflow:'hidden'}}>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
            <h6 style={{color:'black',overflow:'hidden'}}>Code licensed MIT, docs CC BY 3.0.</h6>
            <p>Currently v5.3.3.</p>
        </div>

        <div className="link d-flex flex-column ">
            <h4 style={{overflow:'hidden'}}>Links</h4>
            <Link to={'/'}  style={{ textDecoration: 'none', color: 'black' }} >Home</Link>
            <Link to={'/cart'}  style={{ textDecoration: 'none', color: 'black' }} >cart</Link>
            <Link to={'/wishlist'}  style={{ textDecoration: 'none', color: 'black' }} >Wishlist</Link>

        </div>

        <div className="guides d-flex flex-column">
        <h4 style={{overflow:'hidden'}}>guides</h4>
            <Link to={'https://getbootstrap.com/'} className='' style={{ textDecoration: 'none', color: 'black' }} >React</Link>
            <Link to={'https://react-bootstrap.netlify.app/'} className='' style={{ textDecoration: 'none', color: 'black' }} >React Bootstrap</Link>
            <Link to={'https://www.npmjs.com/package/react-router-dom'} className='' style={{ textDecoration: 'none', color: 'black' }} >Routing</Link>

        </div>
        <div className="contacts d-flex flex-column flex-wrap">
        <h4 style={{overflow:'hidden'}}>Contact Us</h4>
        <div className='d-flex'>
            <input className='form-control' type="email" placeholder='Enter your email'/>
         <div className='btn btn-primary ms-3'><i className="fa-duotone fa-solid fa-arrow-right"></i></div>
        </div>
        <div className='icons mt-3 d-flex justify-content-evenly fs-4'>
            <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'black' }} ><i className="fa-brands fa-twitter overflow-hidden"></i></Link>
            <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: 'none', color: 'black' }} ><i className="fa-brands fa-linkedin overflow-hidden"></i></Link>
            <Link to={'https://www.npmjs.com/package/react-router-dom'}  style={{ textDecoration: 'none', color: 'black' }} ><i className="fa-brands fa-github overflow-hidden"></i></Link>
            <Link to={'https://www.npmjs.com/package/react-router-dom'}  style={{ textDecoration: 'none', color: 'black' }} ><i className="fa-brands fa-facebook overflow-hidden"></i></Link>

    </div>
        </div>
    </div >
    <p style={{color:'black'}}>Copyright © 2024 Project Fair. Built with Docusaurus</p>
</div>
  )
}

export default Footer
