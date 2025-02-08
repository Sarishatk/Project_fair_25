import React from 'react'
import Header from '../components/Header'
import {Row,Col} from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard'
function Projects() {
  return (
    <>
      
        <Header/>
        <div style={{ marginTop: '100px' }} className="">
  <h1 className="text-center mb-2">All Projects</h1>
  <div className="d-flex align-items-center justify-content-center">
    <div className="d-flex border w-50 rounded mb-2">
      <input
        type="text"
        className="form-control"
        placeholder="search projects by technologies used"
      />
      <i style={{ marginLeft: '-35px' }} className="fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
  <Row className="mt-2 container-fluid">
    <Col md={6} sm={12} lg={4}>
      <ProjectCard />
    </Col>
  </Row>
</div>



    </>
  
  )
}

export default Projects
