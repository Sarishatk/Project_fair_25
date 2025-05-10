import React from 'react'
import { useState } from 'react';
import {Card,Modal,Row,Col} from 'react-bootstrap'
function ProjectCard({project}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>

      {project&&<Card className='shadow mb-5' onClick={handleShow}>
      <Card.Img variant="top" src={
    project?.projectImage ?? 
    "https://www.dreamstime.com/photos-images/projects.html"
  }/>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
         {project.overview}
        </Card.Text>
      </Card.Body>
    </Card>}

    {project&&<Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
            <img style={{height:'200px'}} className='img-fluid' src={
    project?.projectImage ?? 
    "https://www.dreamstime.com/photos-images/projects.html"
  } alt="" />
                </Col>
                <Col md={6}>
                <h2>{project.title}</h2>
                <p>Project Overview: {project.overview}</p>
                <p>Language Used:<span className='fw-folder'>{project.language}</span></p>
                </Col>
                
            </Row>
            <div className="mt-3">
                    <a href={project.github}   target='_blank' className='me-3 btn' ><i class="fa-brands fa-github fa-2x overflow-hidden"></i></a>
               
               
                    <a href={project.website}  target='_blank' className='me-3 btn ' ><i class="fa-solid fa-link fa-2x overflow-hidden"></i></a>
                </div>
        </Modal.Body>
      </Modal>}
    </>
  )
}

export default ProjectCard
