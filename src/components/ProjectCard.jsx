import React, { useState } from 'react';
import { Card, Modal, Row, Col, Badge } from 'react-bootstrap';
import { BASE_URL } from '../services/baseUrl';

function ProjectCard({project}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {project && (
        <Card 
          className="h-100 border-0 shadow-sm hover-shadow transition-all"
          onClick={handleShow}
          style={{
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
            borderRadius: '16px',
            overflow: 'hidden'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div className="position-relative">
            <Card.Img 
              style={{
                height: "250px",
                objectFit: "cover"
              }} 
              variant="top"
              src={project?.projectImage
                ? `${BASE_URL}/uploads/${project.projectImage}`
                : "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
              }
            />
            <div 
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)'
              }}
            ></div>
          </div>
          <Card.Body className="d-flex flex-column">
            <Card.Title className="h4 mb-3">{project.title}</Card.Title>
            <Card.Text className="text-muted flex-grow-1">
              {project.overview?.length > 100 
                ? `${project.overview.substring(0, 100)}...` 
                : project.overview}
            </Card.Text>
            <div className="mt-3">
              <Badge bg="primary" className="me-2">{project.language}</Badge>
            </div>
          </Card.Body>
        </Card>
      )}

      {project && (
        <Modal 
          size="lg" 
          show={show} 
          onHide={handleClose}
          centered
          contentClassName="border-0 rounded-4 overflow-hidden"
        >
          <Modal.Header closeButton className="border-0 bg-light">
            <Modal.Title className="fs-4">Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4">
            <Row className="g-4">
              <Col md={6}>
                <div className="rounded-4 overflow-hidden shadow-sm">
                  <img 
                    className="img-fluid w-100"
                    style={{
                      height: '300px',
                      objectFit: 'cover'
                    }}
                    src={project?.projectImage 
                      ? `${BASE_URL}/uploads/${project.projectImage}`
                      : "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                    }
                    alt={project.title}
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="h-100 d-flex flex-column">
                  <h2 className="h3 mb-3">{project.title}</h2>
                  <div className="mb-4">
                    <Badge bg="primary" className="me-2">{project.language}</Badge>
                  </div>
                  <p className="text-muted flex-grow-1">{project.overview}</p>
                  <div className="d-flex gap-3 mt-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-dark rounded-pill px-4"
                    >
                      <i className="fa-brands fa-github me-2"></i>
                      View Code
                    </a>
                    <a 
                      href={project.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary rounded-pill px-4"
                    >
                      <i className="fa-solid fa-external-link me-2"></i>
                      Live Demo
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default ProjectCard;
