import React from 'react'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  return (
   
    <>
    {/* landin section */}
      <div style={{width:'100%',height:'100vh',backgroundColor:'#52a447'}} className='container-fluid rounded'>
        <Row className='align-items-center p-5 d-flex'>

          <Col sm={12} md={6}>
            <h1 style={{fontSize:'80px'}} className='fw-bolder d-flex align-items-center ' ><i className="fa-solid fa-list-check overflow-hidden"></i>Project Fair</h1>
            <p>one stop destination for all software development projects.where user can add and manage their projects.As well as access all projects available in our website...what are you waiting forr!!!</p>
          <button  className='btn btn-warning  align-items-center d-flex ' >Start to Explore <i className="fa-solid fa-arrow-right ms-2"></i>  </button>
          </Col>
          <Col><img src="https://avatars.githubusercontent.com/u/87497641?v=4" alt="" /></Col>
          </Row>
      </div>
      {/* all projects */}
      <div className="all-projects mt-5">
        <h1 className='text-center mb-5'>Explore our Projects</h1>
        <marquee scrollAmount={25}>
          <Row >
            <Col cmd={6} sm={12} lg={4}>
            <ProjectCard />
            </Col>
            <Col md={6} sm={12} lg={4}>
            <ProjectCard />
            </Col>
            <Col  md={6} sm={12} lg={4}>
            <ProjectCard />
            </Col>
          </Row>
        </marquee>
        <div className="text-center mt-5 "><Link to={'/projects'}>View More Projects</Link></div>

      </div>
    </>
  )
}

export default Home
