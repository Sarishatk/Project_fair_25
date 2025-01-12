import React from 'react'
import { useState } from 'react';
import {Card,Modal,Row,Col} from 'react-bootstrap'
function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Card className='shadow mb-5' onClick={handleShow}>
      <Card.Img variant="top" src="https://www.figma.com/community/resource/8e950e05-be74-4268-994b-40c43e4f14a6/thumbnail" />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
            <img style={{height:'200px'}} className='img-fluid' src="https://www.figma.com/community/resource/8e950e05-be74-4268-994b-40c43e4f14a6/thumbnail" alt="" />
                </Col>
                <Col md={6}>
                <h2>Project Title</h2>
                <p>Project Overview: Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque distinctio eveniet laboriosam, suscipit atque dignissimos officiis magnam ab ex alias quam! Laborum ratione eveniet, minus earum unde ad iste.</p>
                <p>Language Used:<span className='fw-folder'>HTML5,CSS,React</span></p>
                </Col>
                
            </Row>
            <div className="mt-3">
                    <a href="https://github.com/Sarishatk?tab=repositories" target='_blank' className='me-3 btn' ><i class="fa-brands fa-github fa-2x overflow-hidden"></i></a>
               
               
                    <a href="https://fastidious-trifle-d100d7.netlify.app/" target='_blank' className='me-3 btn ' ><i class="fa-solid fa-link fa-2x overflow-hidden"></i></a>
                </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard
